"use client"
import { useSelector } from 'react-redux'
import SearchResultCardInfo from "@/components/search-functionality/SearchResultCardInfo";
export default function CarDetails() {
    const singleResult = useSelector((state) => state.selectedCard)
    return (
       <SearchResultCardInfo singleCard={singleResult}/> 
    )
}