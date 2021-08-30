import Button from "./button";
import './../styles/offer.css'
import bookshelf from './../images/bookshelf.png'
import { useState } from "react";
import gift from './../images/gift.png'
function Offer(){
    const [buttonc]=useState({
        content1:"Shop now"
    })
    return(
        <>
          <div className="main">
              <div className="main2">
                  <div className="main3">
                    <h1 className="off">50% OFF</h1>
                    <p className="fun">Your next great reading experience will be more fun and enjoyable</p>
                    <Button buttonc={buttonc}/>
                  </div>
                  <div className="main4">
                  <img src={bookshelf} className="offerimage" alt="image"></img>
                  </div>
              </div>
              <div className="main5">
                <img src={gift} alt="gift" className="gift"></img>
                <p className="giftc">Gifts for harry potter fans</p>
                <Button buttonc={buttonc}/>
                  </div>
          </div>
        </>
    )
}
export default Offer;