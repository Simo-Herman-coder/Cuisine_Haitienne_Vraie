import React from "react"
import AppShell from "../components/common/AppShell"
import { Mail, Send, MapPin, Phone, ExternalLink } from "lucide-react"

export default function ContactPage({ onNavigate }) {
    return (
        <AppShell activeTab="contact" onNavigate={onNavigate}>
            <div className="space-y-6">
                <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-stone-200">
                    <h2 className="text-xl font-semibold text-stone-900">
                        Nous contacter
                    </h2>
                    <p className="mt-2 text-sm text-stone-600">
                        Questions, suggestions et partenariats — nous répondons
                        sous 48h ouvrables.
                    </p>

                    <form
                        className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2"
                        onSubmit={e => e.preventDefault()}
                    >
                        <label className="block">
                            <span className="text-sm font-medium text-stone-700">
                                Nom complet{" "}
                                <span className="text-rose-600">*</span>
                            </span>
                            <input
                                type="text"
                                required
                                placeholder="ex. Marie-Josée Dupont"
                                className="mt-1 block w-full rounded-lg border border-stone-200 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-200"
                            />
                        </label>

                        <label className="block">
                            <span className="text-sm font-medium text-stone-700">
                                Adresse e-mail{" "}
                                <span className="text-rose-600">*</span>
                            </span>
                            <input
                                type="email"
                                required
                                placeholder="ex. marie@example.com"
                                className="mt-1 block w-full rounded-lg border border-stone-200 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-200"
                            />
                        </label>

                        <label className="block sm:col-span-2">
                            <span className="text-sm font-medium text-stone-700">
                                Sujet <span className="text-rose-600">*</span>
                            </span>
                            <input
                                type="text"
                                required
                                placeholder="ex. Suggestion de recette"
                                className="mt-1 block w-full rounded-lg border border-stone-200 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-200"
                            />
                        </label>

                        <label className="block sm:col-span-2">
                            <span className="text-sm font-medium text-stone-700">
                                Message <span className="text-rose-600">*</span>
                            </span>
                            <textarea
                                required
                                placeholder="Écrivez votre message ici…"
                                className="mt-1 block w-full min-h-[140px] rounded-lg border border-stone-200 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-200"
                            ></textarea>
                        </label>

                        <label className="sm:col-span-2 flex items-start gap-3 text-sm">
                            <input
                                type="checkbox"
                                required
                                className="mt-1 h-4 w-4 rounded border-stone-200 text-amber-600"
                            />
                            <span>
                                J'accepte que mes données soient traitées
                                conformément à la{" "}
                                <a
                                    href="#"
                                    className="text-amber-600 underline"
                                >
                                    politique de confidentialité
                                </a>
                                .
                            </span>
                        </label>

                        <div className="sm:col-span-2 flex justify-end">
                            <button
                                type="submit"
                                className="inline-flex items-center gap-2 rounded-2xl bg-brand-orange px-4 py-2 text-sm font-semibold text-white shadow-sm hover:brightness-95"
                            >
                                <Send size={16} /> Envoyer le message
                            </button>
                        </div>
                    </form>
                </div>

                <aside className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-stone-200">
                        <h3 className="text-sm font-semibold text-stone-900 mb-3">
                            Informations de contact
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <div className="rounded-lg bg-amber-50 p-2 text-amber-600">
                                    <Mail size={16} />
                                </div>
                                <div>
                                    <div className="text-xs font-medium text-stone-500">
                                        EMAIL
                                    </div>
                                    <div className="text-sm font-semibold text-stone-900">
                                        contact@cuisinehaitienne.ht
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="rounded-lg bg-amber-50 p-2 text-amber-600">
                                    <Phone size={16} />
                                </div>
                                <div>
                                    <div className="text-xs font-medium text-stone-500">
                                        TÉLÉPHONE
                                    </div>
                                    <div className="text-sm font-semibold text-stone-900">
                                        +509 3700-0000
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="rounded-lg bg-amber-50 p-2 text-amber-600">
                                    <MapPin size={16} />
                                </div>
                                <div>
                                    <div className="text-xs font-medium text-stone-500">
                                        ADRESSE
                                    </div>
                                    <div className="text-sm font-semibold text-stone-900">
                                        Port-au-Prince, Haïti
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-stone-200">
                        <h3 className="text-sm font-semibold text-stone-900 mb-3">
                            Suivez-nous
                        </h3>
                        <div className="flex flex-col gap-3">
                            <a
                                className="flex items-center justify-between gap-3 rounded-lg border border-stone-100 px-3 py-2 hover:bg-stone-50"
                                href="#"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="rounded-full bg-amber-600 p-2 text-white">
                                        <ExternalLink size={14} />
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold text-stone-900">
                                            Facebook
                                        </div>
                                        <div className="text-xs text-stone-500">
                                            @CuisineHaïtienneVraie · 12,4k
                                        </div>
                                    </div>
                                </div>
                                <div className="text-stone-400">↗</div>
                            </a>

                            <a
                                className="flex items-center justify-between gap-3 rounded-lg border border-stone-100 px-3 py-2 hover:bg-stone-50"
                                href="#"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="rounded-full bg-amber-600 p-2 text-white">
                                        <ExternalLink size={14} />
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold text-stone-900">
                                            Instagram
                                        </div>
                                        <div className="text-xs text-stone-500">
                                            @cuisine_ht_vraie · 8,9k
                                        </div>
                                    </div>
                                </div>
                                <div className="text-stone-400">↗</div>
                            </a>
                        </div>
                    </div>
                </aside>
            </div>
        </AppShell>
    )
}
