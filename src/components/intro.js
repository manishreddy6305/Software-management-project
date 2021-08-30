import book from './../images/slice1.png'
import './../styles/intro.css'
import { useState } from 'react'
import Button from './button'
function Intro(){
    const [buttonc] = useState({
        content1: "Our reading campagin"
    });
    return(
        <>
        <div className="intro">
        <div className="introsub1">
            <div>
            <p className="Read">Read book</p>
            <h2 className="heading">When you read, <br></br>Someone else get inspired</h2>
            <Button buttonc={buttonc}/>
            </div>
        </div>
        <div className="introsub2">
        <img src={book} alt="book" className="book"></img>
        </div>
        </div>
        </>
    )
}
export default Intro;