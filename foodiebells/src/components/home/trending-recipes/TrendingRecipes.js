import React from 'react'
import {Link} from 'react-router-dom'
import blogPic from '../../../assets/img/blog/1.jpg'

const TrendingRecipes = () => {
    return(
        <section className="blog-section spad pt-0">
		<div className="container">
			<div className="section-title">
				<h2>the latest & YUMM </h2>
			</div>
			<div className="row">
					<div className="col-lg-8 col-md-12" >
						
							<div className="blog-post">
									<div className="row">
										<div className="col-lg-7">
												<img src={blogPic} alt="blog1" className="blog-post-img img-thumbnail" />
										</div>
										<div className="col-lg-5">
												<div className="blog-post-details">
														<p className="text-secondary">FEBRUARY 1, 2019</p>
														<h4><Link to="#">30 minute meal prep: roasted vegetable bowls with green tahini</Link></h4>
														<h6 className="mt-2">If I could eat this every day for lunch for ever and ever, I’d be a happy girl. It’s just hard to go wrong with roasted vegetables – and I…</h6>
														<h5 className="mt-3"><Link to="#">continue reading...</Link></h5>
												</div>
										</div>
									</div>
								</div>
						<div className="blog-post">
								<div className="row">
									<div className="col-lg-7">
											<img src={blogPic} alt="blog1" className="blog-post-img img-thumbnail" />
									</div>
									<div className="col-lg-5">
											<div className="blog-post-details">
													<p className="text-secondary">FEBRUARY 1, 2019</p>
													<h4><Link to="#">30 minute meal prep: roasted vegetable bowls with green tahini</Link></h4>
													<h6 className="mt-2">If I could eat this every day for lunch for ever and ever, I’d be a happy girl. It’s just hard to go wrong with roasted vegetables – and I…</h6>
													<h5 className="mt-3"><Link to="#">continue reading...</Link></h5>
											</div>
									</div>
								</div>
							</div>
							<div className="blog-post">
									<div className="row">
										<div className="col-lg-7">
												<img src={blogPic} alt="blog1" className="blog-post-img img-thumbnail" />
										</div>
										<div className="col-lg-5">
												<div className="blog-post-details">
														<p className="text-secondary">FEBRUARY 1, 2019</p>
														<h4><Link to="#">30 minute meal prep: roasted vegetable bowls with green tahini</Link></h4>
														<h6 className="mt-2">If I could eat this every day for lunch for ever and ever, I’d be a happy girl. It’s just hard to go wrong with roasted vegetables – and I…</h6>
														<h5 className="mt-3"><Link to="#">continue reading...</Link></h5>
												</div>
										</div>
									</div>
								</div>
							<button type="button" className="btn btn-outline-secondary">READ MORE RECENT POSTS →</button>
					</div>
					<div className="col-lg-4 col-md-12">
							<div className="sp-blog-item">
								<div className="blog-thubm">
									<img src={blogPic} alt="" />
									<div className="blog-date">
										<span>May 04, 2018</span>
									</div>
								</div>
								<div className="blog-text">
									<h5>Italian restaurant Review</h5>
									<span>By Maria Williams</span>
									<p>Donec quam felis, ultricies nec, pellente sque eu, pretium quis, sem. Nulla conseq uat massa quis enim. </p>
									<Link to="#" className="comment">2 Comments</Link>
									<Link to="#" className="readmore"><i className="fa fa-angle-right"></i></Link>
								</div>
							</div>
						</div>
					
			</div>
		</div>
	</section>
    );
}

export default TrendingRecipes;