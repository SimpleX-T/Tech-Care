import styled from "styled-components";
import NavList from "./NavList";

const StyledNav = styled.nav`
	width: 50%;
	display: flex;
	gap: 2px;
	list-style: none;
`;

function NavBar() {
	return (
		<StyledNav role='navigation'>
			<NavList icon='/icons/homeIcon.svg' to='/' text='overview' />
			<NavList
				icon='/icons/groupIcon.svg'
				text='patients'
				to='patients'
			/>
			<NavList
				icon='/icons/calendar_today.svg'
				text='schedule'
				to='schedule'
			/>
			<NavList
				icon='/icons/chat_bubble.svg'
				text='message'
				to='message'
			/>
			<NavList
				icon='/icons/credit_card.svg'
				text='transactions'
				to='transaction'
			/>
		</StyledNav>
	);
}
export default NavBar;
