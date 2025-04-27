import "./../App.css";
import ReadyToLaunch from "./ReadyToLaunch";

const Division = () => {
	return (
		<section id="division" className="relative pt-18">
			<img
				src="divisionAssets/bgLeft.svg"
				alt="bgLeft.svg"
				className="absolute left-0 w-60"
			/>
			<img
				src="divisionAssets/bgRight.svg"
				alt="bgRight.svg"
				className="absolute right-0 w-90"
			/>
			<div className="flex flex-col justify-center">
				<div className="text-center">
					<h2 className="text-secondary-light-blue text-[18px] font-extrabold">
						DIVISION
					</h2>
					<h3 className="text-premier-dark-blue text-[58px] font-bold">
						There is two division
					</h3>
					<p className="text-thirt-black mt-4 opacity-60 font-light text-[15px]">
						Perlombaan ini dibagi menjadi dua bidang lomba yang masih dalam
						ranah teknologi.
					</p>
				</div>
				<div className="flex mt-20 flex-row justify-center gap-4 px-[300px]">
					<div className="border-1 w-[50%] rounded-xl shadow-md p-8 shadow-gray-300 flex flex-col items-center justify-between text-center border-gray-200">
						<img
							src="divisionAssets/cpLogo.svg"
							alt="cpLogo.svg"
							className="w-[100px]"
						/>
						<h3 className="text-premier-dark-blue text-[28px] font-semibold">
							Competitive
						</h3>
						<h3 className="text-premier-dark-blue text-[28px] font-semibold">
							Programming
						</h3>
						<p className="text-thirt-black mt-4 opacity-60 font-light text-[15px]">
							Divisi ini mengasah logika dan kemampuan pemrograman peserta
							melalui serangkaian soal algoritma dan struktur data. Peserta
							ditantang untuk menyelesaikan soal secara cepat, efisien, dan
							akurat menggunakan bahasa pemrograman.
						</p>
						<button className="bg-button-header mt-8 cursor-pointer font-bold border-3 border-button-header text-white py-[12px] px-[24px] text-[12px] rounded-lg hover:bg-white hover:border-button-header hover:text-button-header">
							DAFTAR SEKARANG
						</button>
					</div>
					<div className="border-1 rounded-xl w-[50%] shadow-md p-8 shadow-gray-300 flex flex-col items-center justify-between text-center border-gray-200">
						<img
							src="divisionAssets/csLogo.svg"
							alt="csLogo.svg"
							className="w-[100px]"
						/>
						<h3 className="text-premier-dark-blue text-[28px] font-semibold">
							Cisco
						</h3>
						<h3 className="text-premier-dark-blue text-[28px] font-semibold">
							Networking
						</h3>
						<p className="text-thirt-black mt-4 opacity-60 font-light text-[15px]">
							Kompetisi ini menguji pemahaman peserta dalam membangun,
							mengkonfigurasi, dan menganalisis jaringan komputer menggunakan
							teknologi Cisco. Cocok untuk siswa yang tertarik pada dunia
							networking.
						</p>
						<button className="bg-button-header mt-8 cursor-pointer font-bold border-3 border-button-header text-white py-[12px] px-[24px] text-[12px] rounded-lg hover:bg-white hover:border-button-header hover:text-button-header">
							DAFTAR SEKARANG
						</button>
					</div>
				</div>
			</div>
			<ReadyToLaunch />
		</section>
	);
};

export default Division;
