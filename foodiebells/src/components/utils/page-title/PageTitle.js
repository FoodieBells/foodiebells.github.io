import React from 'react'
import bg from '../../../assets/img/page-top-bg.jpg'

const PageTitle = (props) => {
  return (
    <section className="page-top-section set-bg" style={{backgroundImage: `url(${bg})`}}>
		<div className="container">
			<h2>{props.title}</h2>
		</div>
	</section>
  )
}



export default PageTitle;
