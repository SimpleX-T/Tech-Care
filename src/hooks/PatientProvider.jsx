import { createContext, useContext, useEffect, useState } from "react";

const patientContext = createContext();

function PatientProvider({ children }) {
	const [isLoading, setIsLoading] = useState(false);
	const [patients, setPatients] = useState([]);
	const [errorMessage, setErrorMessage] = useState("");

	function encryptAuth(username, password) {
		return btoa(`${username}:${password}`);
	}
	const username = "coalition";
	const password = "skills-test";

	useEffect(function () {
		async function fetchPatients() {
			setIsLoading(true);
			try {
				const res = await fetch(
					"https://fedskillstest.coalitiontechnologies.workers.dev",
					{
						method: "GET",
						headers: {
							Authorization: `Basic ${encryptAuth(
								username,
								password
							)}`,
						},
						redirect: "follow",
					}
				);

				if (!res.ok) throw new Error("Could not fetch data");

				const data = await res.json();
				// console.log(data);
				setPatients(data);
			} catch (error) {
				console.log("error", error.message);
				setErrorMessage(error.message);
			} finally {
				setIsLoading(false);
			}
		}
		fetchPatients();
	}, []);

	return (
		<patientContext.Provider value={{ isLoading, patients, errorMessage }}>
			{children}
		</patientContext.Provider>
	);
}

function usePatients() {
	const context = useContext(patientContext);

	if (context === undefined)
		throw new Error("Patient Provider was used  outside its scope");
	return context;
}

export { PatientProvider, usePatients };
