import React from 'react'
import PageTitle from '../utils/page-title/PageTitle';
const Shop = () => {
    return(
        <div style={{paddingTop : '91px'}}>
            <PageTitle title="Shop" />
            <section className="recipe-details-section">
                <div className="container">
                    <div className="recipe-meta">
                        <div className="racipe-cata">
                            <span>it makes it yummier...</span>
                        </div>
                        <h2>Shop</h2>
                        <div className="recipe-date">Amazon Store</div>
                    </div>
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="row">
                                {adElement}
                            </div>
                            <div className="site-pagination">
                                <span>01</span>
                                <a href="/">02</a>
                                <a href="/">03</a>
                            </div>
                                
                        </div>
                        <div className="col-lg-3">
                                <p>Have a look at these stuff to make your cooking experience even better and yummier..</p>
                        </div>
                    </div>
                    
                </div>
            </section>
        </div>
        
    )
};

const mylist = [
    {
        name:"InstantPot",
        adverLink:"https://www.amazon.ca/gp/product/B075CWJ3T8/ref=as_li_tl?ie=UTF8&camp=15121&creative=330641&creativeASIN=B075CWJ3T8&linkCode=as2&tag=foodiebellsof-20&linkId=fc9db8fee2b2dde2b7e39c9f4ef94c97",
        pic:"//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=CA&ASIN=B075CWJ3T8&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=foodiebellsof-20"
    },
    {
        name:"Thai Chilli Sauce",
        adverLink:"https://www.amazon.ca/gp/product/B00KTQ54HE/ref=as_li_tl?ie=UTF8&camp=15121&creative=330641&creativeASIN=B00KTQ54HE&linkCode=as2&tag=foodiebellsof-20&linkId=b01828832572ec78ecadc18c50c2bd30",
        pic:"//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=CA&ASIN=B00KTQ54HE&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=foodiebellsof-20"
    },
    {
        name:"Aroma Rice Cooker",
        adverLink:"https://www.amazon.ca/gp/product/B007WQ9YNO/ref=as_li_tl?ie=UTF8&camp=15121&creative=330641&creativeASIN=B007WQ9YNO&linkCode=as2&tag=foodiebellsof-20&linkId=457d94bccf6ed54f7978a564abcab9ae",
        pic:"//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=CA&ASIN=B007WQ9YNO&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=foodiebellsof-20"
    },
    {
        name:"Chia Seeds",
        adverLink:"https://www.amazon.ca/gp/product/B00WM6CHFQ/ref=as_li_tl?ie=UTF8&camp=15121&creative=330641&creativeASIN=B00WM6CHFQ&linkCode=as2&tag=foodiebellsof-20&linkId=7de1b77eb8eeb8ad579ca94f512a427b",
        pic:"//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=CA&ASIN=B00WM6CHFQ&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=foodiebellsof-20"
    },
    {
        name:"Thai Green Curry",
        adverLink:"https://www.amazon.ca/gp/product/B000SRMB16/ref=as_li_tl?ie=UTF8&camp=15121&creative=330641&creativeASIN=B000SRMB16&linkCode=as2&tag=foodiebellsof-20&linkId=024fb38e084b921a4490ca27b711ba8c",
        pic:"//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=CA&ASIN=B000SRMB16&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=foodiebellsof-20"
    },
    {
        name:"Maggi",
        adverLink:"https://www.amazon.ca/gp/product/B00AP81DLC/ref=as_li_tl?ie=UTF8&camp=15121&creative=330641&creativeASIN=B00AP81DLC&linkCode=as2&tag=foodiebellsof-20&linkId=7afebf73e0c184216fac0a020b009945",
        pic:"//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=CA&ASIN=B00AP81DLC&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=foodiebellsof-20"
    },
    {
        name:"Hajmola",
        adverLink:"https://www.amazon.ca/gp/product/B0149L2SE6/ref=as_li_tl?ie=UTF8&camp=15121&creative=330641&creativeASIN=B0149L2SE6&linkCode=as2&tag=foodiebellsof-20&linkId=4934c0f900b6f031339dfa876d2c0a81",
        pic:"//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=CA&ASIN=B0149L2SE6&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=foodiebellsof-20"
    },
    {
        name:"Chicken Soup",
        adverLink:"https://www.amazon.ca/gp/product/B000XRH3YQ/ref=as_li_tl?ie=UTF8&camp=15121&creative=330641&creativeASIN=B000XRH3YQ&linkCode=as2&tag=foodiebellsof-20&linkId=3a468fcadec1899656e611c3ef540d64",
        pic:"//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=CA&ASIN=B000XRH3YQ&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=foodiebellsof-20"
    },
    {
        name:"Garlic Pasta Sauce",
        adverLink:"https://www.amazon.ca/gp/product/B00IHRRRS6/ref=as_li_tl?ie=UTF8&camp=15121&creative=330641&creativeASIN=B00IHRRRS6&linkCode=as2&tag=foodiebellsof-20&linkId=68d117a17ea4a99f4a3d305bf2dfe3b8",
        pic:"//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=CA&ASIN=B00IHRRRS6&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=foodiebellsof-20"
    }
    
];
const adElement = mylist.map((e,i)=>
    <div className="card w-25 m-2" key={i}>
    <div className="mx-auto d-block">
        <a href={e.adverLink}>
           <img border="0" src={e.pic}  alt="" />
        </a>
   </div> 
    <div className="card-body text-center">
        <h4 className="card-title">{e.name}</h4>
    </div>
   </div>
);


export default Shop;