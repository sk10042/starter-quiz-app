import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import GlobalStyle from "../globalStyle";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Quiz from "../pages/Quiz";
import Landing from "../pages/Landing";
import Result from "../pages/Result";
//import Data from "../pages/Data";

function App() {
	const [score, setScore] = useState(0);
	const [userName, setUserName] = useState('');

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Router>
				<Route path="/result">
					<Result userName={userName} score={score} setScore={setScore} />
				</Route>
				<Route path="/quiz">
					<Quiz setScore={setScore} />
				</Route>
				<Route path="/">
					<Landing userName={userName} setUserName={setUserName} />
				</Route>
			</Router>
		</ThemeProvider>
	);
}

export default App;
