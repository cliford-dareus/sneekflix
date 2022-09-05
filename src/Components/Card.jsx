import React, { useContext } from "react";
import { Link } from "react-router-dom";

const Card = ( { title, src, id, state } ) => { 
    const styles={
        width: '200px',
        height: '200px',
        display: 'inline-block',
        border: '1px solid black',
        padding: '.5em 1em',
        borderRadius: '.5em',
        background: `url(https://image.tmdb.org/t/p/w185_and_h278_bestv2/${src})`,
        color: '#fff',
        position: 'relative'
    }
    
    return(
        <Link 
          to={`/${id}`} 
          state={state}
          style={styles}
        >
            <h2>{title}</h2>
        </Link>

    )
};

export default Card;