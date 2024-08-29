import Posts from "./Post"
import "./Flexiwork.css"
import FlexiHeader from "./FlexiHeader"
export default function Flexiwork(){
    return(
    <>
    <FlexiHeader/>
    <hr />
    <h3 className='welcome'>Welcome to Flexiwork!</h3>
    <br />
    <br />
    <Posts/>
    </>
    )
}