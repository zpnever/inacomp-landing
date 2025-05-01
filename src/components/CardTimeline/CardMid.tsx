interface IProps {
	title: string;
	date: string;
	desc: string;
}

const CardMid = (props: IProps) => {
	return (
		<div className="relative w-[70%] border-1 rounded-xl shadow-2xl p-6 shadow-gray-300 border-gray-200 font-jakarta">
			<div className="flex justify-center">
				<span className="absolute text-white text-sm sm:text-xl card-mid-bg font-bold px-4 py-2 rounded-xl -top-7 ">
					{props.title}
				</span>
			</div>
			<div className="text-center">
				<p className="font-bold text-gray-500 mb-6 text-[16px]">{props.date}</p>
				<p className="font-light opacity-60 text-[15px]">{props.desc}</p>
			</div>
		</div>
	);
};

export default CardMid;
