// Login.tsx
"use client";
import React, { useState } from "react";
//import { useRouter } from "next/router";
import styles from "./Login.module.scss"; // Assuming you have a CSS module for styling
import { error } from "console";
import axios from "axios";

interface LoginProps {}

const LoginMain: React.FC<LoginProps> = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    // const router = useRouter();
    // const [username, setUsername] = useState<string>("");
    // const [password, setPassword] = useState<string>("");
    // const [error, setError] = useState<string>("");

    // const handleSubmit = async (e: FormEvent) => {
    //     e.preventDefault();
    //     // Your login logic here
    //     // For example, you can make an API call to authenticate the user

    //     try {
    //         // Dummy authentication logic (replace with your actual authentication logic)
    //         if (username === "johndoe" && password === "password") {
    //             // Redirect to the dashboard or any other route upon successful login
    //             router.push("/dashboard");
    //         } else {
    //             setError("Invalid username or password");
    //         }
    //     } catch (error) {
    //         setError("An error occurred while logging in");
    //     }
    // };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const res = await axios.post<{ data: string }>(
                "http://localhost:8000/auth/login",
                {
                    username,
                    password,
                }
            );
            console.log(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className={styles.login}>
            <form onSubmit={handleSubmit}>
                <h1>Sign in</h1>
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    name="username"
                    type="text"
                    defaultValue={""}
                    placeholder="johndoe"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    defaultValue={" "}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
                {/* {error() && <p className={styles.error}>{error}</p>} */}
            </form>
        </div>
    );
};

export default LoginMain;
