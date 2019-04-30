import React from 'react'
import restaurantReview from '../../../assets/img/blog/1.jpg'

const TopRatedRecipes = () => {
    return(
        <section className="bottom-widgets-section spad">
		<div className="container">
			<div className="row">
				<div className="col-lg-4 col-md-6 ftw-warp">
					<div className="section-title">
						<h3>Top rated recipes</h3>
					</div>
					<ul className="sp-recipes-list">
						<li>
							<div className="rl-thumb set-bg" data-setbg="img/thumb/1.jpg"></div>
							<div className="rl-info">
								<span>March 14, 2018</span>
								<h6>Italian pasta</h6>
								<div className="rating">
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star is-fade"></i>
								</div>
							</div>
						</li>
						<li>
							<div className="rl-thumb set-bg" data-setbg="img/thumb/2.jpg"></div>
							<div className="rl-info">
								<span>March 14, 2018</span>
								<h6>French Onion Soup</h6>
								<div className="rating">
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star is-fade"></i>
								</div>
							</div>
						</li>
						<li>
							<div className="rl-thumb set-bg" data-setbg="img/thumb/3.jpg"></div>
							<div className="rl-info">
								<span>March 14, 2018</span>
								<h6>Homemade  pasta</h6>
								<div className="rating">
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star is-fade"></i>
								</div>
							</div>
						</li>
						<li>
							<div className="rl-thumb set-bg" data-setbg="img/thumb/4.jpg"></div>
							<div className="rl-info">
								<span>March 14, 2018</span>
								<h6>Onion Soup Gratinee</h6>
								<div className="rating">
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star is-fade"></i>
								</div>
							</div>
						</li>
						<li>
							<div className="rl-thumb set-bg" data-setbg="img/thumb/4.jpg"></div>
							<div className="rl-info">
								<span>March 14, 2018</span>
								<h6>Feta Cheese Burgers</h6>
								<div className="rating">
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star is-fade"></i>
								</div>
							</div>
						</li>
					</ul>
				</div>
				<div className="col-lg-4 col-md-6 ftw-warp">
					<div className="section-title">
						<h3>Most liked recipes</h3>
					</div>
					<ul className="sp-recipes-list">
						<li>
							<div className="rl-thumb set-bg" data-setbg="img/thumb/6.jpg"></div>
							<div className="rl-info">
								<span>March 14, 2018</span>
								<h6>Traditional Food</h6>
								<div className="rating">
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star is-fade"></i>
								</div>
							</div>
						</li>
						<li>
							<div className="rl-thumb set-bg" data-setbg="img/thumb/7.jpg"></div>
							<div className="rl-info">
								<span>March 14, 2018</span>
								<h6>Baked Salmon</h6>
								<div className="rating">
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star is-fade"></i>
								</div>
							</div>
						</li>
						<li>
							<div className="rl-thumb set-bg" data-setbg="img/thumb/8.jpg"></div>
							<div className="rl-info">
								<span>March 14, 2018</span>
								<h6>Deep Fried Fish</h6>
								<div className="rating">
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star is-fade"></i>
								</div>
							</div>
						</li>
						<li>
							<div className="rl-thumb set-bg" data-setbg="img/thumb/9.jpg"></div>
							<div className="rl-info">
								<span>March 14, 2018</span>
								<h6>Raw Tomato Soup</h6>
								<div className="rating">
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star is-fade"></i>
								</div>
							</div>
						</li>
						<li>
							<div className="rl-thumb set-bg" data-setbg="img/thumb/10.jpg"></div>
							<div className="rl-info">
								<span>March 14, 2018</span>
								<h6>Vegan Food</h6>
								<div className="rating">
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star is-fade"></i>
								</div>
							</div>
						</li>
					</ul>
				</div>
				<div className="col-lg-4">
					<div className="sp-blog-item">
						<div className="blog-thubm">
							<img src={restaurantReview} alt="" />
							<div className="blog-date">
								<span>May 04, 2018</span>
							</div>
						</div>
						<div className="blog-text">
							<h5>Italian restaurant Review</h5>
							<span>By Maria Williams</span>
							<p>Donec quam felis, ultricies nec, pellente sque eu, pretium quis, sem. Nulla conseq uat massa quis enim. </p>
							<a href="#" className="comment">2 Comments</a>
							<a href="#" className="readmore"><i className="fa fa-angle-right"></i></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    )
}

export default TopRatedRecipes;