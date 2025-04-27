import "./../App.css";
import ReadyToLaunch from "./ReadyToLaunch";

const Division = () => {
	return (
		<section id="division" className="relative pt-18 pb-10">
			{/* Background */}
			<img
				src="divisionAssets/bgLeft.svg"
				alt="bgLeft.svg"
				className="absolute md:left-0 w-40 md:w-60 -z-10 -left-5 top-0"
			/>
			<img
				src="divisionAssets/bgRight.svg"
				alt="bgRight.svg"
				className="absolute md:right-0 w-60 md:w-90 -z-10 -right-5 top-0"
			/>

			{/* Content */}
			<div className="flex flex-col items-center justify-center">
				<div className="text-center w-[60%] md:px-0">
					<h2 className="text-secondary-light-blue text-[18px] font-extrabold">
						DIVISION
					</h2>
					<h3 className="text-premier-dark-blue text-[32px] md:text-[58px] font-bold leading-tight">
						There is two division
					</h3>
					<p className="text-thirt-black mt-4 opacity-60 font-light text-[15px] max-w-2xl mx-auto">
						Perlombaan ini dibagi menjadi dua bidang lomba yang masih dalam
						ranah teknologi.
					</p>
				</div>

				{/* Cards */}
				<div className="flex flex-col md:flex-row mt-16 md:mt-20 gap-8 px-6 md:px-[100px]">
					{/* Card 1 */}
					<div className="border w-full bg-white md:w-1/2 rounded-xl shadow-md p-8 shadow-gray-300 flex flex-col items-center text-center border-gray-200">
						<img
							src="divisionAssets/cpLogo.svg"
							alt="cpLogo.svg"
							className="w-[80px] md:w-[100px] mb-4"
						/>
						<h3 className="text-premier-dark-blue text-[24px] md:text-[28px] font-semibold">
							Competitive
						</h3>
						<h3 className="text-premier-dark-blue text-[24px] md:text-[28px] font-semibold mb-4">
							Programming
						</h3>
						<p className="text-thirt-black opacity-60 font-light text-[15px] leading-7">
							Divisi ini mengasah logika dan kemampuan pemrograman peserta
							melalui serangkaian soal algoritma dan struktur data. Peserta
							ditantang untuk menyelesaikan soal secara cepat, efisien, dan
							akurat menggunakan bahasa pemrograman.
						</p>
						<button className="bg-button-header mt-8 cursor-pointer font-bold border-3 border-button-header text-white py-3 px-6 text-[14px] rounded-lg hover:bg-white hover:border-button-header hover:text-button-header transition-colors duration-300">
							DAFTAR SEKARANG
						</button>
					</div>

					{/* Card 2 */}
					<div className="border w-full bg-white md:w-1/2 rounded-xl shadow-md p-8 shadow-gray-300 flex flex-col items-center text-center border-gray-200">
						<img
							src="divisionAssets/csLogo.svg"
							alt="csLogo.svg"
							className="w-[80px] md:w-[100px] mb-4"
						/>
						<h3 className="text-premier-dark-blue text-[24px] md:text-[28px] font-semibold">
							Cisco
						</h3>
						<h3 className="text-premier-dark-blue text-[24px] md:text-[28px] font-semibold mb-4">
							Networking
						</h3>
						<p className="text-thirt-black opacity-60 font-light text-[15px] leading-7">
							Kompetisi ini menguji pemahaman peserta dalam membangun,
							mengkonfigurasi, dan menganalisis jaringan komputer menggunakan
							teknologi Cisco. Cocok untuk siswa yang tertarik pada dunia
							networking.
						</p>
						<button className="bg-button-header mt-8 cursor-pointer font-bold border-3 border-button-header text-white py-3 px-6 text-[14px] rounded-lg hover:bg-white hover:border-button-header hover:text-button-header transition-colors duration-300">
							DAFTAR SEKARANG
						</button>
					</div>
				</div>
			</div>

			{/* Ready To Launch Section */}
			<ReadyToLaunch />
		</section>
	);
};

export default Division;
