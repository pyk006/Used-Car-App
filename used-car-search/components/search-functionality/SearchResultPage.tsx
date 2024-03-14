"use client"
import SearchResultCard from "./SearchResultCard";
import {useState} from 'react';
import { Button } from "@nextui-org/button";
export default function SearchResultPage({totalResult}) {
    const [numOfResults, setNumOfResults] = useState(16);
    const moreResults = () => {
        setNumOfResults(numOfResults + numOfResults);
    }
    const slicedResults = totalResult.slice(0, numOfResults);
    return (
        <div className="gap-8 grid grid-rows-5 grid-cols-5 sm:grid-cols-4">
            {slicedResults.map((result, index) => {
                return <SearchResultCard key={index} index={index} singleResult={result}></SearchResultCard>
            })}
            {totalResult.length > 0 ? <Button onClick={moreResults}>Load More</Button> : <></>}
        </div>
    )
}