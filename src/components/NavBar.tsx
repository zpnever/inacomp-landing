import "../App.css";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const List = [
	{ title: "Division", href: "division" },
	{ title: "Timeline", href: "timeline" },
	{ title: "Contact", href: "contact" },
];

const NavBar = () => {
	const [activeLink, setActiveLink] = useState("");
	const [menuOpen, setMenuOpen] = useState(false);

	const handleScroll = (
		e: React.MouseEvent<HTMLAnchorElement>,
		sectionId: string
	) => {
		e.preventDefault();
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
			setActiveLink(sectionId);
			setMenuOpen(false);
		}
	};

	useEffect(() => {
		const handleScrollPosition = () => {
			const sections = List.map((item) => item.href);
			for (const section of sections) {
				const element = document.getElementById(section);
				if (element) {
					const rect = element.getBoundingClientRect();
					if (rect.top <= 100 && rect.bottom >= 100) {
						setActiveLink(section);
						break;
					}
				}
			}
		};
		window.addEventListener("scroll", handleScrollPosition);
		return () => window.removeEventListener("scroll", handleScrollPosition);
	}, []);

	return (
		<nav className="h-14 nav-shadow px-6 md:px-14 w-full bg-white z-50 flex items-center fixed">
			<div className="flex justify-between items-center w-full">
				{/* Logo */}
				<a
					href="/"
					onClick={(e) => {
						e.preventDefault();
						window.scrollTo({ top: 0, behavior: "smooth" });
						setMenuOpen(false);
					}}
					className="flex gap-1 items-center"
				>
					<img src="logo1.svg" alt="logo" className="w-6" />
					<img src="textLogo.svg" alt="text logo" className="w-22" />
				</a>

				{/* Desktop Menu */}
				<ul className="hidden md:flex font-jakarta font-bold items-center gap-10">
					{List.map((l, i) => (
						<li key={i}>
							<a
								href={`#${l.href}`}
								onClick={(e) => handleScroll(e, l.href)}
								className={`text-base ${
									activeLink === l.href
										? "text-nav-on"
										: "text-gray-600 hover:text-nav-on"
								}`}
							>
								{l.title}
							</a>
						</li>
					))}
				</ul>

				{/* Hamburger Button */}
				<button
					className="md:hidden text-gray-600"
					onClick={() => setMenuOpen(!menuOpen)}
				>
					{menuOpen ? <X size={28} /> : <Menu size={28} />}
				</button>
			</div>

			{/* Mobile Menu */}
			{menuOpen && (
				<ul className="absolute top-14 left-0 w-full bg-white flex flex-col items-center font-jakarta font-bold gap-6 py-6 shadow-md md:hidden">
					{List.map((l, i) => (
						<li key={i}>
							<a
								href={`#${l.href}`}
								onClick={(e) => handleScroll(e, l.href)}
								className={`text-base ${
									activeLink === l.href
										? "text-nav-on"
										: "text-gray-600 hover:text-nav-on"
								}`}
							>
								{l.title}
							</a>
						</li>
					))}
				</ul>
			)}
		</nav>
	);
};

export default NavBar;
