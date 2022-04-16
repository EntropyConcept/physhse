import React, {ReactNode, useState} from 'react'
import style from "./style.module.scss"
import { ActionIcon } from '@mantine/core'
import { Eye, EyeOff } from 'tabler-icons-react'

export type Props = {
    children: ReactNode,
}

const DEField = (props:Props) => {
  const [disabled, setDisabled] = useState<boolean>(false)
  const passDisable = React.Children.map(props.children, child=>{
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { disabled: disabled });
    }
  })
  return (
    <div className={style.wrapper}>
      <div className={style.main}>
        {passDisable}
      </div>
      <ActionIcon variant="outline" onClick={()=>setDisabled(!disabled)} size={36} style={{
        borderColor: "#ccc"
      }} className={style.icon}>{disabled?<EyeOff size={18}/>:<Eye size={18}/>}</ActionIcon>
    </div>
  )
}

export default DEField;
