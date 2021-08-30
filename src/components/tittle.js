import './../styles/title.css'
function Title(props){
    return(
        <>
        <div className="title">
            <h2 className="title">{props.td.one}</h2>
            <hr className="hr"></hr>
        </div>
        </>
    )
}
export default  Title;