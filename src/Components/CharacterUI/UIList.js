import React, {useState, useEffect} from 'react';
import UICharacter from './UICharacter';
import Pagination from '@mui/material/Pagination';
import '../../index.css';

export default function List() {
    const [characters, setCharacter] = useState([]);
    const [loading,setLoading] = useState(true);
    const [currentPage,setCurrentPage] = useState(1);
    const [currentPageUrl,setCurrentPageUrl] = useState("https://rickandmortyapi.com/api/character");
    const [pages,setPages] = useState();



    useEffect(() => {
        const url = currentPageUrl;

        async function fetchData() {
            const data = await fetch(url);
            const {results, info} = await data.json();
            setCharacter(results);
            setLoading(false);
            setPages(info.pages);
        }

        fetchData();
    }, [currentPageUrl]);

    const goToPage = (num) => {
        setCurrentPage(num);
        setCurrentPageUrl(`https://rickandmortyapi.com/api/character?page=${num}`);
    }
    
    if(loading)
        return (<div className="loading">Loading...</div>)

    return (
        <div className="List">
            <h2>Characters</h2>
            <div><Pagination 
                style ={{display: "flex",justifyContent:"center"}}
                page = {currentPage}
                count={pages}
                onChange={(e,page)=>goToPage(page)}
            /></div>
            <div className="row">
                {
                characters.map((character) => (
                    <UICharacter
                        key={character.id}
                        name={character.name}
                        origin={character.origin}
                        image={character.image}
                    />
                ))
                }
                <div><Pagination 
                style ={{display: "flex",justifyContent:"center"}}
                page = {currentPage}
                count={pages}
                onChange={(e,page)=>goToPage(page)}
            /></div>
            </div>
        </div>
    )
}