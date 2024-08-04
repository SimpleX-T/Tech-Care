import ListItem from "./ListItem";

function DiagnosticsList({ list }) {
	return (
		<ul className='overflow-y-scroll max-h-[220px] h-[220px]'>
			{list?.map((item, index) => (
				<ListItem
					values={item}
					key={index}
				/>
			))}
		</ul>
	);
}
export default DiagnosticsList;
