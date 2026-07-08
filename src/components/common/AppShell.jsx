import React from "react"
import {
    BookOpen,
    Gamepad2,
    Home,
    Newspaper,
    Play,
    User,
    MessageCircle,
} from "lucide-react"

const tabs = [
    { id: "accueil", label: "Accueil", icon: Home },
    { id: "recettes", label: "Recettes", icon: BookOpen },
    { id: "vidéos", label: "Vidéos", icon: Play },
    { id: "blog", label: "Blog", icon: Newspaper },
    { id: "jeux", label: "Jeux", icon: Gamepad2 },
    { id: "profil", label: "Profil", icon: User },
]

export default function AppShell({ children, activeTab = "home", onNavigate }) {
    return (
        <div className="min-h-screen bg-stone-50 text-stone-800">
            <header className="sticky top-0 z-20 border-b border-stone-200 bg-white/90 backdrop-blur">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
                    <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-amber-600">
                            Cuisine Haïtienne Vraie
                        </p>
                        <h1 className="text-lg font-semibold text-stone-900">
                            Bienvenue
                        </h1>
                    </div>
                    <button className="rounded-full border border-stone-200 bg-stone-100 px-3 py-2 text-sm font-medium text-stone-700 transition hover:bg-stone-200">
                        Rechercher
                    </button>
                </div>
            </header>

            <main className="mx-auto flex min-h-[calc(100vh-7rem)] max-w-6xl flex-col px-4 pb-24 pt-4 sm:px-6 lg:px-8">
                {children}
            </main>

            <nav className="fixed bottom-0 left-0 right-0 z-30 border-t border-stone-200 bg-white/95 backdrop-blur">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-2 py-2 sm:px-4">
                    {tabs.map(tab => {
                        const isActive = tab.id === activeTab
                        return (
                            <button
                                key={tab.id}
                                type="button"
                                onClick={() => onNavigate?.(tab.id)}
                                className={`flex flex-1 flex-col items-center justify-center rounded-2xl px-2 py-2 text-[11px] font-medium transition ${
                                    isActive
                                        ? "bg-amber-600 text-white shadow-sm"
                                        : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
                                }`}
                            >
                                <span className="text-base">
                                    <tab.icon size={18} />
                                </span>
                                <span className="mt-1">{tab.label}</span>
                            </button>
                        )
                    })}
                </div>
            </nav>

            <button
                type="button"
                aria-label="Ouvrir le chatbot"
                className="fixed bottom-20 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-amber-600 text-white shadow-lg transition hover:scale-105 hover:bg-amber-700 sm:right-6"
            >
                <MessageCircle size={22} />
            </button>
        </div>
    )
}
