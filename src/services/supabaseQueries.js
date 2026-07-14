import { supabase } from "./supabaseClient"

const DEFAULT_LIMIT = 50

export async function fetchTable(
    tableName,
    {
        select = "*",
        filters = {},
        orderBy = "created_at",
        ascending = false,
        limit = DEFAULT_LIMIT,
    } = {}
) {
    try {
        console.debug(`[Supabase] Lecture de la table "${tableName}"`, {
            select,
            filters,
            orderBy,
            ascending,
            limit,
        })

        let query = supabase.from(tableName).select(select)

        Object.entries(filters).forEach(([column, value]) => {
            if (value !== undefined && value !== null && value !== "") {
                query = query.eq(column, value)
            }
        })

        if (orderBy) {
            query = query.order(orderBy, { ascending })
        }

        if (limit) {
            query = query.limit(limit)
        }

        const { data, error } = await query

        if (error) {
            console.error(`[Supabase] Erreur sur "${tableName}"`, error)
            return { data: [], error }
        }

        console.debug(`[Supabase] ${data?.length ?? 0} ligne(s) reçue(s)`, {
            tableName,
        })

        return { data: data ?? [], error: null }
    } catch (error) {
        console.error(`[Supabase] Exception sur "${tableName}"`, error)
        return { data: [], error }
    }
}

export function fetchRecipes(options = {}) {
    return fetchTable("recettes", {
        orderBy: "created_at",
        ...options,
    })
}

export function fetchComments(recetteId, options = {}) {
    return fetchTable("commentaires", {
        filters: recetteId ? { recette_id: recetteId } : {},
        orderBy: "created_at",
        ...options,
    })
}

export function fetchForumTopics(options = {}) {
    return fetchTable("forum", {
        orderBy: "created_at",
        ...options,
    })
}

export function fetchFavorites(utilisateurId, options = {}) {
    return fetchTable("favoris", {
        filters: utilisateurId ? { utilisateur_id: utilisateurId } : {},
        orderBy: "created_at",
        ...options,
    })
}

export function fetchUsers(options = {}) {
    return fetchTable("utilisateurs", {
        orderBy: "created_at",
        ...options,
    })
}
