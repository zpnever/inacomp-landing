"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
}

interface CountdownTimerProps {
	targetDate: string;
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
	const calculateTimeLeft = (): TimeLeft => {
		const difference = new Date(targetDate).getTime() - new Date().getTime();

		let timeLeft: TimeLeft = {
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0,
		};

		if (difference > 0) {
			timeLeft = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60),
			};
		}

		return timeLeft;
	};

	const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);

		return () => clearInterval(timer);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [targetDate]);

	const formatNumber = (num: number) => num.toString().padStart(2, "0");

	return (
		<div className="flex flex-col items-center scale-75 md:scale-100">
			<div className="flex gap-4 font-poppins text-center items-center">
				{/* Days */}
				<div>
					<p className="text-gray-400 opacity-85 text-[15px] font-light">
						Days
					</p>
					<p className="text-[72px] text-gray-700 font-normal">
						{formatNumber(timeLeft.days)}
					</p>
				</div>

				{/* Colon */}
				<p className="text-[72px] text-gray-700 font-normal">:</p>

				{/* Hours */}
				<div>
					<p className="text-gray-400 opacity-85 text-[15px] font-light">
						Hours
					</p>
					<p className="text-[72px] text-gray-700 font-normal">
						{formatNumber(timeLeft.hours)}
					</p>
				</div>

				{/* Colon */}
				<p className="text-[72px] text-gray-700 font-normal">:</p>

				{/* Minutes */}
				<div>
					<p className="text-gray-400 opacity-85 text-[15px] font-light">
						Minutes
					</p>
					<p className="text-[72px] text-gray-700 font-normal">
						{formatNumber(timeLeft.minutes)}
					</p>
				</div>

				{/* Colon */}
				<p className="text-[72px] text-gray-700 font-normal">:</p>

				{/* Seconds */}
				<div>
					<p className="text-gray-400 opacity-85 text-[15px] font-light">
						Seconds
					</p>
					<p className="text-[72px] text-gray-700 font-normal">
						{formatNumber(timeLeft.seconds)}
					</p>
				</div>
			</div>
		</div>
	);
}
