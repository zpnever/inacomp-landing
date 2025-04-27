import "../App.css";
import React, { useState, useEffect } from "react";

const List = [
	{
		title: "Division",
		href: "division",
	},
	{
		title: "Timeline",
		href: "timeline",
	},
	{
		title: "Contact",
		href: "contact",
	},
];

const NavBar = () => {
	const [activeLink, setActiveLink] = useState("");

	// Handle smooth scrolling and prevent URL changes
	const handleScroll = (
		e: React.MouseEvent<HTMLAnchorElement>,
		sectionId: string
	) => {
		e.preventDefault();

		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
			setActiveLink(sectionId);
		}
	};

	// Add active link detection while scrolling
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
		<nav className="h-14 nav-shadow px-14 w-full bg-white z-50 flex items-center fixed">
			<ul className="flex font-jakarta font-bold items-center gap-10">
				<li>
					<a
						href="/"
						onClick={(e) => {
							e.preventDefault();
							window.scrollTo({ top: 0, behavior: "smooth" });
						}}
						className="flex gap-1"
					>
						<img src="logo1.svg" alt="logo" className="w-6" />
						<img src="textLogo.svg" alt="text logo" className="w-22" />
					</a>
				</li>
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
		</nav>
	);
};

export default NavBar;
