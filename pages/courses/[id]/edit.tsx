import { NextPage } from "next";
import { Text } from "@mantine/core";
import { useEffect, useContext } from "react";
import { PathContext } from "../../../lib/context";
import { CourseData } from "../../../lib/hooks";
import CourseDataEdit from "../../../components/CourseData/CourseDataEdit";

export async function getServerSideProps(context: any) {
    const [main, data, error] = await CourseData(context.query.id);

    return {
        props: { main, data, error },
    };
}

type Props = {
    main: any;
    data: any;
    error: string;
};

const Page: NextPage<Props> = ({ main, data, error }) => {
    const [, setPath] = useContext(PathContext);
    useEffect(() => {
        setPath(main.name);
        return () => {
            setPath("");
        };
    }, []);
    return (
        <>
            {error && <Text color="red">{error}</Text>}
            {!error && (
                <>
                    <CourseDataEdit
                        main={main}
                        data={data}
                        error={error}
                    ></CourseDataEdit>
                </>
            )}
        </>
    );
};

export default Page;
