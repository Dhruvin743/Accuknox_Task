import { useDispatch, useSelector } from "react-redux";
import { showWidgetPage } from "../slices/addWidgetSlice";
import { ADD_ICON, CLOSE_ICON } from "../constant";
import { categoryUpdateData } from "../slices/categoryUpdateDataSlice";

export const AddWidgetCategory = ({ categoryUpdateDataSlice }) => {
	const addWidgetSlice = useSelector((state) => state.addWidgetReducer.value);
	const dispatch = useDispatch();

	return (
		<div className='flex flex-col'>
			<div className='pe-2 flex items-center justify-between'>
				<ul className='flex justify-start items-center font-semibold'>
					{categoryUpdateDataSlice?.map((v1, i1) => {
						return (
							<li
								key={i1}
								className={`w-min h-min border-b-2 ${
									addWidgetSlice.category === Object.keys(v1)[0]
										? "text-blue-950 border-blue-950"
										: "text-slate-300 border-slate-300"
								}`}
								onClick={() => {
									dispatch(showWidgetPage({ ...addWidgetSlice, category: Object.keys(v1)[0] }));
								}}
							>
								<button type='button' className='p-2'>
									{Object.keys(v1)[0]
										.split(" ")
										.map((word) => word[0])
										.join("")}
								</button>
							</li>
						);
					})}
				</ul>
				<div className='w-max h-max shadow-md'>
					<button
						type='button'
						className='w-full h-full p-2 border-2 border-gray-400 rounded-md'
						onClick={() => {
							dispatch(showWidgetPage({ ...addWidgetSlice, addCategoryDisplay: true }));
						}}
					>
						<img src={ADD_ICON} className='w-4 h-4' />
					</button>
				</div>
			</div>
			<div className='p-2'>
				<ul className='flex flex-col gap-2 justify-center items-center text-xs'>
					{categoryUpdateDataSlice?.map((v1, i1) => {
						if (Object.keys(v1)[0] === addWidgetSlice.category) {
							return v1[Object.keys(v1)[0]].map((v2, i2) => {
								return (
									<li
										key={v1.id + i2}
										className='w-full p-2 border-2 flex items-center justify-between gap-2 leading-none'
									>
										<div className='flex items-center gap-2'>
											<input
												type='checkbox'
												defaultChecked={v2.display}
												className='h-3'
												onChange={(e) => {
													dispatch(
														categoryUpdateData(
															categoryUpdateDataSlice.map((v3, i3) => {
																if (Object.keys(v3)[0] === addWidgetSlice.category) {
																	return {
																		...v3,
																		[addWidgetSlice.category]: categoryUpdateDataSlice[i3][Object.keys(v3)[0]].map(
																			(v4) => {
																				if (v4.id === v2.id) {
																					return { ...v4, display: e.target.checked };
																				}
																				return { ...v4 };
																			}
																		),
																	};
																}
																return { ...v3 };
															})
														)
													);
												}}
											/>
											<span>{v2.title}</span>
										</div>
										<button type='button'>
											<img src={CLOSE_ICON} className='w-3 h-3 invert' />
										</button>
									</li>
								);
							});
						}
					})}
				</ul>
			</div>
		</div>
	);
};
