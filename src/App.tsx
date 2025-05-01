import "./App.css";
import Contact from "./components/Contact";
import Division from "./components/Division";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ReadyToLaunch from "./components/ReadyToLaunch";
import Timeline from "./components/Timeline";

function App() {
	return (
		<div className="font-jakarta">
			<Header />
			<main>
				<ReadyToLaunch />
				<Division />
				<Timeline />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}

export default App;
