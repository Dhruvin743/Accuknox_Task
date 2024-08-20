import appStyle from "./App.module.css";
import BELL_ICON from "./assets/bell.png";
import mockdata from "../mockdata.json";
import REFRESH_ICON from "./assets/refresh.png";
import DROPMENU_ICON from "./assets/dropmenu.png";
import ChartArticles from "./components/ChartArticles";

function App() {
	return (
		<>
			{console.log(mockdata)}
			<div className={`${appStyle.container}`}>
				<header className={`${appStyle.header} p-1`}>
					<nav className='w-full h-full px-6 flex'>
						<div className='w-[45%] h-full flex items-center'>
							<ul className='flex text-sm gap-2 text-gray-500'>
								<li className={``}>Home</li>
								<li>{">"}</li>
								<li className={`${appStyle.active}`}>Dashboard V2</li>
							</ul>
						</div>
						<div className={`${appStyle.search} w-auto ms-6 h-full flex items-center bg-transparent`}>
							<form className='h-full bg-transparent' onSubmit={(e) => e.preventDefault()}>
								<input
									className='h-full px-2 w-[450px] rounded-md border-2 border-slate-400 bg-slate-100 placeholder:text-sm'
									type='search'
									name=''
									id=''
									placeholder='Search anything...'
								/>
							</form>
							<div className='ms-4'>
								<input
									className='w-[120px] px-2 bg-zinc-100 text-gray-500 rounded-md border-2 border-gray-200 text-sm'
									type='text'
									name=''
									id=''
									disabled
									value={"something"}
								/>
							</div>
							<div className='ms-6'>
								<img className='w-[18px] h-[18px]' src={BELL_ICON} alt='' />
							</div>
						</div>
					</nav>
				</header>
				<section className={`${appStyle.body} bg-slate-100 p-8`}>
					<div>
						<div className='h-10 p-1 flex items-center justify-between'>
							<div className='font-bold'>CNAPP Dashboard</div>
							<div className='w-auto h-full flex justify-end gap-4'>
								<div
									className={`${appStyle.addWidget} w-auto h-full px-2 text-gray-500 border-2 border-gray-500 font-medium bg-white rounded-md flex items-center gap-2`}
								>
									<div className='w-auto h-auto my-auto'>Add Widget</div>
									<div className='w-auto h-auto my-auto'>+</div>
								</div>
								<div className='aspect-square h-full border-2 border-gray-500 bg-white rounded-md flex items-center justify-center'>
									<img className='w-4 aspect-square' src={REFRESH_ICON} alt='' />
								</div>
								<div className='aspect-square h-full border-2 border-gray-500 bg-white rounded-md flex items-center justify-center'>
									<img className='w-4 aspect-square' src={DROPMENU_ICON} alt='' />
								</div>
								<div
									className={`w-auto h-full px-2 text-violet-950 border-2 border-violet-950 bg-white rounded-md lead flex items-center gap-2`}
								>
									<div className='w-auto h-auto text-xs my-auto'>Last 2 Days</div>
									<div className='w-auto h-auto text-xs my-auto'>+</div>
								</div>
							</div>
						</div>
						<div className={`${appStyle.chartContainer} px-2`}>
							<ChartArticles data={mockdata} />
						</div>
					</div>
				</section>
			</div>
		</>
	);
}

export default App;
