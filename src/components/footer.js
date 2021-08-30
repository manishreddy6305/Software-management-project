import './../styles/Footer.css'

function Footer(){
    return(
        <>
        <div className="Contact" id="Contact">
          <div className="c">
             <h1 className="w"><a href="#navbar-1" className="company">The Story Shop</a></h1>
             <br></br>
          </div>
          <div className="l">
            <a href="https://www.facebook.com/manish.reddy.79827/" target="_blank" id="icon"><i className="fab fa-facebook-square"></i></a>
            <a href="https://github.com/manishreddy6305"  target="_blank"  id="icon"><i className="fab fa-github-square"></i></a>
            <a href="https://twitter.com/_ma__nish"  target="_blank"  id="icon"><i className="fab fa-twitter"></i></a>
            <a href="https://www.linkedin.com/in/manish-reddy-048500202/"  target="_blank"  id="icon"><i className="fab fa-linkedin"></i></a>
          </div>
          <div className="line">
            <span>About us</span>
            <span>Press</span>
            <span>Blog</span>
            <span>FAQ</span>
            <span>Literacy Partners</span>
          </div>
         </div>
        </>
    )
}
export default Footer;