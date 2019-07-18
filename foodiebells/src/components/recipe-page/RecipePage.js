import React from 'react';
import PropTypes from 'prop-types';
import Recipe from '../../models/Recipe';
import BackButton from '../utils/back-button/BackButton';


const RecipePage = (props) => 
    /*props = {
        recipe:''
    }
    componentDidMount() {
        const {data} = props.location.params.location;
        if(data==null){
            props.location.params.history.push("/");
        }
        this.setprops({recipe : data});
        
    }
    render() {
        return (*/
           ( <section style={{paddingTop : '91px'}} className="recipe-details-section">
            <div className="container">
                <BackButton />
                <div className="recipe-meta">
                    <div className="racipe-cata">
                        <span>For Begginers</span>
                    </div>
                    <h2>{props.location.params.recipe.title}</h2>
                    <div className="recipe-date">{props.location.params.recipe.timestamp}</div>
                    <button type="button" onClick={window.print} className="btn btn-sm btn-outline-secondary mb-2"><i className="fa fa-print"> </i> print recipe</button>
                    <div className="rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8">
                            <img alt="pic" className="img-thumbnail mb-3" src={props.location.params.recipe.pic}/>
                    </div>
                </div>
                <div className="row mb-3">
                        <div className="col-lg-8">
                                <h2>Description</h2>
                                <p>{props.location.params.recipe.description}</p>
                        </div>
                </div>
                <div className="row">
                    <div className="col-lg-5">
                        <div className="recipe-filter-warp">
                            <div className="filter-top">
                                <div className="filter-top-text">
                                    <p>Prep: {props.location.params.recipe.prepTime} mins</p>
                                    <p>Cook: {props.location.params.recipe.cookTime} mins</p>
                                    <p>Yields: {props.location.params.recipe.servings} Servings</p>
                                </div>
                            </div>
                            <div className="filter-form-warp">
                                <h2>Ingredients</h2>
                                <form className="filter-form">
                                {
                                    props.location.params.recipe.ingredients.map(
                                        (i) =>  
                                        <div className="check-warp" key={i}>
                                        <input type="checkbox" />
                                        <label >{i}</label>
                                    </div>
                                        )
                                    
                                    }
                                   
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                            <h2 className="mb-3">Directions</h2>
                        <ul className="recipe-info-list">
                            {props.location.params.recipe.directions.map(
                                (d) => <li key={d}>
                                <p>{d}</p>
                            </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
    </section>
           )
      //  )
   // }

RecipePage.proptype = {
    recipe: PropTypes.instanceOf(Recipe)
}

export default RecipePage;