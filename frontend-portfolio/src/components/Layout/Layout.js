import TopNavbar from "../TopNavbar/TopNavbar";

const Layout = ({children}) => {
    return (
        <div>
            <TopNavbar></TopNavbar>
            <main>
                {children}
            </main>
        </div>
    );
}

export default Layout;