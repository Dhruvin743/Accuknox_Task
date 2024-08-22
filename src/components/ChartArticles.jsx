import scrollStyle from "../styles/scroll.module.css";
import { AddChart } from "./AddChart";
import { LineChart } from "./LineChart";
import { NoChart } from "./NoChart";
import { RoundChart } from "./RoundChart";

function ChartArticles({ data }) {
	return (
		<>
			{data.map((v) => {
				return (
					<article key={v.id} className={`w-full mt-2`}>
						{console.log(v.id)}
						<span className='font-bold'>{Object.keys(v)[0]}</span>
						<div
							className={`${scrollStyle.scroll} w-full h-[200px] px-4 py-2 flex flex-nowrap items-center justify-start gap-4 overflow-x-auto`}
						>
							{Object.values(v)[0].map((v1, i1) => {
								if (v1?.type === "round") {
									return <RoundChart key={v1.id} v1={v1} />;
								} else if (v1?.type === "line") {
									return <LineChart key={v1.id} v1={v1} />;
								} else {
									return <NoChart key={i1} v1={v1} />;
								}
							})}
							<AddChart />
						</div>
					</article>
				);
			})}
		</>
	);
}

export default ChartArticles;
