'use client'

import { useState } from 'react'
import styles from './search.module.css'

interface SearchProps {
    onSearch: (query: string) => void;
}

export default function Search({ onSearch }: SearchProps) {
    const [search, setSearch] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearch(value);
        onSearch(value);
    }

    return (
        <div className={styles.searchContainer}>
            <input
                type="text"
                placeholder="Search by name..."
                value={search}
                onChange={handleChange}
                className={styles.searchInput}
            />
        </div>
    )
}