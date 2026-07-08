// Données factices en français pour l'application
const recettes = [
    {
        id: "soupe-joumou",
        title: "Soupe Joumou",
        subtitle: "La soupe de célébration haïtienne",
        difficulty: { label: "Facile", level: 1 },
        category: "Soupe",
        time: "1h 30m",
        summary:
            "Soupe traditionnelle préparée pour célébrer la liberté; riche en légumes et viande de bœuf.",
        ingredients: [
            "Courge (joumou)",
            "Bœuf",
            "Carottes",
            "Pommes de terre",
            "Navets",
        ],
        image: "/Images/Cheffe recettes soupe_Cuisine Haïtienne Vraie.png",
    },

    {
        id: "griot-porc",
        title: "Griot de Porc",
        subtitle: "Porc mariné et frit à la perfection",
        difficulty: { label: "Moyen", level: 2 },
        category: "Plat principal",
        time: "2h",
        summary:
            "Griot bien croustillant servi avec pikliz et bananes pesées — un classique haïtien.",
        ingredients: ["Porc", "Jus d'orange", "Ail", "Piment", "Sel"],
        image: "/Images/saveurs_dhaiti_photoshoot_poulet-e1714592413495-qnj9hqbckkfa65p0tolfj3olmffoytgx1nre12nrzo.jpg",
    },

    {
        id: "riz-djon-djon",
        title: "Riz Djon-Djon",
        subtitle: "Riz noir parfumé aux champignons locaux",
        difficulty: { label: "Moyen", level: 2 },
        category: "Accompagnement",
        time: "1h",
        summary:
            "Riz typique fait avec les champignons djon-djon, couleur et goût uniques.",
        ingredients: [
            "Riz",
            "Champignons djon-djon",
            "Oignon",
            "Ail",
            "Bouillon",
        ],
        image: "/Images/Riz-djon-djon-prêt-à-déguster-1-750x500.jpg",
    },

    {
        id: "pikliz",
        title: "Pikliz",
        subtitle: "Condiment piquant et acidulé",
        difficulty: { label: "Facile", level: 1 },
        category: "Accompagnement",
        time: "15m",
        summary:
            "Mélange de choux et carottes mariné au vinaigre et piment, parfait avec les fritures.",
        ingredients: ["Chou", "Carotte", "Vinaigre", "Piment", "Sel"],
        image: "/Images/Recette pikliz_Cuisine Haïtienne Vraie.png",
    },

    {
        id: "poisson-frit",
        title: "Poisson frit à la haïtienne",
        subtitle: "Poisson croustillant avec sauce épicée",
        difficulty: { label: "Facile", level: 1 },
        category: "Plat principal",
        time: "45m",
        summary:
            "Poisson assaisonné et frit, servi avec sauce pimentée et riz blanc.",
        ingredients: ["Poisson", "Citron vert", "Ail", "Farine", "Sel"],
        image: "/Images/poisson-haitienne.webp",
    },
]

export default recettes
