import { createContext, useContext, useState } from "react";

const searchContext = createContext()

export function useSearch() {
    const context = useContext(searchContext)
    return context
}

export function SearchProvider({ children }) {
    const [search, setSearch] = useState('')

    return <searchContext.Provider value={{ search, changeSearch }}>{children}</searchContext.Provider>

    function changeSearch(input) {
        setSearch(input)
    }
}