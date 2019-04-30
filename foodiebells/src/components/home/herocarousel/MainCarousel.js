import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import s1 from '../../../assets/img/slider-bg-1.jpg'
import s2 from '../../../assets/img/slider-bg-2.jpg'
import s3 from '../../../assets/img/slider-bg-3.jpg'
import s4 from '../../../assets/img/slider-bg-4.jpg'

const MainCarousel = () => {
    return(
        <section className="hero-section">
		<Carousel className="hero-slider owl-carousel" >
			<Carousel.Item className="hero-slide-item set-bg" style={carouselStyle.s1}>
				<Carousel.Caption className="hs-text">
					<h2 className="hs-title-1"><span>Easy Recipes</span></h2>
					<h2 className="hs-title-2"><span>from the naturals</span></h2>
					<h2 className="hs-title-3"><span>with Love</span></h2>
				</Carousel.Caption>
			</Carousel.Item>,
			<Carousel.Item className="hero-slide-item set-bg" style={carouselStyle.s2}>
				<Carousel.Caption className="hs-text">
					<h2 className="hs-title-1"><span>Yummy flavours</span></h2>
					<h2 className="hs-title-2"><span>easy to prepare</span></h2>
					<h2 className="hs-title-3"><span>for all the foodies</span></h2>
				</Carousel.Caption>
			</Carousel.Item>,
			<Carousel.Item className="hero-slide-item set-bg" style={carouselStyle.s3}>
				<Carousel.Caption className="hs-text">
					<h2 className="hs-title-1"><span>Healthy Recipes</span></h2>
					<h2 className="hs-title-2"><span>from the best chefs</span></h2>
					<h2 className="hs-title-3"><span>for all</span></h2>
				</Carousel.Caption>
			</Carousel.Item>,
			<Carousel.Item className="hero-slide-item set-bg" style={carouselStyle.s4}>
				<Carousel.Caption className="hs-text">
					<h2 className="hs-title-1"><span>Refereshing Tastes</span></h2>
					<h2 className="hs-title-2"><span>helps Weightloss</span></h2>
					<h2 className="hs-title-3"><span>full of Goodness</span></h2>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	</section>
		
    );
}

const carouselStyle = {
	s1:{
		backgroundImage: `url(${s1})`
	},
	s2:{
		backgroundImage: `url(${s2})`
	},
	s3:{
		backgroundImage: `url(${s3})`
	},
	s4:{
		backgroundImage: `url(${s4})`
	}
}



export default MainCarousel;