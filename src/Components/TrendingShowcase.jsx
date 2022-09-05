import React, { useContext, useEffect } from 'react';
import { Context } from '../Context';
import { Link } from 'react-router-dom';

const TrendingShowcase = () => {
    const { trendingMovies, slide, genreList } = useContext(Context);

    const content = trendingMovies? trendingMovies[slide]: '';
    const genre = genreList? genreList.genres : '';

    const  styles ={
        flex: {
            display: 'flex',
            gap: '1em'
        },
        showcase: {
            width: '70%',
            height: '490px',
            padding: '2em',
            borderRadius: '.5em',
            backgroundImage: `url(${ content !== undefined?`https://image.tmdb.org/t/p/original/${content.poster_path}`: 'red'})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            position: 'relative',
            overflow: 'hidden'
        },
        image: {
            objectFit: 'cover',
            height: '100%',
            with: '100%'
        },
        showcase_details: {
            position: 'absolute',
            color: '#fff',
            bottom: '5em'
        },
        title:{
            fontSize: '3rem',
            margin: '.5em 0'
        }
    }

    return (
    <div style={styles.showcase}>
    {content && genre &&
        <Link 
            to={`/${content.id}`} 
            state={content.media_type}
        >
            {/* <img style={styles.image} src={`https://image.tmdb.org/t/p/original/${content.poster_path}`} alt="" /> */}

            <div style={styles.showcase_details}>
                <h1 style={styles.title}>{content.title}</h1>

                <div style={styles.flex}>
                    {genre.map(item => {
                        return content.genre_ids.map(el =>{
                                return item.id === el? 
                                    <p key={el}>{item.name}</p>: '';
                            })
                        })
                    }
                </div>
            </div>
        </Link>}
    </div>
  )
};

export default TrendingShowcase;