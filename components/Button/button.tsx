import React from 'react'
import style from "./style.module.scss"
import classNames from 'classnames'
import { FunctionComponent } from 'react'

const Button:FunctionComponent = (props:any, black = false, white = false, blue = true, small = false) => {
  return (
    <div className={
        classNames(style.main, props.className, {
          [style.black]: props.black, 
          [style.white]: props.white, 
          [style.blue]: props.blue, 
          [style.small]: props.small})
      } style={{
        width: props.width,
      }}>
      {props.children}
    </div>
  )
}


export default Button;