function ListItem({ values }) {
	const { name, description, status } = values;
	return (
		<li
			style={{
				display: "grid",
				gridTemplateColumns: "1fr 1fr 100px",
				gap: "10px",
				padding: "12px 20px",
				marginBlock: "20px",
			}}>
			<p className='name'>{name}</p>
			<p className='description'>{description}</p>
			<p className='status'>{status}</p>
		</li>
	);
}
export default ListItem;
