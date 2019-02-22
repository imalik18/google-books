import React from 'react';
import "./Book.css"



function Book (props){
    return(
    <div className="result">
        <button onClick={()=> props.handleSave(props.info)}>Save</button>
        <div> Title : {props.info.title}</div>
        <div> Author : {props.info.authors[0]}</div>
        <div> Description : {props.info.description}</div>
        <div> <img src={props.info.imageLinks.smallThumbnail}/></div>
        <div> Link : <a href={props.info.infoLink}> {props.info.infoLink} </a> </div>
    </div>
    )
}


export default Book;