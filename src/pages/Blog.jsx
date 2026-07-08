import AppShell from "../components/common/AppShell"

export default function BlogPage({ onNavigate }) {
    return (
        <AppShell activeTab="blog" onNavigate={onNavigate}>
            <section className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-stone-200">
                <h2 className="text-xl font-semibold text-stone-900">Blog</h2>
                <p className="mt-2 text-sm text-stone-600">
                    Des articles autour de la culture, des techniques et des
                    astuces culinaires.
                </p>
            </section>
        </AppShell>
    )
}
