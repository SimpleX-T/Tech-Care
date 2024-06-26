import ListItem from "./ListItem";

function DiagnosticsList({ list }) {
	return (
		<ul style={{ overflowY: "scroll", scrollbarWidth: "thin" }}>
			{list?.map((item) => (
				<ListItem values={item} key={item.name} />
			))}
		</ul>
	);
}
export default DiagnosticsList;
