import React, { createContext, useState, useEffect } from 'react';
import { FetchProxyTrending, FetchProxyById, FetchProxyGenre, FetchProxySearch } from './API/FetchProxy';

const Context = createContext();

const ContextProvider = ({ children }) => {
    const [ location, setLocation ] = useState(null);
    const [ trendingMovies, setTrendingMovies ] = useState([]);
    const [ trendingTv, setTrendingTv ] = useState([]);
    const [ trendingPerson, setTrendingPerson ] = useState([]);
    const [ movieId, setMovieId ] = useState({});
    const [ slide, setSlide ] = useState(0);
    const [ allData, setAllData ] = useState([]);
    const [ genreList, setGenreList ] = useState();
    const [ search, setSearch ] = useState('');
    const [ searchData, setSearchData ] = useState([]);
    const [ searchDataType, setSearchDataType ] = useState('');

    
    useEffect(() => {
        if(location === null) return

        if(location.pathname === '/'){
            if(trendingMovies.length > 0) return 

            (async () => {
                const data = await FetchProxyTrending('movie', 'week')
                setTrendingMovies(data)
            })();

            (async () => {
                const data = await FetchProxyTrending('tv', 'week')
                setTrendingTv(data)
                // console.log(data)
            })();

            (async () => {
                const data = await FetchProxyTrending('person', 'week')
                setTrendingPerson(data)
            })();
        }else if(location.pathname === '/movies'){
            console.log(location)
            // fetch Popular, upcoming, now playing
            //get recomendation 
            // get similar movies
        }else if(location.pathname === '/series'){
            console.log(location)
        }
    },[location]);

    // fetch data by id and type
    useEffect(() => {
        if(movieId.id === '' && movieId.state === '') return
        (async () => {
            const data = await FetchProxyById(movieId.id, movieId.state)
            setAllData(data)
        })();
    },[movieId]);

    // Fetch the genre list
    useEffect(() =>{
        (async () => {
            const data = await FetchProxyGenre('movie')
            setGenreList(data)
        })();
    },[]);

    // fetch data with key word and type
    useEffect(() => {
        if(search === '') return
        (async () => {
            const data = await FetchProxySearch(search, searchDataType)
            setSearchData(data)
        })();
    },[search]);

    // set ihterval for the trending page slide
    useEffect(() => {
        const interval = setInterval(() => {
          if(slide === trendingMovies.length - 1 ){
            setSlide(0)
          }else{
            setSlide(prevslide => prevslide + 1)
          }
        }, 15000);

        return () => clearInterval(interval);
    }, [slide,trendingMovies]);

  return (
    <Context.Provider 
        value={{ 
            slide, 
            setLocation, 
            trendingMovies, 
            trendingTv, 
            trendingPerson, 
            setMovieId,
            allData,
            genreList,
            setSearch, // to set the search key word
            searchData,
            setSearchDataType,
            searchDataType
            }}
        >
            { children }
    </Context.Provider>
  )
};

export { ContextProvider, Context };