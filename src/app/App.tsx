import { useState } from "react"
import {
    Bell,
    BookOpen,
    ChevronDown,
    ChevronRight,
    Clock,
    Filter,
    Gamepad2,
    Heart,
    Home,
    MessageCircleMore,
    Mail,
    MessageCircle,
    MessageSquare,
    Newspaper,
    Pin,
    Play,
    Search,
    TrendingUp,
    User,
    Users,
    Video,
    Eye,
} from "lucide-react"

type NavItem = {
    id: ModuleId
    label: string
    icon: typeof Home
}

type ModuleId =
    | "accueil"
    | "recettes"
    | "videos"
    | "blog"
    | "forum"
    | "jeux"
    | "profil"
    | "contact"

type Recipe = {
    id: number
    titre: string
    categorie: string
    temps: string
    niveau: "Facile" | "Intermédiaire" | "Avancé"
    image: string
}

type VideoItem = {
    id: number
    titre: string
    categorie: "Plats Principaux" | "Soupes" | "Desserts" | "Techniques" | "Rapide"
    duree: string
    vues: string
    image: string
}

type BlogPost = {
    id: number
    titre: string
    resume: string
    auteur: string
    date: string
    lectures: string
    categorie: "Culture" | "Techniques" | "Ingrédients" | "Voyage" | "Recettes"
    tempsLecture?: string
    image: string
}

type ForumTopic = {
    id: number
    titre: string
    auteur: string
    date: string
    extrait: string
    initiales: string
    avatarClass: string
    epingle?: boolean
    tags: string[]
    categorie: "Conseils" | "Astuces" | "Entraide" | "Recettes" | "Vidéos" | "Général"
    commentaires: number
    vues: number
    coeurs: number
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
        categorie: "Porc",
        temps: "2h 30m",
        niveau: "Intermédiaire",
        image: image("photo-1624174782964-e541742299ee", 640, 520),
    },
    {
        id: 2,
        titre: "Bouillon National",
        categorie: "Boeuf",
        temps: "1h 45m",
        niveau: "Avancé",
        image: image("photo-1664741662725-bd131742b7b7", 640, 520),
    },
    {
        id: 3,
        titre: "Riz Djon Djon",
        categorie: "Riz",
        temps: "45 min",
        niveau: "Facile",
        image: image("photo-1741650824813-842d6b39c5ed", 640, 520),
    },
    {
        id: 4,
        titre: "Akra de Malanga",
        categorie: "Légumes",
        temps: "30 min",
        niveau: "Facile",
        image: image("photo-1762941904142-9d91ca413e66", 640, 520),
    },
    {
        id: 5,
        titre: "Tasso de Cabri",
        categorie: "Chèvre",
        temps: "1h 10m",
        niveau: "Intermédiaire",
        image: image("photo-1580476262843-d5e9b687d4d4", 640, 520),
    },
    {
        id: 6,
        titre: "Lambi en Sauce",
        categorie: "Lambi",
        temps: "55 min",
        niveau: "Avancé",
        image: image("photo-1632859965308-d15227508c4b", 640, 520),
    },
    {
        id: 7,
        titre: "Riz Collé aux Pois Rouges",
        categorie: "Riz",
        temps: "40 min",
        niveau: "Facile",
        image: image("photo-1741650824813-842d6b39c5ed", 640, 520),
    },
    {
        id: 8,
        titre: "Tchaka Maïs & Viande",
        categorie: "Boeuf",
        temps: "3h",
        niveau: "Avancé",
        image: image("photo-1575950674322-3a1977724f2e", 640, 520),
    },
]

const videos: VideoItem[] = [
    {
        id: 1,
        titre: "Griot de Porc — Recette Complète",
        categorie: "Plats Principaux",
        duree: "24:12",
        vues: "14,2k",
        image: image("photo-1624174782964-e541742299ee", 640, 360),
    },
    {
        id: 2,
        titre: "Bouillon National Authentique",
        categorie: "Soupes",
        duree: "31:05",
        vues: "9,8k",
        image: image("photo-1664741662725-bd131742b7b7", 640, 360),
    },
    {
        id: 3,
        titre: "Maîtriser le Pikliz Haïtien",
        categorie: "Techniques",
        duree: "12:34",
        vues: "6,2k",
        image: image("photo-1682603210290-dc7eca624ad2", 640, 360),
    },
    {
        id: 4,
        titre: "Poulet en Sauce Claire",
        categorie: "Plats Principaux",
        duree: "18:45",
        vues: "4,9k",
        image: image("photo-1575950674322-3a1977724f2e", 640, 360),
    },
    {
        id: 5,
        titre: "Pain Patate Traditionnel",
        categorie: "Desserts",
        duree: "9:20",
        vues: "3,1k",
        image: image("photo-1700498353132-bebd925b9c51", 640, 360),
    },
    {
        id: 6,
        titre: "Akra de Malanga Croustillant",
        categorie: "Rapide",
        duree: "7:55",
        vues: "2,7k",
        image: image("photo-1762941904142-9d91ca413e66", 640, 360),
    },
    {
        id: 7,
        titre: "Diri ak Djon Djon",
        categorie: "Plats Principaux",
        duree: "15:30",
        vues: "8,4k",
        image: image("photo-1741650824813-842d6b39c5ed", 640, 360),
    },
    {
        id: 8,
        titre: "Soupe Joumou — 1er Janvier",
        categorie: "Soupes",
        duree: "42:10",
        vues: "22,1k",
        image: image("photo-1664741662725-bd131742b7b7", 640, 360),
    },
    {
        id: 9,
        titre: "Tasso de Cabri Grillé",
        categorie: "Plats Principaux",
        duree: "16:40",
        vues: "5,8k",
        image: image("photo-1580476262843-d5e9b687d4d4", 640, 360),
    },
    {
        id: 10,
        titre: "Lambi en Sauce Créole",
        categorie: "Techniques",
        duree: "21:15",
        vues: "7,6k",
        image: image("photo-1632859965308-d15227508c4b", 640, 360),
    },
    {
        id: 11,
        titre: "Gratin de Macaroni Maison",
        categorie: "Rapide",
        duree: "11:05",
        vues: "4,2k",
        image: image("photo-1700498353132-bebd925b9c51", 640, 360),
    },
    {
        id: 12,
        titre: "Marinade Haïtienne",
        categorie: "Techniques",
        duree: "8:30",
        vues: "3,9k",
        image: image("photo-1683624328172-88fb24625ec1", 640, 360),
    },
]

const videoCategories = [
    "Tout",
    "Plats Principaux",
    "Soupes",
    "Desserts",
    "Techniques",
    "Rapide",
] as const

const blogPosts: BlogPost[] = [
    {
        id: 1,
        titre: "L'Histoire du Griot : Symbole d'Identité Nationale",
        resume:
            "Le griot est bien plus qu'un plat — c'est un symbole de fierté nationale transmis de génération en génération.",
        auteur: "Marlène Beauchamp",
        date: "28 juin 2026",
        lectures: "2,4k lectures",
        categorie: "Culture",
        image: image("photo-1624174782964-e541742299ee", 900, 520),
    },
    {
        id: 2,
        titre: "Les Épices Incontournables de la Cuisine Haïtienne",
        resume:
            "Comprendre les bases aromatiques qui donnent aux plats haïtiens leur profondeur et leur chaleur.",
        auteur: "Jean-Paul Romain",
        date: "24 juin 2026",
        lectures: "1,8k lect.",
        categorie: "Techniques",
        tempsLecture: "4 min",
        image: image("photo-1716141456596-aabee414f26b", 420, 320),
    },
    {
        id: 3,
        titre: "Pikliz, Piment et Équilibre des Saveurs",
        resume:
            "Pourquoi l'acidité, le croquant et le feu du piment changent toute l'expérience d'un repas.",
        auteur: "Nadia Saint-Fleur",
        date: "18 juin 2026",
        lectures: "1,2k lect.",
        categorie: "Ingrédients",
        tempsLecture: "6 min",
        image: image("photo-1682603210290-dc7eca624ad2", 420, 320),
    },
]

const blogCategories = ["Culture", "Techniques", "Ingrédients", "Voyage", "Recettes"]

const forumCategories = [
    "Tout",
    "Conseils",
    "Astuces",
    "Entraide",
    "Recettes",
    "Vidéos",
    "Général",
] as const

const forumTopics: ForumTopic[] = [
    {
        id: 1,
        titre: "Comment réussir un griot vraiment croustillant ?",
        auteur: "Marie-Josée D.",
        date: "il y a 2h",
        extrait: "J'essaie depuis des semaines mais mon griot reste parfois trop tendre...",
        initiales: "MJ",
        avatarClass: "bg-brand-orange",
        epingle: true,
        tags: ["Griot", "Technique"],
        categorie: "Conseils",
        commentaires: 14,
        vues: 312,
        coeurs: 28,
    },
    {
        id: 2,
        titre: "L'epis parfait : mes proportions secrètes révélées",
        auteur: "Rémy Dupont",
        date: "il y a 5h",
        extrait: "Après des années de test, j'ai enfin trouvé le bon équilibre...",
        initiales: "RD",
        avatarClass: "bg-brand-slate",
        tags: ["Epis", "Base"],
        categorie: "Astuces",
        commentaires: 8,
        vues: 180,
        coeurs: 41,
    },
    {
        id: 3,
        titre: "Où trouver du djon djon séché en France ?",
        auteur: "Sophie K.",
        date: "il y a 1j",
        extrait: "Je suis à Paris et cherche désespérément du djon djon de qualité...",
        initiales: "SK",
        avatarClass: "bg-[#e4a000]",
        tags: ["Djon Djon", "Ingrédients"],
        categorie: "Entraide",
        commentaires: 22,
        vues: 445,
        coeurs: 15,
    },
    {
        id: 4,
        titre: "Ma version du bouillon national avec légumes racines",
        auteur: "Chantal M.",
        date: "il y a 2j",
        extrait: "Voici ma recette familiale transmise par ma grand-mère...",
        initiales: "CM",
        avatarClass: "bg-emerald-700",
        tags: ["Bouillon", "Recette"],
        categorie: "Recettes",
        commentaires: 31,
        vues: 620,
        coeurs: 67,
    },
    {
        id: 5,
        titre: "La vidéo sur le pikliz de Chantal est incroyable",
        auteur: "Nadia L.",
        date: "il y a 3j",
        extrait: "J'ai suivi chaque étape et le résultat est parfaitement croquant.",
        initiales: "NL",
        avatarClass: "bg-violet-600",
        tags: ["Pikliz", "Vidéo"],
        categorie: "Vidéos",
        commentaires: 17,
        vues: 289,
        coeurs: 34,
    },
    {
        id: 6,
        titre: "Vos accompagnements préférés avec le tassot ?",
        auteur: "Daniel A.",
        date: "il y a 4j",
        extrait: "Je prépare un repas familial dimanche et cherche des idées simples.",
        initiales: "DA",
        avatarClass: "bg-rose-700",
        epingle: true,
        tags: ["Tassot", "Repas"],
        categorie: "Général",
        commentaires: 19,
        vues: 354,
        coeurs: 22,
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

function SearchBar({
    compact = false,
    placeholder,
}: {
    compact?: boolean
    placeholder?: string
}) {
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
                placeholder={
                    placeholder ?? (compact ? "Rechercher..." : "Chercher une recette...")
                }
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

function RecipeListItem({ recette }: { recette: Recipe }) {
    return (
        <article className="flex items-center gap-4 rounded-[18px] bg-white p-4 shadow-md shadow-stone-900/10 ring-1 ring-black/5">
            <img
                src={recette.image}
                alt={recette.titre}
                className="h-[90px] w-[90px] shrink-0 rounded-[14px] object-cover"
            />
            <div className="min-w-0 flex-1">
                <h3 className="font-display text-lg font-bold leading-tight text-[var(--foreground)]">
                    {recette.titre}
                </h3>
                <p className="mt-1 text-sm text-[#7e665d]">{recette.categorie}</p>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                    <span className="flex items-center gap-1 text-sm text-[#7e665d]">
                        <Clock size={14} /> {recette.temps}
                    </span>
                    <NiveauBadge niveau={recette.niveau} />
                </div>
            </div>
            <ChevronRight className="shrink-0 text-[#7e665d]" size={20} />
        </article>
    )
}

function FilterGroup({
    titre,
    options,
}: {
    titre: string
    options: string[]
}) {
    return (
        <section className="space-y-3">
            <button className="flex w-full items-center justify-between text-left text-lg font-bold text-[var(--foreground)]">
                {titre}
                <ChevronDown size={18} className="text-[#7e665d]" />
            </button>
            <div className="flex flex-wrap gap-2">
                {options.map(option => (
                    <button
                        key={option}
                        className="rounded-full border border-[var(--border)] bg-white px-4 py-1.5 text-sm font-bold text-[var(--foreground)]"
                    >
                        {option}
                    </button>
                ))}
            </div>
        </section>
    )
}

function FilterPanel() {
    return (
        <aside className="space-y-6 bg-white p-6 md:min-h-[744px] md:w-[300px] md:border-r md:border-[var(--border)] lg:w-[310px]">
            <SearchBar placeholder="Griot, bouillon, djon djon..." />
            <p className="text-sm font-black uppercase tracking-wide text-[#7e574a]">
                Filtres
            </p>
            <FilterGroup titre="Temps" options={["< 30 min", "30-60 min", "> 1 heure"]} />
            <FilterGroup
                titre="Difficulté"
                options={["Facile", "Intermédiaire", "Avancé"]}
            />
            <FilterGroup
                titre="Ingrédient"
                options={["Porc", "Poulet", "Poisson", "Légumes", "Riz"]}
            />
        </aside>
    )
}

function VideoCard({ video }: { video: VideoItem }) {
    return (
        <article className="overflow-hidden rounded-[16px] bg-white shadow-md shadow-stone-900/10 ring-1 ring-black/5">
            <div className="relative h-[142px] overflow-hidden sm:h-[170px] md:h-[164px]">
                <img src={video.image} alt={video.titre} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-black/25" />
                <button
                    type="button"
                    aria-label={`Lire la vidéo ${video.titre}`}
                    className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-brand-orange shadow-lg md:h-14 md:w-14"
                >
                    <Play size={22} className="ml-1 md:size-6" />
                </button>
                <span className="absolute bottom-3 right-3 rounded-md bg-black/80 px-2 py-1 text-xs font-bold text-white">
                    {video.duree}
                </span>
            </div>
            <div className="p-3 md:p-4">
                <h3 className="min-h-[2.75rem] font-semibold leading-snug text-[var(--foreground)]">
                    {video.titre}
                </h3>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-[#7e665d]">
                    <Eye size={14} /> {video.vues} vues
                </p>
            </div>
        </article>
    )
}

function Header({
    activeModule,
    onNavigate,
}: {
    activeModule: ModuleId
    onNavigate: (module: ModuleId) => void
}) {
    return (
        <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-white/95 backdrop-blur">
            <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-4 md:h-14 md:px-7">
                <Logo />
                <nav className="hidden min-w-0 flex-1 items-center gap-1 overflow-x-auto scrollbar-hide md:flex">
                    {navigation.map(({ id, label, icon: Icon }) => (
                        <button
                            key={id}
                            onClick={() => onNavigate(id)}
                            className={[
                                "flex shrink-0 items-center gap-1.5 rounded-[11px] px-2.5 py-1.5 text-sm font-bold transition xl:px-4 xl:py-2",
                                id === activeModule
                                    ? "bg-brand-orange/10 text-brand-orange"
                                    : "text-[#6f5a52] hover:bg-[var(--muted)]",
                            ].join(" ")}
                            aria-current={id === activeModule ? "page" : undefined}
                        >
                            <Icon size={15} /> {label}
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

function RecettesScreen() {
    const recettesAffichees = recettes.slice(0, 6)

    return (
        <main className="mx-auto w-full max-w-6xl md:px-7 md:py-6">
            <div className="overflow-hidden bg-brand-cream md:flex md:rounded-[12px] md:border md:border-[var(--border)] md:bg-white">
                <div className="md:hidden">
                    <FilterPanel />
                </div>

                <div className="hidden md:block">
                    <FilterPanel />
                </div>

                <section className="flex-1 px-4 pb-28 pt-5 md:bg-brand-cream md:p-6">
                    <p className="mb-4 text-sm font-bold text-[#7e574a] md:text-base">
                        {recettesAffichees.length} recettes trouvées
                    </p>

                    <div className="grid gap-4 md:hidden">
                        {recettesAffichees.map(recette => (
                            <RecipeListItem key={recette.id} recette={recette} />
                        ))}
                    </div>

                    <div className="hidden grid-cols-2 gap-5 md:grid xl:grid-cols-3">
                        {recettesAffichees.map(recette => (
                            <RecipeCard key={recette.id} recette={recette} />
                        ))}
                    </div>
                </section>
            </div>
        </main>
    )
}

function VideosScreen() {
    const [categorieActive, setCategorieActive] =
        useState<(typeof videoCategories)[number]>("Tout")
    const videosAffichees =
        categorieActive === "Tout"
            ? videos
            : videos.filter(video => video.categorie === categorieActive)

    return (
        <main className="mx-auto w-full max-w-6xl pb-28 md:pb-10">
            <section className="border-b border-[var(--border)] bg-white px-4 py-4 md:px-7 md:py-5">
                <h1 className="mb-4 font-display text-3xl font-bold leading-none text-[var(--foreground)] md:hidden">
                    Vidéos de Cuisine
                </h1>
                <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-hide">
                    {videoCategories.map(categorie => {
                        const active = categorie === categorieActive

                        return (
                            <button
                                key={categorie}
                                onClick={() => setCategorieActive(categorie)}
                                className={[
                                    "shrink-0 rounded-full px-5 py-2.5 text-sm font-bold transition md:px-6",
                                    active
                                        ? "bg-brand-orange text-white shadow-md shadow-orange-900/20"
                                        : "bg-[var(--muted)] text-[#5e4a43] hover:bg-[var(--border)]",
                                ].join(" ")}
                            >
                                {categorie}
                            </button>
                        )
                    })}
                </div>
            </section>

            <section className="px-4 pt-5 md:px-7 md:pt-8">
                <p className="mb-4 text-sm font-bold text-[#7e574a] md:mb-5 md:text-base">
                    {videosAffichees.length} vidéos
                </p>

                <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
                    {videosAffichees.map(video => (
                        <VideoCard key={video.id} video={video} />
                    ))}
                </div>
            </section>
        </main>
    )
}

function ShareButtons() {
    return (
        <div className="flex items-center gap-2">
            <span className="mr-1 text-sm text-[#7e574a]">Partager :</span>
            {["f", "◎", "wa", "𝕏"].map(reseau => (
                <button
                    key={reseau}
                    className="flex h-9 w-9 items-center justify-center rounded-[12px] border border-[var(--border)] bg-white text-sm font-bold text-[#8a6658]"
                    aria-label={`Partager sur ${reseau}`}
                >
                    {reseau}
                </button>
            ))}
        </div>
    )
}

function BlogBadge({ categorie }: { categorie: BlogPost["categorie"] }) {
    const styles: Record<BlogPost["categorie"], string> = {
        Culture: "bg-violet-100 text-violet-700",
        Techniques: "bg-blue-100 text-blue-700",
        Ingrédients: "bg-emerald-100 text-emerald-700",
        Voyage: "bg-amber-100 text-amber-700",
        Recettes: "bg-rose-100 text-rose-700",
    }

    return (
        <span className={`rounded-full px-3 py-1 text-sm font-bold ${styles[categorie]}`}>
            {categorie}
        </span>
    )
}

function FeaturedBlogCard({ article }: { article: BlogPost }) {
    return (
        <article className="overflow-hidden rounded-[18px] bg-white shadow-md shadow-stone-900/10 ring-1 ring-black/5">
            <div className="relative h-[200px] overflow-hidden md:h-[260px]">
                <img src={article.image} alt={article.titre} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
                <div className="absolute bottom-4 left-4">
                    <BlogBadge categorie={article.categorie} />
                </div>
            </div>
            <div className="p-5 md:p-6">
                <h2 className="font-display text-2xl font-bold leading-tight text-[var(--foreground)] md:text-[1.65rem]">
                    {article.titre}
                </h2>
                <p className="mt-3 leading-relaxed text-[#7e574a]">{article.resume}</p>
                <div className="mt-4 flex items-center justify-between gap-3 text-sm text-[#7e574a]">
                    <span>
                        {article.auteur} · {article.date}
                    </span>
                    <span className="shrink-0">{article.lectures}</span>
                </div>
                <div className="mt-4 border-t border-[var(--border)] pt-4">
                    <ShareButtons />
                </div>
            </div>
        </article>
    )
}

function CompactBlogCard({ article }: { article: BlogPost }) {
    return (
        <article className="flex gap-4 rounded-[18px] bg-white p-4 shadow-md shadow-stone-900/10 ring-1 ring-black/5 md:p-0">
            <img
                src={article.image}
                alt={article.titre}
                className="h-[100px] w-[120px] shrink-0 rounded-[14px] object-cover md:h-[188px] md:w-[200px] md:rounded-l-[18px] md:rounded-r-none"
            />
            <div className="min-w-0 flex-1 md:p-5 md:pl-0">
                <div className="mb-2 flex flex-wrap items-center gap-3">
                    <BlogBadge categorie={article.categorie} />
                    {article.tempsLecture && (
                        <span className="text-sm text-[#7e574a]">{article.tempsLecture}</span>
                    )}
                </div>
                <h3 className="font-display text-lg font-bold leading-tight text-[var(--foreground)] md:text-xl">
                    {article.titre}
                </h3>
                <div className="mt-2 flex items-center justify-between gap-3 text-sm text-[#7e574a]">
                    <span>{article.auteur}</span>
                    <span className="shrink-0">{article.lectures}</span>
                </div>
                <div className="mt-3 hidden md:flex">
                    <ShareButtons />
                </div>
                <div className="mt-3 flex gap-2 md:hidden">
                    {["f", "◎", "wa"].map(reseau => (
                        <button
                            key={reseau}
                            className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-[var(--muted)] text-xs font-bold text-[#8a6658]"
                        >
                            {reseau}
                        </button>
                    ))}
                </div>
            </div>
        </article>
    )
}

function BlogSidebar() {
    return (
        <aside className="hidden w-[276px] shrink-0 space-y-5 lg:block">
            <section className="overflow-hidden rounded-[18px] bg-white shadow-md shadow-stone-900/10 ring-1 ring-black/5">
                <h2 className="border-b border-[var(--border)] px-5 py-4 font-display text-xl font-bold">
                    Catégories
                </h2>
                <div className="divide-y divide-[var(--border)]/60">
                    {blogCategories.map(categorie => (
                        <button
                            key={categorie}
                            className="flex w-full items-center justify-between px-6 py-4 text-left font-semibold text-[#3d2a24]"
                        >
                            {categorie}
                            <ChevronRight size={17} className="text-[#7e574a]" />
                        </button>
                    ))}
                </div>
            </section>

            <section className="rounded-[18px] border border-orange-200 bg-orange-50/40 p-5 shadow-md shadow-stone-900/8">
                <Newspaper size={30} className="mb-4 text-brand-orange" />
                <h2 className="font-display text-xl font-bold text-[var(--foreground)]">
                    Newsletter
                </h2>
                <p className="mt-2 text-sm leading-snug text-[#7e574a]">
                    Recevez nos nouvelles recettes chaque semaine
                </p>
                <input
                    className="mt-4 h-12 w-full rounded-[16px] border border-[var(--border)] bg-white px-4 text-sm outline-none placeholder:text-[#9a7a6e]"
                    placeholder="votre@email.com"
                />
                <button className="mt-3 h-11 w-full rounded-[16px] bg-brand-orange text-sm font-black text-white">
                    S'abonner →
                </button>
            </section>
        </aside>
    )
}

function BlogScreen() {
    const [articlePrincipal, ...articlesSecondaires] = blogPosts

    return (
        <main className="mx-auto w-full max-w-6xl pb-28 md:px-7 md:py-8 md:pb-10">
            <section className="border-b border-[var(--border)] bg-white px-4 pb-4 md:hidden">
                <h1 className="font-display text-3xl font-bold leading-tight text-[var(--foreground)]">
                    Blog Culinaire
                </h1>
                <p className="mt-1 text-[#7e574a]">Culture, histoire & techniques</p>
            </section>

            <div className="grid gap-6 px-4 pt-5 md:px-0 md:pt-0 lg:grid-cols-[1fr_276px]">
                <section className="space-y-5">
                    <FeaturedBlogCard article={articlePrincipal} />
                    {articlesSecondaires.map(article => (
                        <CompactBlogCard key={article.id} article={article} />
                    ))}
                </section>
                <BlogSidebar />
            </div>
        </main>
    )
}

function BottomNavigation({
    activeModule,
    onNavigate,
}: {
    activeModule: ModuleId
    onNavigate: (module: ModuleId) => void
}) {
    return (
        <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--border)] bg-white md:hidden">
            <div className="grid h-[68px] grid-cols-8">
                {navigation.map(({ id, label, icon: Icon }) => (
                    <button
                        key={id}
                        onClick={() => onNavigate(id)}
                        className={[
                            "relative flex flex-col items-center justify-center gap-1 text-[0.65rem] font-semibold",
                            id === activeModule ? "text-brand-orange" : "text-[#775f56]",
                        ].join(" ")}
                    >
                        {id === activeModule && (
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
    const [activeModule, setActiveModule] = useState<ModuleId>("blog")

    const renderModule = () => {
        switch (activeModule) {
            case "accueil":
                return <HomeScreen />
            case "recettes":
                return <RecettesScreen />
            case "videos":
                return <VideosScreen />
            case "blog":
                return <BlogScreen />
            default:
                return <BlogScreen />
        }
    }

    return (
        <div className="min-h-screen bg-brand-cream text-[var(--foreground)]">
            <Header activeModule={activeModule} onNavigate={setActiveModule} />
            {renderModule()}
            <AssistantButton />
            <BottomNavigation activeModule={activeModule} onNavigate={setActiveModule} />
        </div>
    )
}
