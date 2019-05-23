import React, { Component } from 'react'
import PageTitle from '../utils/page-title/PageTitle';
import potatopic from '../../assets/img/recipes/potato-samosas/samosa.jpg';
import traditionalPizza from '../../assets/img/recipes/1.jpg';
import italianPasta from '../../assets/img/recipes/2.jpg';
import cheeseCake from '../../assets/img/recipes/3.jpg';
import traditionalPizza1 from '../../assets/img/recipes/4.jpg';
import italianPasta1 from '../../assets/img/recipes/5.jpg';
import cheeseCake1 from '../../assets/img/recipes/6.jpg';
import traditionalPizza2 from '../../assets/img/recipes/7.jpg';
import italianPasta2 from '../../assets/img/recipes/8.jpg';
import cheeseCake2 from '../../assets/img/recipes/9.jpg';
import traditionalPizza3 from '../../assets/img/recipes/10.jpg';
import italianPasta3 from '../../assets/img/recipes/11.jpg';
import cheeseCake3 from '../../assets/img/recipes/12.jpg';

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
    myRecipesData(){
        return [
            {   
                id:1,
                name:"Potato Samosas",
                link:potatopic,
                pic:potatopic,
            },
            {
                id:2,
                name:"Traditional Pizza",
                link:traditionalPizza,
                pic:traditionalPizza
            },
            {
                id:3,
                name:"Italian home-made Pasta",
                link:italianPasta,
                pic:italianPasta
            },
            {
                id:4,
                name:"Cheese Cake Tart",
                link:cheeseCake,
                pic:cheeseCake
            },
            {
                id:5,
                name:"Traditional Pizza1",
                link:traditionalPizza1,
                pic:traditionalPizza1
            },
            {
                id:6,
                name:"Italian home-made Pasta1",
                link:italianPasta1,
                pic:italianPasta1
            },
            {
                id:7,
                name:"Cheese Cake Tart1",
                link:cheeseCake1,
                pic:cheeseCake1
            },
            {
                id:8,
                name:"Traditional Pizza2",
                link:traditionalPizza2,
                pic:traditionalPizza2
            },
            {
                id:9,
                name:"Italian home-made Pasta2",
                link:italianPasta2,
                pic:italianPasta2
            },
            {
                id:10,
                name:"Cheese Cake Tart2",
                link:cheeseCake2,
                pic:cheeseCake2
            },
            {
                id:11,
                name:"Traditional Pizza3",
                link:traditionalPizza3,
                pic:traditionalPizza3
            },
            {   
                id:12,
                name:"Italian home-made Pasta3",
                link:italianPasta3,
                pic:italianPasta3
            },
            {
                id:13,
                name:"Cheese Cake Tart3",
                link:cheeseCake3,
                pic:cheeseCake3
            },
        ];
    }
    myRecipes(){
        return this.myRecipesData().map((recipe) => 
        <div className="col-lg-4 col-md-6" key={recipe.id}>
                            <div className="recipe">
                                <a href={recipe.link}>
                                    <img src={recipe.pic} style={{height:'250px'}} alt=""/>
                                </a>
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
