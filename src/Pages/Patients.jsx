import Sidebar from "../UI/Sidebar";
import PatientDetails from "./PatientDetails";

function Patients() {
	return (
		<main
			style={{
				display: "grid",
				gridTemplateColumns: "350px 1fr",
				gap: "20px",
			}}>
			<Sidebar />
			<PatientDetails />
		</main>
	);
}
export default Patients;
