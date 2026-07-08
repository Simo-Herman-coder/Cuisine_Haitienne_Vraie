import { useState } from "react"
import {
    Bell,
    BookOpen,
    ChevronRight,
    Clock,
    Filter,
    Gamepad2,
    Heart,
    Home,
    Mail,
    MessageCircle,
    MessageSquare,
    Newspaper,
    Play,
    Search,
    User,
    Video,
    Eye,
} from "lucide-react"

type NavItem = {
    id: string
    label: string
    icon: typeof Home
}

type Recipe = {
    id: number
    titre: string
    temps: string
    niveau: "Facile" | "Intermédiaire" | "Avancé"
    image: string
}

type VideoItem = {
    id: number
    titre: string
    duree: string
    vues: string
    image: string
}

const image = (id: string, width = 640, height = 480) =>
    `https://images.unsplash.com/${id}?w=${width}&h=${height}&fit=crop&auto=format&q=85`

const categories = [
    { nom: "Soupes", image: image("photo-1664741662725-bd131742b7b7", 220, 180) },
    { nom: "Plats", image: image("photo-1624174782964-e541742299ee", 220, 180) },
    { nom: "Riz & Légumes", image: image("photo-1743630458593-286a8ae99625", 220, 180) },
    { nom: "Desserts", image: image("photo-1700498353132-bebd925b9c51", 220, 180) },
    { nom: "Boissons", image: image("photo-1716141456596-aabee414f26b", 220, 180) },
    { nom: "Pâtisseries", image: image("photo-1624174503860-478619028ab3", 220, 180) },
    { nom: "Fruits de Mer", image: image("photo-1575950674322-3a1977724f2e", 220, 180) },
    { nom: "Viandes", image: image("photo-1580476262843-d5e9b687d4d4", 220, 180) },
]

const recettes: Recipe[] = [
    {
        id: 1,
        titre: "Griot de Porc Traditionnel",
        temps: "2h 30m",
        niveau: "Intermédiaire",
        image: image("photo-1624174782964-e541742299ee", 640, 520),
    },
    {
        id: 2,
        titre: "Bouillon National",
        temps: "1h 45m",
        niveau: "Avancé",
        image: image("photo-1664741662725-bd131742b7b7", 640, 520),
    },
    {
        id: 3,
        titre: "Riz Djon Djon",
        temps: "45 min",
        niveau: "Facile",
        image: image("photo-1741650824813-842d6b39c5ed", 640, 520),
    },
    {
        id: 4,
        titre: "Akra de Malanga",
        temps: "30 min",
        niveau: "Facile",
        image: image("photo-1762941904142-9d91ca413e66", 640, 520),
    },
    {
        id: 5,
        titre: "Tasso de Cabri",
        temps: "1h 10m",
        niveau: "Intermédiaire",
        image: image("photo-1580476262843-d5e9b687d4d4", 640, 520),
    },
    {
        id: 6,
        titre: "Lambi en Sauce",
        temps: "55 min",
        niveau: "Avancé",
        image: image("photo-1632859965308-d15227508c4b", 640, 520),
    },
    {
        id: 7,
        titre: "Pain Patate",
        temps: "1h",
        niveau: "Facile",
        image: image("photo-1700498353132-bebd925b9c51", 640, 520),
    },
    {
        id: 8,
        titre: "Tchaka Maïs",
        temps: "3h",
        niveau: "Avancé",
        image: image("photo-1575950674322-3a1977724f2e", 640, 520),
    },
]

const videos: VideoItem[] = [
    {
        id: 1,
        titre: "Maîtriser le Pikliz Haïtien",
        duree: "12:34",
        vues: "6,2k",
        image: image("photo-1682603210290-dc7eca624ad2", 640, 360),
    },
    {
        id: 2,
        titre: "Griot de Porc — Recette Complète",
        duree: "24:12",
        vues: "14,2k",
        image: image("photo-1624174782964-e541742299ee", 640, 360),
    },
    {
        id: 3,
        titre: "Poulet en Sauce Claire",
        duree: "18:45",
        vues: "4,9k",
        image: image("photo-1575950674322-3a1977724f2e", 640, 360),
    },
]

const navigation: NavItem[] = [
    { id: "accueil", label: "Accueil", icon: Home },
    { id: "recettes", label: "Recettes", icon: BookOpen },
    { id: "videos", label: "Vidéos", icon: Video },
    { id: "blog", label: "Blog", icon: Newspaper },
    { id: "forum", label: "Forum", icon: MessageSquare },
    { id: "jeux", label: "Jeux", icon: Gamepad2 },
    { id: "profil", label: "Profil", icon: User },
    { id: "contact", label: "Contact", icon: Mail },
]

function Logo() {
    return (
        <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[18px] bg-brand-orange shadow-lg shadow-orange-900/20">
                <svg aria-hidden="true" width="25" height="25" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M12 3.2C12 3.2 7.9 8.1 7.9 13.1C7.9 16.2 9.7 18.4 12 18.4C14.3 18.4 16.1 16.2 16.1 13.1C16.1 8.1 12 3.2 12 3.2Z"
                        fill="white"
                    />
                    <path
                        d="M7.1 19.4C8.1 20.4 9.8 21 12 21C14.2 21 15.9 20.4 16.9 19.4C15.6 19.9 14 20.2 12 20.2C10 20.2 8.4 19.9 7.1 19.4Z"
                        fill="white"
                        opacity="0.55"
                    />
                </svg>
            </div>
            <div className="leading-none">
                <p className="font-display text-lg font-bold text-[var(--foreground)]">
                    Cuisine Haïtienne
                </p>
                <p className="mt-1 text-[0.68rem] font-black uppercase tracking-[0.24em] text-brand-orange">
                    Vraie
                </p>
            </div>
        </div>
    )
}

function SectionTitle({ titre }: { titre: string }) {
    return (
        <div className="mb-4 flex items-center justify-between">
            <h2 className="font-display text-2xl font-bold text-[var(--foreground)] md:text-[1.65rem]">
                {titre}
            </h2>
            <button className="flex items-center gap-1 text-sm font-semibold text-brand-orange">
                Tout voir <ChevronRight size={16} />
            </button>
        </div>
    )
}

function SearchBar({ compact = false }: { compact?: boolean }) {
    return (
        <label
            className={[
                "flex items-center gap-3 rounded-[18px] border border-[var(--border)] bg-white shadow-md shadow-stone-900/10",
                compact ? "h-10 px-4" : "h-[68px] px-5",
            ].join(" ")}
        >
            <Search size={compact ? 16 : 22} className="shrink-0 text-[#876658]" />
            <input
                className="min-w-0 flex-1 bg-transparent text-sm text-[var(--foreground)] outline-none placeholder:text-[#8d6b5e] md:text-base"
                placeholder={compact ? "Rechercher..." : "Chercher une recette..."}
            />
            {!compact && (
                <button
                    type="button"
                    aria-label="Filtrer les recettes"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[14px] bg-brand-orange text-white"
                >
                    <Filter size={18} />
                </button>
            )}
        </label>
    )
}

function NiveauBadge({ niveau }: { niveau: Recipe["niveau"] }) {
    const styles = {
        Facile: "bg-emerald-100 text-emerald-700",
        Intermédiaire: "bg-amber-100 text-amber-700",
        Avancé: "bg-rose-100 text-rose-700",
    }

    return (
        <span className={`rounded-full px-3 py-1 text-sm font-bold ${styles[niveau]}`}>
            {niveau}
        </span>
    )
}

function RecipeCard({ recette }: { recette: Recipe }) {
    const [aimee, setAimee] = useState(false)

    return (
        <article className="overflow-hidden rounded-[16px] bg-white shadow-md shadow-stone-900/12 ring-1 ring-black/5">
            <div className="relative h-[118px] overflow-hidden sm:h-[160px] md:h-[188px]">
                <img
                    src={recette.image}
                    alt={recette.titre}
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
                <button
                    type="button"
                    aria-label={aimee ? "Retirer des favoris" : "Ajouter aux favoris"}
                    onClick={() => setAimee(!aimee)}
                    className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-[#73584f] shadow-sm"
                >
                    <Heart
                        size={20}
                        className={aimee ? "fill-brand-orange text-brand-orange" : ""}
                    />
                </button>
                <div className="absolute bottom-3 left-3">
                    <NiveauBadge niveau={recette.niveau} />
                </div>
            </div>
            <div className="p-4">
                <h3 className="min-h-[3rem] font-display text-lg font-bold leading-tight text-[var(--foreground)]">
                    {recette.titre}
                </h3>
                <p className="mt-2 flex items-center gap-1.5 text-sm text-[#7e665d]">
                    <Clock size={15} /> {recette.temps}
                </p>
            </div>
        </article>
    )
}

function VideoCard({ video }: { video: VideoItem }) {
    return (
        <article className="overflow-hidden rounded-[16px] bg-white shadow-md shadow-stone-900/10 ring-1 ring-black/5">
            <div className="relative h-[152px] overflow-hidden">
                <img src={video.image} alt={video.titre} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-black/25" />
                <button
                    type="button"
                    aria-label={`Lire la vidéo ${video.titre}`}
                    className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-brand-orange shadow-lg"
                >
                    <Play size={22} className="ml-1" />
                </button>
                <span className="absolute bottom-3 right-3 rounded-md bg-black/80 px-2 py-1 text-xs font-bold text-white">
                    {video.duree}
                </span>
            </div>
            <div className="p-3">
                <h3 className="font-semibold text-[var(--foreground)]">{video.titre}</h3>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-[#7e665d]">
                    <Eye size={14} /> {video.vues} vues
                </p>
            </div>
        </article>
    )
}

function Header() {
    return (
        <header className="sticky top-0 z-30 border-b border-[var(--border)] bg-white/95 backdrop-blur">
            <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-4 md:h-[78px] md:px-7">
                <Logo />
                <nav className="hidden min-w-0 flex-1 items-center justify-center gap-1 lg:flex">
                    {navigation.slice(0, 5).map(({ id, label, icon: Icon }) => (
                        <button
                            key={id}
                            className={[
                                "flex items-center gap-2 rounded-[11px] px-4 py-2 text-sm font-bold transition",
                                id === "accueil"
                                    ? "bg-brand-orange/10 text-brand-orange"
                                    : "text-[#6f5a52] hover:bg-[var(--muted)]",
                            ].join(" ")}
                        >
                            <Icon size={16} /> {label}
                        </button>
                    ))}
                </nav>
                <div className="hidden items-center gap-3 md:flex">
                    <SearchBar compact />
                    <img
                        src={image("photo-1556908289-84da46520347", 80, 80)}
                        alt="Profil"
                        className="h-10 w-10 rounded-full border-2 border-brand-orange/30 object-cover"
                    />
                </div>
                <div className="flex items-center gap-3 md:hidden">
                    <button
                        type="button"
                        aria-label="Notifications"
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--muted)] text-[#70564d]"
                    >
                        <Bell size={20} />
                    </button>
                    <img
                        src={image("photo-1556908289-84da46520347", 80, 80)}
                        alt="Profil"
                        className="h-10 w-10 rounded-full border-2 border-brand-orange/30 object-cover"
                    />
                </div>
            </div>
        </header>
    )
}

function HomeScreen() {
    return (
        <main className="mx-auto w-full max-w-6xl px-4 pb-28 pt-6 md:px-7 md:pb-10 md:pt-10">
            <div className="mb-8 md:hidden">
                <SearchBar />
            </div>

            <section className="mb-10">
                <SectionTitle titre="Catégories" />
                <div className="grid auto-cols-[80px] grid-flow-col gap-4 overflow-x-auto pb-1 scrollbar-hide md:grid-flow-row md:grid-cols-8 md:gap-5 md:overflow-visible">
                    {categories.map(categorie => (
                        <button key={categorie.nom} className="text-center">
                            <img
                                src={categorie.image}
                                alt={categorie.nom}
                                className="h-20 w-20 rounded-[14px] object-cover shadow-md shadow-stone-900/15 ring-1 ring-black/5 md:h-[102px] md:w-full"
                            />
                            <span className="mt-2 block text-sm font-semibold leading-tight text-[#4b3129] md:text-base">
                                {categorie.nom}
                            </span>
                        </button>
                    ))}
                </div>
            </section>

            <section className="mb-9">
                <SectionTitle titre="Recettes en Vedette" />
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
                    {recettes.map(recette => (
                        <RecipeCard key={recette.id} recette={recette} />
                    ))}
                </div>
            </section>

            <section>
                <SectionTitle titre="Dernières Vidéos" />
                <div className="grid gap-4 md:grid-cols-3 md:gap-5">
                    {videos.map(video => (
                        <VideoCard key={video.id} video={video} />
                    ))}
                </div>
            </section>
        </main>
    )
}

function BottomNavigation() {
    return (
        <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--border)] bg-white md:hidden">
            <div className="grid h-[68px] grid-cols-8">
                {navigation.map(({ id, label, icon: Icon }) => (
                    <button
                        key={id}
                        className={[
                            "relative flex flex-col items-center justify-center gap-1 text-[0.65rem] font-semibold",
                            id === "accueil" ? "text-brand-orange" : "text-[#775f56]",
                        ].join(" ")}
                    >
                        {id === "accueil" && (
                            <span className="absolute top-0 h-0.5 w-7 rounded-full bg-brand-orange" />
                        )}
                        <Icon size={18} />
                        <span>{label}</span>
                    </button>
                ))}
            </div>
        </nav>
    )
}

function AssistantButton() {
    return (
        <button
            type="button"
            aria-label="Ouvrir l'assistant culinaire"
            className="fixed bottom-20 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full border-2 border-brand-orange/20 bg-white text-brand-orange shadow-xl shadow-orange-900/20 md:bottom-6 md:right-6"
        >
            <MessageCircle size={24} />
        </button>
    )
}

export default function App() {
    return (
        <div className="min-h-screen bg-brand-cream text-[var(--foreground)]">
            <Header />
            <HomeScreen />
            <AssistantButton />
            <BottomNavigation />
        </div>
    )
}
