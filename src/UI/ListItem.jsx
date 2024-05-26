function ListItem({ values }) {
	const { name, description, status } = values;
	return (
		<li
			style={{
				display: "grid",
				gridTemplateColumns: "1fr 1fr 100px",
				// gap: "10px",
				padding: "8px 20px",
				marginBlock: "10px",
				borderBottom: "1px solid var(--bg-secondary)",
			}}>
			<p className='name'>{name}</p>
			<p className='description'>{description}</p>
			<p className='status'>{status}</p>
		</li>
	);
}
export default ListItem;
