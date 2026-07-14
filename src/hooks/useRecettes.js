import { useCallback, useEffect, useState } from "react"
import { supabase } from "../services/supabaseClient"

export function useRecettes() {
    const [recettes, setRecettes] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchRecettes = useCallback(async () => {
        setLoading(true)
        setError(null)

        console.debug("[Supabase] Chargement de public.recettes")

        const { data, error: fetchError } = await supabase
            .schema("public")
            .from("recettes")
            .select("*")
            .order("created_at", { ascending: false })

        if (fetchError) {
            console.error("[Supabase] Erreur de chargement des recettes", fetchError)
            setRecettes([])
            setError(fetchError)
            setLoading(false)
            return { data: [], error: fetchError }
        }

        console.debug(`[Supabase] ${data?.length ?? 0} recette(s) chargée(s)`)
        setRecettes(data ?? [])
        setLoading(false)
        return { data: data ?? [], error: null }
    }, [])

    useEffect(() => {
        let ignore = false

        supabase
            .schema("public")
            .from("recettes")
            .select("*")
            .order("created_at", { ascending: false })
            .then(({ data, error: fetchError }) => {
                if (ignore) return

                if (fetchError) {
                    console.error(
                        "[Supabase] Erreur de chargement initial des recettes",
                        fetchError
                    )
                    setRecettes([])
                    setError(fetchError)
                    setLoading(false)
                    return
                }

                console.debug(
                    `[Supabase] ${data?.length ?? 0} recette(s) initiale(s) chargée(s)`
                )
                setRecettes(data ?? [])
                setLoading(false)
            })

        return () => {
            ignore = true
        }
    }, [])

    return {
        recettes,
        loading,
        error,
        refresh: fetchRecettes,
        estVide: !loading && recettes.length === 0,
    }
}

export default useRecettes
