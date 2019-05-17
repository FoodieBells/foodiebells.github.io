import React from 'react'
//import {BrowserRouter as Router} from 'react-router'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.png'
import footerBg from '../../assets/img/footer-bg.jpg'

const Footer = () => {
    return(

        <footer className="footer-section set-bg" style={footerStyle}>
		<div className="container-fluid">
			<div className="row">
				<div className="col-lg-6">
					<div className="footer-logo">
						<img src={logo} alt="" />
					</div>
					<div className="footer-social">
						<a href="https://www.pinterest.com/foodiebellsofficial"><i className="fa fa-pinterest"></i></a>
						<a href="https://www.instagram.com/foodiebellsofficial"><i className="fa fa-instagram"></i></a>
						<a href="https://www.facebook.com/foodiebellsofficial"><i className="fa fa-facebook"></i></a>
						<a href="https://www.twitter.com"><i className="fa fa-twitter"></i></a>
						<a href="https://www.behance.net/foodiebell6778"><i className="fa fa-behance"></i></a>
						<a href="https://www.linkedin.com"><i className="fa fa-linkedin"></i></a>
					</div>
				</div>
				<div className="col-lg-6 text-lg-right">
					<ul className="footer-menu">
						<li><Link to="/">Home</Link></li>
						<li><Link to="#">Features</Link></li>
						<li><Link to="/recipes">Recipes</Link></li>
						<li><Link to="/privacy-policy">Privacy-Policy</Link></li>
						<li><Link to="/contact">Contact</Link></li>
					</ul>
					<p className="copyright">
						Copyright &copy; {year} FoodieBells Inc.
					</p>
				</div>
			</div>
		</div>
	</footer>
    )
};

const year = new Date().getFullYear();
const footerStyle = {
    backgroundImage: `url(${footerBg})`,
}
 

export default Footer;