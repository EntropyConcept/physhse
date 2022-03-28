import type { NextPage } from 'next'
import React from 'react'

const c3 : NextPage = () => {
  return (
    <>
      Курс 3 <br />
      На этой странице будет функционал переключения между кафедрами, так что сделана она будет не скоро.
      <div style={{width: "100%", display: "flex", alignItems: "center", justifyContent:"center", height: "50vh"}}>
        <img src="/katze.jpeg" alt="" style={{height: "60%", borderRadius: ".5rem", boxShadow: ".2rem .1rem .5rem #0008"}}/>
      </div>
    </>
  )
}

export default c3;
