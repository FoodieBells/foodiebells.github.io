import React, { Component } from 'react'
import PageTitle from '../utils/page-title/PageTitle';
import {myRecipesData} from "../../service/RecipeService"
import {Link} from 'react-router-dom';

class Recipes extends Component {
    render() {
        return (
            <div style={{paddingTop : '91px'}}>
            <PageTitle title="Recipes" />
                <section className="recipes-page spad">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="section-title">
                                <h2>Latest recipes</h2>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="recipe-view">
                                <i className="fa fa-bars"></i>
                                <i className="fa fa-th active"></i>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                            {this.myRecipes()}
                            </div>
                    <div className="site-pagination">
                        <span>01</span>
                        <a href="/">02</a>
                        <a href="/">03</a>
                    </div>
                </div>
            </section>
            </div>
        )
    }
    
    myRecipes(){
        return myRecipesData.map((recipe) => 
        <div className="col-lg-4 col-md-6" key={recipe.id}>
                            <div className="recipe">
                                <Link to={{ pathname:`/recipe`, data:recipe}}>
                                    <img src={recipe.pic} style={{height:'250px'}} alt=""/>
                                </Link>
                                <div className="recipe-info-warp">
                                        <div className="recipe-info">
                                        <h3>{recipe.name}</h3>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star is-fade"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        )
    }
        
}

export default Recipes;
