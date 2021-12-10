import React from 'react';
import './Card.css';

function Card(props)
{
    return(
        
       <div class="card" style={{
         backgroundImage: `url(${props.src})`,backgroundRepeat: 'no-repeat',color:'white'}}
         >
         <article id="team_names" >
         <a href="$">{props.head}</a> 
         </article>
         
         
        
        <div>
            <article id="car_name">
             <a href="$">{props.body}</a>
         </article>
        </div> 
        </div>
    )
}

export default Card;