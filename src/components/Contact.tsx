const Contact = () => {
	const contacts = [
		{
			name: "Ahmad Taufik",
			role: "Narahubung 1",
			image: "contact/ahmad.svg",
			link: "https://wa.me/+6285163128300",
		},
		{
			name: "Muhammad Zidan",
			role: "Narahubung 2",
			image: "contact/ahmad.svg",
			link: "https://wa.me/+6285770412256",
		},
	];

	return (
		<section className="mt-20 pt-16 mb-32 px-4 md:px-8" id="contact">
			<div className="text-center w-full flex justify-center">
				<div className="w-[60%]">
					<h2 className="text-secondary-light-blue text-[16px] md:text-[18px] font-extrabold">
						CONTACT PERSON
					</h2>
					<h3 className="text-premier-dark-blue text-[36px] md:text-[58px] font-bold leading-tight mt-2">
						More Information
					</h3>
					<p className="text-thirt-black mt-4 opacity-60 font-light text-[14px] md:text-[15px] max-w-xl mx-auto">
						Silahkan hubungi contact berikut untuk mengetahui info lebih lanjut
						terkait perlombaan.
					</p>
				</div>
			</div>

			<div className="mt-32 md:mt-25 flex flex-wrap gap-15 md:gap-8 justify-center">
				{contacts.map((contact, index) => (
					<div
						key={index}
						className="relative border rounded-xl w-[60%] sm:w-[300px] shadow-lg px-4 pt-24 pb-10 flex flex-col items-center text-center border-gray-200 bg-white"
					>
						<img
							src={contact.image}
							alt={contact.name}
							className="absolute -top-8 w-28 md:w-36 object-cover"
						/>
						<h3 className="font-bold text-gray-600 text-[18px] md:text-[20px] mt-2 md:mt-12">
							{contact.name}
						</h3>
						<p className="font-light opacity-60 text-[14px] md:text-[16px] mt-1">
							{contact.role}
						</p>
						<a href={contact.link} target="_blank" rel="noopener noreferrer">
							<button className="flex cursor-pointer items-center gap-2 hover:bg-white hover:text-button-header bg-button-header mt-6 font-bold border-2 border-button-header text-white py-2 px-4 text-[14px] rounded-lg transition">
								WhatsApp
								<svg
									width="20"
									height="20"
									viewBox="0 0 21 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M17.5062 2.90006C16.5899 1.97683 15.4992 1.24502 14.2974 0.747161C13.0957 0.249306 11.807 -0.00464978 10.5063 6.44484e-05C8.76733 0.00176129 7.05936 0.460307 5.55341 1.32978C4.04746 2.19925 2.79637 3.44913 1.92546 4.95425C1.05454 6.45937 0.594355 8.16689 0.59099 9.90582C0.587625 11.6447 1.0412 13.354 1.90628 14.8625L0.506287 20L5.75627 18.625C7.20595 19.4315 8.83487 19.8613 10.4938 19.875C13.1308 19.8751 15.6612 18.8336 17.534 16.9771C19.4069 15.1206 20.4706 12.5995 20.4937 9.96253C20.4849 8.64667 20.2165 7.34548 19.7038 6.13355C19.1912 4.92163 18.4444 3.8228 17.5062 2.90006ZM10.5063 18.1625C9.02837 18.1635 7.57752 17.7662 6.30627 17.0125L6.00627 16.825L2.89378 17.65L3.71878 14.6125L3.51878 14.3C2.45534 12.5834 2.05846 10.5363 2.40331 8.54657C2.74816 6.55687 3.81079 4.76275 5.3899 3.50409C6.96901 2.24542 8.95492 1.60963 10.9714 1.71717C12.9879 1.8247 14.8949 2.66808 16.3312 4.08755C17.9012 5.62279 18.8 7.71688 18.8312 9.91253C18.8115 12.1074 17.9256 14.2057 16.3665 15.7508C14.8074 17.2958 12.7012 18.1626 10.5063 18.1625ZM15.0187 11.9875C14.7687 11.8625 13.5562 11.2625 13.3312 11.1875C13.1062 11.1125 12.9312 11.0625 12.7687 11.3125C12.5242 11.6476 12.2613 11.969 11.9812 12.275C11.8438 12.45 11.6938 12.4625 11.4438 12.275C10.0184 11.7117 8.83087 10.6743 8.08126 9.33753C7.81876 8.90004 8.33126 8.92504 8.80626 7.98754C8.84132 7.91995 8.85963 7.84493 8.85963 7.76879C8.85963 7.69265 8.84132 7.61763 8.80626 7.55004C8.80626 7.42504 8.24376 6.20004 8.04376 5.71255C7.84376 5.22505 7.64376 5.30005 7.48126 5.28755H6.99376C6.86746 5.28949 6.74302 5.31837 6.62877 5.37226C6.51452 5.42615 6.41309 5.50381 6.33127 5.60005C6.05079 5.87277 5.83203 6.20244 5.68972 6.56684C5.54741 6.93125 5.48485 7.32192 5.50627 7.71254C5.58465 8.64764 5.93681 9.53891 6.51877 10.275C7.58402 11.8697 9.04384 13.1616 10.7563 14.025C11.6543 14.5493 12.6981 14.7686 13.7312 14.65C14.0753 14.5817 14.4011 14.4418 14.6875 14.2394C14.9739 14.037 15.2146 13.7765 15.3937 13.475C15.5597 13.1071 15.612 12.6979 15.5437 12.3C15.4312 12.175 15.2687 12.1125 15.0187 11.9875Z"
										fill="currentColor"
									/>
								</svg>
							</button>
						</a>
					</div>
				))}
			</div>
		</section>
	);
};

export default Contact;
