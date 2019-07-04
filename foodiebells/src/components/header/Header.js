import React from 'react';
import logo from '../../assets/img/logo.png';
import './Header.css';
import {Link} from 'react-router-dom';

const linkItemStyle = {
	fontWeight: '500',
	padding:' 5px 0'
}
const linkItemAStyle = {
	color: '#474747'
}
class Header extends React.Component{
	state = {
		nav : {
			barheight: '91px',
			logo:{
					alignSelf: 'flex-start',
				   	display: 'inline-block',
				   	width: '250px'
			}
		}
		
	}
	

	listenScrollEvent = e => {
		if (window.scrollY > 91) {
			this.setState(prevState =>({
				...prevState,
				nav:{
					barheight: '60px',
					logo:{
						...prevState.nav.logo,
						width:'180px'
					},
				}
				})
				)
		} else {
			this.setState(prevState =>({
				...prevState,
				nav:{
					...prevState.nav,
					barheight: '91px',
					logo:{
						...prevState.nav.logo,
						width:'250px'
					},

				}
				})
				)
		}
	}
	componentDidMount() {
		window.addEventListener('scroll', this.listenScrollEvent)
	}
	componentWillUnmount() {
        window.removeEventListener('scroll', this.listenScrollEvent);
	}
	
 
	render(){
		return(
			<header  style={{height:this.state.nav.barheight,padding:'0 60px',overflow:'visible'}} >

				<input type="checkbox" id="opentoggle"/>
				<label className="opentoggle-label" for="opentoggle"><i className="fa fa-bars "></i></label> 	
				
				<Link to="/">
					<div className="logo-div" href="/" style={this.state.nav.logo}>
						<img className="header-logo" src={logo} alt="FoodieBells" />
					</div>
					</Link>
				<nav id="nav">
					<ul className="link-items">
						<li style={linkItemStyle}> <a style={linkItemAStyle} href="/about">About</a></li>
						<li style={linkItemStyle}> <a style={linkItemAStyle} href="/recipes">Recipes</a></li>
						<li style={linkItemStyle}> <a style={linkItemAStyle} href="/shop">Shop</a></li>
						<li style={linkItemStyle} className="hide-on-small" > <a style={linkItemAStyle} href="https://www.pinterest.com/foodiebellsofficial"><i className="fa fa-pinterest"></i></a></li>
						<li style={linkItemStyle} className="hide-on-small" > <a style={linkItemAStyle} href="https://www.instagram.com/foodiebellsofficial"><i className="fa fa-instagram"></i></a></li>
						<li style={linkItemStyle} className="hide-on-small" > <a style={linkItemAStyle} href="https://www.facebook.com/foodiebellsofficial"><i className="fa fa-facebook"></i></a></li>
						<li style={linkItemStyle} className="hide-on-small" > <a style={linkItemAStyle} href="https://www.twitter.com"><i className="fa fa-twitter"></i></a></li>
						<li style={linkItemStyle} className="hide-on-small" > <a style={linkItemAStyle} href="https://www.behance.net/foodiebell6778"><i className="fa fa-behance"></i></a></li>
						<li style={linkItemStyle} className="hide-on-small" > <a style={linkItemAStyle} href="https://www.linkedin.com"><i className="fa fa-linkedin"></i></a></li>
					</ul>
					<div className="header-search">
						<input id="search" name="search" type="text" placeholder="Search" />
						<a href="/"><i className="fa fa-search"></i></a>
					</div>
				</nav>
			</header>

  
		)
	}
	
};


 

export default Header;