import './../styles/LAC.css'
function LAC(props){
    return(
        <>
        <div className="pic">
        <img src={props.td2.two} alt="pic" className="Lai"/>
        <h3 >Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
        <p><span> Posted by Manish</span> on Aug 30,2021</p>
        </div>
        </>
    )
}
export default LAC;