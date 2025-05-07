import "./../App.css";
import CountdownTimer from "./CountdownTimer";

const ReadyToLaunch = () => {
	const handleScroll = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const element = document.getElementById("daftar");
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<div
			id="readytolunch"
			className="flex flex-col items-center pt-30 mb-40 mx-8"
		>
			<h3 className="text-secondary-light-blue font-poppins uppercase mb-8 text-[28px] md:text-[32px] font-bold tracking-wider">
				Registration closes in...
			</h3>
			<CountdownTimer targetDate="2025-05-18T17:00:00Z" />

			<div className="flex gap-2">
				<a
					href="https://drive.google.com/drive/folders/1d-s0TfVZKNuKj6CFmAC-9oKyxBuwYutH"
					target="_blank"
				>
					<button className="mt-8 cursor-pointer font-bold text-button-header hover:bg-button-header hover:text-white border-button-header border-3 py-[8px] px-[16px] text-[12px] sm:text-[12px] rounded-lg">
						GUIDEBOOK/BOOKLET
					</button>
				</a>
				<button
					onClick={(e) => handleScroll(e)}
					className="bg-button-header mt-8 cursor-pointer font-bold border-3 border-button-header text-white py-[8px] px-[16px] text-[12px] sm:text-[12px] rounded-lg hover:bg-white hover:border-button-header hover:text-button-header"
				>
					DAFTAR SEKARANG
				</button>
			</div>
		</div>
	);
};

export default ReadyToLaunch;
