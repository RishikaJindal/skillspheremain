"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
//import Toast, { showToast } from "../../components/Toast";
//import "react-toastify/dist/ReactToastify.css";
// import upload from "../../utils/upload";
import styles from "./Register.module.scss";
import axios from "axios";
import upload from "@/app/utils/upload";
import newRequest from "@/app/utils/newRequest";
// import newRequest from "../../utils/newRequest";
// import { useNavigate } from "react-router-dom";

interface User {
    username: string;
    email: string;
    password: string;
    img: string | null;
    country: string;
    isSeller: boolean;
    desc: string;
}

const Register1: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const [user, setUser] = useState<User>({
        username: "",
        email: "",
        password: "",
        img: null,
        country: "",
        isSeller: false,
        desc: "",
    });

    // const navigate = useNavigate();

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setUser((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const handleSeller = (e: ChangeEvent<HTMLInputElement>) => {
        setUser((prev) => {
            return { ...prev, isSeller: e.target.checked };
        });
    };

    const handleSubmit = async (
        e: FormEvent<HTMLFormElement>
    ): Promise<void> => {
        e.preventDefault();
        // console.log("file : ", file);
        // if (!file) {
        //     console.error("Please select a file.");
        //     return;
        // }
        // const url = await upload(file);
        console.log("userdetails", user);
        try {
            const res = await newRequest.post("/auth/register", {
                user,
            });
            // showToast("Hello, this is a toast notification!");
            // console.log("userdetails", user);
            console.log("res : ", res);
            window.location.href = "/login";
        } catch (err) {
            console.log(err);
        }
        console.log("submit call");

        // if (!file) {
        //     console.error("Please select a file.");
        //     return;
        // }

        // const url = await upload(file);
        // try {
        //   await newRequest.post("/auth/register", {
        //     ...user,
        //     img: url,
        //   });
        //   navigate("/");
        // } catch (err) {
        //   console.error(err);
        // }
    };
    console.log("user  : ", user);
    return (
        <div className={styles.register}>
            <form onSubmit={handleSubmit}>
                <div className={styles.left}>
                    <h1>Create a new account</h1>
                    <label htmlFor="">Username</label>
                    <input
                        name="username"
                        type="text"
                        placeholder="johndoe"
                        onChange={handleChange}
                    />
                    <label htmlFor="">Email</label>
                    <input
                        name="email"
                        type="email"
                        placeholder="email"
                        onChange={handleChange}
                    />
                    <label htmlFor="">Password</label>
                    <input
                        name="password"
                        type="password"
                        onChange={handleChange}
                    />
                    <label htmlFor="">Profile Picture</label>
                    <input
                        type="file"
                        onChange={(e) => setFile(e.target.files?.[0] || null)}
                    />
                    <label htmlFor="">Country</label>
                    <input
                        name="country"
                        type="text"
                        placeholder="India"
                        onChange={handleChange}
                    />
                    <button type="submit">Register</button>
                </div>
                <div className={styles.right}>
                    <h1>I want to become a seller</h1>
                    <div className={styles.toggle}>
                        <label htmlFor="">Activate the seller account</label>
                        <label className={styles.switch}>
                            <input type="checkbox" onChange={handleSeller} />
                            <span className={styles.slider}></span>
                        </label>
                    </div>
                    <label htmlFor="">Phone Number</label>
                    <input
                        name="phone"
                        type="text"
                        placeholder="+1 234 567 89"
                        onChange={handleChange}
                    />
                    <label htmlFor="">Description</label>
                    <textarea
                        placeholder="A short description of yourself"
                        name="desc"
                        id=""
                        //cols="30"
                        //rows="10"
                        onChange={handleChange}
                    ></textarea>
                </div>
            </form>
        </div>
    );
};

export default Register1;

// "use client";

// import React, { useState, ChangeEvent, FormEvent } from "react";
// import styles from "./Register.module.scss";
// import axios from "axios";
// import upload from "@/app/utils/upload";
// import newRequest from "@/app/utils/newRequest";

// interface User {
//     username: string;
//     email: string;
//     password: string;
//     img: string | null;
//     country: string;
//     isSeller: boolean;
//     desc: string;
// }

// const Register1: React.FC = () => {
//     const [file, setFile] = useState<File | null>(null);
//     const [user, setUser] = useState<User>({
//         username: "",
//         email: "",
//         password: "",
//     img: null,
//         country: "",
//         isSeller: false,
//         desc: "",
//     });
//     const [errors, setErrors] = useState<Partial<User>>({});

//     const handleChange = (
//         e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//     ) => {
//         setUser((prev) => {
//             return { ...prev, [e.target.name]: e.target.value };
//         });
//     };

//     const handleSeller = (e: ChangeEvent<HTMLInputElement>) => {
//         setUser((prev) => {
//             return { ...prev, isSeller: e.target.checked };
//         });
//     };

//     const handleSubmit = async (
//         e: FormEvent<HTMLFormElement>
//     ): Promise<void> => {
//         e.preventDefault();
//         if (!file) {
//             setErrors({ img: "Please select a file." });
//             return;
//         }

//         const url = await upload(file);
//         try {
//             const res = await newRequest.post("/auth/signup", {
//                 ...user,
//                 img: url,
//             });
//             console.log("userdetails", user);
//             console.log("res : ", res);
//             window.location.href = "/login";
//         } catch (err) {
//             console.log(err);
//         }
//     };

//     const validateEmail = (email: string): boolean => {
//         // Basic email validation regex
//         const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return regex.test(email);
//     };

//     const validateForm = (): boolean => {
//         const errors: Partial<User> = {};

//         if (!user.username.trim()) {
//             errors.username = "Username is required";
//         }

//         if (!user.email.trim()) {
//             errors.email = "Email is required";
//         } else if (!validateEmail(user.email)) {
//             errors.email = "Invalid email address";
//         }

//         if (!user.password.trim()) {
//             errors.password = "Password is required";
//         }

//         if (!user.country.trim()) {
//             errors.country = "Country is required";
//         }

//         setErrors(errors);
//         return Object.keys(errors).length === 0;
//     };

//     return (
//         <div className={styles.register}>
//             <form onSubmit={handleSubmit}>
//                 <div className={styles.left}>
//                     <h1>Create a new account</h1>
//                     <label htmlFor="">Username</label>
//                     <input
//                         name="username"
//                         type="text"
//                         placeholder="johndoe"
//                         onChange={handleChange}
//                     />
//                     {errors.username && <span>{errors.username}</span>}
//                     <label htmlFor="">Email</label>
//                     <input
//                         name="email"
//                         type="email"
//                         placeholder="email"
//                         onChange={handleChange}
//                     />
//                     {errors.email && <span>{errors.email}</span>}
//                     <label htmlFor="">Password</label>
//                     <input
//                         name="password"
//                         type="password"
//                         onChange={handleChange}
//                     />
//                     {errors.password && <span>{errors.password}</span>}
//                     <label htmlFor="">Profile Picture</label>
//                     <input
//                         type="file"
//                         onChange={(e) => setFile(e.target.files?.[0] || null)}
//                     />
//                     {errors.img && <span>{errors.img}</span>}
//                     <label htmlFor="">Country</label>
//                     <input
//                         name="country"
//                         type="text"
//                         placeholder="India"
//                         onChange={handleChange}
//                     />
//                     {errors.country && <span>{errors.country}</span>}
//                     <button type="submit" onClick={validateForm}>
//                         Register
//                     </button>
//                 </div>
//                 <div className={styles.right}>
//                     <h1>I want to become a seller</h1>
//                     <div className={styles.toggle}>
//                         <label htmlFor="">Activate the seller account</label>
//                         <label className={styles.switch}>
//                             <input type="checkbox" onChange={handleSeller} />
//                             <span className={styles.slider}></span>
//                         </label>
//                     </div>
//                     <label htmlFor="">Phone Number</label>
//                     <input
//                         name="phone"
//                         type="text"
//                         placeholder="+1 234 567 89"
//                         onChange={handleChange}
//                     />
//                     <label htmlFor="">Description</label>
//                     <textarea
//                         placeholder="A short description of yourself"
//                         name="desc"
//                         id=""
//                         onChange={handleChange}
//                     ></textarea>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default Register1;
// //
