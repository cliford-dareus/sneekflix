import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Context } from '../Context';

const Navbar = () => {
    const { setLocation, setSearch, setSearchDataType } = useContext(Context);
    const location = useLocation();
    const [ name, setName ] = useState('');
    const [ dataType, setDataType ] = useState('');
    const navigate = useNavigate();

    const handleOnsubmit = (e) => {
        e.preventDefault();

        if(!name || !dataType) return

        setSearch(name);
        setSearchDataType(dataType);

        setTimeout(() => {
            navigate('/search')
        },1000);

        setName('');
        setDataType('');
    };
   
   
    useEffect(()=>{
        setLocation(location);
    },[location]);

  return (
    <header style={styles.header}>
        <div>
            <Link
                to='/'
                style={styles.logo}
            >
                Sneekflix
            </Link>
        </div>

        <nav style={styles.nav}>
            <ul style={styles.nav_list}>
                <li>
                    <Link to='/'>Trending</Link>
                </li>
                <li>
                    <Link to='/movies'>Movies</Link>
                </li>
                <li>
                    <Link to='series'>Series</Link>
                </li>
            </ul>
        </nav>

        <div>
            <form 
                onSubmit={ handleOnsubmit }
                style={styles.form}
            >
                <input 
                    type="text"
                    placeholder='Search movie, tv, actor...' 
                    onChange= {(e) => setName(e.target.value)}
                    style={styles.input}
                    value={name}
                />

                <select 
                    name="" 
                    id=""
                    onChange={(e) => setDataType(e.target.value)}
                    value={dataType}
                    style={styles.select}
                >
                    <option value="">-- Choose --</option>
                    <option value="movie">Movie</option>
                    <option value="tv">Tv Shows</option>
                </select>

                <button 
                    type='submit'
                    style={styles.btn}
                >
                    search
                </button>
                {/* On submit redirect to movie page or tv page */}
            </form>
        </div>
    </header>
  )
};

export default Navbar;


const styles ={
    header:{
        width: '100%',
        height: '70px',
        display: 'flex',
        gap: '1em',
        alignItems: 'center',
        background: '#00000035',
    },
    nav:{
        marginRight: 'auto'
    },
    nav_list: {
        display: 'flex',
        gap: '1em',
    },
    form:{
        // background: 'red',
        width: '380px',
        display: 'flex',
        alignItems: 'center'
    },
    input: {
        width: '75%',
        fontSize: '.9rem',
        background: 'transparent',
        border: 'none',
        outline: 'none',
        color: '#fff'
    },
    logo:{
        fontSize :'2rem',
        fontWeight: '900'
    },
    select: {
        background: 'transparent',
        color: '#fff',
        border: 'none',
        outline: 'none'
    },
    btn: {
        fontSize: '1rem',
        fontWeight: 'bold',
        padding: '.3em 1.5em',
        border: 'none',
        outline: 'none',
        borderRadius: '1em',
        marginLeft: '1em'
    }
};