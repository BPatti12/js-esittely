import React, { useState } from "react";
import axios from "axios";

export const APIMessage = () => {
    const [message, setMessage] = useState("");
    const [response, setResponse] = useState({});

    const handleInput = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            message,
        };

        axios.post("http://localhost:4000/api", data).then((res) => {
            console.log(res);
            setResponse(res.data);
        });
    };

    return (
        <div className="messageForm">
            <form>
                <textarea onChange={handleInput} name="req" id="" cols="70" rows="6" placeholder="Kirjoita viestisi tähän.." />
                <button className="button" type="submit" onClick={handleSubmit}>
                    Lähetä
                </button>
            </form>
            {response.message && (
                <div>
                    <p>
                        Viestisi oli: "{response.message}" ja se sisältää {response.info.charCount} kirjainta.
                    </p>
                </div>
            )}
        </div>
    );
};
