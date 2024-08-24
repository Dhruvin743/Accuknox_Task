import scrollStyle from "../styles/scroll.module.css";
import { DefaultChart } from "./DefaultChart";
import { LineChart } from "./LineChart";
import { NoChart } from "./NoChart";
import { RoundChart } from "./RoundChart";

function ChartArticles({ APPDATA }) {
	return (
		<>
			{APPDATA.map((v, i) => {
				return (
					<article key={v?.id || i} className={`w-full mt-2`}>
						<span className='font-bold'>{Object.keys(v)[0]}</span>
						<div
							className={`${scrollStyle.scroll} w-full h-[200px] ps-4 pe-8 py-2 flex flex-nowrap items-center justify-start gap-4 overflow-x-auto`}
						>
							{Object.values(v)[0].map((v1, i1) => {
								if (v1?.display)
									if (v1?.type === "round") {
										return <RoundChart key={v1?.id || i1} v1={v1} />;
									} else if (v1?.type === "line") {
										return <LineChart key={v1?.id || i1} v1={v1} />;
									} else {
										return <NoChart key={i1} v1={v1} />;
									}
							})}
							<DefaultChart category={Object.keys(v)[0]} />
						</div>
					</article>
				);
			})}
		</>
	);
}

export default ChartArticles;
