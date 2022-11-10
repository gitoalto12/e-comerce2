
import Navigation from "./Navigation";


const Layout = ({ children }: { children: any }): JSX.Element => {
    return (
        <div>
            <Navigation></Navigation>
            <div>
                {children}
            </div>

        </div>)


}

export default Layout;
