import React, {useState, useEffect} from 'react';
import axios from "axios";


function PokeCard({endpoint, page}) {
    const [singlePokeData, setSinglePokeData] = useState(null)

    useEffect(() =>{
        async function getData() {
            try {
                const response = await axios.get(`${endpoint}`)
                setSinglePokeData(response.data)
                console.log(response.data)
            }
            catch (e) {
                console.error(e)
            }
        }getData()
    },[page])

    return (
        <fieldset>
             {singlePokeData && <>
             <h1>{singlePokeData.name.toUpperCase()}</h1>
             <img src={singlePokeData.sprites.other.dream_world.front_default} />
                 <p><b>Moves:</b> {singlePokeData.moves.length} </p>
                 <p className="weight"><b>Weight:</b> {singlePokeData.weight}</p>
             <p><b> Abilities:</b></p>
                 <ul>
                     {singlePokeData.abilities.map(({ability})=>{
                         return <li>{ability.name.toUpperCase()}</li>
                 })}
                 </ul>
             </>
             }
        </fieldset>
    )
}

export default PokeCard;