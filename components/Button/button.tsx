import React from 'react'
import style from "./style.module.scss"
import classNames from 'classnames'
import { FunctionComponent } from 'react'

type Props = {
  black ?: boolean,
  blue ?: boolean,
  white ?: boolean,
  red ?: boolean,
  small ?: boolean,
  width ?: string | number,
  className ?: string,
  children ?: any,
  onClick ?: (...args : any[]) => any,
  style ?: any,
  ref ?: any,
  href ?: string,
}

const Button:FunctionComponent<Props> = (props:Props) => {
  return (
    <div onClick={props.onClick} className={
        classNames(style.main, props.className, {
          [style.black]: props.black, 
          [style.white]: props.white, 
          [style.blue]: props.blue, 
          [style.red]: props.red, 
          [style.small]: props.small})
      } style={props.style} ref={props.ref}>
      {props.children}
    </div>
  )
}


export default Button;