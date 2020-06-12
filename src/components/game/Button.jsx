import React from "react";
import classNames from "classnames";
// import "components/Button.scss";

export default function Button(props) {
   // let buttonClass = "button";

   // if (props.confirm) {
   //   buttonClass += " button--confirm";
   // }
 
   // if (props.danger) {
  //  //    buttonClass += " button--danger";
  //  //  }
  //  let buttonClass = classNames(
  //    'button', 
  //    {
  //    'button--confirm': props.confirm, 
  //    'button--danger': props.danger
  //   })
    
    return (
      <button
        className={""}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.children}
      </button>
    );
}