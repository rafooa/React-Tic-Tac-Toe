import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { TicTacToe } from "./TicTacToe";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<TicTacToe />
			</header>
		</div>
	);
}

export default App;
