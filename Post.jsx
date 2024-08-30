export default function Posts() {
    let style = {
        backgroundColor: 'blue',
        borderRadius:'15px',
        color:'white',
        border: '2px solid blue',
        margin:'10px'

    }
    let divStyle ={
        display:'flex',
        margin: '200px',
        justifyContent:'center',
        alignItems:'center'
    }
    return(
        <div style={divStyle} >
        <div>Description :- </div>
        <img src="" alt="none" style={{margin:'10px', justifyContent:'center', alignItems:'center'}} />
        <div className="post_buttons" ><button style={style}>Apply</button>
        <button style={style}>More Details</button></div>
        </div>
    )
}