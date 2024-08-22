import appStyle from "../styles/app.module.css";

export const AddChart = () => {
	return (
		<div className='w-[458px] h-full py-2 px-4 rounded-xl flex-none drop-shadow-md bg-white'>
			<div className='w-full h-full flex flex-col text-xs font-bold'>
				<div className='w-full h-full py-4 flex flex-col gap-1 justify-center items-center overflow-hidden'>
					<button
						className={`${appStyle.addWidget} w-auto h-8 px-2 text-gray-500 border-2 border-gray-200 text-sm font-medium bg-white rounded-md flex items-center gap-2`}
						type='button'
					>
						<div className='w-auto h-auto my-auto'>Add Widget</div>
						<div className='w-auto h-auto my-auto'>+</div>
					</button>
				</div>
			</div>
		</div>
	);
};
