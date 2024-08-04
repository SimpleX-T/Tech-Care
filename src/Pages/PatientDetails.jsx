/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import { usePatients } from "../hooks/PatientProvider";
import { Line } from "react-chartjs-2";
import styled from "styled-components";
import DiagnosticsList from "../UI/DiagnosticsList";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr 367px;
	gap: 20px;
`;

const MainContent = styled.div`
	background: var(--white-0);
	padding: 20px;
	border-radius: 20px;
	margin-bottom: 20px;
`;

const ChartContainer = styled.div`
	width: 100%;
	height: 300px;
	margin-bottom: 20px;
`;

const CardsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 20px;
`;

const Card = styled.div`
	flex: 1;
	padding: 20px;
	border-radius: 10px;
	text-align: left;
`;

const PatientInfo = styled.div`
	background: var(--white-0);
	margin-bottom: 20px;
	padding: 20px;
	border-radius: 20px;
`;

const ProfilePicture = styled.img`
	width: 150px;
	height: 150px;
	border-radius: 50%;
	margin: 10px auto 20px;
	object-fit: cover;
`;

const LabResults = styled.div`
	margin-top: 10px;
`;

const DownloadButton = styled.div`
	width: 100%;
	padding: 10px;
	margin-top: 5px;
	border: none;
	border-radius: 5px;
	cursor: pointer;

	&:hover {
		background-color: #f0f0f0;
	}
`;

function PatientDetails() {
	const { patients } = usePatients();
	const { name } = useParams();
	const curPatient = patients?.find(
		(patient) => patient.name === name?.split("+")?.join(" ")
	);

	const chartData = {
		labels: curPatient?.diagnosis_history
			.slice(0, 6)
			.map((record) => `${record.month.slice(0, 3)} ${record.year}`)
			.reverse(),
		datasets: [
			{
				label: "Systolic",
				data: curPatient?.diagnosis_history
					.slice(0, 6)
					.map((record) => record.blood_pressure.systolic.value)
					.reverse(),
				borderColor: "#C26EB4",
				tension: 0.4,
			},
			{
				label: "Diastolic",
				data: curPatient?.diagnosis_history
					.slice(0, 6)
					.map((record) => record.blood_pressure.diastolic.value)
					.reverse(),
				borderColor: "#7E6CAB",
				tension: 0.4,
			},
		],
	};

	const latestDiagnosis = curPatient?.diagnosis_history[0];

	if (!name)
		return (
			<div className='w-full h-auto flex items-center justify-center'>
				<p>Please select a patient to view details</p>
			</div>
		);

	return (
		<Container>
			<div>
				<MainContent>
					<h2 className='font-extrabold text-3xl text-[var(--text-dark)]'>
						Diagnosis History
					</h2>
					<ChartContainer>
						<Line
							data={chartData}
							options={{
								responsive: true,
								maintainAspectRatio: false,
								plugins: {
									title: {
										display: true,
										text: "Blood Pressure",
										align: "start",
									},
									legend: {
										display: true,
										position: "top",
									},
								},
								scales: {
									y: {
										beginAtZero: true,
										max: 200,
									},
								},
							}}
						/>
					</ChartContainer>
					<CardsContainer>
						<Card style={{ backgroundColor: "#E0F3FA" }}>
							<img
								src='/icons/diaphragm.svg'
								alt='diaphragm'
							/>
							<h3 className='text-xl text-[var(--text-dark)] mt-4'>
								Respiratory Rate
							</h3>
							<h2 className='text-3xl text-[var(--text-dark)] font-extrabold mb-4'>
								{latestDiagnosis?.respiratory_rate.value} bpm
							</h2>
							<p>{latestDiagnosis?.respiratory_rate.levels}</p>
						</Card>
						<Card style={{ backgroundColor: "#FFE6E9" }}>
							<img
								src='/icons/temperature.svg'
								alt='thermometer'
							/>
							<h3 className='text-xl text-[var(--text-dark)] mt-4'>
								Temperature
							</h3>
							<h2 className='text-3xl text-[var(--text-dark)] font-extrabold mb-4'>
								{latestDiagnosis?.temperature.value}°F
							</h2>
							<p>{latestDiagnosis?.temperature.levels}</p>
						</Card>
						<Card style={{ backgroundColor: "#FFE6F1" }}>
							<img
								src='/icons/HeartBPM.svg'
								alt='heart'
							/>
							<h3 className='text-xl text-[var(--text-dark)] mt-4'>
								Heart Rate
							</h3>
							<h2 className='text-3xl text-[var(--text-dark)] font-extrabold mb-4'>
								{latestDiagnosis?.heart_rate.value} bpm
							</h2>
							<p className='flex items-center'>
								{latestDiagnosis?.heart_rate.levels}
							</p>
						</Card>
					</CardsContainer>
				</MainContent>
				<MainContent>
					<h2 className='font-extrabold text-3xl mb-4 text-[var(--text-dark)]'>
						Diagnostic List
					</h2>
					<DiagnosticsList list={curPatient?.diagnostic_list} />
				</MainContent>
			</div>
			<div>
				<PatientInfo>
					<ProfilePicture
						src={curPatient?.profile_picture}
						alt={curPatient?.name}
					/>
					<h2 className='text-center font-extrabold text-3xl text-[var(--text-dark)] mb-8'>
						{curPatient?.name}
					</h2>
					<div className='flex flex-col gap-12 justify-center'>
						<PatientInfoCard
							icon={"/icons/calendar_today.svg"}
							title={"Date Of Birth:"}
							detail={curPatient?.date_of_birth}
						/>
						<PatientInfoCard
							icon={`/icons/${
								curPatient?.gender === "male"
									? "MaleIcon"
									: "FemaleIcon"
							}.svg`}
							title={"Gender:"}
							detail={curPatient?.gender}
						/>
						<PatientInfoCard
							icon={"/icons/PhoneIcon.svg"}
							title={"Contact info:"}
							detail={curPatient?.phone_number}
						/>
						<PatientInfoCard
							icon={"/icons/PhoneIcon.svg"}
							title={"emergency contacts:"}
							detail={curPatient?.emergency_contact}
						/>
						<PatientInfoCard
							icon={"/icons/InsuranceIcon.svg"}
							title={"insurance provider:"}
							detail={curPatient?.insurance_type}
						/>
						<button className='rounded-2xl bg-[--bg-active-1] text-black p-2 font-semibold w-2/3 mx-auto capitalize text center'>
							show all information
						</button>
					</div>
				</PatientInfo>

				<PatientInfo className='max-h-[300px]'>
					<h3 className='font-extrabold text-3xl text-[var(--text-dark)]'>
						Lab Results
					</h3>
					<LabResults className='max-h-[200px] overflow-y-scroll'>
						{curPatient?.lab_results.map((result, index) => (
							<DownloadButton
								className='flex items-center '
								key={index}>
								<span className='text-left text-lg mr-auto'>
									{result}
								</span>
								<span className='mr-4'>
									<img
										className='w-4 h-4'
										src='/icons/downloadIcon.svg'
										alt='download'
									/>
								</span>
							</DownloadButton>
						))}
					</LabResults>
				</PatientInfo>
			</div>
		</Container>
	);
}

export default PatientDetails;

function PatientInfoCard({ icon, title, detail }) {
	return (
		<div className='flex items-center gap-6 -mb-4'>
			<div className='rounded-full bg-slate-200 w-12 flex items-center justify-center h-12'>
				<img
					className='object-cover'
					src={icon}
					alt='icon'
				/>
			</div>
			<div className='flex flex-col '>
				<p className='capitalize'>{title}</p>
				<p className='capitalize font-semibold'>{detail}</p>
			</div>
		</div>
	);
}
