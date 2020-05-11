import React from 'react'

export default function Button(props) {

    return (
        <div onClick={props.onClick} className="card_button" style={{cursor: 'pointer',display:"flex",justifyContent:"center",alignItems:"center",height:400,width:500,backgroundColor:props.background,marginRight:5,marginLeft:5,borderRadius:10,boxShadow:'2px 2px 5px #DDDDDD'}}>
            {props.children}
        </div>
    )
}
