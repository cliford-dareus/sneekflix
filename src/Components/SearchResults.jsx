import React, { useContext } from 'react';
import { Context } from '../Context';
import Card from './Card';

const SearchResults = () => {
    const { searchData, searchDataType } = useContext(Context);

    const element = searchData.map(item => {
        return(
            <Card 
                key={item.id}
                id ={item.id}
                title={item.original_title}
                src={item.poster_path}
                state={searchDataType}
            />
        )
    });

  return (
    <div>
        {element}
    </div>
  )
}

export default SearchResults;