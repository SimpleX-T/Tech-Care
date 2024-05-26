/* eslint-disable no-unused-vars */
import React from "react";
import Chart from "chart.js/auto";
import { useParams } from "react-router-dom";
import { usePatients } from "../hooks/PatientProvider";
import { Line } from "react-chartjs-2";
import styled from "styled-components";
import DiagnosticsList from "../UI/DiagnosticsList";

Chart.defaults.plugins.title.display = true;
Chart.defaults.plugins.title.align = "start";
Chart.defaults.plugins.title.font.size = 18;
Chart.defaults.plugins.title.color = "#072635";

Chart.defaults.plugins.legend.display = false;

Chart.defaults.plugins.subtitle.display = true;
Chart.defaults.plugins.subtitle.align = "end";
Chart.defaults.plugins.subtitle.font.size = 14;
Chart.defaults.plugins.subtitle.color = "";

Chart.defaults.maintainAspectRatio = false;
Chart.defaults.responsive = true;

const DiagnosisContainer = styled.div`
	max-width: 800px;
	position: relative;
`;

const ChartContainer = styled.div`
	width: 100%;
	display: flex;
	align-content: center;
	gap: 20px;
	background: var(--bg-secondary);
	padding: 20px;
	border-radius: 20px;
	margin-bottom: 20px;
`;

const CardsContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	gap: 20px;
`;

const Card = styled.div`
	width: 250px;
	padding: 20px;
	border-radius: 10px;
`;

const PatientInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 20px;
`;

const ProfilePicture = styled.img`
	width: 100px;
	height: 100px;
	border-radius: 50%;
	object-fit: cover;
	margin-bottom: 10px;
`;

function PatientDetails() {
	const { patients } = usePatients();
	const { name } = useParams();
	const curPatient = patients?.find(
		(patient) => patient.name === name?.split("+")?.join(" ")
	);

	const chartData = {
		labels: [],
		datasets: [
			{
				label: "Systolic",
				data: [],
				borderColor: "#C26EB4",
				pointBorderColor: "#E66FD2",
				pointHoverBorderColor: "#C26EB4",
				pointHoverBorderWidth: 3,
				pointBorderWidth: 5,
				borderWidth: 1.5,
				fill: false,
				tension: 0.4,
			},
			{
				label: "Diastolic",
				data: [],
				borderColor: "#7E6CAB",
				pointBorderColor: "#8C6FE6",
				pointHoverBorderColor: "#7E6CAB",
				pointHoverBorderWidth: 3,
				pointBorderWidth: 5,
				borderWidth: 1.5,
				fill: false,
				tension: 0.4,
			},
		],
	};

	curPatient?.diagnosis_history.forEach((record) => {
		const month = `${record.month.slice(0, 3)}, ${record.year}`;
		chartData.labels.push(month);
		chartData.datasets[0].data.push(record.blood_pressure.systolic.value);
		chartData.datasets[1].data.push(record.blood_pressure.diastolic.value);
	});

	const respiratoryRates = [];
	const heartRates = [];
	const temperature = [];

	curPatient?.diagnosis_history.map((item) => {
		respiratoryRates.push(item.respiratory_rate.value);
		heartRates.push(item.heart_rate.value);
		temperature.push(item.temperature.value);
	});

	function average(numbers) {
		let sum = numbers.reduce((a, b) => a + b, 0);
		return sum / numbers.length;
	}

	const averageResp = average(respiratoryRates).toFixed(1);
	const averageHeartRates = average(heartRates).toFixed(1);
	const averageTemperature = average(temperature).toFixed(1);

	console.log(curPatient);

	return (
		<div style={{ display: "grid", gridTemplateColumns: "1fr 367px" }}>
			<DiagnosisContainer>
				<div
					style={{
						background: "var(--white-0)",
						padding: "20px",
						borderRadius: "20px",
						marginBottom: "20px",
					}}>
					<h2 style={{ marginBottom: "20px" }}>Diagnosis History</h2>
					<ChartContainer>
						<div>
							<Line
								style={{ height: "298px" }}
								data={chartData}
								options={{
									plugins: {
										title: {
											text: "Blood Pressure",
											display: true,
										},
										subtitle: {
											text: "Last 6 months",
											display: true,
										},
										legend: {
											labels: {
												fontSize: 14,
												fontColor: "#333",
											},
										},
									},
									scales: {
										x: {
											grid: {
												display: false,
											},
										},
										y: {
											min: 60,
											max: 180,
											ticks: {
												stepSize: 20,
											},
											grid: {
												drawBorder: false,
											},
										},
									},
								}}
							/>
						</div>

						<div className='estimate'>hello</div>
					</ChartContainer>
					<CardsContainer>
						<Card style={{ backgroundColor: "#E0F3FA" }}>
							<img
								src='/icons/diaphragm.svg'
								alt='Respiratory Rate'
							/>
							<h3>Respiratory Rate</h3>
							<h2>{averageResp} Bpm</h2>
							<p>
								{averageResp >= 20 && "Normal"}
								{averageResp > 60 && "Above Average"}
								{averageResp < 10 && "Below Average"}
							</p>
						</Card>
						<Card style={{ backgroundColor: "#FFE6E9" }}>
							<img
								src='/icons/temperature.svg'
								alt='Temperature'
							/>
							<h3>Temperature</h3>
							<h2>{averageTemperature} °F</h2>
							<p>
								{averageTemperature <= 100 && "Normal"}
								{averageTemperature > 100 && "Above Average"}
								{averageTemperature < 70 && "Below Average"}
							</p>
						</Card>
						<Card style={{ backgroundColor: "#FFE6F1" }}>
							<img src='/icons/HeartBPM.svg' alt='Heart Rate' />
							<h3>Heart Rate</h3>
							<h2>{averageHeartRates} Bpm</h2>
							<p>
								{averageHeartRates >= 70 && "Normal"}
								{averageHeartRates > 190 && "Above Average"}
								{averageHeartRates < 70 && "Below Average"}
							</p>
						</Card>
					</CardsContainer>
				</div>
				<div
					className='diagnostics_list'
					style={{
						background: "var(--white-0)",
						padding: "20px",
						borderRadius: "20px",
						marginBottom: "20px",
					}}>
					<h2 style={{ marginBottom: "20px" }}>Diagnostic List</h2>
					<div style={{ fontSize: "14px" }}>
						<div
							className='list-head'
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								paddingInline: "10px",
								background: "var(--bg-secondary)",
								padding: "12px 20px",
								borderRadius: "50vw",
							}}>
							<h3>Problem/Diagnosis</h3>
							<h3>Description</h3>
							<h3>Status</h3>
						</div>
						<DiagnosticsList list={curPatient?.diagnostic_list} />
					</div>
				</div>
			</DiagnosisContainer>

			<PatientInfo>
				<ProfilePicture
					src='/public/doctor/doctorx2.png'
					alt='Jessica Taylor'
				/>
				<h3>Jessica Taylor</h3>
				<p>Date Of Birth: August 23, 1996</p>
				<p>Gender: Female</p>
				<p>Contact Info: (415) 555-1234</p>
				<p>Emergency Contacts: (415) 555-5678</p>
			</PatientInfo>
		</div>
	);
}

export default PatientDetails;

// /* eslint-disable no-unused-vars */
// import Chart from "chart.js/auto";
// import { useParams } from "react-router-dom";
// import { usePatients } from "../hooks/PatientProvider";
// import { Line } from "react-chartjs-2";

// Chart.defaults.plugins.title.display = true;
// Chart.defaults.plugins.title.align = "start";
// Chart.defaults.plugins.title.font.size = 18;
// Chart.defaults.plugins.title.color = "#072635";

// Chart.defaults.plugins.subtitle.display = true;
// Chart.defaults.plugins.subtitle.align = "end";
// Chart.defaults.plugins.subtitle.font.size = 14;
// Chart.defaults.plugins.subtitle.color = "";

// // Chart.defaults.maintainAspectRatio = false;
// // Chart.defaults.responsive = true;

// function PatientDetails() {
// 	const { name } = useParams();
// 	const { patients } = usePatients();
// 	const curPatient = patients.find(
// 		(patient) => patient.name === name.split("+").join(" ")
// 	);

// 	const chartData = {
// 		labels: [],
// 		datasets: [
// 			{
// 				label: "Systolic",
// 				data: [],
// 				borderColor: "#C26EB4",
// 				pointBorderColor: "#E66FD2",
// 				pointHoverBorderColor: "#C26EB4",
// 				pointHoverBorderWidth: 10,
// 				pointBorderWidth: 14,
// 				fill: false,
// 				tension: 0.4,
// 			},
// 			{
// 				label: "Diastolic",
// 				data: [],
// 				borderColor: "#7E6CAB",
// 				pointBorderColor: "#8C6FE6",
// 				pointHoverBorderColor: "#7E6CAB",
// 				pointHoverBorderWidth: 10,
// 				pointBorderWidth: 14,
// 				fill: false,
// 				tension: 0.4,
// 			},
// 		],
// 	};

// 	curPatient?.diagnosis_history.forEach((record) => {
// 		const month = `${record.month.slice(0, 3)}, ${record.year}`;
// 		chartData.labels.push(month);
// 		chartData.datasets[0].data.push(record.blood_pressure.systolic.value);
// 		chartData.datasets[1].data.push(record.blood_pressure.diastolic.value);
// 	});

// 	// console.log(curPatient);
// 	// console.log(chartData);

// 	return (
// 		<div>
// 			<div className='diagnosis_history' style={{ width: "768px" }}>
// 				<h2 style={{ marginBottom: "20px" }}>Diagnosis History</h2>
// 				<div
// 					className='chart'
// 					style={{
// 						width: "70%",
// 						background: "var(--bg-secondary)",
// 						padding: "20px",
// 						borderRadius: "20px",
// 					}}>
// 					<Line
// 						data={chartData}
// 						options={{
// 							plugins: {
// 								title: {
// 									text: "Blood Pressure",
// 								},
// 								subtitle: {
// 									text: `Last 6 months`,
// 								},
// 							},
// 						}}
// 					/>
// 				</div>
// 				<div className='cards'>
// 					<div className='card respiratory'>
// 						<img
// 							src='/public/icons/diaphragm.svg'
// 							alt='Diaphragm'
// 						/>
// 					</div>
// 				</div>
// 			</div>
// 			<div className='diagnosis_list'></div>
// 		</div>
// 	);
// }
// export default PatientDetails;
