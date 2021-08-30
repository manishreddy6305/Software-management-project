import Title from './tittle'
import { useState } from 'react';
import './../styles/LA.css'
import LAC from './LAC';
function LA(){
    const [t3]=useState({
        one:'Latest Articles'
    })
    const [url]=useState({
        two: "https://i.pinimg.com/564x/14/54/af/1454af180ecad528cd45a3a2e837dd32.jpg"
    })
    const [url2]=useState({
        two: "https://i.pinimg.com/236x/29/88/8d/29888ddd30d450cfcd07b33de0899e19.jpg"
    })
    const [url3]=useState({
        two: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF4jN6kIAxYjwJYFdZfE3QPHnINMXm5EjExQ&usqp=CAU"
    })
    return(
        <>
         <div className="La">
         <Title td={t3}/>
         <div className="card">
         <LAC td2={url}/>
         <LAC td2={url2}/>
         <LAC td2={url3}/>
         </div>
         </div>
        </>
    )
}
export default LA;