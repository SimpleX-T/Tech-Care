import { NavLink } from "react-router-dom";
import styled from "styled-components";

const List = styled.li`
	font-size: 14px;
	cursor: pointer;
	transition: background-color 300ms ease;
`;

const StyledNavLink = styled(NavLink)`
	display: flex;
	align-items: center;
	padding: 10px;
	border: none;
	border-radius: 18px;
	text-decoration: none;
	color: var(--text-dark);
	font-weight: bold;
	text-transform: capitalize;
`;

const Span = styled.span`
	display: flex;
	align-items: center;
	margin-right: 3px;
`;

const NavIcon = styled.img`
	height: 20px;
	margin-right: 5px;
`;

function NavList({ icon, text, to }) {
	return (
		<List role='listitem'>
			<StyledNavLink to={to} role='link'>
				<Span>
					<NavIcon src={icon} alt={text} />
				</Span>
				{text}
			</StyledNavLink>
		</List>
	);
}

export default NavList;
