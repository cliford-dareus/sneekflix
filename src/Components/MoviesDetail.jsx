import React, { useEffect, useContext } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { Context } from '../Context';

const MoviesDetail = () => {
    const { setMovieId, allData } = useContext(Context);
    const { id } = useParams();
    const { state } = useLocation();

    const genre = allData? allData.genres : '';
    const casts = allData? allData.credits : '';
    const similar = allData? allData.similar : '';

    const youtubeUrl = 'https://www.youtube.com/watch?v='

    useEffect(() => {
        setMovieId({ id, state })
    },[id]);

    const styles ={
      detail_container:{
        position: 'absolute',
        marginTop: '-70px',
        zIndex: '-1'
      },
      backdrop:{
        width: '100%',
        height: '350px',
        marginBottom: '2em',
        marginLeft: '-80px',
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${allData.poster_path})`,
        backgroundPosition: 'center ',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        borderBottomRightRadius: '40em'
      },
      container:{
        display: 'flex'
      },
      left_side: {
        width: '70%',
        display: 'flex',
        flexDirection: 'column',
        gap: '1em'
      },
      left_side_top: {
        width: '100%',
        height: '250px',
        display: 'flex',
        gap: '2em',
      },
      genres: {
        display: 'flex',
        gap: '1em',
        margin: '2em 0'
      },
      genre: {
        border: '1px solid #A9ABAB',
        padding: '.2em 1em',
        borderRadius: '.5em',
      },
      left_side_bottom: {
        display: 'flex',
        gap: '2em',
        height: '170px',
        overflow: 'hidden'
      },
      bottom_detail: {
        minWidth: '185px',
      },
      plotline:{
        width : '500px'
      },
      btn: {
        padding: '.8em 2.5em',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        borderRadius: '3em',
        display: 'inline-block',
        border: '1px solid #fff'
      },
      cast_card: {
        display: 'flex',
        alignItem: 'center',
        gap: '1em',
      },
      cast_img: {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        overflow: 'hidden'
      },
      cast_container: {
        height: '100%',
        overflow: 'hidden'
      },
      rigth_side: {
        width: '30%',
      },
      similar:{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '.5em',
        paddingTop: '1em' 
      },
      similar_card:{
        width: '122px',
        height: '125px',
        overflow: 'hidden',
        borderRadius: '1em'
      },
      similar_img: {
        objectFit: 'cover'
      }
      
      
    }

  return (
    <div style={styles.detail_container}>
        <div style={styles.backdrop}>
        </div>

        <div style={styles.container}>

          <div style={styles.left_side}>
            <div style={styles.left_side_top}>
              <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${allData.poster_path || allData.profile_path}`} alt="" />

              <div style={styles.details}>
                <h2>{allData.title || allData.name}</h2>

                <div style={styles.genres}>
                  {genre && genre.map(item => {
                    return <p key={item.name} style={styles.genre}>{item.name}</p>
                  })}
                </div>

                <div style={styles.btns}>
                  <a 
                    target='_blank'
                    style={styles.btn}
                    href={`${youtubeUrl}`}
                  >
                    Watch Trailer
                  </a>
                </div>

              </div>
            </div>

            <div style={styles.left_side_bottom}>

                  <div style={styles.bottom_detail}>
                    <p>{allData.release_date || allData.first_air_date}</p>
                    <p>{allData.runtime || allData.episode_run_time} minutes</p>
                    <p>{allData.original_language}</p>
                  </div>

                  <div style={styles.plotline}>
                    <h4>StoryLine</h4>
                    <p>{allData.overview || 'No plotline'}</p>
                  </div>

                  <div style={styles.cast_container}>
                    {casts && casts.cast.filter(person => person.profile_path !== null).map((item => {
                        return(
                          <div key={item.id} style={styles.cast_card}>
                            <div style={styles.cast_img}>
                              <img src={`https://image.tmdb.org/t/p/w185/${item.profile_path}`} alt="" />
                            </div>
                            <div>
                              <p>{item.name}</p>
                              <p>{item.character}</p>
                            </div>
                          </div>
                        ) 
                      }))
                    }
                  </div>
            </div>
          </div>

          <div style={styles.rigth_side}>
             <h3>More like this</h3>

             <div style={styles.similar}>
                  {similar && similar.results.slice(0,9).filter(alike => alike.poster_path !== null).map((item => {
                    return(
                      <Link 
                        to={`/${item.id}`}
                        state={state}
                        style={styles.similar_card}
                        key={item.id}
                      >
                        <div style={styles.similar_img}>
                          <img src={`https://image.tmdb.org/t/p/w185/${item.poster_path}`} alt="" />
                        </div>
                      </Link>
                    )
                  }))}
             </div>
          </div>
        </div>
    </div>
  )
};

export default MoviesDetail;