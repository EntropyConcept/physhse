import type { NextPage } from 'next'
import React, {FunctionComponent} from 'react'
import { Timeline, Text } from '@mantine/core'
import {Circle, GitCommit, RotateClockwise2, Infinity, Rotate} from "tabler-icons-react"

const time = {
  color: "gray",
  style: {
    fontSize: ".8rem"
  }
}


const other : NextPage = () => {
  return (
    <>
      Здесь будет вся дополнительная функциональность (которую мы частично заберем у LMS).
    </>
  )
}

export default other;
