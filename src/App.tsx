import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useNotify } from "./component/Notify";

function App() {
	const [count, setCount] = useState(0);
	const { alert } = useNotify();
	const [timeout, setTimeout] = useState(3000);

	return (
		<>
			<div>
				<a href="https://vite.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<fieldset>
					<legend>Auto-dismiss timeout</legend>
					<input
						type="radio"
						name="timeout"
						value="3000"
						checked={timeout === 3000}
						onChange={() => setTimeout(3000)}
					/>
					<label>3 seconds</label>
					<input
						type="radio"
						name="timeout"
						value="5000"
						checked={timeout === 5000}
						onChange={() => setTimeout(5000)}
					/>
					<label>5 seconds</label>
					<input
						type="radio"
						name="timeout"
						value="7000"
						checked={timeout === 7000}
						onChange={() => setTimeout(7000)}
					/>
					<label>7 seconds</label>
				</fieldset>
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>

				<button
					onClick={() => {
						alert("This is an alert message", undefined, timeout);
					}}
				>
					ALERT!
				</button>
				<button
					onClick={() => {
						alert("This is a success message", "success", timeout);
					}}
				>
					SUCCESS!
				</button>
				<button
					onClick={() => {
						alert("This is an error message", "error", timeout);
					}}
				>
					ERROR!
				</button>
				<button
					onClick={() => {
						alert("This is a warning message", "warning", timeout);
					}}
				>
					WARNING!
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
}

export default App;
