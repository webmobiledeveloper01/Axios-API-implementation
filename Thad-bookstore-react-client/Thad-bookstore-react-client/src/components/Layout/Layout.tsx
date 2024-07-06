import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { LayoutProps } from "../../types/types";

const Layout = (props: LayoutProps)  => {
    const { categories } = props;
    return (
        <main className={styles.main}>
            <Header categories= {categories} />
            <Nav categories= {categories}/>
            <Outlet />
            <Footer />
        </main>
    );
};

export default Layout;