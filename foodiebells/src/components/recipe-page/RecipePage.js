import React, { Component } from 'react';
import BackButton from '../utils/back-button/BackButton';

class RecipePage extends Component {
    state = {
        recipe:''
    }
    componentDidMount() {
        const {data} = this.props.location;
        if(data==null){
            this.props.history.push("/");
        }
        this.setState({recipe : data});
        
    }
    render() {
        return (
            <section style={{paddingTop : '91px'}} className="recipe-details-section">
            <div className="container">
                <BackButton />
                <div className="recipe-meta">
                    <div className="racipe-cata">
                        <span>For Begginers</span>
                    </div>
                    <h2>{this.state.recipe.name}</h2>
                    <div className="recipe-date">February 04, 2019</div>
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
                            <img alt="pic" className="img-thumbnail mb-3" src={this.state.recipe.pic}/>
                    </div>
                </div>
                <div className="row mb-3">
                        <div className="col-lg-8">
                                <h2>Description</h2>
                                <p>If you’ve never attempted samosas at home before, I think it’s time we all start. And if I can do it, so can you. Because I’m the least arty person I’ve ever met. Origami was never my thing and wrapping samosas is a bit like that. It takes a few tries, but once you get it, you’ll be wrapping them like a boss. I have a step by step video recipe if you scroll down, that’s going to make things even easier.</p>
                        </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="recipe-filter-warp">
                            <div className="filter-top">
                                <div className="filter-top-text">
                                    <p>Prep: 10 mins</p>
                                    <p>Cook: 25 mins</p>
                                    <p>Yields: 12 Servings</p>
                                </div>
                            </div>
                            <div className="filter-form-warp">
                                <h2>Ingredients</h2>
                                <form className="filter-form">
                                    <div className="check-warp">
                                        <input type="checkbox" id="one"/>
                                        <label >1 tbsp olive oil</label>
                                    </div>
                                    <div className="check-warp">
                                        <input type="checkbox" id="two"/>
                                        <label >1 medium onion, chopped</label>
                                    </div>
                                    <div className="check-warp">
                                        <input type="checkbox" id="three"/>
                                        <label >1 1/2 teaspoons curry powder</label>
                                    </div>
                                    <div className="check-warp">
                                        <input type="checkbox" id="four"/>
                                        <label >Kosher salt and black pepper</label>
                                    </div>
                                    <div className="check-warp">
                                        <input type="checkbox" id="five"/>
                                        <label >2 cups store-bought refrigerated mashed or frozen mashed potatoes, thawed (about 16 ounces)</label>
                                    </div>
                                    <div className="check-warp">
                                        <input type="checkbox" id="six"/>
                                        <label >1 10-ounce package frozen peas, thawed</label>
                                    </div>	
                                    <div className="check-warp">
                                        <input type="checkbox" id="seven"/>
                                        <label >1 15-ounce package refrigerated piecrusts</label>
                                    </div>
                                    <div className="check-warp">
                                        <input type="checkbox" id="eight"/>
                                        <label >1 jar imli/pudeena/mango chutney (optional)</label>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                            <h2 className="mb-3">Directions</h2>
                        <ul className="recipe-info-list">
                            <li>
                                <h2><i className="fa fa-check-square-o" aria-hidden="true"></i></h2>
                                <p>Heat oven to 375° F. Heat the oil in a large saucepan over medium heat. Add the onion and cook, stirring occasionally, until soft and golden brown, 10 to 12 minutes. Add the curry powder, ¾ teaspoon salt, and ½ teaspoon pepper and cook, stirring, until fragrant, about 1 minute. Stir in the potatoes and peas.</p>
                            </li>
                            <li>
                                <h2><i className="fa fa-check-square-o" aria-hidden="true"></i></h2>
                                <p>Unroll the piecrusts and cut each into 6 triangles. Place a heaping tablespoon of the potato mixture in the center of each piece. Gather the corners of the dough and pinch to form a point. Pinch the seams to seal. Transfer to a baking sheet.</p>
                            </li>
                            <li>
                                <h2><i className="fa fa-check-square-o" aria-hidden="true"></i></h2>
                                <p>Bake the samosas for 20 to 25 minutes, until they turn golden.</p>
                            </li>
                            <li>
                                <h2><i className="fa fa-check-square-o" aria-hidden="true"></i></h2>
                                <p>Serve with the Imli, Pudina or Mango chutney.</p>
                            </li>
                        
                        </ul>
                    </div>
                </div>
            </div>
	</section>
        )
    }
}

export default RecipePage;