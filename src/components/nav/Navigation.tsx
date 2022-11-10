import Link from 'next/link'


const Navigation = (): JSX.Element => {
    return (
        < div >
            <Nav></Nav>
        </div>
    )
}

export default Navigation;


function Nav(): JSX.Element {

    return (

        /*
            flex   llena el espacio 
            items-center lo elementos se centran
            justify-between se agrega un espacio entre los elementos
            mr margen derecho
            mt margen arriba
            hover pasar texto sobre el link
        */
        <nav className="flex items-center justify-between  bg-teal-500 p-3">
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <Link href='/' className=" mt-1 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" >
                    Inicio
                </Link>

                <Link href='/nuevo-producto' className=" mt-1 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" >
                    Nuevo producto
                </Link>
            </div>
            <Link href='/carrito' className=" mt-1 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" >
                Carrito
            </Link>

        </nav>   
    )
}
