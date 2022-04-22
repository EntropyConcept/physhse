import React, { ReactChild } from "react";
import { Text } from "@mantine/core";

export type Props = {
    main: ReactChild;
    data: ReactChild;
    key?: number | null;
    noBreak?: boolean;
};

const Entry = (props: Props) => {
    return (
        <>
            <Text color="black" component="span">
                {props.main}
                {": "}
            </Text>
            <Text color="gray" component="span">
                {props.data}
            </Text>
            {!props.noBreak && <br />}
        </>
    );
};

export default Entry;
