import React from 'react'
//import {BrowserRouter as Router} from 'react-router'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.png'

const Gallery = () => {
    return(
        <div className="gallery">
		<div className="gallery-slider owl-carousel">
			<div className="gs-item set-bg" data-setbg="img/instagram/1.jpg"></div>
			<div className="gs-item set-bg" data-setbg="img/instagram/2.jpg"></div>
			<div className="gs-item set-bg" data-setbg="img/instagram/3.jpg"></div>
			<div className="gs-item set-bg" data-setbg="img/instagram/4.jpg"></div>
			<div className="gs-item set-bg" data-setbg="img/instagram/5.jpg"></div>
			<div className="gs-item set-bg" data-setbg="img/instagram/6.jpg"></div>
		</div>
	</div>
    )
}

export default Gallery;