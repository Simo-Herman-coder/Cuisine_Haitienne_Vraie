import React from "react"
import AppShell from "../components/common/AppShell"

export default function AccueilPage({ onNavigate }) {
    return (
        <AppShell activeTab="accueil" onNavigate={onNavigate}>
            <section className="space-y-4 rounded-3xl bg-white p-4 shadow-sm ring-1 ring-stone-200">
                <div className="rounded-2xl bg-amber-600 p-5 text-white">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-100">
                        Bienvenue
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold">
                        Cuisine Haïtienne, revisitée pour votre quotidien.
                    </h2>
                    <p className="mt-2 text-sm text-amber-50">
                        Découvrez des recettes, vidéos et conseils inspirés de
                        la tradition.
                    </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-stone-200 p-4">
                        <h3 className="font-semibold text-stone-900">
                            Recettes du moment
                        </h3>
                        <p className="mt-1 text-sm text-stone-600">
                            Bouillon, griot, akra et bien plus encore.
                        </p>
                    </div>
                    <div className="rounded-2xl border border-stone-200 p-4">
                        <h3 className="font-semibold text-stone-900">
                            Vidéos pratiques
                        </h3>
                        <p className="mt-1 text-sm text-stone-600">
                            Apprenez pas à pas avec des démonstrations simples.
                        </p>
                    </div>
                </div>
            </section>
        </AppShell>
    )
}
