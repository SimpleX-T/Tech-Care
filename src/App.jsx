import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./UI/AppLayout";
// import PatientDetails from "./Pages/PatientDetails";
import ErrorPage from "./Pages/ErrorPage";
import { PatientProvider } from "./hooks/PatientProvider";
import Patients from "./Pages/Patients";

function App() {
	return (
		<PatientProvider>
			<BrowserRouter>
				<Routes>
					<Route index element={<AppLayout />} />
					<Route path='/' element={<AppLayout />}>
						<Route path='patients' element={<Patients />} />
						<Route path='patients/:name' element={<Patients />} />
					</Route>
					<Route path='*' element={<ErrorPage />} />
				</Routes>
			</BrowserRouter>
		</PatientProvider>
	);
}
export default App;
