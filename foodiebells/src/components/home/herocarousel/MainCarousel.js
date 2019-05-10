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
				<Carousel.Caption style={carouselStyle.ht}>
					<h2 style={carouselStyle.t1}><span style={carouselStyle.ts1}>Easy Recipes</span></h2>
					<h2 style={carouselStyle.t2}><span style={carouselStyle.ts2}>from the naturals</span></h2>
					<h2 style={carouselStyle.t3}><span style={carouselStyle.ts3}>with Love</span></h2>
				</Carousel.Caption>
			</Carousel.Item>,
			<Carousel.Item className="hero-slide-item set-bg" style={carouselStyle.s2}>
				<Carousel.Caption style={carouselStyle.ht}>
					<h2 style={carouselStyle.t1}><span style={carouselStyle.ts1}>Yummy flavours</span></h2>
					<h2 style={carouselStyle.t2}><span style={carouselStyle.ts2}>easy to prepare</span></h2>
					<h2 style={carouselStyle.t3}><span style={carouselStyle.ts3}>for all the foodies</span></h2>
				</Carousel.Caption>
			</Carousel.Item>,
			<Carousel.Item className="hero-slide-item set-bg" style={carouselStyle.s3}>
				<Carousel.Caption style={carouselStyle.ht}>
					<h2 style={carouselStyle.t1}><span style={carouselStyle.ts1}>Healthy Recipes</span></h2>
					<h2 style={carouselStyle.t2}><span style={carouselStyle.ts2}>from the best chefs</span></h2>
					<h2 style={carouselStyle.t3}><span style={carouselStyle.ts3}>for all</span></h2>
				</Carousel.Caption>
			</Carousel.Item>,
			<Carousel.Item className="hero-slide-item set-bg" style={carouselStyle.s4}>
				<Carousel.Caption style={carouselStyle.ht}>
					<h2 style={carouselStyle.t1}><span style={carouselStyle.ts1}>Refereshing Tastes</span></h2>
					<h2 style={carouselStyle.t2}><span style={carouselStyle.ts2}>helps Weightloss</span></h2>
					<h2 style={carouselStyle.t3}><span style={carouselStyle.ts3}>full of Goodness</span></h2>
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
	},
	item:{
		height: '694px',
  	 	display: 'table',
   		width: '100%',
   		overflow: 'hidden'
	},
	ht:{
		zIndex: '3',
   		verticalAlign: 'middle',
   		display: 'table-cell',
   		textAlign: 'center'
	},
	t1:{
		fontWeight: '700',
   		color: '#fff',
   		position: 'relative',
		marginBottom: '10px',
		fontSize: '72px',
		zIndex: '3',
	},
	t2:{
		fontWeight: '700',
   		color: '#fff',
   		position: 'relative',
		marginBottom: '10px',
		fontSize: '48px',
		zIndex: '4',
	},
	t3:{
		fontWeight: '700',
   		color: '#fff',
   		position: 'relative',
		marginBottom: '10px',
		fontSize: '36px',
		zIndex: '5',
	},
	ts1:{
		display: 'inline-block',
   		borderRadius: '5px',
   		position: 'relative',
        boxShadow: '-1px -5px 20px 0px rgba(0, 0, 0, 0.3)',
   		opacity: '0',
		padding: '0 28px',
   		background: '#ff2a6b',
        transform: 'rotate(4deg)'
	},
	ts2:{
		display: 'inline-block',
   		borderRadius: '5px',
   		position: 'relative',
        boxShadow: '-1px -5px 20px 0px rgba(0, 0, 0, 0.3)',
		opacity: '0',
		padding: '5px 28px',
   		background: '#fdc856',
        transform: 'rotate(0deg)',
   		left: '0',
   		top: '0'
	},
	ts3:{
		display: 'inline-block',
   		borderRadius: '5px',
   		position: 'relative',
        boxShadow: '-1px -5px 20px 0px rgba(0, 0, 0, 0.3)',
		opacity: '0',
		padding: '10px 28px',
		background: '#bdde64',
		transform: 'rotate(0deg)',
		top: '0'
	}
}



export default MainCarousel;