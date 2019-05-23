import React from 'react'
import TrendingRecipes from './trending-recipes/TrendingRecipes';
import TopRatedRecipes from './top-rated-recipes/TopRatedRecipes';
import AdFlex from './ad-flex/AdFlex';
import MainCarousel from './herocarousel/MainCarousel';
import InstagramFeed from './instagram-feed/InstagramFeed';

const Home = () => {
    return(
        <div style={{paddingTop : '91px'}}>
            <MainCarousel/>
            <AdFlex/>
            <InstagramFeed></InstagramFeed>
            <TrendingRecipes/>
            <TopRatedRecipes/>
        </div>
    );
}

export default Home;