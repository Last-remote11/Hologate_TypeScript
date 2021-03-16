import * as React from 'react';

interface ISearchChange {
  searchChange(event:React.SyntheticEvent<HTMLInputElement>): void
}

const SearchBox = ({ searchChange }: ISearchChange) => {
    return (
        <div className='pa2'>
            <input 
                aria-label='Seatch Vtuber'
                className='pa2 ba b--green bg-lightest-blue'
                type='search' 
                placeholder='Search Vtuber' 
                onChange={searchChange}>
            </input>
        </div>
    );
};

export default SearchBox;