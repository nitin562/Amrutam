import React from 'react'
import "./Review.style.css"
import ReviewTile from './ReviewTile'
import ReviewImage from "../../Images/reviewImg.png"
export default function Review() {
  return (
    <div className='ReviewCont'>
        <div className='ReviewHead'>
            <p>Featured Reviews (102)</p>
        </div>
        <div className="reviewsArea">
            <ReviewTile name="Alicent Hightower" position="Consulted for Skin care" date="20 January 2023" stars={5} description="Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods" img={ReviewImage}/>
            
            <ReviewTile name="Alicent Hightower" position="Consulted for Skin care" date="20 January 2023" stars={5} description="Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods" img={ReviewImage}/>

        </div>
    </div>
  )
}
