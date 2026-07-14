export function buildUtilisateurPayload(user, profile = {}) {
    return {
        id: user.id,
        email: user.email,
        nom_complet: profile.nomComplet ?? profile.nom_complet ?? "",
        pseudo:
            profile.pseudo ??
            profile.nomUtilisateur ??
            user.email?.split("@")[0] ??
            "",
        avatar_url: profile.avatarUrl ?? profile.avatar_url ?? null,
    }
}

export function traduireErreurAuth(error) {
    if (!error) return ""

    const message = String(error.message ?? error).toLowerCase()

    if (message.includes("already registered") || message.includes("already exists")) {
        return "Cette adresse e-mail est déjà utilisée."
    }

    if (message.includes("invalid login credentials")) {
        return "Adresse e-mail ou mot de passe incorrect."
    }

    if (message.includes("password") && message.includes("6")) {
        return "Le mot de passe doit contenir au moins 6 caractères."
    }

    if (message.includes("email")) {
        return "Veuillez saisir une adresse e-mail valide."
    }

    if (message.includes("rate limit")) {
        return "Trop de tentatives. Veuillez réessayer dans quelques minutes."
    }

    return "Une erreur est survenue. Veuillez réessayer."
}
