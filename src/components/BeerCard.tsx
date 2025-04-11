import { useState } from "react";
import BeerPage from "../pages/BeerPage";
import { IoIosBeer } from "react-icons/io";

    


export default function BeerCard (){
const [like, setLike] = useState(false);
const likedHeart = () => {
    setLike(!like);
};
    return(
        <figure className="displayBeer">
            
            <figcaption>
               <button 
                                    onClick={likedHeart} 
                                   className="heart"   style={{  color: like ? 'rgb(234, 211, 107)' : 'black' }}> 
                                   <IoIosBeer />
                               </button>
            </figcaption>

        </figure>

    )
}