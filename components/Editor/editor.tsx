import { useState } from 'react';
import RichTextEditor from './dynamic'
import style from "./style.module.scss"

export type Props = {}

export default function Editor(props: Props) {
    const [value, setValue] = useState('');
    return <div className={style.wrapper}>
        <RichTextEditor value={value} onChange={setValue} stickyOffset={0}
    controls={[
        ['alignLeft', 'alignCenter', 'alignRight'],
        ['h1', 'h2', 'h3'],
        ['bold', 'italic', 'underline', 'strike', "clean"],
        ['unorderedList', 'orderedList'],
        ['sup', 'sub'],
        ['link', 'code', 'blockquote'],
      ]}
    style={{
        background: "#f4f4f5",
        fontSize: "1rem",
        borderRadius: ".5rem",
    }} className={style.editor}
    >

    </RichTextEditor>
    </div>
}