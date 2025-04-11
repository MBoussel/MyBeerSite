import { useEffect, useState } from "react";
import { IoIosBeer } from "react-icons/io";
import BeerCard from "../components/BeerCard";


export default function BeerPage(){
const[produits, setProduits] = useState([]);
useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
        .then((response) => response.json())
        .then((data) => setProduits(data.slice(0,14)))
        .catch(() => {
            console.error("Impossible de récupérer les ressources");
        });
}, []);
const [like, setLike] = useState(false);
const likedHeart = () => {
    setLike(!like);
};


    return(
             <div>
                {produits ? (
                    <div className="allbiere">
                        <h1>Notre selection</h1>
                        
                        <div className="tableaubiere">
                            {produits.map((produit) => (
                                <article key={produit.id} className="ressource-card">
                                    <h2>{produit.name}</h2>
                                    <img className= "beerimage"src={produit.image_url} alt={produit.name} />
                                    <h3>{produit.tagline}</h3>
                                    <BeerCard />
                                </article>
                            ))}
                        </div>
                    </div>
                ) : (<div>
                    <h1>Chargement en cours</h1>
                    
                    </div>
                )}
            </div>
        );
}