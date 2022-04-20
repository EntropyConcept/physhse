import { NextPage } from "next";
import { Text } from "@mantine/core";
import { useEffect, useContext } from "react";
import { PathContext } from "../../lib/context";
import { CourseData } from "../../lib/hooks";
import CourseDataDisplay from "../../components/CourseDataDisplay/CourseDataDisplay";

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
                    <CourseDataDisplay
                        main={main}
                        data={data}
                        error={error}
                    ></CourseDataDisplay>
                </>
            )}
        </>
    );
};

export default Page;
