import { useEffect, useMemo, useState } from "react"
import { supabase } from "../services/supabaseClient"
import { AuthContext } from "./authContextValue"
import { buildUtilisateurPayload } from "../services/authUtils"

export function AuthProvider({ children }) {
    const [session, setSession] = useState(null)
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        let mounted = true

        async function chargerSession() {
            const { data, error: sessionError } = await supabase.auth.getSession()

            if (!mounted) return

            if (sessionError) {
                console.error("[Auth] Impossible de charger la session", sessionError)
                setError(sessionError)
            }

            setSession(data.session)
            setUser(data.session?.user ?? null)
            setLoading(false)
        }

        chargerSession()

        const { data: listener } = supabase.auth.onAuthStateChange(
            (_event, nextSession) => {
                setSession(nextSession)
                setUser(nextSession?.user ?? null)
                setLoading(false)
            }
        )

        return () => {
            mounted = false
            listener.subscription.unsubscribe()
        }
    }, [])

    async function signUp({ email, password, nomComplet, pseudo, avatarUrl }) {
        setLoading(true)
        setError(null)

        const { data, error: signUpError } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    nom_complet: nomComplet,
                    pseudo,
                    avatar_url: avatarUrl,
                },
            },
        })

        if (signUpError) {
            console.error("[Auth] Erreur d'inscription", signUpError)
            setError(signUpError)
            setLoading(false)
            return { user: null, error: signUpError }
        }

        if (data.user) {
            const payload = buildUtilisateurPayload(data.user, {
                nomComplet,
                pseudo,
                avatarUrl,
            })

            const { error: profileError } = await supabase
                .from("utilisateurs")
                .upsert(payload, { onConflict: "id" })

            if (profileError) {
                console.error(
                    "[Auth] Compte créé, mais synchronisation du profil échouée",
                    profileError
                )
                setError(profileError)
                setLoading(false)
                return { user: data.user, error: profileError }
            }

            console.debug("[Auth] Profil utilisateur synchronisé", payload)
        }

        setLoading(false)
        return { user: data.user, error: null }
    }

    async function signIn({ email, password }) {
        setLoading(true)
        setError(null)

        const { data, error: signInError } =
            await supabase.auth.signInWithPassword({
                email,
                password,
            })

        if (signInError) {
            console.error("[Auth] Erreur de connexion", signInError)
            setError(signInError)
            setLoading(false)
            return { user: null, error: signInError }
        }

        setSession(data.session)
        setUser(data.user)
        setLoading(false)
        return { user: data.user, error: null }
    }

    async function signOut() {
        setLoading(true)
        setError(null)

        const { error: signOutError } = await supabase.auth.signOut()

        if (signOutError) {
            console.error("[Auth] Erreur de déconnexion", signOutError)
            setError(signOutError)
            setLoading(false)
            return { error: signOutError }
        }

        setSession(null)
        setUser(null)
        setLoading(false)
        return { error: null }
    }

    const value = useMemo(
        () => ({
            session,
            user,
            loading,
            error,
            signUp,
            signIn,
            signOut,
            estConnecte: Boolean(user),
        }),
        [session, user, loading, error]
    )

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
