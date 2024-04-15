// import React, { useState, ChangeEvent, FormEvent } from "react";
// import "./Register.module.scss";

// const Register1: React.FC = () => {
//     //const [file, setFile] = useState<File | null>(null);
//     // const [user, setUser] = useState<User>({
//     //     username: "",
//     //     email: "",
//     //     password: "",
//     //     img: null,
//     //     country: "",
//     //     isSeller: false,
//     //     desc: "",
//     // });

//     // const handleChange = (
//     //     e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//     // ) => {
//     //     const { name, value } = e.target;
//     //     setUser((prev) => ({
//     //         ...prev,
//     //         [name]: value,
//     //     }));
//     // };

//     // const handleSeller = (e: ChangeEvent<HTMLInputElement>) => {
//     //     const { checked } = e.target;
//     //     setUser((prev) => ({
//     //         ...prev,
//     //         isSeller: checked,
//     //     }));
//     // };

//     return (
//         <div className="register">
//             <form>
//                 <div className="left">
//                     <h1>Create a new account</h1>
//                     <label htmlFor="username">Username</label>
//                     <input
//                         name="username"
//                         type="text"
//                         placeholder="johndoe"
//                         //onChange={handleChange}
//                     />
//                     <label htmlFor="email">Email</label>
//                     <input
//                         name="email"
//                         type="email"
//                         placeholder="email"
//                         // onChange={handleChange}
//                     />
//                     <label htmlFor="password">Password</label>
//                     <input
//                         name="password"
//                         type="password"
//                         //onChange={handleChange}
//                     />
//                     <label htmlFor="file">Profile Picture</label>
//                     <input
//                         type="file"
//                         //  onChange={(e) => setFile(e.target.files?.[0] || null)}
//                     />
//                     <label htmlFor="country">Country</label>
//                     <input
//                         name="country"
//                         type="text"
//                         placeholder="USA"
//                         // onChange={handleChange}
//                     />
//                     <button type="submit">Register</button>
//                 </div>
//                 <div className="right">
//                     <h1>I want to become a seller</h1>
//                     <div className="toggle">
//                         <label htmlFor="isSeller">
//                             Activate the seller account
//                         </label>
//                         <label className="switch">
//                             <input
//                                 type="checkbox"
//                                 name="isSeller"
//                                 //onChange={handleSeller}
//                             />
//                             <span className="slider round"></span>
//                         </label>
//                     </div>
//                     <label htmlFor="phone">Phone Number</label>
//                     <input
//                         name="phone"
//                         type="text"
//                         placeholder="+1 234 567 89"
//                         //onChange={handleChange}
//                     />
//                     <label htmlFor="desc">Description</label>
//                     <textarea
//                         placeholder="A short description of yourself"
//                         name="desc"
//                         id="desc"
//                         cols={30}
//                         rows={10}
//                         // onChange={handleChange}
//                     ></textarea>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default Register1;
import React from "react";
import styles from "./Register.module.scss"; // Import styles

const Register1: React.FC = () => {
    // const [file, setFile] = useState<File | null>(null);
    // const [user, setUser] = useState({
    //     username: "",
    //     email: "",
    //     password: "",
    //     country: "",
    //     isSeller: false,
    //     phone: "",
    //     desc: "",
    // });

    // const handleChange = (
    //     e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    // ) => {
    //     const { name, value } = e.target;
    //     setUser((prev) => ({
    //         ...prev,
    //         [name]: value,
    //     }));
    // };

    // const handleSeller = (e: ChangeEvent<HTMLInputElement>) => {
    //     const { checked } = e.target;
    //     setUser((prev) => ({
    //         ...prev,
    //         isSeller: checked,
    //     }));
    // };

    // const handleSubmit = (e: FormEvent) => {
    //     e.preventDefault();
    //     // Do something with the form data, like submitting to an API
    //     console.log("Form submitted", user);
    // };

    return (
        <div className={styles.register}>
            {/* //<form onSubmit={handleSubmit}> */}
            <form>
                <div className={styles.left}>
                    <h1>Create a new account</h1>
                    <label htmlFor="username">Username</label>
                    <input
                        name="username"
                        type="text"
                        placeholder="johndoe"
                        // onChange={handleChange}
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        name="email"
                        type="email"
                        placeholder="email"
                        // onChange={handleChange}
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        name="password"
                        type="password"
                        // onChange={handleChange}
                    />
                    <label htmlFor="file">Profile Picture</label>
                    <input
                        type="file"
                        // onChange={(e) => setFile(e.target.files?.[0] || null)}
                    />
                    <label htmlFor="country">Country</label>
                    <input
                        name="country"
                        type="text"
                        placeholder="USA"
                        // onChange={handleChange}
                    />
                    <button type="submit">Register</button>
                </div>
                <div className={styles.right}>
                    <h1>I want to become a seller</h1>
                    <div className={styles.toggle}>
                        <label htmlFor="isSeller">
                            Activate the seller account
                        </label>
                        <label className={styles.switch}>
                            <input
                                type="checkbox"
                                name="isSeller"
                                // onChange={handleSeller}
                            />
                            <span className={styles.slider}></span>
                        </label>
                    </div>
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        name="phone"
                        type="text"
                        placeholder="+1 234 567 89"
                        // onChange={handleChange}
                    />
                    <label htmlFor="desc">Description</label>
                    <textarea
                        placeholder="A short description of yourself"
                        name="desc"
                        id="desc"
                        cols={30}
                        rows={10}
                        // onChange={handleChange}
                    ></textarea>
                </div>
            </form>
        </div>
    );
};

export default Register1;
