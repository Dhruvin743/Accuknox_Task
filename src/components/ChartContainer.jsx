import appStyle from "../styles/app.module.css";
import ChartArticles from "./ChartArticles";
import { DROPMENU_ICON, MOCKDATA, REFRESH_ICON } from "../constant";

export const ChartContainer = () => {
	return (
		<section className={`${appStyle.body} bg-slate-100 p-8`}>
			<div>
				<div className='h-10 p-1 flex items-center justify-between'>
					<div className='font-bold'>CNAPP Dashboard</div>
					<div className='w-auto h-full flex justify-end gap-4'>
						<button
							className={`${appStyle.addWidget} w-auto h-full px-2 text-gray-500 border-2 border-gray-200 font-medium bg-white rounded-md flex items-center gap-2`}
							type='button'
						>
							<span className='w-auto h-auto my-auto'>Add Widget</span>
							<span className='w-auto h-auto my-auto'>+</span>
						</button>
						<button
							className='aspect-square h-full border-2 border-gray-200 bg-white rounded-md flex items-center justify-center'
							type='button'
						>
							<img className='w-4 aspect-square' src={REFRESH_ICON} alt='' />
						</button>
						<button
							className='aspect-square h-full border-2 border-gray-200 bg-white rounded-md flex items-center justify-center'
							type='button'
						>
							<img className='w-4 aspect-square' src={DROPMENU_ICON} alt='' />
						</button>
						<button
							className={`w-auto h-full px-2 text-violet-950 border-2 border-violet-950 bg-white rounded-md lead flex items-center gap-2`}
							type='button'
						>
							<div className='w-auto h-auto text-xs my-auto'>Last 2 Days</div>
							<div className='w-auto h-auto text-xs my-auto'>+</div>
						</button>
					</div>
				</div>
				<div className={`${appStyle.chartContainer} px-2`}>
					<ChartArticles data={MOCKDATA} />
				</div>
			</div>
		</section>
	);
};
