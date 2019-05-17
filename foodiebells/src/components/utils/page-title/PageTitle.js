import React from 'react'
import bg from '../../../assets/img/page-top-bg.jpg'

const PageTitle = (props) => {
  return (
    <section class="page-top-section set-bg" style={{backgroundImage: `url(${bg})`}}>
		<div class="container">
			<h2>{props.title}</h2>
		</div>
	</section>
  )
}



export default PageTitle;
