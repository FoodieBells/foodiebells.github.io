import React from 'react'
import TopRatedRecipes from './top-rated-recipes/TopRatedRecipes';
import AdFlex from './ad-flex/AdFlex';
import MainCarousel from './herocarousel/MainCarousel';
import TrendingRecipes from './trending-recipes/TrendingRecipes';
import InstagramFeed from './instagram-feed/InstagramFeed';

class Home extends React.Component {
    render(){
        return(
            <div style={{paddingTop : '91px'}}>
                <MainCarousel/>
                <AdFlex/>
                <TrendingRecipes/>
                <InstagramFeed/>
                <TopRatedRecipes/>
            </div>
        );
    }
}

export default Home;