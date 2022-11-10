import { type NextPage } from "next";
import Head from "next/head";
import Layout from "../components/nav/Layout";

const Producto: NextPage = () => {
    return (

        /*
        bg-gradient-to-r   agregando un color gradinte
        overflow-scroll se añade scrooll
        sm:max-w-md  maximo en whith y minimo en with
         */
        <div>
            <Head>
                <title>Nuevo producto</title>
            </Head>
            <Layout>

                <div className="w-full h-auto  bg-gradient-to-r from-blue-100 via-purple-100 
                to-pink-100 p-4 flex items-center justify-center" >

                    <div className="bg-white py-6 px-10 sm:max-w-md w-full ">

                        <label className="form-label inline-block mb-2 text-gray-700 text-3xl"> Nuevo articulo</label>


                        <div className="mb-3 xl:w-96">
                            <label className="form-label inline-block mb-2 text-gray-700 text-xl"> Nombre</label>

                            <input
                                type="text"
                                className="
                                            form-control
                                            block
                                            w-full
                                            px-4
                                            py-2
                                            text-xl
                                            font-normal
                                             text-gray-700
                                             bg-white bg-clip-padding
                                             border border-solid border-gray-300
                                            rounded
                                            transition
                                            ease-in-out
                                            m-0
                                             focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        "
                                placeholder="Nombre" />
                        </div>
                        <div className="mb-3 xl:w-96">
                            <label className="form-label inline-block mb-2 text-gray-700 text-xl"> Slug</label>

                            <input
                                type="text"
                                className="
                                form-control
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-gray-100 bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder="Slug"
                                disabled />
                        </div>
                        <div className="mb-3 xl:w-96">
                            <label className="form-label inline-block mb-2 text-gray-700">Descripción</label>
                            <textarea className="
                                form-control
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                 text-gray-700
                                 bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                              
                                m-0
                                 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder="Descripción"></textarea>
                        </div>

                        <div className="mb-3 xl:w-96">
                            <label className="form-label inline-block mb-2 text-gray-700 text-xl"> Inventario</label>

                            <input
                                type="number"
                                className=" form-control
                                block
                                w-full
                                px-4
                                py-2
                                text-xl
                                font-normal
                                 text-gray-700
                                 bg-white bg-clip-padding
                                 border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder="Inventario"
                                />
                        </div>

                        <div className="mb-3 xl:w-96">
                            <label className="form-label inline-block mb-2 text-gray-700 text-xl"> Precio</label>

                            <input
                                type="number"
                                className=" form-control
                                block
                                w-full
                                px-4
                                py-2
                                text-xl
                                font-normal
                                 text-gray-700
                                 bg-white bg-clip-padding
                                 border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder="Precio" 
                                
                                />

                            <input name="phone" type ="text" pattern="[0-9]*"  />
                        </div>
                        <div className="flex justify-center my-6">
                            <button className=" rounded-full  p-3 w-full sm:w-56   bg-cyan-600 text-white text-lg font-semibold " >
                                Guardar
                            </button>
                        </div>
                    </div>

                </div>
            </Layout >
        </div>
    );
};

export default Producto;

