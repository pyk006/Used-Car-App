"use client"
import SearchResultPage from "@/components/search-functionality/SearchResultPage"
import { useSelector } from 'react-redux'

export default function Page() {
    const searchResults = useSelector((state) => state.searchResults)
    console.log(searchResults)
    return (  
        <SearchResultPage totalResult={searchResults}/>
      )
}