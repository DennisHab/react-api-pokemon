import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import PokeCard from "./components/PokeCard";
import pokeball2 from './assets/pokeball_PNG21.png';

function App() {
    const [pokeData, setData] = useState([])
    const [Page, setPage] = useState(0)

    function nextPage() {
        setPage(Page +20)
    }
    function previousPage() {
        if (Page >= 21) {
            setPage(Page -20)
        }
    }

    useEffect(() => {
        async function getAllPokemon() {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${Page}`)
                setData(response.data.results)                
            } catch (e) {
                console.error(e)
            }
        }
        getAllPokemon()
    }, [Page])

    return (
        <>
        <div className="header">
            <button
            onClick={previousPage}
            >
                Back
            </button>
            <img
                src={pokeball2}
            />
            <button
            onClick={nextPage}
            >
                Next
            </button>
        </div>
        <div className="content">
            {pokeData.map((data) => {
                return <PokeCard                    
                    endpoint={data.url}
                />
            })}
        </div>
        </>
    )
}
export default App;
