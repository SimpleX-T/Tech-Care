import styled from "styled-components";
import PatientList from "./PatientList";

const Aside = styled.aside`
	/* position: fixed; */
	width: 100%;
	height: 1080px;
	background: var(--white-0);
	border-radius: 20px;
	overflow: hidden;
	overflow-y: scroll;
	scrollbar-width: thin;
`;

function Sidebar() {
	return (
		<Aside>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					marginBottom: "10px",
					padding: "20px",
				}}>
				<h2
					style={{
						marginRight: "auto",
						fontSize: "24px",
						color: "var(--text-dark)",
					}}>
					Patients
				</h2>
				<button
					style={{
						background: "none",
						cursor: "pointer",
					}}>
					<img
						style={{ width: "25px" }}
						src='/icons/searchIcon.svg'
						alt='Search'
					/>
				</button>
			</div>

			<PatientList />
		</Aside>
	);
}
export default Sidebar;
