import { NavLink } from "react-router-dom";

function Patient({ patient }) {
	const { name, age, profile_picture, gender } = patient;
	return (
		<NavLink
			to={`/patients/${name.split(" ").join("+")}`}
			className='patient'
			style={{
				height: "80px",
				padding: "20px",
				display: "flex",
				alignItems: "center",
				gap: "20px",
				textDecoration: "none",
				transition: "background-color 300ms linear",
			}}>
			<img style={{ width: "45px" }} src={profile_picture} alt='' />
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					fontSize: "14px",
					marginRight: "auto",
					color: "var(--text-dark)",
				}}>
				<h3>{name}</h3>
				<p>
					<span>{gender}, </span>
					<span>{age}</span>
				</p>
			</div>
			<button
				style={{
					background: "none",
					cursor: "pointer",
					marginRight: "10px",
				}}>
				<img src='/icons/optionHorizontal.svg' alt='' />
			</button>
		</NavLink>
	);
}
export default Patient;
