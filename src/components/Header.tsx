import React from "react";
import NavBar from "./NavBar";

const Header = () => {
	const scrollToDiv = (
		e: React.MouseEvent<HTMLAnchorElement>,
		sectionId: string
	) => {
		e.preventDefault();
		const element = document.getElementById(sectionId);

		if (element) {
			element.scrollIntoView({ behavior: "smooth" });

			if (window.history && window.history.pushState) {
				window.history.pushState("", document.title, window.location.pathname);
			}
		}
	};

	return (
		<header className="font-jakarta" id="header">
			<NavBar />
			<div className="flex flex-col md:flex-row gap-6 pt-[70px] px-6 md:px-[120px] pb-10 items-center header-bg justify-between">
				{/* Section Text */}
				<section className="w-full md:w-1/2 flex flex-col justify-start md:text-left">
					<h3 className="text-[20px] mb-4 font-semibold text-premier-dark-blue">
						Show Up Your skill in
					</h3>
					<img
						src="headerAssets/vectorInacomp.svg"
						alt="inacomp.svg"
						className="md:mx-0 w-[250px] md:w-[400px] mb-3"
					/>
					<p className="font-light opacity-60 mb-5 text-[15px] leading-7">
						Informatics National Competition (INACOMP) 1.0 merupakan kompetisi
						yang berfokus pada bidang pemrograman komputer dan jaringan
						komputer. Diselenggarakan oleh Badan Eksekutif Mahasiswa Prodi
						Pendidikan Teknik Informatika dan Komputer Universitas Negeri
						Jakarta, kompetisi ini diselenggarakan nasional dan ditujukan kepada
						siswa/i SMA/SMK/sederajat.
					</p>
					<div>
						<a
							href="#division"
							className=""
							onClick={(e) => scrollToDiv(e, "division")}
						>
							<button className="bg-button-header mt-6 cursor-pointer font-bold border-3 border-button-header text-white py-3 px-6 text-[14px] rounded-lg hover:bg-white hover:border-button-header hover:text-button-header transition-colors duration-300">
								SELENGKAPNYA
							</button>
						</a>
					</div>
				</section>

				{/* Section Image */}
				<section className="w-full md:w-1/2">
					<img
						src="headerAssets/vectorHuman.svg"
						alt="human.svg"
						className="hidden md:mx-0 md:block w-[300px] md:w-full"
					/>
				</section>
			</div>
		</header>
	);
};

export default Header;
