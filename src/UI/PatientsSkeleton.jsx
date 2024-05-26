import Skeleton from "react-loading-skeleton";

import "react-loading-skeleton/dist/skeleton.css";

function PatientsSkeleton() {
	return (
		<div
			style={{
				padding: "20px",
				display: "flex",
				flexDirection: "column",
				gap: "20px",
			}}>
			<div style={{ display: "flex", gap: "10px" }}>
				<Skeleton circle width={50} height={50} />
				<Skeleton height={50} width='240px' />
			</div>
			<div style={{ display: "flex", gap: "10px" }}>
				<Skeleton circle width={50} height={50} />
				<Skeleton height={50} width='240px' />
			</div>
			<div style={{ display: "flex", gap: "10px" }}>
				<Skeleton circle width={50} height={50} />
				<Skeleton height={50} width='240px' />
			</div>
			<div style={{ display: "flex", gap: "10px" }}>
				<Skeleton circle width={50} height={50} />
				<Skeleton height={50} width='240px' />
			</div>
			<div style={{ display: "flex", gap: "10px" }}>
				<Skeleton circle width={50} height={50} />
				<Skeleton height={50} width='240px' />
			</div>
			<div style={{ display: "flex", gap: "10px" }}>
				<Skeleton circle width={50} height={50} />
				<Skeleton height={50} width='240px' />
			</div>
			{/* <div style={{ display: "flex", gap: "10px" }}>
				<Skeleton circle width={50} height={50} />
				<Skeleton height={50} width='240px' />
			</div>
			<div style={{ display: "flex", gap: "10px" }}>
				<Skeleton circle width={50} height={50} />
				<Skeleton height={50} width='240px' />
			</div>
			<div style={{ display: "flex", gap: "10px" }}>
				<Skeleton circle width={50} height={50} />
				<Skeleton height={50} width='240px' />
			</div>
			<div style={{ display: "flex", gap: "10px" }}>
				<Skeleton circle width={50} height={50} />
				<Skeleton height={50} width='240px' />
			</div>
			<div style={{ display: "flex", gap: "10px" }}>
				<Skeleton circle width={50} height={50} />
				<Skeleton height={50} width='240px' />
			</div>
			<div style={{ display: "flex", gap: "10px" }}>
				<Skeleton circle width={50} height={50} />
				<Skeleton height={50} width='240px' />
			</div> */}
		</div>
	);
}
export default PatientsSkeleton;
