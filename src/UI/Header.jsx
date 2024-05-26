import styled from "styled-components";
import Logo from "./Logo";
import NavBar from "./NavBar";
import UserTab from "./UserTab";

const StyledHeader = styled.header`
	height: 72px;
	margin-bottom: 50px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: var(--white-0);
	padding: 10px 20px;
	border-radius: 3rem;
`;

function Header() {
	return (
		<StyledHeader>
			<Logo />
			<NavBar />
			<UserTab />
		</StyledHeader>
	);
}
export default Header;
