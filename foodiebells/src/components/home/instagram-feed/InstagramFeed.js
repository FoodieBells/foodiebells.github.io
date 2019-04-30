import React from 'react'

const InstagramFeed = () => {
    return(
        <section className="instagram-feed">
		<div className="container">
			<div className="section-title">
				<h2>Instagram Feed</h2>
			</div>
			<div id="pixlee_container">
            </div>
            <script type="text/javascript">
                window.PixleeAsyncInit = function() {
                Pixlee.init({apiKey:'42xOgNumlbyGXetHrbGj'
                });
                Pixlee.addSimpleWidget({widgetId:'14558'});};</script><script src="//instafeed.assets.pixlee.com/assets/pixlee_widget_1_0_0.js"></script>
		</div>
	</section>
    );
}

export default InstagramFeed;