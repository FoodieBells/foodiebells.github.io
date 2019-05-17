import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import logo from '../../assets/img/logo.png'




class Header extends React.Component{
	state = {
		nav : {
			barheight: '91px',
			logo:{
					alignSelf: 'flex-start',
				   	display: 'inline-block',
				   	width: '250px'
			},
			navLinks:{
					display: 'inline-block',
				   	fontSize: '15px',
				   	fontWeight: '500',
				   	color: '#474747',
				   	padding: '0 25px ',
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
					navLinks:{
						...prevState.nav.navLinks
					}
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
					navLinks:{
						...prevState.nav.navLinks
					}

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
			<Navbar fixed="top" style={{height:this.state.nav.barheight,background: 'linear-gradient(to right, #ff2a6b, rgba(255, 255, 255, 0.9),rgba(255, 255, 255, 0.9))',padding:'0 60px',overflow:'visible'}} 
				expand="lg">
				<Navbar.Brand href="/" style={this.state.nav.logo}>
						<img src={logo} alt="FoodieBells" />
					</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto ">
						<Nav.Link style={this.state.nav.navLinks} href="/about">About</Nav.Link>
						<Nav.Link style={this.state.nav.navLinks} href="/recipes">Recipes</Nav.Link>
						<Nav.Link style={this.state.nav.navLinks} href="/shop">Shop</Nav.Link>
						<Nav.Link style={this.state.nav.navLinks} className="hide-on-small" href="https://www.pinterest.com/foodiebellsofficial"><i className="fa fa-pinterest"></i></Nav.Link>
						<Nav.Link style={this.state.nav.navLinks} className="hide-on-small" href="https://www.instagram.com/foodiebellsofficial"><i className="fa fa-instagram"></i></Nav.Link>
						<Nav.Link style={this.state.nav.navLinks} className="hide-on-small" href="https://www.facebook.com/foodiebellsofficial"><i className="fa fa-facebook"></i></Nav.Link>
						<Nav.Link style={this.state.nav.navLinks} className="hide-on-small" href="https://www.twitter.com"><i className="fa fa-twitter"></i></Nav.Link>
						<Nav.Link style={this.state.nav.navLinks} className="hide-on-small" href="https://www.behance.net/foodiebell6778"><i className="fa fa-behance"></i></Nav.Link>
						<Nav.Link style={this.state.nav.navLinks} className="hide-on-small" href="https://www.linkedin.com"><i className="fa fa-linkedin"></i></Nav.Link>
					</Nav>
					<div className="header-search">
						<input id="search" name="search" type="text" placeholder="Search" />
						<a href="/"><i className="fa fa-search"></i></a>
					</div>
				</Navbar.Collapse>
			</Navbar>

  
		)
	}
	
};


 

export default Header;