"use client";
// import React from "react";
// import Link from "next/link";

// const Home: React.FC = () => {
//     return (
//         <div className="max-w-screen-xl mx-auto px-4">
//             <header className="text-center py-10">
//                 <h1 className="text-4xl font-bold">Skill Sphere</h1>
//                 <p className="text-xl text-gray-600">Find freelance services</p>
//             </header>

//             <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//                 {/* Gig cards */}
//             </div>

//             <footer className="text-center py-6">
//                 <Link href="/gigs/create">
//                     <Link href="#" className="button">
//                         Create a Gig
//                     </Link>
//                 </Link>
//             </footer>
//         </div>
//     );
// };

// export default Home;

import Image from "next/image";
import Link from "next/link";

//import { useRouter } from "next/router";

export default function Home() {
    //const router = useRouter();
    return (
        <div>
            <h1>hello from root page</h1>
            <Link href="./about">About</Link>
            <br />
            <Link href="./login1">Login</Link>
            <br />
            <Link href="./signup1">Signup</Link>
            <br />
            {/* <Navbar router={router} /> */}
        </div>
    );
}
