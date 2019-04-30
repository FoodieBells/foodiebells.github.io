import React from 'react'
//import {BrowserRouter as Router} from 'react-router'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.png'

const Review = () => {
    return(
        <section className="review-section">
		<div className="container">
			<div className="row">
				<div className="col-lg-6 col-md-8 offset-lg-0 offset-md-2">
					<div className="review-item">
						<div className="review-thumb set-bg" data-setbg="img/thumb/11.jpg">
							<div className="review-date">
								<span>May 04, 2018</span>
							</div>
						</div>
						<div className="review-text">
							<span>March 14, 2018</span>
							<h6>Feta Cheese Burgers</h6>
							<div className="rating">
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star is-fade"></i>
							</div>
							<div className="author-meta">
								<div className="author-pic set-bg" data-setbg="img/author.jpg"></div>
								<p>By Janice Smith</p>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-6 col-md-8 offset-lg-0 offset-md-2">
					<div className="review-item">
						<div className="review-thumb set-bg" data-setbg="img/thumb/12.jpg">
							<div className="review-date">
								<span>May 04, 2018</span>
							</div>
						</div>
						<div className="review-text">
							<span>March 14, 2018</span>
							<h6>Mozarella Pasta</h6>
							<div className="rating">
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star is-fade"></i>
							</div>
							<div className="author-meta">
								<div className="author-pic set-bg" data-setbg="img/author.jpg"></div>
								<p>By Janice Smith</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    )
}

export default Review;