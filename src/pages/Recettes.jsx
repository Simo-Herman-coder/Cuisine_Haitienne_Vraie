import React from "react"
import AppShell from "../components/common/AppShell"
import recipes from "../data/mockData.json"

export default function RecettesPage({ onNavigate }) {
    return (
        <AppShell activeTab="recipes" onNavigate={onNavigate}>
            <section className="space-y-4">
                <div className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-stone-200">
                    <h2 className="text-xl font-semibold text-stone-900">
                        Recettes
                    </h2>
                    <p className="mt-2 text-sm text-stone-600">
                        Une collection de plats traditionnels et modernes à
                        explorer.
                    </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    {recipes.map(recipe => (
                        <article
                            key={recipe.id}
                            className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-stone-200"
                        >
                            <img
                                src={recipe.image}
                                alt={recipe.title}
                                className="h-44 w-full object-cover"
                            />
                            <div className="space-y-3 p-4">
                                <div className="flex items-center justify-between gap-2">
                                    <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
                                        {recipe.category}
                                    </span>
                                    <span className="text-sm font-medium text-stone-500">
                                        {recipe.time}
                                    </span>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-stone-900">
                                        {recipe.title}
                                    </h3>
                                    <p className="mt-1 text-sm text-amber-700">
                                        {recipe.subtitle}
                                    </p>
                                </div>

                                <p className="text-sm leading-6 text-stone-600">
                                    {recipe.summary}
                                </p>

                                <div>
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm font-semibold text-stone-900">
                                            Ingrédients
                                        </p>
                                        <span className="text-xs font-medium uppercase tracking-[0.2em] text-stone-400">
                                            {recipe.difficulty.label}
                                        </span>
                                    </div>
                                    <ul className="mt-2 flex flex-wrap gap-2">
                                        {recipe.ingredients
                                            .slice(0, 4)
                                            .map(ingredient => (
                                                <li
                                                    key={ingredient}
                                                    className="rounded-full bg-stone-100 px-3 py-1 text-xs text-stone-600"
                                                >
                                                    {ingredient}
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </AppShell>
    )
}
