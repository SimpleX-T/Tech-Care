import { useNavigate } from "react-router-dom";

function ErrorPage() {
	const navigate = useNavigate();

	return (
		<div className='container h-screen flex items-center justify-center'>
			<div className='w-5/6 mx-auto text-center'>
				<h1 className='text-8xl font-extrabold my-12'>404</h1>
				<p className='text-4xl font-semibold mb-4'>Page not found</p>
				<em className='text-xl'>
					Couldn&apos;t find the path you inputted
				</em>
				<button
					className='w-32 p-2 my-4 text-center items-center justify-center rounded-lg flex mx-auto border border-solid'
					onClick={() => navigate(-1, { replace: true })}>
					Go Back
				</button>
			</div>
		</div>
	);
}
export default ErrorPage;
