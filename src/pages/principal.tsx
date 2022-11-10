import { type NextPage } from "next";
import Head from "next/head";
import Layout from "../components/nav/Layout";

const Principal: NextPage = () => {
    return (

        <div>
            <Head>
                <title>About</title>
            </Head>
            <Layout>
                <h1>About</h1>
            </Layout>

        </div>
    );
};

export default Principal;