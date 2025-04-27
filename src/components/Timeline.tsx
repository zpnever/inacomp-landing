import CardLeft from "./CardTimeline/CardLeft";
import CardMid from "./CardTimeline/CardMid";
import CardRight from "./CardTimeline/CardRight";

const Timeline = () => {
	return (
		<section className="mt-30 pt-20 font-jakarta" id="timeline">
			<div className="text-center">
				<h2 className="text-secondary-light-blue text-[18px] font-extrabold">
					TIMELINE
				</h2>
				<h3 className="text-premier-dark-blue text-[58px] font-bold">
					Event Flow
				</h3>
			</div>
			<div className="flex justify-center mt-18">
				<CardMid
					title="Pendaftaran"
					date="1 - 18 Mei 2025"
					desc="Peserta mendaftar secara online melalui platform google form dan mengkonfirmasi pendaftaranya. Setelah itu bergabung ke grup wa yang sudah tertera pada formulis pendaftaran."
				/>
			</div>
			<div className="flex justify-center">
				<div>
					<div className="w-full flex justify-end mt-46">
						<CardLeft
							title="Babak Penyisihan"
							date="24 Mei 2025"
							desc="Babak penyisihan akan dilaksanakan secara online dan diikuti oleh seluruh tim. Model kompetisi yang digunakan adalah peserta menyelesaikan soal yang diberikan oleh panitia."
						/>
					</div>
					<div className="w-full flex justify-end mt-32">
						<CardLeft
							title="Technical Meeting Final"
							date="29 Mei 2025"
							desc="Peserta mengikuti technical meeting babak final secara online untuk mengetahui dengan jelas teknik yang digunakan dalam pelaksanaan kompetisi pada babak final."
						/>
					</div>
				</div>
				<img src="timeline/grafTimeline.svg" alt="graf.svg" />
				<div>
					<div className="flex justify-start mt-30">
						<CardRight
							title="Technical Meeting"
							date="21 Mei 2025"
							desc="Peserta mengikuti technical meeting babak penyisihan secara online untuk mengetahui dengan jelas teknis yang digunakan dalam pelaksanaan kompetisi pada babak penyisihan."
						/>
					</div>
					<div className="flex justify-start mt-32">
						<CardRight
							title="Pengumuman Finalis"
							date="26 Mei 2025"
							desc="Hasil dari keputusan juri atas finalis yang lolos pada babak penyisihan akan diumumkan melalui Instagram INACOMP 1.0 (@inacomp.unj) dan email ketua masing-masing tim yang lolos."
						/>
					</div>
				</div>
			</div>
			<div className="flex justify-center">
				<CardMid
					title="Pendaftaran"
					date="3 Juni 2025"
					desc="Babak final akan dilaksanakan secara offline di Tower A, Universitas Negeri Jakarta dan diikuti oleh tim yang lolos pada babak penyisihan. Model kompetisi yang digunakan adalah peserta menyelesaikan soal yang diberikan oleh panitia."
				/>
			</div>
		</section>
	);
};

export default Timeline;
