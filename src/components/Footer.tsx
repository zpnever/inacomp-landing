const Footer = () => {
	return (
		<footer className="px-20 pt-10 bg-gray-200 inset-shadow-2xl shadow-black">
			<div className="flex justify-between mb-7">
				<div className="w-[30%] flex flex-col gap-3">
					<div className="flex gap-2 mb-3">
						<img src="logo1.svg" alt="logo.png" className="w-[32px]" />
						<img src="textLogo.svg" alt="logo.png" className="w-[100px]" />
					</div>
					<p className="font-poppins text-[15px] text-gray-600">
						INACOMP 1.0 adalah kompetisi nasional di bidang pemrograman dan
						jaringan komputer untuk siswa/i SMA/SMK, diselenggarakan oleh BEM
						Prodi PTIK Universitas Negeri Jakarta.
					</p>
					<div className="flex gap-1 mt-3">
						<a href="https://wa.me/+6285163128300">
							<img
								src="footer/logoWhatsApp.svg"
								alt="whatsapp.svg"
								className="w-8"
							/>
						</a>
						<a href="https://www.instagram.com/inacomp.unj?igsh=d2xmdGU4Mm1md2Qx">
							<img
								src="footer/logoInstagram.svg"
								alt="instagram.svg"
								className="w-8"
							/>
						</a>
					</div>
				</div>
				<div>
					<a
						href="/"
						onClick={(e) => {
							e.preventDefault();
							window.scrollTo({
								top: 0,
								behavior: "smooth",
							});
						}}
					>
						<button className="gap-3 hover:bg-white hover:text-button-header bg-button-header cursor-pointer font-bold border-3 border-button-header text-white py-2 px-4 text-sm items-center rounded-lg flex transition-colors duration-300">
							BACK TO TOP{" "}
							<svg
								className="w-5"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M18.0701 9.57L12.0001 3.5L5.93005 9.57"
									stroke="currentColor"
									strokeWidth="1.5"
									strokeMiterlimit="10"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M12 20.4999V3.66992"
									stroke="currentColor"
									strokeWidth="1.5"
									strokeMiterlimit="10"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</button>
					</a>
				</div>
			</div>
			<div className="font-poppins text-[15px] text-gray-600 border-t-2 border-gray-300 text-center py-4">
				Copyright © 2025 INACOMP 1.0
			</div>
		</footer>
	);
};

export default Footer;
