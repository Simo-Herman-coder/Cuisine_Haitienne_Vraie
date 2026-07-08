import { useState } from "react"
import {
    Search,
    Home,
    BookOpen,
    Gamepad2,
    Video,
    Newspaper,
    User,
    MessageSquare,
    Mail,
    Clock,
    BarChart2,
    Star,
    Eye,
    Heart,
    Bookmark,
    Play,
    Share2,
    Send,
    ExternalLink,
    X,
    Filter,
    ChevronRight,
    ChevronLeft,
    ChevronDown,
    MessageCircle,
    Bell,
    Lock,
    Globe,
    Settings,
    LogOut,
    Camera,
    Trash2,
    Phone,
    MapPin,
    ThumbsUp,
    Pin,
    Users,
    ChefHat,
    Award,
    Plus,
    Zap,
    BookMarked,
    TrendingUp,
    BookOpen as BookIcon,
} from "lucide-react"

// ── Constants ──────────────────────────────────────────────────────────────────
const DF = "'Playfair Display', Georgia, serif"
const u = (id: string, w = 400, h = 300) =>
    `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`

const I = {
    griotHero: "photo-1625477811233-044633d10dd1",
    griot: "photo-1624174782964-e541742299ee",
    griotGrill: "photo-1580476262843-d5e9b687d4d4",
    bouillon: "photo-1664741662725-bd131742b7b7",
    rice: "photo-1743630458593-286a8ae99625",
    plantain: "photo-1762941904142-9d91ca413e66",
    feast: "photo-1575950674322-3a1977724f2e",
    bluePlate: "photo-1632859965308-d15227508c4b",
    chef: "photo-1556908153-1055164fe2df",
    chefF: "photo-1556908289-84da46520347",
    pikliz: "photo-1682603210290-dc7eca624ad2",
    market: "photo-1768734836792-daa30dd521e9",
    fruits: "photo-1716141456596-aabee414f26b",
    riceCarib: "photo-1741650824813-842d6b39c5ed",
    sweetPot: "photo-1700498353132-bebd925b9c51",
    cookClass: "photo-1683624328172-88fb24625ec1",
    pork: "photo-1624174503860-478619028ab3",
    cookPot: "photo-1594397109597-22633359958f",
}

type Layout = "mobile" | "desktop"

// ── Brand Logo ────────────────────────────────────────────────────────────────
function Logo({ compact = false }: { compact?: boolean }) {
    return (
        <div className="flex items-center gap-2.5">
            <div
                className="relative flex items-center justify-center shadow-md w-9 h-9 rounded-xl shrink-0"
                style={{
                    background:
                        "linear-gradient(145deg,var(--color-brand-orange),#E07848)",
                }}
            >
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path
                        d="M11 2C11 2 7 6.5 7 11C7 13.8 8.8 16 11 16C13.2 16 15 13.8 15 11C15 6.5 11 2 11 2Z"
                        fill="white"
                    />
                    <ellipse
                        cx="11"
                        cy="18"
                        rx="5.5"
                        ry="1.8"
                        fill="white"
                        fillOpacity="0.45"
                    />
                    <circle
                        cx="11"
                        cy="10"
                        r="2"
                        fill="white"
                        fillOpacity="0.3"
                    />
                </svg>
            </div>
            {!compact && (
                <div className="flex flex-col leading-none">
                    <span
                        className="text-sm font-bold tracking-tight text-foreground"
                        style={{ fontFamily: DF }}
                    >
                        Cuisine Haïtienne
                    </span>
                    <span
                        className="font-bold tracking-[0.18em] uppercase text-primary"
                        style={{ fontSize: "0.52rem" }}
                    >
                        Vraie
                    </span>
                </div>
            )}
        </div>
    )
}

// ── Shared UI ─────────────────────────────────────────────────────────────────
function Stars({ n = 5 }: { n?: number }) {
    return (
        <span className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map(i => (
                <Star
                    key={i}
                    size={10}
                    className={
                        i <= n
                            ? "text-accent fill-accent"
                            : "text-muted-foreground"
                    }
                />
            ))}
        </span>
    )
}

function DiffBadge({ diff }: { diff: string }) {
    const m: Record<string, string> = {
        Facile: "bg-emerald-100 text-emerald-700",
        Intermédiaire: "bg-amber-100 text-amber-700",
        Avancé: "bg-red-100 text-red-700",
    }
    return (
        <span
            className={`text-xs font-semibold px-2 py-0.5 rounded-full ${m[diff] ?? "bg-muted text-muted-foreground"}`}
        >
            {diff}
        </span>
    )
}

function RecipeCard({
    title,
    time,
    diff,
    img,
    onClick,
}: {
    title: string
    time: string
    diff: string
    img: string
    onClick?: () => void
}) {
    const [fav, setFav] = useState(false)
    return (
        <div
            onClick={onClick}
            className="overflow-hidden transition-all duration-300 shadow-md cursor-pointer rounded-2xl bg-card group hover:shadow-xl"
        >
            <div className="relative overflow-hidden">
                <img
                    src={img}
                    alt={title}
                    className="object-cover w-full h-40 transition-transform duration-500 group-hover:scale-105 bg-muted"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <button
                    className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm"
                    onClick={e => {
                        e.stopPropagation()
                        setFav(v => !v)
                    }}
                >
                    <Heart
                        size={13}
                        className={
                            fav
                                ? "fill-primary text-primary"
                                : "text-foreground/60"
                        }
                    />
                </button>
                <div className="absolute bottom-2 left-2.5">
                    <DiffBadge diff={diff} />
                </div>
            </div>
            <div className="p-3">
                <h3
                    className="text-sm font-semibold leading-snug text-foreground line-clamp-2"
                    style={{ fontFamily: DF }}
                >
                    {title}
                </h3>
                <div className="flex items-center gap-1 mt-1.5 text-muted-foreground">
                    <Clock size={11} />
                    <span className="text-xs">{time}</span>
                </div>
            </div>
        </div>
    )
}

function VideoCard({
    title,
    dur,
    views,
    img,
    layout = "mobile",
}: {
    title: string
    dur: string
    views: string
    img: string
    layout?: Layout
}) {
    const d = layout === "desktop"
    return (
        <div className="overflow-hidden transition-all duration-300 shadow-sm cursor-pointer rounded-2xl bg-card group hover:shadow-lg">
            <div className="relative overflow-hidden">
                <img
                    src={img}
                    alt={title}
                    className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 bg-muted ${d ? "h-32" : "h-28"}`}
                />
                <div className="absolute inset-0 flex items-center justify-center transition-colors bg-black/30 group-hover:bg-black/40">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full shadow-lg bg-white/90">
                        <Play size={16} className="text-primary ml-0.5" />
                    </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded-md font-mono">
                    {dur}
                </div>
            </div>
            <div className="p-2.5">
                <p className="text-xs font-semibold leading-snug line-clamp-2 text-foreground">
                    {title}
                </p>
                <div className="flex items-center gap-1 mt-1 text-muted-foreground">
                    <Eye size={10} />
                    <span className="text-xs">{views} vues</span>
                </div>
            </div>
        </div>
    )
}

// ── Cooking Mode Overlay ───────────────────────────────────────────────────────
function CookingModeOverlay({
    steps,
    onClose,
}: {
    steps: string[]
    onClose: () => void
}) {
    const [current, setCurrent] = useState(0)
    const isLast = current === steps.length - 1

    return (
        <div
            className="absolute inset-0 z-50 flex flex-col"
            style={{ background: "#160C06" }}
        >
            {/* Header */}
            <div
                className="flex items-center justify-between px-5 py-4 shrink-0"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
            >
                <div className="flex items-center gap-2">
                    <ChefHat size={18} className="text-accent" />
                    <span
                        className="font-semibold text-white"
                        style={{ fontFamily: DF, fontSize: "0.95rem" }}
                    >
                        Lecture Cuisine
                    </span>
                </div>
                <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-white/40 tabular-nums">
                        {current + 1} / {steps.length}
                    </span>
                    <button
                        onClick={onClose}
                        className="flex items-center justify-center transition-colors rounded-full w-7 h-7 text-white/50 hover:text-white"
                        style={{ border: "1px solid rgba(255,255,255,0.15)" }}
                    >
                        <X size={13} />
                    </button>
                </div>
            </div>

            {/* Progress bar */}
            <div
                className="h-0.5 shrink-0"
                style={{ background: "rgba(255,255,255,0.06)" }}
            >
                <div
                    className="h-full transition-all duration-500 ease-out bg-primary"
                    style={{
                        width: `${((current + 1) / steps.length) * 100}%`,
                    }}
                />
            </div>

            {/* Step content */}
            <div className="flex flex-col items-center justify-center flex-1 gap-6 px-6 py-6">
                <div
                    className="flex items-center justify-center w-16 h-16 rounded-full shrink-0"
                    style={{ border: "2px solid #D4940A" }}
                >
                    <span
                        className="text-2xl font-bold text-accent"
                        style={{ fontFamily: DF }}
                    >
                        {current + 1}
                    </span>
                </div>
                <p
                    className="text-xl leading-relaxed text-center text-white"
                    style={{ fontFamily: DF }}
                >
                    {steps[current]}
                </p>
                <div
                    className="w-full px-4 py-3 rounded-xl"
                    style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.07)",
                    }}
                >
                    <p className="text-xs text-center text-white/35">
                        💡 Lisez l'étape complète avant de commencer
                    </p>
                </div>
            </div>

            {/* Navigation */}
            <div className="flex flex-col gap-3 px-6 pb-8 shrink-0">
                {/* Step dots */}
                <div className="flex justify-center gap-1.5 mb-1">
                    {steps.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className="transition-all duration-300 rounded-full"
                            style={{
                                width: i === current ? 16 : 8,
                                height: 8,
                                background:
                                    i === current
                                        ? "var(--color-brand-orange)"
                                        : i < current
                                          ? "rgba(200,93,46,0.35)"
                                          : "rgba(255,255,255,0.12)",
                            }}
                        />
                    ))}
                </div>
                <div className="flex gap-3">
                    <button
                        onClick={() => setCurrent(c => Math.max(0, c - 1))}
                        disabled={current === 0}
                        className="flex-1 py-3.5 rounded-2xl text-sm font-semibold flex items-center justify-center gap-2 transition-all disabled:opacity-30"
                        style={{
                            border: "1.5px solid rgba(255,255,255,0.18)",
                            color: "rgba(255,255,255,0.65)",
                        }}
                    >
                        <ChevronLeft size={16} /> Précédent
                    </button>
                    <button
                        onClick={() => !isLast && setCurrent(c => c + 1)}
                        disabled={isLast}
                        className="flex-1 py-3.5 rounded-2xl text-sm font-bold text-white flex items-center justify-center gap-2 transition-all disabled:opacity-40"
                        style={{
                            background: isLast
                                ? "rgba(200,93,46,0.3)"
                                : "var(--color-brand-orange)",
                        }}
                    >
                        Suivant <ChevronRight size={16} />
                    </button>
                </div>
                {isLast && (
                    <button
                        onClick={onClose}
                        className="w-full py-3.5 rounded-2xl text-sm font-bold flex items-center justify-center gap-2 transition-all"
                        style={{
                            color: "#D4940A",
                            border: "1.5px solid rgba(212,148,10,0.35)",
                        }}
                    >
                        <Award size={16} /> Recette terminée ! Fermer
                    </button>
                )}
            </div>
        </div>
    )
}

// ── Screen 1 — Home ────────────────────────────────────────────────────────────
function HomeScreen({
    onNavigate,
    layout = "mobile",
}: {
    onNavigate: (s: string) => void
    layout?: Layout
}) {
    const d = layout === "desktop"
    const categories = [
        { label: "Soupes", img: I.bouillon },
        { label: "Plats", img: I.griot },
        { label: "Riz & Légumes", img: I.rice },
        { label: "Desserts", img: I.sweetPot },
        { label: "Boissons", img: I.fruits },
        { label: "Pâtisseries", img: I.pork },
        { label: "Fruits de Mer", img: I.feast },
        { label: "Viandes", img: I.griotGrill },
    ]
    const recipes = [
        {
            title: "Griot de Porc Traditionnel",
            time: "2h 30m",
            diff: "Intermédiaire",
            img: I.griot,
        },
        {
            title: "Bouillon National",
            time: "1h 45m",
            diff: "Avancé",
            img: I.bouillon,
        },
        {
            title: "Riz Djon Djon",
            time: "45 min",
            diff: "Facile",
            img: I.riceCarib,
        },
        {
            title: "Akra de Malanga",
            time: "30 min",
            diff: "Facile",
            img: I.plantain,
        },
        ...(d
            ? [
                  {
                      title: "Tasso de Cabri",
                      time: "1h 10m",
                      diff: "Intermédiaire",
                      img: I.griotGrill,
                  },
                  {
                      title: "Lambi en Sauce",
                      time: "55 min",
                      diff: "Avancé",
                      img: I.bluePlate,
                  },
                  {
                      title: "Pain Patate",
                      time: "1h",
                      diff: "Facile",
                      img: I.sweetPot,
                  },
                  {
                      title: "Tchaka Maïs",
                      time: "3h",
                      diff: "Avancé",
                      img: I.feast,
                  },
              ]
            : []),
    ]
    const videos = [
        {
            title: "Maîtriser le Pikliz Haïtien",
            dur: "12:34",
            views: "6,2k",
            img: I.pikliz,
        },
        {
            title: "Griot de Porc — Recette Complète",
            dur: "24:12",
            views: "14,2k",
            img: I.griot,
        },
        {
            title: "Poulet en Sauce Claire",
            dur: "18:45",
            views: "4,9k",
            img: I.feast,
        },
    ]

    return (
        <div className="flex flex-col h-full overflow-y-auto scrollbar-hide bg-background">
            {/* Mobile header */}
            {!d && (
                <div className="sticky top-0 z-10 flex items-center justify-between px-4 py-3 border-b bg-white/90 backdrop-blur-md border-border">
                    <Logo />
                    <div className="flex items-center gap-2">
                        <button className="flex items-center justify-center w-8 h-8 rounded-full bg-muted">
                            <Bell size={15} className="text-foreground/60" />
                        </button>
                        <img
                            src={u(I.chefF, 80, 80)}
                            alt="avatar"
                            className="object-cover w-8 h-8 border-2 rounded-full border-primary/30 bg-muted"
                        />
                    </div>
                </div>
            )}

            {/* Hero banner */}
            <div
                className={`relative overflow-hidden ${d ? "mx-6 mt-6 rounded-3xl" : "mx-4 mt-4 rounded-2xl"}`}
            >
                <img
                    src={u(I.griotHero, 800, 440)}
                    alt="Cuisine haïtienne"
                    className="object-cover w-full bg-muted"
                    style={{ height: d ? 240 : 200 }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-center px-6 py-4">
                    <span className="mb-2 text-xs font-bold tracking-widest uppercase text-accent">
                        Bienvenue
                    </span>
                    <h1
                        className="mb-2 font-bold leading-tight text-white"
                        style={{
                            fontFamily: DF,
                            fontSize: d ? "1.8rem" : "1.4rem",
                        }}
                    >
                        Cuisine Haïtienne
                        <br />
                        Vraie
                    </h1>
                    <p className="max-w-xs mb-4 text-xs text-white/70">
                        Découvrez l'authenticité de notre gastronomie
                    </p>
                    <button
                        onClick={() => onNavigate("recipes")}
                        className="self-start flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-white shadow-lg hover:shadow-xl transition-all bg-brand-orange"
                    >
                        Explorer les recettes <ChevronRight size={13} />
                    </button>
                </div>
            </div>

            <div
                className={`flex flex-col gap-6 ${d ? "px-6 py-6" : "px-4 py-5"}`}
            >
                {/* Search — mobile only */}
                {!d && (
                    <div className="flex items-center gap-3 px-4 py-3 bg-white border shadow-sm rounded-2xl border-border">
                        <Search size={16} className="text-muted-foreground" />
                        <span className="flex-1 text-sm text-muted-foreground">
                            Chercher une recette…
                        </span>
                        <div className="flex items-center justify-center rounded-lg w-7 h-7 bg-primary">
                            <Filter size={12} className="text-white" />
                        </div>
                    </div>
                )}

                {/* Categories */}
                <section>
                    <div className="flex items-center justify-between mb-3">
                        <h2
                            className="font-bold text-foreground"
                            style={{
                                fontFamily: DF,
                                fontSize: d ? "1.2rem" : "1rem",
                            }}
                        >
                            Catégories
                        </h2>
                        <button className="flex items-center gap-1 text-xs font-semibold text-primary">
                            Tout voir <ChevronRight size={12} />
                        </button>
                    </div>
                    {d ? (
                        <div className="grid grid-cols-8 gap-2">
                            {categories.map(cat => (
                                <button
                                    key={cat.label}
                                    className="flex flex-col items-center gap-1.5 group"
                                >
                                    <div className="w-full overflow-hidden shadow-sm aspect-square rounded-xl">
                                        <img
                                            src={u(cat.img, 120, 120)}
                                            alt={cat.label}
                                            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110 bg-muted"
                                        />
                                    </div>
                                    <span className="text-xs font-semibold leading-tight text-center text-foreground/80">
                                        {cat.label}
                                    </span>
                                </button>
                            ))}
                        </div>
                    ) : (
                        <div className="flex gap-3 px-1 pb-2 -mx-1 overflow-x-auto scrollbar-hide">
                            {categories.map(cat => (
                                <button
                                    key={cat.label}
                                    className="flex-shrink-0 flex flex-col items-center gap-1.5 group"
                                >
                                    <div className="w-16 h-16 overflow-hidden shadow-sm rounded-2xl">
                                        <img
                                            src={u(cat.img, 120, 120)}
                                            alt={cat.label}
                                            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110 bg-muted"
                                        />
                                    </div>
                                    <span
                                        className="text-xs font-semibold leading-tight text-center text-foreground/70"
                                        style={{ maxWidth: 64 }}
                                    >
                                        {cat.label}
                                    </span>
                                </button>
                            ))}
                        </div>
                    )}
                </section>

                {/* Featured Recipes */}
                <section>
                    <div className="flex items-center justify-between mb-3">
                        <h2
                            className="font-bold text-foreground"
                            style={{
                                fontFamily: DF,
                                fontSize: d ? "1.2rem" : "1rem",
                            }}
                        >
                            Recettes en Vedette
                        </h2>
                        <button className="flex items-center gap-1 text-xs font-semibold text-primary">
                            Tout voir <ChevronRight size={12} />
                        </button>
                    </div>
                    <div
                        className={`grid gap-3 ${d ? "grid-cols-4" : "grid-cols-2"}`}
                    >
                        {recipes.map(r => (
                            <RecipeCard
                                key={r.title}
                                {...r}
                                img={u(r.img, 400, 280)}
                                onClick={() => onNavigate("recipe")}
                            />
                        ))}
                    </div>
                </section>

                {/* Videos */}
                <section>
                    <div className="flex items-center justify-between mb-3">
                        <h2
                            className="font-bold text-foreground"
                            style={{
                                fontFamily: DF,
                                fontSize: d ? "1.2rem" : "1rem",
                            }}
                        >
                            Dernières Vidéos
                        </h2>
                        <button className="flex items-center gap-1 text-xs font-semibold text-primary">
                            Tout voir <ChevronRight size={12} />
                        </button>
                    </div>
                    <div
                        className={`grid gap-3 ${d ? "grid-cols-3" : "grid-cols-1"}`}
                    >
                        {videos.map(v => (
                            <VideoCard
                                key={v.title}
                                title={v.title}
                                dur={v.dur}
                                views={v.views}
                                img={u(v.img, 400, 220)}
                                layout={layout}
                            />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}

// ── Screen 2 — Recipes Search ─────────────────────────────────────────────────
function SearchScreen({
    onNavigate,
    layout = "mobile",
}: {
    onNavigate: (s: string) => void
    layout?: Layout
}) {
    const d = layout === "desktop"
    const [q, setQ] = useState("")
    const [activeFilters, setActiveFilters] = useState<string[]>([])
    const [expanded, setExpanded] = useState<string | null>(null)
    const filterGroups = [
        { label: "Temps", options: ["< 30 min", "30–60 min", "> 1 heure"] },
        { label: "Difficulté", options: ["Facile", "Intermédiaire", "Avancé"] },
        {
            label: "Ingrédient",
            options: ["Porc", "Poulet", "Poisson", "Légumes", "Riz"],
        },
    ]
    const toggle = (f: string) =>
        setActiveFilters(p =>
            p.includes(f) ? p.filter(x => x !== f) : [...p, f]
        )
    const results = [
        {
            title: "Griot de Porc Traditionnel",
            time: "2h 30m",
            diff: "Intermédiaire",
            ingr: "Porc",
            img: I.griot,
        },
        {
            title: "Bouillon National",
            time: "1h 45m",
            diff: "Avancé",
            ingr: "Bœuf",
            img: I.bouillon,
        },
        {
            title: "Tasso de Cabri",
            time: "1h 10m",
            diff: "Intermédiaire",
            ingr: "Chèvre",
            img: I.griotGrill,
        },
        {
            title: "Lambi en Sauce Créole",
            time: "55 min",
            diff: "Avancé",
            ingr: "Lambi",
            img: I.bluePlate,
        },
        {
            title: "Riz Collé aux Pois Rouges",
            time: "40 min",
            diff: "Facile",
            ingr: "Riz",
            img: I.riceCarib,
        },
        {
            title: "Tchaka Maïs & Viande",
            time: "3h",
            diff: "Avancé",
            ingr: "Maïs",
            img: I.feast,
        },
    ]

    return (
        <div
            className={`flex h-full ${d ? "flex-row" : "flex-col"} overflow-hidden bg-background`}
        >
            {/* Filter panel */}
            <div
                className={`bg-white ${
                    d
                        ? "w-60 shrink-0 border-r border-border overflow-y-auto p-5 flex flex-col gap-4"
                        : "border-b border-border px-4 pt-4 pb-3 sticky top-0 z-10"
                }`}
            >
                <div className="flex items-center gap-2.5 bg-muted rounded-xl px-3 py-2.5">
                    <Search
                        size={14}
                        className="text-muted-foreground shrink-0"
                    />
                    <input
                        value={q}
                        onChange={e => setQ(e.target.value)}
                        placeholder="Griot, bouillon, djon djon…"
                        className="flex-1 text-sm bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
                    />
                    {q && (
                        <button onClick={() => setQ("")}>
                            <X size={13} className="text-muted-foreground" />
                        </button>
                    )}
                </div>
                {d && (
                    <h3 className="text-xs font-bold tracking-wider uppercase text-muted-foreground">
                        Filtres
                    </h3>
                )}
                <div
                    className={`flex ${d ? "flex-col gap-3" : "flex-col gap-1.5 mt-2"}`}
                >
                    {filterGroups.map(({ label, options }) => (
                        <div key={label}>
                            <button
                                className="flex items-center w-full py-1 text-sm font-semibold text-foreground"
                                onClick={() =>
                                    setExpanded(
                                        expanded === label ? null : label
                                    )
                                }
                            >
                                {label}
                                <ChevronDown
                                    size={13}
                                    className={`ml-auto text-muted-foreground transition-transform ${expanded === label ? "rotate-180" : ""}`}
                                />
                            </button>
                            {(d || expanded === label) && (
                                <div className="flex gap-1.5 flex-wrap mt-1.5">
                                    {options.map(opt => (
                                        <button
                                            key={opt}
                                            onClick={() => toggle(opt)}
                                            className={`text-xs font-semibold px-3 py-1 rounded-full border transition-all ${
                                                activeFilters.includes(opt)
                                                    ? "bg-primary text-white border-primary shadow-sm"
                                                    : "bg-white text-foreground border-border hover:border-primary/40"
                                            }`}
                                        >
                                            {opt}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                {activeFilters.length > 0 && (
                    <div className="flex gap-1.5 flex-wrap mt-1">
                        {activeFilters.map(f => (
                            <span
                                key={f}
                                className="bg-primary/10 text-primary text-xs font-semibold px-2 py-0.5 rounded-full flex items-center gap-1"
                            >
                                {f}
                                <button onClick={() => toggle(f)}>
                                    <X size={9} />
                                </button>
                            </span>
                        ))}
                    </div>
                )}
            </div>

            {/* Results */}
            <div className="flex-1 p-4 overflow-y-auto scrollbar-hide">
                <p className="mb-3 text-xs font-medium text-muted-foreground">
                    {results.length} recettes trouvées
                </p>
                <div
                    className={
                        d ? "grid grid-cols-3 gap-4" : "flex flex-col gap-3"
                    }
                >
                    {results.map(r =>
                        d ? (
                            <RecipeCard
                                key={r.title}
                                title={r.title}
                                time={r.time}
                                diff={r.diff}
                                img={u(r.img, 400, 280)}
                                onClick={() => onNavigate("recipe")}
                            />
                        ) : (
                            <div
                                key={r.title}
                                onClick={() => onNavigate("recipe")}
                                className="flex items-center gap-3 p-3 transition-all border shadow-sm cursor-pointer bg-card rounded-2xl hover:shadow-md border-border/50"
                            >
                                <img
                                    src={u(r.img, 160, 160)}
                                    alt={r.title}
                                    className="object-cover w-18 h-18 rounded-xl bg-muted shrink-0"
                                    style={{ width: 72, height: 72 }}
                                />
                                <div className="flex-1 min-w-0">
                                    <p
                                        className="text-sm font-semibold leading-snug line-clamp-2 text-foreground"
                                        style={{ fontFamily: DF }}
                                    >
                                        {r.title}
                                    </p>
                                    <p className="text-xs text-muted-foreground mt-0.5">
                                        {r.ingr}
                                    </p>
                                    <div className="flex gap-2 mt-1.5 items-center flex-wrap">
                                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                                            <Clock size={10} />
                                            {r.time}
                                        </span>
                                        <DiffBadge diff={r.diff} />
                                    </div>
                                </div>
                                <ChevronRight
                                    size={14}
                                    className="text-muted-foreground shrink-0"
                                />
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    )
}

// ── Screen 3 — Recipe Detail ───────────────────────────────────────────────────
function RecipeScreen({ layout = "mobile" }: { layout?: Layout }) {
    const d = layout === "desktop"
    const [tab, setTab] = useState<"ingredients" | "steps">("ingredients")
    const [cookingMode, setCookingMode] = useState(false)
    const [saved, setSaved] = useState(false)

    const ingredients = [
        "1,5 kg d'épaule de porc en cubes",
        "Jus de 4 oranges amères",
        "6 gousses d'ail émincées",
        "2 c. à soupe de pikliz haïtien",
        "1 c. à café de sel fin",
        "Poivre noir fraîchement moulu",
        "Thym frais — 4 branches",
        "Huile végétale pour friture",
    ]
    const steps = [
        "Mariner le porc dans le jus d'orange amère, l'ail, le sel, le poivre et le thym pendant au minimum 4 heures au réfrigérateur.",
        "Placer la viande marinée dans une casserole avec la marinade. Couvrir et cuire à feu moyen pendant 45 min jusqu'à tendreté complète.",
        "Égoutter soigneusement la viande et réserver le jus de cuisson dans un bol à part.",
        "Chauffer l'huile dans une grande poêle ou friteuse. Frire le porc par petites quantités à feu vif jusqu'à coloration dorée et croustillante.",
        "Retirer l'excédent d'huile. Ajouter le jus de cuisson réservé et laisser réduire 5 minutes à feu moyen.",
        "Servir immédiatement avec du riz collé aux pois rouges, des bananes pesées et du pikliz maison.",
    ]

    return (
        <div className="relative flex flex-col h-full overflow-y-auto scrollbar-hide bg-background">
            {/* Hero */}
            <div className="relative shrink-0">
                <img
                    src={u(I.griot, 800, 400)}
                    alt="Griot de Porc"
                    className={`w-full object-cover bg-muted ${d ? "h-64" : "h-52"}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                    <button className="flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-foreground shadow-md">
                        <ChevronLeft size={13} /> Retour
                    </button>
                </div>
                <div className="absolute top-4 right-4">
                    <button
                        onClick={() => setSaved(v => !v)}
                        className="flex items-center justify-center w-8 h-8 rounded-full shadow-md bg-white/90 backdrop-blur-sm"
                    >
                        <Bookmark
                            size={14}
                            className={
                                saved
                                    ? "fill-primary text-primary"
                                    : "text-foreground"
                            }
                        />
                    </button>
                </div>
                <div className="absolute bottom-4 left-4">
                    <DiffBadge diff="Intermédiaire" />
                </div>
            </div>

            <div
                className={`flex flex-col gap-5 ${d ? "px-6 py-5" : "px-4 py-4"} pb-10`}
            >
                <div>
                    <h1
                        className="font-bold leading-tight text-foreground"
                        style={{
                            fontFamily: DF,
                            fontSize: d ? "1.6rem" : "1.35rem",
                        }}
                    >
                        Griot de Porc Traditionnel
                    </h1>
                    <p className="mt-1 text-sm text-muted-foreground">
                        Plat national d'Haïti · Porc mariné & frit
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                        <Stars n={5} />
                        <span className="text-xs font-medium text-muted-foreground">
                            4.8 (214 avis)
                        </span>
                    </div>
                </div>

                {/* Meta */}
                <div
                    className={`grid gap-3 ${d ? "grid-cols-5" : "grid-cols-3"} bg-card rounded-2xl p-4 shadow-sm border border-border/50`}
                >
                    {[
                        {
                            icon: <Clock size={16} className="text-primary" />,
                            label: "Durée",
                            value: "2h 30m",
                        },
                        {
                            icon: (
                                <BarChart2 size={16} className="text-primary" />
                            ),
                            label: "Difficulté",
                            value: "Interméd.",
                        },
                        {
                            icon: <Star size={16} className="text-accent" />,
                            label: "Note",
                            value: "4.8 / 5",
                        },
                        ...(d
                            ? [
                                  {
                                      icon: (
                                          <Users
                                              size={16}
                                              className="text-secondary"
                                          />
                                      ),
                                      label: "Portions",
                                      value: "4–6 pers.",
                                  },
                                  {
                                      icon: (
                                          <Eye
                                              size={16}
                                              className="text-secondary"
                                          />
                                      ),
                                      label: "Vues",
                                      value: "14,2k",
                                  },
                              ]
                            : []),
                    ].map(({ icon, label, value }) => (
                        <div
                            key={label}
                            className="flex flex-col items-center gap-1"
                        >
                            {icon}
                            <span className="text-xs text-muted-foreground">
                                {label}
                            </span>
                            <span className="text-xs font-bold text-foreground">
                                {value}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Cooking Mode CTA */}
                <button
                    onClick={() => setCookingMode(true)}
                    className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl text-white font-bold shadow-lg hover:shadow-xl transition-all active:scale-[0.99]"
                    style={{
                        background:
                            "linear-gradient(135deg,var(--color-brand-orange),#E07848)",
                    }}
                >
                    <ChefHat size={20} />
                    <span style={{ fontFamily: DF, fontSize: "1rem" }}>
                        Lecture Cuisine
                    </span>
                    <span className="hidden ml-1 text-xs font-normal text-white/70 sm:inline">
                        — Mode lecture facilitée
                    </span>
                </button>

                <div
                    className={
                        d
                            ? "grid grid-cols-2 gap-6 items-start"
                            : "flex flex-col gap-5"
                    }
                >
                    {/* Tabs */}
                    <div>
                        <div className="flex rounded-xl overflow-hidden border border-border p-0.5 bg-muted mb-4">
                            {(["ingredients", "steps"] as const).map(t => (
                                <button
                                    key={t}
                                    onClick={() => setTab(t)}
                                    className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${
                                        tab === t
                                            ? "bg-white text-primary shadow-sm"
                                            : "text-muted-foreground hover:text-foreground"
                                    }`}
                                >
                                    {t === "ingredients"
                                        ? "Ingrédients"
                                        : "Étapes"}
                                </button>
                            ))}
                        </div>
                        {tab === "ingredients" ? (
                            <ul className="flex flex-col gap-2">
                                {ingredients.map((ing, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-3 py-2 border-b border-border/50 last:border-0"
                                    >
                                        <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                                            {i + 1}
                                        </span>
                                        <span className="text-sm text-foreground/90">
                                            {ing}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <ol className="flex flex-col gap-3">
                                {steps.map((step, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-3 p-3 border shadow-sm bg-card rounded-xl border-border/50"
                                    >
                                        <span className="flex items-center justify-center text-xs font-bold text-white rounded-full w-7 h-7 bg-primary shrink-0">
                                            {i + 1}
                                        </span>
                                        <span className="text-sm leading-relaxed text-foreground/90">
                                            {step}
                                        </span>
                                    </li>
                                ))}
                            </ol>
                        )}
                    </div>

                    <div className="flex flex-col gap-5">
                        {/* YouTube block */}
                        <div>
                            <h3
                                className="mb-3 font-bold text-foreground"
                                style={{ fontFamily: DF }}
                            >
                                Vidéo de Démonstration
                            </h3>
                            <div className="relative overflow-hidden shadow-md rounded-2xl bg-muted">
                                <img
                                    src={u(I.cookClass, 600, 340)}
                                    alt="Vidéo démonstration"
                                    className="object-cover w-full h-44"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                                    <div className="flex items-center justify-center rounded-full shadow-xl w-14 h-14 bg-white/95">
                                        <Play
                                            size={22}
                                            className="ml-1 text-primary"
                                        />
                                    </div>
                                </div>
                                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-0.5 rounded-md font-mono">
                                    24:12
                                </div>
                            </div>
                        </div>
                        {/* Comments */}
                        <div>
                            <h3
                                className="mb-3 font-bold text-foreground"
                                style={{ fontFamily: DF }}
                            >
                                Commentaires (12)
                            </h3>
                            {[
                                {
                                    user: "Marie-J.",
                                    text: "Recette parfaite ! Exactement comme mamie.",
                                    time: "il y a 2j",
                                },
                                {
                                    user: "Patrice D.",
                                    text: "Le secret c'est l'orange amère, merci !",
                                    time: "il y a 5j",
                                },
                            ].map(c => (
                                <div
                                    key={c.user}
                                    className="p-3 mb-2 border shadow-sm bg-card rounded-xl border-border/50"
                                >
                                    <div className="flex items-center justify-between mb-1.5">
                                        <div className="flex items-center gap-2">
                                            <div className="flex items-center justify-center w-6 h-6 text-xs font-bold rounded-full bg-primary/20 text-primary">
                                                {c.user[0]}
                                            </div>
                                            <span className="text-xs font-semibold">
                                                {c.user}
                                            </span>
                                        </div>
                                        <span className="text-xs text-muted-foreground">
                                            {c.time}
                                        </span>
                                    </div>
                                    <p className="text-xs leading-relaxed text-foreground/80">
                                        {c.text}
                                    </p>
                                </div>
                            ))}
                            <div className="flex items-center gap-2 bg-muted rounded-xl px-3 py-2.5 mt-2">
                                <span className="flex-1 text-xs text-muted-foreground">
                                    Ajouter un commentaire…
                                </span>
                                <Send size={14} className="text-primary" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Share FAB */}
            <div className="absolute z-20 bottom-4 right-4">
                <button className="flex items-center gap-2 px-4 py-2.5 rounded-full text-white text-xs font-bold shadow-xl hover:shadow-2xl transition-all bg-brand-orange">
                    <Share2 size={14} /> Partager
                </button>
            </div>

            {/* Cooking Mode overlay */}
            {cookingMode && (
                <CookingModeOverlay
                    steps={steps}
                    onClose={() => setCookingMode(false)}
                />
            )}
        </div>
    )
}

// ── Screen 4 — Videos ──────────────────────────────────────────────────────────
function VideosScreen({ layout = "mobile" }: { layout?: Layout }) {
    const d = layout === "desktop"
    const [activeTag, setActiveTag] = useState("Tout")
    const tags = [
        "Tout",
        "Plats Principaux",
        "Soupes",
        "Desserts",
        "Techniques",
        "Rapide",
    ]
    const videos = [
        {
            title: "Griot de Porc — Recette Complète",
            chef: "Chantal M.",
            views: "14,2k",
            dur: "24:12",
            tag: "Plats Principaux",
            img: I.griot,
        },
        {
            title: "Bouillon National Authentique",
            chef: "Rémy D.",
            views: "9,8k",
            dur: "31:05",
            tag: "Soupes",
            img: I.bouillon,
        },
        {
            title: "Maîtriser le Pikliz Haïtien",
            chef: "Marie-J.",
            views: "6,2k",
            dur: "12:34",
            tag: "Techniques",
            img: I.pikliz,
        },
        {
            title: "Poulet en Sauce Claire",
            chef: "Nadège T.",
            views: "4,9k",
            dur: "18:45",
            tag: "Plats Principaux",
            img: I.feast,
        },
        {
            title: "Pain Patate Traditionnel",
            chef: "Jean-P. R.",
            views: "3,1k",
            dur: "9:20",
            tag: "Desserts",
            img: I.sweetPot,
        },
        {
            title: "Akra de Malanga Croustillant",
            chef: "Sophie K.",
            views: "2,7k",
            dur: "7:55",
            tag: "Rapide",
            img: I.plantain,
        },
        {
            title: "Diri ak Djon Djon",
            chef: "Chantal M.",
            views: "8,4k",
            dur: "15:30",
            tag: "Plats Principaux",
            img: I.riceCarib,
        },
        {
            title: "Soupe Joumou — 1er Janvier",
            chef: "Rémy D.",
            views: "22,1k",
            dur: "42:10",
            tag: "Soupes",
            img: I.cookPot,
        },
        {
            title: "Bannann Peze au Four",
            chef: "Marie-J.",
            views: "1,9k",
            dur: "6:15",
            tag: "Rapide",
            img: I.plantain,
        },
        {
            title: "Tasso de Cabri Séché",
            chef: "Jean-P. R.",
            views: "5,3k",
            dur: "20:44",
            tag: "Techniques",
            img: I.griotGrill,
        },
        {
            title: "Tablet Kokoye Maison",
            chef: "Nadège T.",
            views: "3,6k",
            dur: "14:28",
            tag: "Desserts",
            img: I.sweetPot,
        },
        {
            title: "Lambi Grillé en Sauce Créole",
            chef: "Sophie K.",
            views: "7,1k",
            dur: "26:03",
            tag: "Plats Principaux",
            img: I.bluePlate,
        },
    ]
    const filtered =
        activeTag === "Tout" ? videos : videos.filter(v => v.tag === activeTag)

    return (
        <div className="flex flex-col h-full overflow-hidden bg-background">
            <div
                className={`bg-white border-b border-border sticky top-0 z-10 ${d ? "px-6 py-4" : "px-4 py-3"}`}
            >
                {!d && (
                    <h1
                        className="mb-3 font-bold text-foreground"
                        style={{ fontFamily: DF, fontSize: "1.1rem" }}
                    >
                        Vidéos de Cuisine
                    </h1>
                )}
                <div
                    className={`flex gap-2 ${d ? "" : "overflow-x-auto pb-1 scrollbar-hide"}`}
                >
                    {tags.map(tag => (
                        <button
                            key={tag}
                            onClick={() => setActiveTag(tag)}
                            className={`text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap transition-all ${
                                activeTag === tag
                                    ? "bg-primary text-white shadow-sm"
                                    : "bg-muted text-foreground/70 hover:bg-muted/80"
                            }`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>
            <div
                className={`flex-1 overflow-y-auto scrollbar-hide ${d ? "p-6" : "p-3"}`}
            >
                <p className="mb-3 text-xs font-medium text-muted-foreground">
                    {filtered.length} vidéos
                </p>
                <div
                    className={`grid gap-3 ${d ? "grid-cols-4" : "grid-cols-2"}`}
                >
                    {filtered.map(v => (
                        <VideoCard
                            key={v.title}
                            title={v.title}
                            dur={v.dur}
                            views={v.views}
                            img={u(v.img, 400, 240)}
                            layout={layout}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

// ── Screen 5 — Blog ────────────────────────────────────────────────────────────
function BlogScreen({ layout = "mobile" }: { layout?: Layout }) {
    const d = layout === "desktop"
    const [activePost, setActivePost] = useState<number | null>(null)
    const posts = [
        {
            title: "L'Histoire du Griot : Symbole d'Identité Nationale",
            author: "Marlène Beauchamp",
            date: "28 juin 2026",
            tag: "Culture",
            reads: "2,4k",
            readTime: "6 min",
            img: I.griotHero,
            excerpt:
                "Le griot est bien plus qu'un plat — c'est un symbole de fierté nationale transmis de génération en génération.",
            body: "Depuis l'indépendance de 1804, le griot s'est imposé comme le plat identitaire d'Haïti. Servi lors des fêtes nationales et des mariages, il incarne la résilience du peuple haïtien.\n\nLa marinade dans le jus d'orange amère, héritage africain adapté aux Caraïbes, est le secret de sa saveur incomparable.",
        },
        {
            title: "Les Épices Incontournables de la Cuisine Haïtienne",
            author: "Jean-Paul Romain",
            date: "21 juin 2026",
            tag: "Techniques",
            reads: "1,8k",
            readTime: "4 min",
            img: I.market,
            excerpt:
                "Du piment bouc au thym citron, la cuisine haïtienne repose sur un bouquet aromatique unique : l'epis.",
            body: "L'epis haïtien est une base aromatique indispensable. Il se compose d'ail, de poivrons, de persil, de thym, d'oignons verts et d'huile. Chaque famille garde sa version secrète.",
        },
        {
            title: "Pikliz : La Sauce Fermentée qui Change Tout",
            author: "Chantal Moreau",
            date: "14 juin 2026",
            tag: "Ingrédients",
            reads: "3,1k",
            readTime: "3 min",
            img: I.pikliz,
            excerpt:
                "Chou, carottes, piments scotch bonnet et vinaigre de canne — le pikliz haïtien est un condiment essentiel.",
            body: "Le pikliz est un produit fermenté sophistiqué. La texture croquante du chou contraste avec l'acidité du vinaigre et la chaleur du scotch bonnet pour créer un profil de saveur unique.",
        },
        {
            title: "Voyage Culinaire : Les Marchés d'Haïti",
            author: "Sophie Kébreau",
            date: "7 juin 2026",
            tag: "Voyage",
            reads: "980",
            readTime: "5 min",
            img: I.fruits,
            excerpt:
                "Du marché de Croix-des-Bossales aux étals de Jacmel, les marchés haïtiens révèlent l'âme de la cuisine locale.",
            body: "Les marchés haïtiens sont des espaces sociaux vivants où se transmettent les savoirs culinaires. Chaque matin, les mamans vendeurs préparent des plats chauds à même les braises.",
        },
    ]
    const tagColor: Record<string, string> = {
        Culture: "bg-purple-100 text-purple-700",
        Techniques: "bg-blue-100 text-blue-700",
        Ingrédients: "bg-emerald-100 text-emerald-700",
        Voyage: "bg-amber-100 text-amber-700",
    }
    const SocialBar = () => (
        <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">Partager :</span>
            {[
                ["f", "Facebook"],
                ["◎", "Instagram"],
                ["wa", "WhatsApp"],
                ["𝕏", "Twitter"],
            ].map(([ic, title]) => (
                <button
                    key={title}
                    title={title}
                    className="flex items-center justify-center text-xs font-bold transition-all bg-white border rounded-lg w-7 h-7 border-border text-foreground/60 hover:bg-muted hover:border-primary/30"
                >
                    {ic}
                </button>
            ))}
        </div>
    )

    if (activePost !== null) {
        const p = posts[activePost]
        return (
            <div className="flex flex-col h-full overflow-y-auto scrollbar-hide bg-background">
                <div className="sticky top-0 z-10 flex items-center gap-2 px-4 py-3 border-b bg-white/90 backdrop-blur-md border-border">
                    <button
                        onClick={() => setActivePost(null)}
                        className="flex items-center gap-1 text-sm font-semibold text-primary"
                    >
                        <ChevronLeft size={16} /> Retour
                    </button>
                    <span
                        className={`text-xs font-semibold px-2 py-0.5 rounded-full ${tagColor[p.tag] ?? "bg-muted text-muted-foreground"}`}
                    >
                        {p.tag}
                    </span>
                </div>
                <div
                    className={`${d ? "max-w-2xl mx-auto p-6" : "p-4"} flex flex-col gap-4 pb-12`}
                >
                    <img
                        src={u(p.img, 700, 380)}
                        alt={p.title}
                        className="object-cover w-full shadow-md h-44 rounded-2xl bg-muted"
                    />
                    <h1
                        className="font-bold leading-snug text-foreground"
                        style={{
                            fontFamily: DF,
                            fontSize: d ? "1.6rem" : "1.3rem",
                        }}
                    >
                        {p.title}
                    </h1>
                    <div className="flex items-center gap-3 pb-3 text-xs border-b text-muted-foreground border-border">
                        <div className="flex items-center gap-1.5">
                            <div className="flex items-center justify-center w-5 h-5 text-xs font-bold rounded-full bg-primary/20 text-primary">
                                {p.author[0]}
                            </div>
                            {p.author}
                        </div>
                        <span>{p.date}</span>
                        <span>{p.readTime} de lecture</span>
                    </div>
                    <SocialBar />
                    <p className="text-sm font-semibold leading-relaxed text-foreground">
                        {p.excerpt}
                    </p>
                    {p.body.split("\n\n").map((para, i) => (
                        <p
                            key={i}
                            className="text-sm leading-relaxed text-foreground/80"
                        >
                            {para}
                        </p>
                    ))}
                    <div className="pt-4 border-t border-border">
                        <p className="mb-2 text-sm font-semibold text-foreground">
                            Cet article vous a plu ?
                        </p>
                        <SocialBar />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-col h-full overflow-hidden bg-background">
            {!d && (
                <div className="px-4 py-3 bg-white border-b border-border">
                    <h1
                        className="font-bold text-foreground"
                        style={{ fontFamily: DF, fontSize: "1.1rem" }}
                    >
                        Blog Culinaire
                    </h1>
                    <p className="text-xs text-muted-foreground">
                        Culture, histoire & techniques
                    </p>
                </div>
            )}
            <div
                className={`flex-1 overflow-y-auto scrollbar-hide ${d ? "p-6" : "p-4"}`}
            >
                <div
                    className={
                        d
                            ? "grid grid-cols-3 gap-6 items-start"
                            : "flex flex-col gap-4"
                    }
                >
                    <div
                        className={`flex flex-col gap-4 ${d ? "col-span-2" : ""}`}
                    >
                        <div
                            onClick={() => setActivePost(0)}
                            className="overflow-hidden transition-all border shadow-md cursor-pointer rounded-2xl bg-card hover:shadow-xl border-border/50"
                        >
                            <div className="relative">
                                <img
                                    src={u(posts[0].img, 700, 340)}
                                    alt={posts[0].title}
                                    className={`w-full object-cover bg-muted ${d ? "h-52" : "h-40"}`}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-3 left-3">
                                    <span
                                        className={`text-xs font-bold px-2.5 py-1 rounded-full ${tagColor[posts[0].tag]}`}
                                    >
                                        {posts[0].tag}
                                    </span>
                                </div>
                            </div>
                            <div className="p-4">
                                <h2
                                    className="font-bold leading-snug text-foreground mb-1.5"
                                    style={{
                                        fontFamily: DF,
                                        fontSize: d ? "1.1rem" : "1rem",
                                    }}
                                >
                                    {posts[0].title}
                                </h2>
                                <p className="mb-3 text-xs leading-relaxed text-foreground/70">
                                    {posts[0].excerpt}
                                </p>
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-xs text-muted-foreground">
                                        {posts[0].author} · {posts[0].date}
                                    </span>
                                    <span className="text-xs text-muted-foreground">
                                        {posts[0].reads} lectures
                                    </span>
                                </div>
                                <div className="pt-3 border-t border-border">
                                    <SocialBar />
                                </div>
                            </div>
                        </div>
                        {posts.slice(1).map((p, i) => (
                            <div
                                key={p.title}
                                onClick={() => setActivePost(i + 1)}
                                className={`bg-card rounded-2xl border border-border/50 shadow-sm cursor-pointer hover:shadow-md transition-all overflow-hidden ${d ? "flex" : "flex gap-3 p-3 items-start"}`}
                            >
                                <img
                                    src={u(p.img, d ? 200 : 120, d ? 160 : 100)}
                                    alt={p.title}
                                    className={`object-cover bg-muted shrink-0 ${d ? "w-40" : "w-24 h-20 rounded-xl"}`}
                                    style={d ? { minHeight: "100%" } : {}}
                                />
                                <div
                                    className={`flex-1 min-w-0 ${d ? "p-4" : ""}`}
                                >
                                    <div className="flex items-center gap-2 mb-1">
                                        <span
                                            className={`text-xs font-semibold px-2 py-0.5 rounded-full ${tagColor[p.tag] ?? ""}`}
                                        >
                                            {p.tag}
                                        </span>
                                        <span className="text-xs text-muted-foreground">
                                            {p.readTime}
                                        </span>
                                    </div>
                                    <p
                                        className="mb-1 font-semibold leading-snug text-foreground line-clamp-2"
                                        style={{
                                            fontFamily: DF,
                                            fontSize: d ? "0.95rem" : "0.85rem",
                                        }}
                                    >
                                        {p.title}
                                    </p>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-xs text-muted-foreground">
                                            {p.author}
                                        </span>
                                        <span className="text-xs text-muted-foreground">
                                            {p.reads} lect.
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        {["f", "◎", "wa"].map(ic => (
                                            <button
                                                key={ic}
                                                className="flex items-center justify-center w-6 h-6 text-xs font-bold transition-colors border rounded-md border-border bg-muted text-foreground/50 hover:bg-white"
                                            >
                                                {ic}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Desktop sidebar */}
                    {d && (
                        <aside className="flex flex-col gap-4">
                            <div className="overflow-hidden border shadow-sm bg-card rounded-2xl border-border/50">
                                <div className="px-4 py-3 border-b border-border">
                                    <h3
                                        className="text-sm font-bold text-foreground"
                                        style={{ fontFamily: DF }}
                                    >
                                        Catégories
                                    </h3>
                                </div>
                                <div className="p-3 flex flex-col gap-0.5">
                                    {[
                                        "Culture",
                                        "Techniques",
                                        "Ingrédients",
                                        "Voyage",
                                        "Recettes",
                                    ].map(cat => (
                                        <button
                                            key={cat}
                                            className="flex items-center justify-between px-2 py-2 text-sm transition-colors rounded-xl hover:bg-muted text-foreground/80"
                                        >
                                            {cat}
                                            <ChevronRight
                                                size={12}
                                                className="text-muted-foreground"
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div
                                className="overflow-hidden border shadow-sm rounded-2xl border-primary/20"
                                style={{
                                    background:
                                        "linear-gradient(135deg,#FFF5F0,#FBF6EE)",
                                }}
                            >
                                <div className="p-4">
                                    <Newspaper
                                        size={24}
                                        className="mb-2 text-primary"
                                    />
                                    <h3
                                        className="mb-1 text-sm font-bold text-foreground"
                                        style={{ fontFamily: DF }}
                                    >
                                        Newsletter
                                    </h3>
                                    <p className="mb-3 text-xs text-muted-foreground">
                                        Recevez nos nouvelles recettes chaque
                                        semaine
                                    </p>
                                    <div className="px-3 py-2 mb-2 bg-white border rounded-xl border-border">
                                        <span className="text-xs text-muted-foreground">
                                            votre@email.com
                                        </span>
                                    </div>
                                    <button
                                        className="w-full py-2 text-xs font-bold text-white rounded-xl bg-brand-orange"
                                    >
                                        S'abonner →
                                    </button>
                                </div>
                            </div>
                        </aside>
                    )}
                </div>
            </div>
        </div>
    )
}

// ── Screen 6 — Forum ───────────────────────────────────────────────────────────
function ForumScreen({ layout = "mobile" }: { layout?: Layout }) {
    const d = layout === "desktop"
    const [category, setCategory] = useState("Tout")
    const cats = [
        "Tout",
        "Conseils",
        "Astuces",
        "Entraide",
        "Recettes",
        "Vidéos",
        "Général",
    ]
    const threads = [
        {
            id: 1,
            cat: "Conseils",
            title: "Comment réussir un griot vraiment croustillant ?",
            author: "Marie-Josée D.",
            initials: "MJ",
            color: "var(--color-brand-orange)",
            time: "il y a 2h",
            tags: ["Griot", "Technique"],
            replies: 14,
            views: 312,
            likes: 28,
            pinned: true,
            preview:
                "J'essaie depuis des semaines mais mon griot n'est jamais assez croustillant. Des astuces ?",
        },
        {
            id: 2,
            cat: "Astuces",
            title: "L'epis parfait : mes proportions secrètes révélées",
            author: "Rémy Dupont",
            initials: "RD",
            color: "#4E5D6C",
            time: "il y a 5h",
            tags: ["Epis", "Base"],
            replies: 8,
            views: 180,
            likes: 41,
            pinned: false,
            preview:
                "Après des années de test, j'ai enfin trouvé le ratio parfait pour l'epis haïtien.",
        },
        {
            id: 3,
            cat: "Entraide",
            title: "Où trouver du djon djon séché en France ?",
            author: "Sophie K.",
            initials: "SK",
            color: "#D4940A",
            time: "il y a 1j",
            tags: ["Djon Djon", "Ingrédients"],
            replies: 22,
            views: 445,
            likes: 15,
            pinned: false,
            preview:
                "Je suis à Paris et cherche désespérément du djon djon séché pour le riz noir.",
        },
        {
            id: 4,
            cat: "Recettes",
            title: "Ma version du bouillon national avec légumes racines",
            author: "Chantal M.",
            initials: "CM",
            color: "#2C7A5C",
            time: "il y a 2j",
            tags: ["Bouillon", "Recette"],
            replies: 31,
            views: 620,
            likes: 67,
            pinned: false,
            preview:
                "Voici ma recette familiale transmise par ma grand-mère de Jacmel, Haïti.",
        },
        {
            id: 5,
            cat: "Vidéos",
            title: "La vidéo sur le pikliz de Chantal est exceptionnelle",
            author: "Jean-Pierre R.",
            initials: "JP",
            color: "#7C3AED",
            time: "il y a 3j",
            tags: ["Pikliz", "Vidéo"],
            replies: 5,
            views: 98,
            likes: 12,
            pinned: false,
            preview:
                "Je viens de regarder la dernière vidéo et les techniques présentées sont excellentes.",
        },
        {
            id: 6,
            cat: "Général",
            title: "Bienvenue aux nouveaux membres — présentez-vous !",
            author: "Admin CHV",
            initials: "CH",
            color: "var(--color-brand-orange)",
            time: "il y a 1sem",
            tags: ["Bienvenue", "Communauté"],
            replies: 78,
            views: 1240,
            likes: 95,
            pinned: true,
            preview:
                "Dites-nous qui vous êtes, d'où vous venez et votre plat haïtien préféré !",
        },
    ]
    const filtered =
        category === "Tout" ? threads : threads.filter(t => t.cat === category)
    const catBadge: Record<string, string> = {
        Conseils: "bg-blue-100 text-blue-700",
        Astuces: "bg-emerald-100 text-emerald-700",
        Entraide: "bg-purple-100 text-purple-700",
        Recettes: "bg-orange-100 text-orange-700",
        Vidéos: "bg-red-100 text-red-700",
        Général: "bg-muted text-muted-foreground",
    }

    return (
        <div className="relative flex flex-col h-full overflow-hidden bg-background">
            <div
                className={`bg-white border-b border-border sticky top-0 z-10 ${d ? "px-6 pt-4 pb-0" : "px-4 pt-3 pb-0"}`}
            >
                {!d && (
                    <div className="flex items-center justify-between mb-3">
                        <div>
                            <h1
                                className="font-bold text-foreground"
                                style={{ fontFamily: DF, fontSize: "1.1rem" }}
                            >
                                Forum
                            </h1>
                            <p className="text-xs text-muted-foreground">
                                Communauté & discussions
                            </p>
                        </div>
                        <div className="flex items-center gap-1.5 bg-muted rounded-full px-2.5 py-1">
                            <Users
                                size={12}
                                className="text-muted-foreground"
                            />
                            <span className="text-xs font-semibold text-foreground/70">
                                1 248 membres
                            </span>
                        </div>
                    </div>
                )}
                {d && (
                    <div className="flex items-center justify-between mb-3">
                        <h1
                            className="font-bold text-foreground"
                            style={{ fontFamily: DF, fontSize: "1.2rem" }}
                        >
                            Forum de Discussion
                        </h1>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            {[
                                {
                                    icon: (
                                        <MessageSquare
                                            size={12}
                                            className="text-primary"
                                        />
                                    ),
                                    text: "284 discussions",
                                },
                                {
                                    icon: (
                                        <Users
                                            size={12}
                                            className="text-secondary"
                                        />
                                    ),
                                    text: "1 248 membres",
                                },
                                {
                                    icon: (
                                        <TrendingUp
                                            size={12}
                                            className="text-accent"
                                        />
                                    ),
                                    text: "12 nouvelles aujourd'hui",
                                },
                            ].map(({ icon, text }) => (
                                <span
                                    key={text}
                                    className="flex items-center gap-1"
                                >
                                    {icon}
                                    {text}
                                </span>
                            ))}
                            <button className="flex items-center gap-1.5 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-sm hover:bg-primary/90 transition-colors">
                                <Plus size={12} /> Nouveau sujet
                            </button>
                        </div>
                    </div>
                )}
                <div
                    className={`flex gap-0.5 ${d ? "" : "overflow-x-auto scrollbar-hide"}`}
                >
                    {cats.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setCategory(cat)}
                            className={`text-xs font-bold px-3.5 py-2.5 whitespace-nowrap transition-all border-b-2 ${
                                category === cat
                                    ? "text-primary border-primary"
                                    : "text-muted-foreground border-transparent hover:text-foreground"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <div
                className={`flex-1 overflow-y-auto scrollbar-hide ${d ? "p-6" : "p-4"}`}
            >
                <div
                    className={
                        d ? "grid grid-cols-2 gap-4" : "flex flex-col gap-3"
                    }
                >
                    {filtered.map(thread => (
                        <div
                            key={thread.id}
                            className={`bg-card rounded-2xl shadow-sm cursor-pointer hover:shadow-md transition-all p-4 border ${
                                thread.pinned
                                    ? "border-l-4 border-l-accent border-border/50"
                                    : "border-border/50"
                            }`}
                        >
                            {thread.pinned && (
                                <div className="flex items-center gap-1 mb-2 text-xs font-bold text-accent">
                                    <Pin size={10} className="fill-accent" />{" "}
                                    Épinglé
                                </div>
                            )}
                            <div className="flex gap-3">
                                <div
                                    className="flex items-center justify-center w-10 h-10 text-sm font-bold text-white rounded-full shadow-sm shrink-0"
                                    style={{ background: thread.color }}
                                >
                                    {thread.initials}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3
                                        className="font-semibold text-sm text-foreground leading-snug line-clamp-2 mb-0.5"
                                        style={{ fontFamily: DF }}
                                    >
                                        {thread.title}
                                    </h3>
                                    <p className="text-xs text-muted-foreground">
                                        {thread.author} · {thread.time}
                                    </p>
                                    <p className="mt-1 text-xs text-foreground/55 line-clamp-1">
                                        {thread.preview}
                                    </p>
                                    <div className="flex gap-1.5 mt-2 flex-wrap">
                                        {thread.tags.map(tag => (
                                            <span
                                                key={tag}
                                                className="text-xs font-semibold px-2 py-0.5 rounded-full bg-primary/10 text-primary"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-3 mt-2.5 pt-2.5 border-t border-border/50">
                                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                                            <MessageCircle
                                                size={11}
                                                className="text-secondary"
                                            />{" "}
                                            {thread.replies}
                                        </span>
                                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                                            <Eye size={11} /> {thread.views}
                                        </span>
                                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                                            <Heart
                                                size={11}
                                                className="text-red-400"
                                            />{" "}
                                            {thread.likes}
                                        </span>
                                        <span
                                            className={`ml-auto text-xs font-semibold px-2 py-0.5 rounded-full ${catBadge[thread.cat] ?? "bg-muted text-muted-foreground"}`}
                                        >
                                            {thread.cat}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Floating "+" FAB — mobile only */}
            {!d && (
                <button
                    className="absolute z-20 flex items-center justify-center text-white transition-all rounded-full shadow-xl bottom-4 right-4 w-14 h-14 hover:shadow-2xl active:scale-95"
                    style={{
                        background:
                            "linear-gradient(145deg,var(--color-brand-orange),#E07848)",
                    }}
                >
                    <Plus size={24} />
                </button>
            )}
        </div>
    )
}

// ── Screen 7 — Gaming ─────────────────────────────────────────────────────────
function GamingScreen({ layout = "mobile" }: { layout?: Layout }) {
    const d = layout === "desktop"
    const [selected, setSelected] = useState<number | null>(null)
    const checklist = [
        { label: "Préparer le bouillon de base", done: true },
        { label: "Ajouter les légumes racines", done: true },
        { label: "Assaisonner avec épices locales", done: false },
        { label: "Prendre une photo du résultat", done: false },
    ]
    const leaderboard: {
        rank: number | string
        name: string
        pts: number
        isUser?: boolean
    }[] = [
        { rank: 1, name: "Claudette M.", pts: 8920 },
        { rank: 2, name: "Jean-Pierre R.", pts: 7640 },
        { rank: 3, name: "Nadège T.", pts: 6830 },
        { rank: "…", name: "Vous", pts: 2340, isUser: true },
    ]
    return (
        <div className="flex flex-col h-full overflow-y-auto scrollbar-hide bg-background">
            <div
                className="sticky top-0 z-10 px-4 pt-4 pb-4 text-white"
                style={{
                    background: "linear-gradient(135deg,#2C1810,#4E5D6C)",
                }}
            >
                <div className="flex items-start justify-between">
                    <div>
                        <h1
                            className="font-bold text-white"
                            style={{ fontFamily: DF, fontSize: "1.1rem" }}
                        >
                            Espace Ludique
                        </h1>
                        <p className="text-xs text-white/60">
                            Apprendre en jouant
                        </p>
                    </div>
                    <div className="relative">
                        <div
                            className="flex flex-col items-center justify-center border-2 rounded-full w-14 h-14 border-accent"
                            style={{ background: "rgba(255,255,255,0.1)" }}
                        >
                            <span className="text-sm font-bold leading-tight text-white">
                                2 340
                            </span>
                            <span className="font-mono text-xs text-accent">
                                pts
                            </span>
                        </div>
                        <div className="absolute flex items-center justify-center w-5 h-5 border-2 border-white rounded-full -top-1 -right-1 bg-accent">
                            <Star size={9} className="text-white fill-white" />
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="flex justify-between mb-1 text-xs text-white/60">
                        <span>Niveau 7 — Chef de Partie</span>
                        <span>2340 / 3000</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/10">
                        <div
                            className="h-full rounded-full"
                            style={{ width: "78%", background: "var(--color-brand-orange)" }}
                        />
                    </div>
                </div>
            </div>
            <div className={`flex flex-col gap-4 ${d ? "p-6" : "p-4"}`}>
                <div
                    className={`grid gap-3 ${d ? "grid-cols-5" : "grid-cols-3"}`}
                >
                    {[
                        {
                            icon: <Zap size={16} className="text-accent" />,
                            label: "Streak",
                            value: "7j 🔥",
                        },
                        {
                            icon: (
                                <BookMarked
                                    size={16}
                                    className="text-primary"
                                />
                            ),
                            label: "Quiz",
                            value: "14",
                        },
                        {
                            icon: (
                                <TrendingUp
                                    size={16}
                                    className="text-secondary"
                                />
                            ),
                            label: "Rang",
                            value: "#42",
                        },
                        ...(d
                            ? [
                                  {
                                      icon: (
                                          <Award
                                              size={16}
                                              className="text-accent"
                                          />
                                      ),
                                      label: "Badges",
                                      value: "9",
                                  },
                                  {
                                      icon: (
                                          <Star
                                              size={16}
                                              className="text-accent"
                                          />
                                      ),
                                      label: "Trophées",
                                      value: "3",
                                  },
                              ]
                            : []),
                    ].map(({ icon, label, value }) => (
                        <div
                            key={label}
                            className="p-3 text-center border shadow-sm bg-card rounded-2xl border-border/50"
                        >
                            <div className="flex justify-center mb-1">
                                {icon}
                            </div>
                            <p className="text-sm font-bold text-foreground">
                                {value}
                            </p>
                            <p className="text-xs text-muted-foreground">
                                {label}
                            </p>
                        </div>
                    ))}
                </div>
                <div
                    className={
                        d
                            ? "grid grid-cols-2 gap-4 items-start"
                            : "flex flex-col gap-4"
                    }
                >
                    <div className="overflow-hidden border shadow-md bg-card rounded-2xl border-border/50">
                        <div
                            className="flex items-center justify-between px-4 py-3"
                            style={{
                                background:
                                    "linear-gradient(135deg,var(--color-brand-orange),#E07848)",
                            }}
                        >
                            <div className="flex items-center gap-2">
                                <BookMarked size={15} className="text-white" />
                                <span className="text-sm font-bold text-white">
                                    Trivia Quotidien
                                </span>
                            </div>
                            <span className="bg-white/20 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                                +50 pts
                            </span>
                        </div>
                        <div className="p-4">
                            <p className="mb-2 font-mono text-xs text-muted-foreground">
                                QUESTION 3 / 10
                            </p>
                            <p
                                className="mb-4 text-sm font-semibold leading-snug text-foreground"
                                style={{ fontFamily: DF }}
                            >
                                Quel est l'ingrédient principal du "Riz Djon
                                Djon" haïtien ?
                            </p>
                            <div className="flex flex-col gap-2 mb-4">
                                {[
                                    "A. Champignon noir séché",
                                    "B. Encre de seiche",
                                    "C. Riz noir importé",
                                    "D. Haricot noir",
                                ].map((opt, i) => (
                                    <button
                                        key={opt}
                                        onClick={() => setSelected(i)}
                                        className={`text-left text-xs font-medium px-3 py-2.5 rounded-xl border transition-all ${
                                            selected === i
                                                ? "bg-primary/10 border-primary text-primary"
                                                : "border-border bg-muted/40 text-foreground hover:bg-muted"
                                        }`}
                                    >
                                        {opt}
                                    </button>
                                ))}
                            </div>
                            <button
                                className="w-full py-3 text-sm font-bold text-white rounded-xl bg-brand-orange"
                            >
                                Valider la réponse →
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="overflow-hidden border shadow-md bg-card rounded-2xl border-border/50">
                            <div
                                className="flex items-center justify-between px-4 py-3"
                                style={{
                                    background:
                                        "linear-gradient(135deg,#4E5D6C,#6B7D8E)",
                                }}
                            >
                                <div className="flex items-center gap-2">
                                    <ChefHat size={15} className="text-white" />
                                    <span className="text-sm font-bold text-white">
                                        Challenge Semaine
                                    </span>
                                </div>
                                <span className="bg-white/20 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                                    +200 pts
                                </span>
                            </div>
                            <div className="p-4">
                                <div className="flex items-start gap-3 mb-3">
                                    <img
                                        src={u(I.bouillon, 120, 120)}
                                        alt=""
                                        className="object-cover w-16 h-16 rounded-xl bg-muted shrink-0"
                                    />
                                    <div>
                                        <p
                                            className="text-sm font-semibold leading-snug text-foreground"
                                            style={{ fontFamily: DF }}
                                        >
                                            Préparer un Bouillon National
                                            complet
                                        </p>
                                        <p className="mt-1 text-xs text-muted-foreground">
                                            2h max · 847 participants
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1.5 mb-3">
                                    {checklist.map(({ label, done }) => (
                                        <div
                                            key={label}
                                            className="flex items-center gap-2"
                                        >
                                            <div
                                                className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 border-2 ${done ? "bg-primary border-primary" : "border-muted-foreground/30 bg-white"}`}
                                            >
                                                {done && (
                                                    <span className="text-xs font-bold text-white">
                                                        ✓
                                                    </span>
                                                )}
                                            </div>
                                            <span
                                                className={`text-xs ${done ? "line-through text-muted-foreground" : "text-foreground"}`}
                                            >
                                                {label}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                <div className="h-2 mb-3 overflow-hidden rounded-full bg-muted">
                                    <div
                                        className="h-full rounded-full"
                                        style={{
                                            width: "50%",
                                            background: "var(--color-brand-orange)",
                                        }}
                                    />
                                </div>
                                <button
                                    className="w-full py-2.5 rounded-xl text-white text-xs font-bold"
                                    style={{ background: "#4E5D6C" }}
                                >
                                    Continuer le défi →
                                </button>
                            </div>
                        </div>
                        <div className="overflow-hidden border shadow-sm bg-card rounded-2xl border-border/50">
                            <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
                                <TrendingUp size={15} className="text-accent" />
                                <h3
                                    className="text-sm font-bold text-foreground"
                                    style={{ fontFamily: DF }}
                                >
                                    Classement Global
                                </h3>
                            </div>
                            {leaderboard.map(({ rank, name, pts, isUser }) => (
                                <div
                                    key={String(name)}
                                    className={`flex items-center gap-3 px-4 py-2.5 border-b border-border/50 last:border-0 ${isUser ? "bg-primary/5" : ""}`}
                                >
                                    <span className="w-5 font-mono text-xs text-center text-muted-foreground shrink-0">
                                        {rank}
                                    </span>
                                    <div className="flex items-center justify-center text-xs font-bold rounded-full w-7 h-7 bg-muted text-foreground/60 shrink-0">
                                        {String(name)[0]}
                                    </div>
                                    <span
                                        className={`text-xs flex-1 ${isUser ? "font-bold text-primary" : "text-foreground"}`}
                                    >
                                        {name}
                                    </span>
                                    <span className="text-xs font-semibold text-foreground/70">
                                        {pts.toLocaleString()} pts
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// ── Screen 8 — Profile ─────────────────────────────────────────────────────────
function ProfileScreen({ layout = "mobile" }: { layout?: Layout }) {
    const d = layout === "desktop"
    const [profileTab, setProfileTab] = useState<
        "settings" | "comments" | "favorites"
    >("settings")
    const settingGroups = [
        {
            label: "Compte",
            icon: <User size={13} className="text-primary" />,
            items: [
                {
                    label: "Nom d'affichage",
                    value: "Marie-Josée D.",
                    action: "Modifier",
                },
                {
                    label: "Adresse e-mail",
                    value: "mjd@example.com",
                    action: "Modifier",
                },
                { label: "Mot de passe", value: "••••••••", action: "Changer" },
            ],
        },
        {
            label: "Notifications",
            icon: <Bell size={13} className="text-primary" />,
            items: [
                {
                    label: "Nouvelles recettes",
                    value: "Activé",
                    toggle: true,
                    on: true,
                },
                {
                    label: "Réponses commentaires",
                    value: "Activé",
                    toggle: true,
                    on: true,
                },
                {
                    label: "Défis hebdomadaires",
                    value: "Désactivé",
                    toggle: true,
                    on: false,
                },
            ],
        },
        {
            label: "Confidentialité",
            icon: <Lock size={13} className="text-primary" />,
            items: [
                {
                    label: "Profil public",
                    value: "Oui",
                    toggle: true,
                    on: true,
                },
                {
                    label: "Historique visible",
                    value: "Non",
                    toggle: true,
                    on: false,
                },
            ],
        },
        {
            label: "Langue & Région",
            icon: <Globe size={13} className="text-primary" />,
            items: [
                { label: "Langue", value: "Français", action: "Changer" },
                { label: "Pays", value: "Haïti", action: "Changer" },
            ],
        },
    ]
    const comments = [
        {
            recipe: "Griot de Porc Traditionnel",
            text: "Recette parfaite ! Comme mamie.",
            time: "28 juin 2026",
            likes: 12,
        },
        {
            recipe: "Riz Djon Djon Authentique",
            text: "J'ai enfin réussi le djon djon. Merci !",
            time: "19 juin 2026",
            likes: 8,
        },
        {
            recipe: "Bouillon National",
            text: "Un vrai bouillon haïtien comme au pays.",
            time: "5 juin 2026",
            likes: 21,
        },
    ]
    const favorites = [
        {
            title: "Griot de Porc Traditionnel",
            time: "2h 30m",
            diff: "Intermédiaire",
            img: I.griot,
            savedOn: "22 juin",
        },
        {
            title: "Riz Djon Djon",
            time: "45 min",
            diff: "Facile",
            img: I.riceCarib,
            savedOn: "18 juin",
        },
        {
            title: "Bouillon Haïtien",
            time: "1h 45m",
            diff: "Avancé",
            img: I.bouillon,
            savedOn: "10 juin",
        },
        {
            title: "Tasso de Cabri",
            time: "1h 10m",
            diff: "Intermédiaire",
            img: I.griotGrill,
            savedOn: "2 juin",
        },
    ]
    return (
        <div className="flex flex-col h-full overflow-hidden bg-background">
            <div
                className="px-4 pt-4 pb-4 text-white"
                    style={{
                    background: "linear-gradient(135deg,#2C1810,var(--color-brand-orange))",
                }}
            >
                <div className="flex items-start gap-3">
                    <div className="relative shrink-0">
                        <img
                            src={u(I.chefF, 120, 120)}
                            alt="avatar"
                            className="object-cover border-2 rounded-full shadow-md w-14 h-14 border-white/50 bg-muted"
                        />
                        <button className="absolute -bottom-0.5 -right-0.5 w-5 h-5 bg-white rounded-full border border-primary/30 flex items-center justify-center shadow-sm">
                            <Camera size={9} className="text-primary" />
                        </button>
                    </div>
                    <div className="flex-1 min-w-0">
                        <h2
                            className="font-bold leading-tight text-white"
                            style={{ fontFamily: DF }}
                        >
                            Marie-Josée Dupont
                        </h2>
                        <p className="text-xs text-white/60">
                            @mariejosee_cuisine
                        </p>
                        <div className="flex gap-3 mt-1">
                            <span className="text-xs text-white/70">
                                <span className="font-bold text-white">47</span>{" "}
                                recettes
                            </span>
                            <span className="text-xs text-white/70">
                                <span className="font-bold text-white">
                                    312
                                </span>{" "}
                                abonnés
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1.5 shrink-0">
                        <button className="border border-white/30 rounded-xl px-3 py-1.5 text-xs font-semibold text-white hover:bg-white/10 transition-colors flex items-center gap-1">
                            <Settings size={10} /> Éditer
                        </button>
                        <button className="border border-white/20 rounded-xl px-3 py-1.5 text-xs font-semibold text-white/60 hover:bg-white/10 transition-colors flex items-center gap-1">
                            <LogOut size={10} /> Sortir
                        </button>
                    </div>
                </div>
                <div
                    className={`grid gap-2 mt-3 pt-3 ${d ? "grid-cols-5" : "grid-cols-3"}`}
                    style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}
                >
                    {[
                        { label: "Score", value: "2 340 pts" },
                        { label: "Niveau", value: "Chef · 7" },
                        { label: "Favoris", value: String(favorites.length) },
                        ...(d
                            ? [
                                  { label: "Commentaires", value: "12" },
                                  { label: "Streak", value: "7j 🔥" },
                              ]
                            : []),
                    ].map(({ label, value }) => (
                        <div key={label} className="text-center">
                            <p className="text-sm font-bold text-white">
                                {value}
                            </p>
                            <p className="text-xs text-white/50">{label}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex bg-white border-b border-border shrink-0">
                {(["settings", "comments", "favorites"] as const).map(t => {
                    const labels = {
                        settings: "Paramètres",
                        comments: "Commentaires",
                        favorites: "Favoris",
                    }
                    const icons = {
                        settings: <Settings size={13} />,
                        comments: <MessageCircle size={13} />,
                        favorites: <Heart size={13} />,
                    }
                    return (
                        <button
                            key={t}
                            onClick={() => setProfileTab(t)}
                            className={`flex-1 flex flex-col items-center gap-1 py-2.5 text-xs font-semibold border-b-2 transition-all ${
                                profileTab === t
                                    ? "border-primary text-primary"
                                    : "border-transparent text-muted-foreground hover:text-foreground"
                            }`}
                        >
                            {icons[t]}
                            <span style={{ fontSize: "0.65rem" }}>
                                {labels[t]}
                            </span>
                        </button>
                    )
                })}
            </div>
            <div className="flex-1 overflow-y-auto scrollbar-hide">
                {profileTab === "settings" && (
                    <div
                        className={`flex flex-col gap-4 ${d ? "p-6 grid grid-cols-2 items-start" : "p-4"} pb-6`}
                    >
                        {settingGroups.map(group => (
                            <section key={group.label}>
                                <div className="flex items-center gap-2 mb-2">
                                    {group.icon}
                                    <h3 className="text-xs font-bold tracking-wider uppercase text-muted-foreground">
                                        {group.label}
                                    </h3>
                                </div>
                                <div className="overflow-hidden border shadow-sm bg-card rounded-2xl border-border/50">
                                    {group.items.map((item, i) => (
                                        <div
                                            key={item.label}
                                            className={`flex items-center justify-between px-4 py-3 ${i < group.items.length - 1 ? "border-b border-border/50" : ""}`}
                                        >
                                            <div>
                                                <p className="text-sm font-semibold text-foreground">
                                                    {item.label}
                                                </p>
                                                <p className="text-xs text-muted-foreground mt-0.5">
                                                    {item.value}
                                                </p>
                                            </div>
                                            {"toggle" in item ? (
                                                <div
                                                    className={`w-10 h-6 rounded-full relative transition-colors ${item.on ? "bg-primary" : "bg-muted"}`}
                                                >
                                                    <div
                                                        className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-all ${item.on ? "left-5" : "left-1"}`}
                                                    />
                                                </div>
                                            ) : (
                                                <button className="px-3 py-1 text-xs font-semibold transition-colors border rounded-lg text-primary border-primary/30 hover:bg-primary/5">
                                                    {"action" in item
                                                        ? item.action
                                                        : ""}
                                                </button>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </section>
                        ))}
                        <section>
                            <div className="flex items-center gap-2 mb-2">
                                <Trash2
                                    size={13}
                                    className="text-destructive"
                                />
                                <h3 className="text-xs font-bold tracking-wider uppercase text-muted-foreground">
                                    Zone Danger
                                </h3>
                            </div>
                            <div className="p-4 border border-red-100 bg-red-50 rounded-2xl">
                                <button className="w-full py-2.5 rounded-xl text-destructive text-sm font-bold border border-red-200 hover:bg-red-100 transition-colors">
                                    Supprimer mon compte
                                </button>
                                <p className="mt-2 text-xs text-center text-muted-foreground">
                                    Cette action est irréversible
                                </p>
                            </div>
                        </section>
                    </div>
                )}
                {profileTab === "comments" && (
                    <div
                        className={`flex flex-col gap-3 ${d ? "p-6" : "p-4"} pb-6`}
                    >
                        <div
                            className={
                                d
                                    ? "grid grid-cols-2 gap-3"
                                    : "flex flex-col gap-3"
                            }
                        >
                            {comments.map((c, i) => (
                                <div
                                    key={i}
                                    className="p-4 border shadow-sm bg-card rounded-2xl border-border/50"
                                >
                                    <div className="flex items-center gap-2 pb-2 mb-2 border-b border-border/50">
                                        <BookIcon
                                            size={12}
                                            className="text-primary shrink-0"
                                        />
                                        <span className="text-xs font-semibold truncate text-foreground">
                                            {c.recipe}
                                        </span>
                                    </div>
                                    <p className="text-sm leading-relaxed text-foreground/80">
                                        {c.text}
                                    </p>
                                    <div className="flex items-center justify-between mt-3">
                                        <span className="text-xs text-muted-foreground">
                                            {c.time}
                                        </span>
                                        <div className="flex items-center gap-2">
                                            <span className="flex items-center gap-1 text-xs text-muted-foreground">
                                                <ThumbsUp
                                                    size={10}
                                                    className="text-primary"
                                                />{" "}
                                                {c.likes}
                                            </span>
                                            <button className="text-xs text-destructive border border-red-100 rounded-lg px-2 py-0.5 hover:bg-red-50 transition-colors">
                                                Supprimer
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                {profileTab === "favorites" && (
                    <div
                        className={`flex flex-col gap-3 ${d ? "p-6" : "p-4"} pb-6`}
                    >
                        <div
                            className={
                                d
                                    ? "grid grid-cols-2 gap-3"
                                    : "flex flex-col gap-3"
                            }
                        >
                            {favorites.map((r, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-3 p-3 border shadow-sm bg-card rounded-2xl border-border/50"
                                >
                                    <img
                                        src={u(r.img, 140, 140)}
                                        alt={r.title}
                                        className="object-cover w-16 h-16 rounded-xl bg-muted shrink-0"
                                    />
                                    <div className="flex-1 min-w-0">
                                        <p
                                            className="text-sm font-semibold leading-snug text-foreground line-clamp-2"
                                            style={{ fontFamily: DF }}
                                        >
                                            {r.title}
                                        </p>
                                        <div className="flex flex-wrap items-center gap-2 mt-1">
                                            <span className="flex items-center gap-1 text-xs text-muted-foreground">
                                                <Clock size={10} />
                                                {r.time}
                                            </span>
                                            <DiffBadge diff={r.diff} />
                                        </div>
                                        <p className="mt-1 text-xs text-muted-foreground">
                                            Sauvegardé le {r.savedOn}
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-center gap-1.5 shrink-0">
                                        <Bookmark
                                            size={16}
                                            className="fill-primary text-primary"
                                        />
                                        <button>
                                            <X
                                                size={12}
                                                className="transition-colors text-muted-foreground hover:text-destructive"
                                            />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

// ── Screen 9 — Contact ─────────────────────────────────────────────────────────
function ContactScreen({ layout = "mobile" }: { layout?: Layout }) {
    const d = layout === "desktop"
    return (
        <div className="flex flex-col h-full overflow-y-auto scrollbar-hide bg-background">
            {!d && (
                <div className="px-4 py-3 bg-white border-b border-border">
                    <h1
                        className="font-bold text-foreground"
                        style={{ fontFamily: DF, fontSize: "1.1rem" }}
                    >
                        Nous Contacter
                    </h1>
                    <p className="text-xs text-muted-foreground">
                        Questions, suggestions & partenariats
                    </p>
                </div>
            )}
            <div className={`flex-1 ${d ? "p-8" : "p-4"} pb-8`}>
                <div
                    className={
                        d
                            ? "grid grid-cols-2 gap-8 max-w-3xl mx-auto"
                            : "flex flex-col gap-5"
                    }
                >
                    <div className="flex flex-col gap-4">
                        {d && (
                            <div>
                                <h2
                                    className="mb-1 font-bold text-foreground"
                                    style={{
                                        fontFamily: DF,
                                        fontSize: "1.3rem",
                                    }}
                                >
                                    Envoyez-nous un message
                                </h2>
                                <p className="text-sm text-muted-foreground">
                                    Nous répondons dans les 48h ouvrables.
                                </p>
                            </div>
                        )}
                        {[
                            {
                                label: "Nom complet *",
                                placeholder: "ex. Marie-Josée Dupont",
                            },
                            {
                                label: "Adresse e-mail *",
                                placeholder: "ex. marie@example.com",
                            },
                            {
                                label: "Sujet *",
                                placeholder: "ex. Suggestion de recette",
                            },
                        ].map(({ label, placeholder }) => (
                            <div key={label} className="flex flex-col gap-1.5">
                                <label className="text-sm font-semibold text-foreground">
                                    {label}
                                </label>
                                <div className="bg-white border border-border rounded-xl px-3 py-2.5 flex items-center">
                                    <span className="flex-1 text-sm text-muted-foreground">
                                        {placeholder}
                                    </span>
                                </div>
                            </div>
                        ))}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-semibold text-foreground">
                                Message *
                            </label>
                            <div className="bg-white border border-border rounded-xl px-3 py-2.5 h-28 flex items-start">
                                <span className="text-sm text-muted-foreground">
                                    Écrivez votre message ici…
                                </span>
                            </div>
                        </div>
                        <div className="flex items-start gap-2.5">
                            <div className="w-4 h-4 rounded-md border-2 border-primary/40 bg-white mt-0.5 shrink-0" />
                            <span className="text-xs leading-relaxed text-muted-foreground">
                                J'accepte que mes données soient traitées
                                conformément à la politique de confidentialité.
                            </span>
                        </div>
                        <button
                            className="w-full py-3.5 rounded-2xl text-white text-sm font-bold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
                            style={{
                                background:
                                    "linear-gradient(135deg,var(--color-brand-orange),#E07848)",
                            }}
                        >
                            <Send size={15} /> Envoyer le message
                        </button>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="overflow-hidden border shadow-sm bg-card rounded-2xl border-border/50">
                            <div className="px-4 py-3 border-b border-border">
                                <h3
                                    className="text-sm font-bold text-foreground"
                                    style={{ fontFamily: DF }}
                                >
                                    Informations de Contact
                                </h3>
                            </div>
                            <div className="flex flex-col gap-3 p-4">
                                {[
                                    {
                                        icon: (
                                            <Mail
                                                size={14}
                                                className="text-primary"
                                            />
                                        ),
                                        label: "Email",
                                        value: "contact@cuisinehaïtienne.ht",
                                    },
                                    {
                                        icon: (
                                            <Phone
                                                size={14}
                                                className="text-primary"
                                            />
                                        ),
                                        label: "Téléphone",
                                        value: "+509 3700-0000",
                                    },
                                    {
                                        icon: (
                                            <MapPin
                                                size={14}
                                                className="text-primary"
                                            />
                                        ),
                                        label: "Adresse",
                                        value: "Port-au-Prince, Haïti",
                                    },
                                ].map(({ icon, label, value }) => (
                                    <div
                                        key={label}
                                        className="flex items-start gap-3"
                                    >
                                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 shrink-0">
                                            {icon}
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold tracking-wide uppercase text-muted-foreground">
                                                {label}
                                            </p>
                                            <p className="text-sm text-foreground">
                                                {value}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="overflow-hidden border shadow-sm bg-card rounded-2xl border-border/50">
                            <div className="px-4 py-3 border-b border-border">
                                <h3
                                    className="text-sm font-bold text-foreground"
                                    style={{ fontFamily: DF }}
                                >
                                    Suivez-nous
                                </h3>
                            </div>
                            <div className="flex flex-col gap-2 p-3">
                                {[
                                    {
                                        mark: "f",
                                        name: "Facebook",
                                        handle: "@CuisineHaïtienneVraie",
                                        subs: "12,4k",
                                        bg: "#1877F2",
                                    },
                                    {
                                        mark: "◎",
                                        name: "Instagram",
                                        handle: "@cuisine_ht_vraie",
                                        subs: "8,9k",
                                        bg: "#E1306C",
                                    },
                                    {
                                        mark: "▶",
                                        name: "YouTube",
                                        handle: "CuisineHaïtienneVraie",
                                        subs: "3,2k",
                                        bg: "#FF0000",
                                    },
                                ].map(({ mark, name, handle, subs, bg }) => (
                                    <a
                                        key={name}
                                        className="flex items-center gap-3 p-3 transition-all border cursor-pointer rounded-xl border-border/50 bg-muted/30 hover:bg-muted group"
                                    >
                                        <div
                                            className="flex items-center justify-center text-sm font-bold text-white shadow-sm w-9 h-9 rounded-xl shrink-0"
                                            style={{ background: bg }}
                                        >
                                            {mark}
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm font-semibold text-foreground">
                                                {name}
                                            </p>
                                            <p className="text-xs text-muted-foreground">
                                                {handle} · {subs} abonnés
                                            </p>
                                        </div>
                                        <ExternalLink
                                            size={13}
                                            className="transition-colors text-muted-foreground group-hover:text-primary shrink-0"
                                        />
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="overflow-hidden border shadow-sm rounded-2xl border-border/50">
                            <img
                                src={u(I.market, 600, 200)}
                                alt="Port-au-Prince"
                                className="object-cover w-full h-28 bg-muted"
                            />
                            <div className="bg-white px-4 py-2.5 flex items-center gap-2">
                                <MapPin size={13} className="text-primary" />
                                <span className="text-xs font-semibold text-foreground">
                                    Port-au-Prince, Haïti
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// ── Chatbot ────────────────────────────────────────────────────────────────────
function ChatbotPanel({ onClose }: { onClose: () => void }) {
    const msgs = [
        {
            from: "bot",
            text: "Bonjour ! Je suis votre assistant culinaire haïtien 🇭🇹. Comment puis-je vous aider ?",
        },
        {
            from: "user",
            text: "Quelle est la différence entre le griot et le tasso ?",
        },
        {
            from: "bot",
            text: "Le griot est mariné dans du jus d'orange amère puis frit — très croustillant. Le tasso utilise de la chèvre ou du bœuf séché. Saveurs très différentes !",
        },
    ]
    return (
        <div
            className="absolute z-50 flex flex-col overflow-hidden bg-white shadow-2xl"
                style={{
                bottom: 0,
                left: 0,
                right: 0,
                height: 380,
                borderTop: "3px solid var(--color-brand-orange)",
            }}
        >
            <div
                className="flex items-center justify-between px-4 py-3 border-b shrink-0 border-border"
                style={{
                    background: "linear-gradient(135deg,#2C1810,var(--color-brand-orange))",
                }}
            >
                <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center rounded-full w-7 h-7 bg-white/20">
                        <ChefHat size={14} className="text-white" />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-white">
                            Assistant Culinaire
                        </p>
                        <div className="flex items-center gap-1">
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                            <span className="text-xs text-white/60">
                                En ligne
                            </span>
                        </div>
                    </div>
                </div>
                <button
                    onClick={onClose}
                    className="flex items-center justify-center rounded-full w-7 h-7 bg-white/10"
                >
                    <X size={13} className="text-white" />
                </button>
            </div>
            <div className="flex flex-col flex-1 gap-3 p-4 overflow-y-auto scrollbar-hide bg-muted/30">
                {msgs.map((m, i) => (
                    <div
                        key={i}
                        className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
                    >
                        {m.from === "bot" && (
                            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center mr-2 mt-0.5 shrink-0">
                                <ChefHat size={11} className="text-white" />
                            </div>
                        )}
                        <div
                            className={`max-w-[80%] text-xs px-3 py-2 rounded-2xl leading-relaxed shadow-sm ${
                                m.from === "user"
                                    ? "bg-primary text-white rounded-br-none"
                                    : "bg-white text-foreground border border-border/50 rounded-bl-none"
                            }`}
                        >
                            {m.text}
                        </div>
                    </div>
                ))}
            </div>
            <div className="border-t border-border px-3 py-2.5 flex gap-2 items-center shrink-0 bg-white">
                <div className="flex-1 px-3 py-2 bg-muted rounded-xl">
                    <span className="text-xs text-muted-foreground">
                        Posez votre question…
                    </span>
                </div>
                <button
                    className="flex items-center justify-center shadow-sm w-9 h-9 rounded-xl bg-brand-orange"
                >
                    <Send size={14} className="text-white" />
                </button>
            </div>
        </div>
    )
}

// ── Nav ────────────────────────────────────────────────────────────────────────
const NAV_ITEMS = [
    { id: "home", label: "Accueil", icon: Home },
    { id: "recipes", label: "Recettes", icon: BookOpen },
    { id: "videos", label: "Vidéos", icon: Video },
    { id: "blog", label: "Blog", icon: Newspaper },
    { id: "forum", label: "Forum", icon: MessageSquare },
    { id: "gaming", label: "Jeux", icon: Gamepad2 },
    { id: "profile", label: "Profil", icon: User },
    { id: "contact", label: "Contact", icon: Mail },
] as const

type NavScreen = (typeof NAV_ITEMS)[number]["id"]
type Screen = NavScreen | "recipe"

function ScreenContent({
    active,
    navigate,
    layout,
}: {
    active: Screen
    navigate: (s: string) => void
    layout: Layout
}) {
    switch (active) {
        case "home":
            return <HomeScreen onNavigate={navigate} layout={layout} />
        case "recipes":
            return <SearchScreen onNavigate={navigate} layout={layout} />
        case "recipe":
            return <RecipeScreen layout={layout} />
        case "videos":
            return <VideosScreen layout={layout} />
        case "blog":
            return <BlogScreen layout={layout} />
        case "forum":
            return <ForumScreen layout={layout} />
        case "gaming":
            return <GamingScreen layout={layout} />
        case "profile":
            return <ProfileScreen layout={layout} />
        case "contact":
            return <ContactScreen layout={layout} />
        default:
            return <HomeScreen onNavigate={navigate} layout={layout} />
    }
}

// ── Mobile Shell ───────────────────────────────────────────────────────────────
function MobileShell({
    active,
    setActive,
    chatOpen,
    setChatOpen,
}: {
    active: Screen
    setActive: (s: Screen) => void
    chatOpen: boolean
    setChatOpen: (v: boolean) => void
}) {
    const navigate = (s: string) => setActive(s as Screen)
    return (
        <div className="flex flex-col items-center">
            <p className="mb-3 font-mono text-xs tracking-wider uppercase text-muted-foreground">
                ← Mobile · 390px
            </p>
            <div
                className="relative overflow-hidden"
                style={{
                    width: 390,
                    borderRadius: 44,
                    border: "8px solid #1A0F0A",
                    boxShadow:
                        "0 40px 80px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(255,255,255,0.08)",
                }}
            >
                {/* Notch */}
                <div
                    className="relative flex items-center justify-center shrink-0"
                    style={{ height: 32, background: "#1A0F0A" }}
                >
                    <div
                        className="w-24 h-5 rounded-full"
                        style={{ background: "#0D0704" }}
                    />
                    <div className="absolute right-5 flex items-center gap-1.5">
                        <div className="text-gray-600" style={{ fontSize: 7 }}>
                            ▌
                        </div>
                        <div className="w-5 h-2.5 rounded-sm border border-gray-700" />
                    </div>
                </div>
                {/* Screen */}
                <div
                    className="relative overflow-hidden"
                    style={{ height: 600 }}
                >
                    <ScreenContent
                        active={active}
                        navigate={navigate}
                        layout="mobile"
                    />
                    {chatOpen && (
                        <ChatbotPanel onClose={() => setChatOpen(false)} />
                    )}
                    <button
                        onClick={() => setChatOpen(v => !v)}
                        className={`absolute bottom-4 right-4 z-40 w-12 h-12 rounded-full flex items-center justify-center shadow-xl transition-all ${
                            chatOpen
                                ? "bg-foreground text-white"
                                : "bg-white text-primary border-2 border-primary/20"
                        }`}
                        style={
                            !chatOpen
                                ? {
                                      boxShadow:
                                          "0 4px 20px rgba(200,93,46,0.3)",
                                  }
                                : {}
                        }
                    >
                        {chatOpen ? (
                            <X size={16} />
                        ) : (
                            <MessageCircle size={18} />
                        )}
                    </button>
                </div>
                {/* Bottom thumb nav */}
                <div
                    className="flex bg-white shrink-0"
                    style={{ height: 60, borderTop: "1px solid #E5D2BA" }}
                >
                    {NAV_ITEMS.map(({ id, label, icon: Icon }) => {
                        const isActive =
                            active === id ||
                            (id === "recipes" && active === "recipe")
                        return (
                            <button
                                key={id}
                                onClick={() => {
                                    setActive(id as Screen)
                                    setChatOpen(false)
                                }}
                                className="flex-1 flex flex-col items-center justify-center gap-0.5 transition-all relative"
                            >
                                {isActive && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-0.5 rounded-full bg-primary" />
                                )}
                                <Icon
                                    size={15}
                                    className={
                                        isActive
                                            ? "text-primary"
                                            : "text-muted-foreground"
                                    }
                                />
                                <span
                                    className="font-semibold leading-none"
                                    style={{
                                        fontSize: 7,
                                        color: isActive ? "var(--color-brand-orange)" : "#7A6255",
                                    }}
                                >
                                    {label}
                                </span>
                            </button>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

// ── Desktop Shell ──────────────────────────────────────────────────────────────
function DesktopShell({
    active,
    setActive,
}: {
    active: Screen
    setActive: (s: Screen) => void
}) {
    const [deskChat, setDeskChat] = useState(false)
    const navigate = (s: string) => setActive(s as Screen)
    return (
        <div className="flex flex-col items-start">
            <p className="mb-3 font-mono text-xs tracking-wider uppercase text-muted-foreground">
                Desktop · 760px →
            </p>
            <div
                className="flex flex-col overflow-hidden shadow-2xl"
                style={{
                    width: 760,
                    borderRadius: 12,
                    border: "1.5px solid #E5D2BA",
                }}
            >
                {/* Browser chrome */}
                <div
                    className="flex items-center gap-2 px-3 py-2 shrink-0"
                    style={{
                        background: "#F0E8DD",
                        borderBottom: "1px solid #E5D2BA",
                    }}
                >
                    <div className="flex gap-1.5">
                        {["#FF5F57", "#FEBC2E", "#28C840"].map((c, i) => (
                            <div
                                key={i}
                                className="w-3 h-3 rounded-full"
                                style={{ background: c }}
                            />
                        ))}
                    </div>
                    <div className="flex items-center flex-1 gap-2 px-3 py-1 mx-2 border rounded-lg bg-white/80 border-border/50">
                        <div className="w-2.5 h-2.5 rounded-full border border-muted-foreground/40 shrink-0" />
                        <span className="font-mono text-xs text-muted-foreground">
                            cuisinehaïtiennevraie.ht
                        </span>
                    </div>
                </div>
                {/* Top nav header */}
                <div
                    className="flex items-center gap-3 px-5 bg-white border-b shrink-0 border-border"
                    style={{ height: 56 }}
                >
                    <Logo />
                    <div className="w-px h-6 mx-1 bg-border" />
                    <nav className="flex items-center gap-0.5 flex-1 overflow-x-auto scrollbar-hide">
                        {NAV_ITEMS.map(({ id, label, icon: Icon }) => {
                            const isActive =
                                active === id ||
                                (id === "recipes" && active === "recipe")
                            return (
                                <button
                                    key={id}
                                    onClick={() => setActive(id as Screen)}
                                    className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                                        isActive
                                            ? "bg-primary/10 text-primary"
                                            : "text-foreground/60 hover:text-foreground hover:bg-muted"
                                    }`}
                                >
                                    <Icon size={12} />
                                    {label}
                                </button>
                            )
                        })}
                    </nav>
                    <div className="flex items-center gap-2 shrink-0">
                        <div className="flex items-center gap-2 bg-muted rounded-xl px-3 py-1.5 border border-border/50">
                            <Search
                                size={12}
                                className="text-muted-foreground"
                            />
                            <span className="text-xs text-muted-foreground">
                                Rechercher…
                            </span>
                        </div>
                        <img
                            src={u(I.chefF, 80, 80)}
                            alt="avatar"
                            className="object-cover border-2 rounded-full w-7 h-7 border-primary/30 bg-muted"
                        />
                    </div>
                </div>
                {/* Content */}
                <div
                    className="relative overflow-hidden"
                    style={{ height: 595 }}
                >
                    <div className="h-full overflow-y-auto scrollbar-hide bg-background">
                        <ScreenContent
                            active={active}
                            navigate={navigate}
                            layout="desktop"
                        />
                    </div>
                    {deskChat && (
                        <ChatbotPanel onClose={() => setDeskChat(false)} />
                    )}
                    <button
                        onClick={() => setDeskChat(v => !v)}
                        className={`absolute bottom-4 right-4 z-40 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all ${
                            deskChat
                                ? "bg-foreground text-white"
                                : "bg-white text-primary border-2 border-primary/20"
                        }`}
                        style={
                            !deskChat
                                ? {
                                      boxShadow:
                                          "0 4px 16px rgba(200,93,46,0.25)",
                                  }
                                : {}
                        }
                    >
                        {deskChat ? (
                            <X size={14} />
                        ) : (
                            <MessageCircle size={16} />
                        )}
                    </button>
                </div>
            </div>
        </div>
    )
}

// ── App ────────────────────────────────────────────────────────────────────────
export default function App() {
    const [active, setActive] = useState<Screen>("home")
    const [chatOpen, setChatOpen] = useState(false)
    const screenLabel =
        NAV_ITEMS.find(n => n.id === active)?.label ?? "Détail Recette"

    return (
        <div
            className="min-h-screen px-6 py-10"
            style={{
                background:
                    "linear-gradient(160deg,#F5EDE0 0%,#EEE0CF 50%,#E8D5BC 100%)",
            }}
        >
            <div className="mb-8 text-center">
                <div className="flex justify-center mb-3">
                    <Logo />
                </div>
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-[0.2em]">
                    Interface Haute Fidélité · Mobile & Desktop
                </p>
            </div>
            <div className="flex flex-col items-start justify-center gap-10 xl:flex-row">
                <MobileShell
                    active={active}
                    setActive={setActive}
                    chatOpen={chatOpen}
                    setChatOpen={setChatOpen}
                />
                <DesktopShell active={active} setActive={setActive} />
            </div>
            <div className="mt-8 text-center">
                <span className="text-xs font-semibold text-muted-foreground/70 border border-border/50 bg-white/60 px-4 py-1.5 rounded-full backdrop-blur-sm">
                    Écran actif :{" "}
                    <strong className="text-primary">{screenLabel}</strong>
                    {" · "}Navigation synchronisée Mobile ↔ Desktop
                </span>
            </div>
        </div>
    )
}
