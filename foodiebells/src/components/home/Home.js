import React from 'react'
import TrendingRecipes from './trending-recipes/TrendingRecipes';
import TopRatedRecipes from './top-rated-recipes/TopRatedRecipes';
import AdFlex from './ad-flex/AdFlex';
import MainCarousel from './herocarousel/MainCarousel';

const Home = () => {
    return(
        <div style={{paddingTop : '91px'}}>
            <MainCarousel/>
            <AdFlex/>
            <TrendingRecipes/>
            <TopRatedRecipes/>
        </div>
    );
}

export default Home;