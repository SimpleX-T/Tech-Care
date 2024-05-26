import { Link, useNavigate } from "react-router-dom";

function ErrorPage() {
	const navigate = useNavigate();

	return (
		<div
			style={{
				textAlign: "center",
				margin: "20px auto",
				lineHeight: 2,
			}}>
			<h1>404</h1>
			<p>An Error Occurred</p>
			<em>Couldn&apos;t find the path you inputted</em>
			<Link
				style={{
					display: "block",
				}}
				onClick={() => navigate(-1, { replace: true })}>
				&larr; Go Back
			</Link>
		</div>
	);
}
export default ErrorPage;
