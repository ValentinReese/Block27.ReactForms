import { useState } from 'react';

export default function SignUpForm() {
    // State Variables to store input values
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    async function handleSubmit(event) {
        event.preventDefault();
        // didn't know exactly how to fomrmat as a POST request, this is how I did it
        try {
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
                method: 'POST'
            });
            const result = await response.json();
            console.log(result);
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <>
            <h2>Sign Up!</h2>
            {error && <p>{error}</p>}

            <form onSubmit={handleSubmit}>
                <label>
                    Username: <input value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <label>
                    Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <button>Submit</button>
            </form>
        </>
    )
}