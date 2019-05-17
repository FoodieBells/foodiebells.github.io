import React from 'react'
import PageTitle from '../utils/page-title/PageTitle';
const ContactUs = () => {
    return(
        <div style={{paddingTop : '91px'}}>
                <PageTitle title="Contact us" />
                <section class="contact-section spad">
		<div class="container">
			<div class="row">
				<div class="col-lg-8">
					<div class="contact-form-warp section-title">
						<h4>Leave a comment</h4>
						<form class="contact-form">
							<div class="row">
								<div class="col-md-6">
									<input id="name" type="text" placeholder="Name"/>
								</div>
								<div class="col-md-6">
									<input id="from" type="text" placeholder="E-mail"/>
								</div>
								<div class="col-md-12">
									<input id="subject" type="text" placeholder="Subject"/>
									<textarea id="message" placeholder="Message"></textarea>
									<button id="contactNow" class="site-btn">Send</button>
									<div class="greeting"></div>
								</div>
							</div>
						</form>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="contact-logo">
						<img src="../img/logo.png" alt=""/>
					</div>
					<div class="contact-info">
						<ul class="ct-list">
							<li>
								<h6>Address:</h6>
								<p>Queens Street</p>
								<p>Toronto, ON Canada</p>
							</li>
							<li>
								<h6>Phone:</h6>
								<p>+1 289 627 9327</p>
							</li>
							<li>
								<h6>Email:</h6>
								<p>foodiebellsofficial@gmail.com</p>
							</li>
						</ul>
						<div class="contact-social">
								<a href="https://www.pinterest.com/foodiebellsofficial"><i class="fa fa-pinterest"></i></a>
								<a href="https://www.instagram.com/foodiebellsofficial"><i class="fa fa-instagram"></i></a>
								<a href="https://www.facebook.com/foodiebellsofficial"><i class="fa fa-facebook"></i></a>
								<a href="https://www.twitter.com"><i class="fa fa-twitter"></i></a>
								<a href="https://www.behance.net/foodiebell6778"><i class="fa fa-behance"></i></a>
								<a href="https://www.linkedin.com"><i class="fa fa-linkedin"></i></a>
						</div>
					</div>
				</div>
			</div>
				
		</div>
	</section>
        </div>
        
    )
};


 

export default ContactUs;