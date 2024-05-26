import { Outlet } from "react-router-dom";
import Header from "./Header";
import styled from "styled-components";

const StyledAppLayout = styled.div`
	background: var(--bg-primary);
	min-height: 100vh;
	padding: 20px;
`;

function AppLayout() {
	return (
		<StyledAppLayout>
			<Header />
			<Outlet />
		</StyledAppLayout>
	);
}
export default AppLayout;
