import classNames from "classnames";
import { ReactNode } from "react";
import style from "./style.module.scss";

export interface Props {
    children?: ReactNode;
    padding?: string | number;
    overflow?: string;
    style?: any;
    className?: string;
    onClick?: any;
    borderRadius?: string | number;
}

const Panel = (props: Props) => {
    return (
        <div
            onClick={props.onClick}
            className={classNames(style.panel, props.className)}
            style={{
                ...props.style,
                padding: props.padding,
                overflow: props.overflow,
                borderRadius: props.borderRadius,
            }}
        >
            {props.children}
        </div>
    );
};

export default Panel;
