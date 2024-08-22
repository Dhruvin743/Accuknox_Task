import appStyle from "./styles/app.module.css";
import { Navbar } from "./components/Navbar";
import { ChartContainer } from "./components/ChartContainer";

function App() {
	return (
		<>
			<div className={`${appStyle.container}`}>
				<Navbar />
				<ChartContainer />
			</div>
		</>
	);
}

export default App;
