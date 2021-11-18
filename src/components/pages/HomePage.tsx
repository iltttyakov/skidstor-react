import React, {FC} from 'react';
import Categories from "../blocks/Categories/Categories";
import Catalog from "../blocks/Catalog/Catalog";


type HomePageProps = {}

const HomePage: FC<HomePageProps> = () => {
    return (
        <>
            <Categories/>
            <Catalog/>
        </>
    );
};

export default HomePage;