import React from 'react';
import { fetchData } from './Actions';
import './ig.css';

export default class InstagramFeed extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			igSent: false,
			client_id: 'c20d7b1114bd4052a9ee2a797f5d53b8',
			oAuth: '10623116731.c20d7b1.76104307564d408c966bac98b9305c9b',
			baseURL: 'https://api.instagram.com/v1'
		}
	}
	setSelfURL() {
		const location = '/users/self/media/recent/?access_token='
		let url = this.state.baseURL + location + this.state.oAuth + '&callback=myJsonpCallback'
		console.log(url)
		this.setState((prevState, props) => {
			return {url: url};
		});
	}
	stateUpdate(fetchedData) {
		this.setState((prevState, props) => {
			return {
				igData: fetchedData.data,
				igSent: true,
				client_id: null,
				oAuth: null,
				baseURL: null,
				url: null
			};
		});
	}
	null(){

	}

	igMount() {
		fetchData(this.state.url, this.stateUpdate.bind(this))
	}
	componentDidMount() {
		this.setSelfURL()
	}
	componentDidUpdate(prevProps, prevState) {
		this.state.igSent ? this.null() : this.igMount();
	}
	render() {
		return (
			<section id="InstagramFeed" className="container mb-4">
				<div className="section-title">
					<h2>Instagram Feed</h2>
				</div>
				<div className="row">
				{ this.postCard()}
				</div>
			</section>
		)
	}
	postCard(){
		return this.state.igSent ? 
			this.state.igData.map((post) => 
			<div className=" col-sm-12 col-md-6 col-lg-4" key={post.id}>
				<a href={post.link}>
				<img style={{width:'300px',height:'250px',margin:'10px'}} src={post.images.standard_resolution.url} alt='' className="img-thumbnail ig-post" />
				</a>
			</div>
			)
			:null;
	}
}