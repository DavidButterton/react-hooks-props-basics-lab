import React from "react";
import Links from "./Links";

function About(props) {  
//if props of bio is passed to this component, it is displayed inside of a <p> tag
//if props of bios is not passed down, or if bio is an empty string, don't display the <p> tag
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio  ? <p>{props.bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links linkedin={props.links.linkedin} github={props.links.github}/>
    
    </div>
  );
}

export default About;
