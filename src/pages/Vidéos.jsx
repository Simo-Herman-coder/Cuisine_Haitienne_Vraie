import React from "react"
import AppShell from "../components/common/AppShell"

export default function VideosPage({ onNavigate }) {
    return (
        <AppShell activeTab="vidéos" onNavigate={onNavigate}>
            <section className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-stone-200">
                <h2 className="text-xl font-semibold text-stone-900">Vidéos</h2>
                <p className="mt-2 text-sm text-stone-600">
                    Des tutoriels vidéo pour suivre chaque étape à votre rythme.
                </p>
            </section>
        </AppShell>
    )
}
