import { NextPage } from "next";
import { Text } from "@mantine/core";
import { useEffect, useContext } from "react";
import { PathContext } from "../../lib/context";
import { CourseData } from "../../lib/hooks";
import CourseDataDisplay from "../../components/CourseData/CourseDataDisplay";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../lib/firebase";

export async function getStaticProps({ params }: any) {
    const [main, data, error] = await CourseData(params.id);

    return {
        props: { main, data, error },
        revalidate: 1800,
    };
}

export async function getStaticPaths() {
    const q = await getDocs(collection(firestore, "courses"));
    const paths = q.docs.map((d) => `/courses/${d.id}`);
    return {
        paths: paths,
        fallback: "blocking",
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
