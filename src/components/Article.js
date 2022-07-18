import React from "react";

function Article({ title, date='January 1, 1970', preview, minutes}){
  let coffee='☕️';
  let bentoBox='🍱';
  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date} .  
        {
          (minutes < 30)?(
            coffee=coffee.repeat(Math.ceil(minutes/5))
            ):((minutes>30)?(
                bentoBox=bentoBox.repeat(Math.ceil(minutes/10))
            ):(null)
            )
        }{minutes} min read
      </small>
      <p>{preview}</p>
      
    </article>
  )
}


export default Article;