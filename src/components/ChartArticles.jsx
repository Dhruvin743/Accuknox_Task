function ChartArticles({ data }) {
	return (
		<>
			{data.map((v) => {
				console.log({ v });
				return (
					<article key={v.id} className={`w-full mt-4 bg-fuchsia-800`}>
						<span className='font-bold'>{Object.keys(v)[0]}</span>
						<div className='w-full h-[224px] ps-4 flex items-center justify-start gap-6 overflow-x-scroll overscroll-x-contain'>
							{Object.values(v)[0].map((v1) => (
								<div key={v1.id} className='w-[950px] h-8 flex-none bg-black'></div>
							))}
						</div>
					</article>
				);
			})}
		</>
	);
}

export default ChartArticles;
