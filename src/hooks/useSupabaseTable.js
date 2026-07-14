import { useCallback, useEffect, useMemo, useState } from "react"
import { fetchTable } from "../services/supabaseQueries"

export function useSupabaseTable(tableName, options = {}) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const stableOptions = useMemo(
        () => ({
            select: options.select,
            filters: options.filters ?? {},
            orderBy: options.orderBy,
            ascending: options.ascending,
            limit: options.limit,
        }),
        [
            options.select,
            options.filters,
            options.orderBy,
            options.ascending,
            options.limit,
        ]
    )

    const refresh = useCallback(async () => {
        setLoading(true)
        setError(null)

        const { data: rows, error: fetchError } = await fetchTable(
            tableName,
            stableOptions
        )

        setData(rows)
        setError(fetchError)
        setLoading(false)

        return { data: rows, error: fetchError }
    }, [tableName, stableOptions])

    useEffect(() => {
        let ignore = false

        fetchTable(tableName, stableOptions).then(({ data: rows, error: fetchError }) => {
            if (ignore) return

            setData(rows)
            setError(fetchError)
            setLoading(false)
        })

        return () => {
            ignore = true
        }
    }, [tableName, stableOptions])

    return {
        data,
        loading,
        error,
        refresh,
        estVide: !loading && data.length === 0,
    }
}

export default useSupabaseTable
