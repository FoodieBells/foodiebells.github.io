import React from 'react'

const Page404 = () =>(
        <section class="404" style={{paddingTop : '91px',height:'70vh'}}>
		<div class="container">
            <div class="404-content text-center pt-5 pb-5">
                <h1 class="p-2" style={{fontSize : '91px',fontWeight:'800',textDecoration:'overline underline',color:'#ff2a6b'}}>404</h1>
                <h3>Page Not Found!</h3>
                <div class="mt-4">
                    <a href="/" class="btn btn-outline-danger">Return to Home</a>
                </div>
            </div>
        </div>
    </section>
);

export default Page404;
