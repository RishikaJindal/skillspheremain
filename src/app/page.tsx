import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import Heroes from "@/components/layout/Hero";
import Link from "next/link";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store";

const Home: React.FC = () => {
    return (
        <>
            <Header />
            <Hero />
        </>
    );
};

{
    /* Hello word */
}
{
    /* <div className="container mx-auto px-4">
             
                <p>This is a content to make our page longer</p>
                <div className="w-full h-screen bg-blue-300">
                    <h1>Welcome to SkillSphere</h1>
                    {/* <CatCard /> */
}
{
    /* </div>
                <p>Lorem Ipsum is simply dummy text ...</p>
            </div> */
}

export default Home;
