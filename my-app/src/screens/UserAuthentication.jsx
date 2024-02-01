import { useState } from "react";
import "../index.css"
import { useNavigate } from "react-router";

const UserAuthentication = () => {
    const navigate = useNavigate()

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        try {

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            if (username == "Shreyas" && password == "123456") {
                navigate("/home")
            }
        } catch (err) {
            console.log('Oops, incorrect credentials.', err);
        }



    }

    return (
        <div className="form">
            <form>
                <h1>Login/SignUp</h1>
                <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder="Enter Username:" />
                <input placeholder="Enter Password:" onChange={(e) => setPassword(e.target.value)} type="password" />
                <button onClick={handleSubmit} className="user-btn">Submit</button>
            </form>
        </div>
    )
}

export default UserAuthentication