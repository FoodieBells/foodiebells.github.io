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
						<Link href="https://www.pinterest.com/foodiebellsofficial"><i className="fa fa-pinterest"></i></Link>
						<Link href="https://www.instagram.com/foodiebellsofficial"><i className="fa fa-instagram"></i></Link>
						<Link href="https://www.facebook.com/foodiebellsofficial"><i className="fa fa-facebook"></i></Link>
						<Link href="#"><i className="fa fa-twitter"></i></Link>
						<Link href="https://www.behance.net/foodiebell6778"><i className="fa fa-behance"></i></Link>
						<Link href="#"><i className="fa fa-linkedin"></i></Link>
					</div>
				</div>
				<div className="col-lg-6 text-lg-right">
					<ul className="footer-menu">
						<li><Link href="/">Home</Link></li>
						<li><Link href="#">Features</Link></li>
						<li><Link href="/recipes/">Recipes</Link></li>
						<li><Link href="/privacy-policy/">Privacy-Policy</Link></li>
						<li><Link href="/contact/">Contact</Link></li>
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