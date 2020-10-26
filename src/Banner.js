import React, { useState } from 'react';
import './Banner.css';
import { Button } from "@material-ui/core";
import Search from './Search';
import { useHistory } from "react-router-dom";


function Banner() {
    const history = useHistory();
    const [showSearch, setShowSearch] = useState(false);
    return (
        <div className='banner'>
            <div className='banner__search'>
                {showSearch && <Search />}
                <Button onClick={() => setShowSearch(!showSearch)} className='banner__searchButton' variant='outlined'>
                    {showSearch ? "Hide" : "Search Dates"}
                </Button>
            </div>
            <div className='banner__info'>
                <h1>Get out and stretch</h1>
                <h5>plan a diffrent kind of getaway to uncover the hidden</h5>
                <Button variant='outlined' onClick={() => history.push('/search')}>Explore NearBy</Button>
            </div>
        </div>
    )
}

export default Banner
