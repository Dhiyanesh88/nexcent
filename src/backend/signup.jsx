import React, { useState } from "react";

function SignUp() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("username", username);
        formData.append("email", email);
        formData.append("password", password);

        const response = await fetch("http://localhost/signup2.php", {
            method: "POST",
            body: formData,
        });
        const text = await response.text();
        setMessage(text);
    };
    const styles = {
        signup: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "#eef2f3",
            padding: "clamp(10px, 3%, 20px)",
            width: "100%",
            boxSizing: "border-box",
        },
        container: {
            width: "clamp(300px, 80%, 500px)",
            margin: "50px auto",
            padding: "clamp(20px, 5%, 30px)",
            border: "1px solid #ccc",
            borderRadius: "8px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            textAlign: "center",
        },
        input: {
            width: "clamp(200px, 70%, 400px)",
            padding: "clamp(8px, 2vw, 12px)",
            margin: "10px 0",
            borderRadius: "4px",
            border: "1px solid #ccc",
            fontSize: "clamp(14px, 1.5vw, 16px)",
        },
        button: {
            width: "clamp(200px, 70%, 400px)",
            padding: "clamp(8px, 2vw, 12px)",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "clamp(14px, 1.5vw, 16px)",
        },
        buttonHover: {
            backgroundColor: "#45a049",
        },
        title: {
            marginBottom: "20px",
            color: "#333",
        },
    };
    return (
        <section style={styles.signup}>
            <div style={styles.container}>
                <h2 style={styles.title}>SIGN UP</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        style={styles.input}
                    /><br />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={styles.input}
                    /><br />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={styles.input}
                    /><br />
                    <button type="submit" style={styles.button} href="">Sign Up</button>
                </form>
            </div>
        </section>
    );
}

export default SignUp;