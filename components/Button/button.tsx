import React from 'react'
import style from "./style.module.scss"
import classNames from 'classnames'
import { FunctionComponent } from 'react'

type Props = {
  black?: boolean,
  blue?: boolean,
  white?: boolean,
  small?: boolean,
  width?: string | number,
  className?: string,
  children?: any
}

const Button:FunctionComponent<Props> = (props:Props) => {
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