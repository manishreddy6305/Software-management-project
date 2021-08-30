import Collection from './collection'
import Intro from './intro'
import Offer from './offer'
import LA from './latestarticle'
import Footer from './footer'
function Welcome(){
    return(
        <>
          <Intro />
          <Offer />
          <Collection />
          <LA />
          <Footer />
        </>
    )
}
export default Welcome;