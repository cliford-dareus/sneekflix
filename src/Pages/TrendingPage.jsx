import React,{ useContext, useState,useEffect } from 'react';
import { Context } from '../Context';
import TrendingSection from '../Components/TrendingSection';
import TrendingShowcase from '../Components/TrendingShowcase';
import Favorite from '../Components/Favorite';


const TrendingPage = () => {
  const { trendingTv, trendingPerson } = useContext(Context);

  // const heroelement = trending.map(element => {
  //   return(
  //     <div key={element.id}>
  //       <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${element.poster_path}`} alt="" />
  //       <h3>{element.title}</h3>
  //       <p>Action,adventure</p>
  //     </div>
  //   )
  // });
  
  const styles = {
    display: 'flex',
    gap: '1em'
  }
  
  return (
    <section>
      <div style={styles}>
        <TrendingShowcase />
        <Favorite />
      </div>
      <TrendingSection data={trendingTv} title ='Trending Tv Series'/>
      <TrendingSection data={trendingPerson} title='Trending actors'/>
    </section>
  )
}

export default TrendingPage;

//src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${element.poster_path}`}