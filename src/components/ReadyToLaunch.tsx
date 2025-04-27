import "./../App.css";
import CountdownTimer from "./CountdownTimer";

const ReadyToLaunch = () => {
	return (
		<div className="flex flex-col items-center mt-42">
			<h3 className="text-secondary-light-blue font-poppins uppercase mb-8 text-[32px] font-bold tracking-wider">
				Ready to launch in...
			</h3>
			<CountdownTimer targetDate="2025-04-30T17:00:00Z" />

			<div className="flex gap-2">
				<button className="mt-8 cursor-pointer font-bold text-button-header hover:bg-button-header hover:text-white border-button-header border-3 py-[12px] px-[24px] text-[12px] rounded-lg">
					BOOKLET
				</button>
				<button className="bg-button-header mt-8 cursor-pointer font-bold border-3 border-button-header text-white py-[12px] px-[24px] text-[12px] rounded-lg hover:bg-white hover:border-button-header hover:text-button-header">
					DAFTAR SEKARANG
				</button>
			</div>
		</div>
	);
};

export default ReadyToLaunch;
