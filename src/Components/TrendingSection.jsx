import React from 'react';
import { Link } from 'react-router-dom';

const TrendingSection = ({ data, title }) => {
  
  const element = data.filter(item => item.poster_path || item.profile_path !== null).map(item => {
    return(
      <Link 
        to={`/${item.id}`} 
        key={item.id} 
        state={item.media_type}
        style={styles.card}
      >
        <img 
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${item.poster_path || item.profile_path}`} 
          alt="" 
          style={styles.image}
        />
        <h4 style={styles.title}>{item.name}</h4>
      </Link>
      
    )
  });

  return (
    <div style={styles.trending}>
      <h2>{title}</h2>
      <div style={styles.slide}>
        <div style={styles.box}>
          {element}
        </div>
      </div>
    </div>
    
  )
};

export default TrendingSection;

const styles ={
  trending: {
    marginTop: '2em',
    overflow: 'hidden'
  },
  slide: {
    display: 'flex',
    width: '100%',
    marginTop: '1em'
  },
  box:{
    display: 'flex',
    gap: '1em'
  },
  card: {
    display: 'inline-block',
    minWidth: '19%',
    height: '170px',
    borderRadius: '.5em',
    overflow: 'hidden',
    position: 'relative'
  },
  image: {
    objectFit: 'cover',
    width: '100%',
    height: '100%'
  },
  title: {
    position: 'absolute',
    bottom: '1em',
    left: '50%',
    transform: 'translate(-50%)',
    color: '#fff'
  }
};