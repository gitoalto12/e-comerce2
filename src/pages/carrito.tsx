import { type NextPage } from "next";
import Head from "next/head";
import Layout from "../components/nav/Layout";

const Carrito: NextPage = (): JSX.Element => {
    return (
        <div>
            <Head>
                <title>Carrito</title>
            </Head>
            <Layout>
                <div className="w-full h-auto  bg-gradient-to-r from-blue-100 via-purple-100 
                     to-pink-100 p-4 flex items-center justify-center">


                </div>

            </Layout>
        </div>
    )
}

export default Carrito;