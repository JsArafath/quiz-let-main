import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
export const ItemsContext = createContext([]);
const Layout = () => {
    const items = useLoaderData();
    const itemsData = items.data;
    return (
        <ItemsContext.Provider value={itemsData}>
            <div>
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </ItemsContext.Provider>
    );
};

export default Layout;