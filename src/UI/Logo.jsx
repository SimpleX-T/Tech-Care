import styled from "styled-components";

const LogoDiv = styled.div`
	margin-right: auto;
`;

const StyledImage = styled.img`
	height: 40px;
`;

function Logo() {
	return (
		<LogoDiv className='logo'>
			<StyledImage src='/logo.svg' alt='Tech Care Logo' />
		</LogoDiv>
	);
}
export default Logo;
