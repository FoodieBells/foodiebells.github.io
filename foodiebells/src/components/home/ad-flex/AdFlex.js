import React from 'react'
import ad1Img from '../../../assets/img/add/1.jpg'
import ad2Img from '../../../assets/img/add/2.jpg'
import ad3Img from '../../../assets/img/add/3.jpg'

const AdFlex = () => {
    return(
        <section className="add-section spad">
		<div className="container">
			<div className="add-warp">
				<div className="add-slider owl-carousel">
					<div className="as-item set-bg" style={adStyle.ad1}></div>
					<div className="as-item set-bg" style={adStyle.ad2}></div>
					<div className="as-item set-bg" style={adStyle.ad3}></div>
				</div>
				<div className="row add-text-warp">
					<div className="col-lg-4 col-md-5 offset-lg-8 offset-md-7">
						<div className="add-text text-white">
							<div className="at-style"></div>
							<h2>Amazing deserts</h2>
							<ul>
								<li>Easy to make</li>
								<li>Step by Step Video Tutorial</li>
								<li>Gluten Free</li>
								<li>Healthy  Ingredients</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	);	
}

const adStyle = {
	ad1:{
		backgroundImage: `url(${ad1Img})`
	},
	ad2:{
		backgroundImage: `url(${ad2Img})`
	},
	ad3:{
		backgroundImage: `url(${ad3Img})`
	}
}
export default AdFlex;