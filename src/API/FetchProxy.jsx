const api_key = import.meta.env.VITE_API_KEY

export const FetchProxySearch = async (searchInput, genre) => {
    const response = await fetch(`https://api.themoviedb.org/3/search/${genre}?api_key=${api_key}&language=en-US&query=${searchInput}&page=1&include_adult=false`)
    const data = await response.json()
    // console.log(data)
    return data.results
}

export const FetchProxyTrending = async ( genre, day ) => {
    const response = await fetch(`https://api.themoviedb.org/3/trending/${genre}/${day}?api_key=${api_key}`)
    const data = await response.json()
    // console.log(data)
    return data.results
}


export const FetchProxyById = async ( movieId, state ) => {
    const response = await fetch(`https://api.themoviedb.org/3/${state}/${movieId}?api_key=${api_key}&language=en-US&append_to_response=similar,movie_credits,tv_credits,credits,videos`)
    const data = await response.json()
    // console.log(data)
    return data
}

export const FetchProxyGenre = async ( state ) => {
    const response = await fetch(`https://api.themoviedb.org/3/genre/${state}/list?api_key=${api_key}&language=en-US`)
    const data = await response.json()
    // console.log(data)
    return data
}


//https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>