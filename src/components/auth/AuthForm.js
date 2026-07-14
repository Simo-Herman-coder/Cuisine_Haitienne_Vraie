import { useState } from "react"
import { traduireErreurAuth } from "../../services/authUtils"
import { useAuth } from "../../hooks/useAuth"

export default function AuthForm() {
    const { user, loading, signUp, signIn, signOut, estConnecte } = useAuth()
    const [mode, setMode] = useState("connexion")
    const [form, setForm] = useState({
        nomComplet: "",
        email: "",
        password: "",
    })
    const [message, setMessage] = useState("")
    const [erreur, setErreur] = useState("")

    const estInscription = mode === "inscription"

    function updateField(event) {
        const { name, value } = event.target
        setForm(current => ({ ...current, [name]: value }))
    }

    async function handleSubmit(event) {
        event.preventDefault()
        setErreur("")
        setMessage("")

        if (estInscription && !form.nomComplet.trim()) {
            setErreur("Veuillez saisir votre nom complet.")
            return
        }

        if (!form.email.trim()) {
            setErreur("Veuillez saisir votre adresse e-mail.")
            return
        }

        if (form.password.length < 6) {
            setErreur("Le mot de passe doit contenir au moins 6 caractères.")
            return
        }

        const result = estInscription
            ? await signUp({
                  email: form.email,
                  password: form.password,
                  nomComplet: form.nomComplet,
              })
            : await signIn({
                  email: form.email,
                  password: form.password,
              })

        if (result.error) {
            setErreur(traduireErreurAuth(result.error))
            return
        }

        setMessage(
            estInscription
                ? "Compte créé avec succès. Vérifiez votre e-mail si une confirmation est demandée."
                : "Connexion réussie."
        )
    }

    async function handleSignOut() {
        setErreur("")
        setMessage("")

        const result = await signOut()

        if (result.error) {
            setErreur(traduireErreurAuth(result.error))
            return
        }

        setMessage("Vous êtes déconnecté.")
    }

    if (estConnecte) {
        return (
            <section className="rounded-[18px] bg-white p-5 shadow-md shadow-stone-900/10 ring-1 ring-black/5">
                <p className="text-sm font-bold uppercase tracking-wide text-brand-orange">
                    Session active
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold text-[var(--foreground)]">
                    Bienvenue
                </h2>
                <p className="mt-1 text-[#7e574a]">{user?.email}</p>

                {message && (
                    <p className="mt-4 rounded-[14px] bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
                        {message}
                    </p>
                )}
                {erreur && (
                    <p className="mt-4 rounded-[14px] bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                        {erreur}
                    </p>
                )}

                <button
                    type="button"
                    onClick={handleSignOut}
                    disabled={loading}
                    className="mt-5 h-12 w-full rounded-[16px] bg-brand-orange text-base font-black text-white disabled:opacity-60"
                >
                    {loading ? "Déconnexion..." : "Se déconnecter"}
                </button>
            </section>
        )
    }

    return (
        <section className="rounded-[18px] bg-white p-5 shadow-md shadow-stone-900/10 ring-1 ring-black/5">
            <div className="mb-5 grid grid-cols-2 rounded-[14px] bg-brand-cream p-1">
                <button
                    type="button"
                    onClick={() => setMode("connexion")}
                    className={[
                        "rounded-[12px] px-4 py-2 text-sm font-black",
                        !estInscription
                            ? "bg-brand-orange text-white shadow-sm"
                            : "text-[#7e574a]",
                    ].join(" ")}
                >
                    Connexion
                </button>
                <button
                    type="button"
                    onClick={() => setMode("inscription")}
                    className={[
                        "rounded-[12px] px-4 py-2 text-sm font-black",
                        estInscription
                            ? "bg-brand-orange text-white shadow-sm"
                            : "text-[#7e574a]",
                    ].join(" ")}
                >
                    Inscription
                </button>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
                {estInscription && (
                    <label className="block">
                        <span className="mb-2 block font-bold text-[var(--foreground)]">
                            Nom complet
                        </span>
                        <input
                            name="nomComplet"
                            value={form.nomComplet}
                            onChange={updateField}
                            placeholder="ex. Marie-Josée Dupont"
                            className="h-[52px] w-full rounded-[16px] border border-[var(--border)] bg-white px-4 outline-none placeholder:text-[#8a6658]"
                        />
                    </label>
                )}

                <label className="block">
                    <span className="mb-2 block font-bold text-[var(--foreground)]">
                        Adresse e-mail
                    </span>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={updateField}
                        placeholder="ex. marie@example.com"
                        className="h-[52px] w-full rounded-[16px] border border-[var(--border)] bg-white px-4 outline-none placeholder:text-[#8a6658]"
                    />
                </label>

                <label className="block">
                    <span className="mb-2 block font-bold text-[var(--foreground)]">
                        Mot de passe
                    </span>
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={updateField}
                        placeholder="Minimum 6 caractères"
                        className="h-[52px] w-full rounded-[16px] border border-[var(--border)] bg-white px-4 outline-none placeholder:text-[#8a6658]"
                    />
                </label>

                {message && (
                    <p className="rounded-[14px] bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
                        {message}
                    </p>
                )}
                {erreur && (
                    <p className="rounded-[14px] bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                        {erreur}
                    </p>
                )}

                <button
                    type="submit"
                    disabled={loading}
                    className="h-12 w-full rounded-[16px] bg-brand-orange text-base font-black text-white shadow-md shadow-orange-900/20 disabled:opacity-60"
                >
                    {loading
                        ? "Veuillez patienter..."
                        : estInscription
                          ? "Créer mon compte"
                          : "Se connecter"}
                </button>
            </form>
        </section>
    )
}
