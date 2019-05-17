import React from 'react'
import PageTitle from '../utils/page-title/PageTitle';
import lockImg from '../../assets/img/privacy.svg';
const PrivacyPolicy = () => {
    return(
        <div style={{paddingTop : '91px'}}>
                <PageTitle title="Privacy Policy" />
                <section class="recipes-page spad">
		<div class="container">
				
				<div class="row">
						<div class="col-lg-8 col-md-12">
							<div class="section-title">
								<h2>privacy policy for FoodieBells.com</h2>
							</div>
						</div>
				
					<div class="card bg-light col-lg-8 col-md-12">
						<img src={lockImg} alt="Avatar" class="card-img-top"/>
						<div class="card-body bg-light">
							<i class="mb-2">Effective February 6, 2019</i>
								
							<p class="card-text">As the owner of this website (FoodieBells.com, referred to as the “Site”), 
								we understand that your privacy is of critical importance. 
								This Privacy Policy describes what information we collect from you via the Site and how we use and disclose such information.</p>
								
							<h4 class="mb-2">INFORMATION WE COLLECT AND HOW IT IS USED</h4> 
								<p><strong>You Voluntarily Submit to the Site:</strong>  We may collect personal information from you such as your name or email address. 
									For example, you may voluntarily submit information to the Site by subscribing to a newsletter, or submitting a contact form.
								</p>
								<p><strong>google analytics:</strong> We use Google Analytics to analyze the use of our website. Google Analytics gathers information 
									about website use by means of cookies. The information gathered relating to our website is used to create reports about the use of our 
									website.Google’s privacy policy is available at: <a href="https://www.google.com/policies/privacy/">https://www.google.com/policies/privacy/</a> 
								</p>
								<h4 class="mb-2">CHANGES TO THE PRIVACY POLICY</h4>
								<p>We may change this Privacy Policy from time to time. The most recent version of the Privacy Policy will always be posted on the Site, 
									with the “Effective Date” posted at the top of the Policy. We may revise and update this Privacy Policy if our practices change, as technology changes, 
									or as we add new services or change existing ones. If we make any material changes to our Privacy Policy or how we handle your personal information, 
									or we are going to use any personal information in a manner that is materially different from that stated in our Privacy Policy at the time we collected such information, 
									we will give you a reasonable opportunity to consent to the change. If you do not consent, your personal information will be used as agreed to under the terms of the privacy 
									policy in effect at the time we obtained that information. By using our Site or services after the Effective Date, you are deemed to consent to our then-current privacy policy. 
									We will use information previously obtained in accordance with the Privacy Policy in effect when the information was obtained from you.
								</p>
 

								<h4 class="mb-2">CONTACTING US</h4>
								<p>If you have any questions about this Privacy Policy or the practices of this Site, please contact us at "foodiebellsofficial@gmail.com".
								</p>
								<p>Or write to us at:</p>

								<p><strong>Foodie Bells<br/>
									Queens Street<br/>
									Toronto, ON Canada<br/>
									+1 289 627 9327</strong></p>
							</div>
					  </div>
				</div>
		</div>
		</section>
        </div>
        
    )
};


 

export default PrivacyPolicy;