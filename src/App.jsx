import Global from "./components/global/Global";
import NavBar from "./components/header/Header";
import Hero from "./components/hero/Hero";
import NewsLetter from "./components/newsletter/NewsLetter";
import Projects from "./components/projects/Projects";
import Steps from "./components/steps/Steps";

function App() {
	return (
		<>
			<NavBar />
			<Hero />
			<Steps />
			<Projects />
			<Global />
			<NewsLetter />
		</>
	);
}

export default App;
