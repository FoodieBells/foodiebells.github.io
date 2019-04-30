import React from 'react'
//import {BrowserRouter as Router} from 'react-router'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.png'

const Header = () => {
    return(

        <header className="header-section">
		
		<div className="header-bottom">
			<div className="container">
				<Link to="/" className="site-logo ">
                    <img src={logo} alt="" />
				</Link>
				<div className="nav-switch">
					<i className="fa fa-bars"></i>
				</div>
				<div className="header-search">
					<input id="search" name="search" type="text" placeholder="Search" />
					<Link to=""><i className="fa fa-search"></i></Link>
				</div>
				<ul className="main-menu">
					<li><Link to="/about">About</Link></li>
					<li><Link to="/recipes">Recipes</Link></li>
					<li><Link to="/shop/">Shop</Link></li>
					<li className="hide-on-small">
						<Link to="https://www.pinterest.com/foodiebellsofficial"><i className="fa fa-pinterest"></i></Link>
						<Link to="https://www.instagram.com/foodiebellsofficial"><i className="fa fa-instagram"></i></Link>
						<Link to="https://www.facebook.com/foodiebellsofficial"><i className="fa fa-facebook"></i></Link>
						<Link to="#"><i className="fa fa-twitter"></i></Link>
						<Link to="https://www.behance.net/foodiebell6778"><i className="fa fa-behance"></i></Link>
						<Link to="#"><i className="fa fa-linkedin"></i></Link>
					</li>
				
				</ul>
			</div>
		</div>
	</header>
    )
};
 

export default Header;