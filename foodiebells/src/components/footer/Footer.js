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
						<Link to="https://www.pinterest.com/foodiebellsofficial"><i className="fa fa-pinterest"></i></Link>
						<Link to="https://www.instagram.com/foodiebellsofficial"><i className="fa fa-instagram"></i></Link>
						<Link to="https://www.facebook.com/foodiebellsofficial"><i className="fa fa-facebook"></i></Link>
						<Link to="#"><i className="fa fa-twitter"></i></Link>
						<Link to="https://www.behance.net/foodiebell6778"><i className="fa fa-behance"></i></Link>
						<Link to="#"><i className="fa fa-linkedin"></i></Link>
					</div>
				</div>
				<div className="col-lg-6 text-lg-right">
					<ul className="footer-menu">
						<li><Link to="/">Home</Link></li>
						<li><Link to="#">Features</Link></li>
						<li><Link to="/recipes/">Recipes</Link></li>
						<li><Link to="/privacy-policy/">Privacy-Policy</Link></li>
						<li><Link to="/contact/">Contact</Link></li>
					</ul>
					<p className="copyright">
						Copyright &copy; <script>document.write(new Date().getFullYear());</script> FoodieBells Inc.
					</p>
				</div>
			</div>
		</div>
	</footer>
    )
};

const footerStyle = {
    backgroundImage: `url(${footerBg})`,
}
 

export default Footer;