import AppShell from "../components/common/AppShell"

export default function ProfilPage({ onNavigate }) {
    return (
        <AppShell activeTab="profil" onNavigate={onNavigate}>
            <section className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-stone-200">
                <h2 className="text-xl font-semibold text-stone-900">Profil</h2>
                <p className="mt-2 text-sm text-stone-600">
                    Gérez vos favoris, recettes sauvegardées et préférences.
                </p>
            </section>
        </AppShell>
    )
}
