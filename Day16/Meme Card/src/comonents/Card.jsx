
const Card =()=>{
    const Image = () =>{
        return(
        <img src="https://pbs.twimg.com/media/ET-_pRuXQAAv-Su.jpg" alt="" />
        )}
    return (
        <div className="card" >
            <Image/>
            
            <h2>React Card</h2>
            <p>This is Card</p>

        </div>
    )
}

export default Card;