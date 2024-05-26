import { usePatients } from "../hooks/PatientProvider";
import Patient from "./Patient";
import PatientsSkeleton from "./PatientsSkeleton";

function PatientList() {
	const {
		patients,
		isLoading: isFetchingPatients,
		errorMessage,
	} = usePatients();

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				paddingInline: "10px",
			}}>
			{isFetchingPatients && <PatientsSkeleton />}
			{errorMessage && <p>{errorMessage}</p>}
			{patients.map((patient) => (
				<Patient patient={patient} key={patient.name} />
			))}
		</div>
	);
}
export default PatientList;
