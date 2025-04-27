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

			// Remove hash from URL
			if (window.history && window.history.pushState) {
				window.history.pushState("", document.title, window.location.pathname);
			}
		}
	};

	return (
		<header className="font-jakarta" id="header">
			<NavBar />
			<div className="flex gap-4 pt-[60px] pl-[120px] pr-[50px] items-center header-bg justify-between">
				<section className="w-[60%]">
					<h3 className="text-[20px] mb-4 font-semibold text-premier-dark-blue">
						Show Up Your skill in
					</h3>
					<img
						src="headerAssets/vectorInacomp.svg"
						alt="inacomp.svg"
						className="w-[400px] mb-3"
					/>
					<p className="font-light opacity-60 mb-5 text-[15px] text-base/7">
						Informatics National Competition (INACOMP) 1.0 merupakan kompetisi
						yang berfokus pada bidang pemrograman komputer dan jaringan
						komputer. Diselenggarakan oleh Badan Eksekutif Mahasiswa Prodi
						Pendidikan Teknik Informatika dan Komputer Universitas Negeri
						Jakarta, kompetisi ini diselenggarakan nasional dan ditujukan kepada
						siswa/i SMA/SMK/sederajat.
					</p>
					<a href="#division" onClick={(e) => scrollToDiv(e, "division")}>
						<button className="bg-button-header mt-8 cursor-pointer font-bold border-3 border-button-header text-white py-[12px] px-[24px] text-[12px] rounded-lg hover:bg-white hover:border-button-header hover:text-button-header transition-colors duration-300">
							SELENGKAPNYA
						</button>
					</a>
				</section>

				<section className="">
					<img
						src="headerAssets/vectorHuman.svg"
						alt="human.svg"
						className=""
					/>
				</section>
			</div>
		</header>
	);
};

export default Header;
