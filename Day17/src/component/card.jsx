const Card = (props) =>{
return(
<div className="card">
    <div className="title"><h1>{props.title}</h1></div>
    <div className="cal"><h2>you have consumed {props.cal} cals today</h2></div>
</div>
);
};

export default Card;

