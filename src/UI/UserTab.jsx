import styled from "styled-components";

const ProfileTab = styled.div`
	display: flex;
	align-items: center;
	margin-right: 20px;
	padding-right: 5px;
	border-right: 1px solid var(--bg-secondary);
`;

const TabButton = styled.button`
	display: flex;
	align-items: center;
	background-color: transparent;
	border: none;
	cursor: pointer;
	padding: 0;
`;

const Details = styled.div`
	display: flex;
	text-align: center;
	flex-direction: column;
`;

const ProfileImage = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	margin-right: 10px;
`;

function UserTab() {
	return (
		<>
			<ProfileTab role='tablist' aria-label='User Profile'>
				<TabButton
					role='tab'
					aria-selected='true'
					aria-controls='profile-panel'
					id='profile-tab'
					tabIndex='0'>
					<ProfileImage
						src='/doctor/doctorx2.png'
						alt='Dr. Jose Simmons, General Practitioner'
					/>
					<Details>
						<span
							style={{
								fontWeight: "bold",
								marginRight: "5px",
								fontSize: "14px",
								color: "var(--text-dark)",
							}}>
							Dr. Jose Simmons
						</span>
						<span style={{ color: "#666" }}>
							General Practitioner
						</span>
					</Details>
				</TabButton>
			</ProfileTab>
			<span style={{ marginRight: "20px" }}>
				<a
					style={{ display: "inline-block", marginLeft: "10px" }}
					href='#'
					role='button'
					aria-label='More options'
					title='More options'>
					<img
						style={{ height: "20px", cursor: "pointer" }}
						src='/icons/settingIcon.svg'
						alt='settings'
					/>
				</a>
				<a
					style={{ display: "inline-block", marginLeft: "10px" }}
					role='button'
					href='#'
					aria-label='Settings'
					title='Settings'>
					<img
						style={{}}
						src='/icons/optionVertical.svg'
						alt='options'
					/>
				</a>
			</span>
		</>
	);
}
export default UserTab;
