import React from 'react'
import style from "./style.module.scss";
import Button from '../Button/button';
import classNames from 'classnames';
import Image from 'next/image';
import {FunctionComponent} from "react"

const Header : FunctionComponent = (props:any) => {
    return (
      <div className={style.main}>
          <div className={style.container}>
              <div className={style.left}>
                  <div className={style.label}>
                      <img src="/hse3.svg" alt="hse-logo" className={style.logo}/>
                  </div>
                  <div className={style.buttons}>
                      <button className={classNames({[style.selected]:props.tab == 0})}>Главная</button>
                      <button className={classNames({[style.selected]:props.tab == 1})}>Курс 1</button>
                      <button className={classNames({[style.selected]:props.tab == 2})}>Курс 2</button>
                      <button className={classNames({[style.selected]:props.tab == 3})}>Курс 3</button>
                      <button className={classNames({[style.selected]:props.tab == 4})}>Курс 4</button>
                      <button className={classNames({[style.selected]:props.tab == 5})}>Другое</button>
                  </div>
              </div>
              <div className={style.right}></div>
          </div>
      </div>
    )
  }

export default Header;
