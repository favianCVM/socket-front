import React, { useState, useCallback, useEffect } from "react";
import io from "socket.io-client";
import "./App.css";
const ENDPOINT = "http://localhost:5000";

const socket = io.connect(ENDPOINT);

function App() {
	const [response, setResponse] = useState("NONE");

	useEffect(() => {
		socket.on("message", (data) => {
			console.log("data ::: ", data);
			setResponse(data);
		});

		// CLEAN UP THE EFFECT
		return () => socket.disconnect();

		// testEndpoint();
	}, []);

	// const testEndpoint = async () =>
	// 	fetch("http://localhost:5000/api/v1/tests/")
	// 		.then((data) => data.json())
	// 		.then((data) => console.log(data))
	// 		.catch((err) => console.log(err));

	return (
		<div className="App">
			<header className="App-header">
				<p>RESPONSE::: {response}</p>

				<button
					onClick={() => {
						socket.emit("message1", "aver");
					}}
				>
					emitir
				</button>
			</header>
		</div>
	);
}

export default App;
