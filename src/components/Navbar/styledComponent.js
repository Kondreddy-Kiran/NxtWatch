import styled from 'styled-components'

// Navbar Container
export const NavbarBgContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  background-color: ${props =>
    props.isDarkModeEnabled ? '#181818' : '#ffffff'};
  color: ${props => (props.isDarkModeEnabled ? '#ffffff' : '#000000')};

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`

// Navbar Header (Logo and buttons)
export const NavbarHeaderCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavbarHeaderLogoCard = styled.img`
  width: 120px;
`

export const NavbarHeaderContentCard = styled.div`
  display: flex;
  align-items: center;
`

// Dark Mode Toggle Button
export const NavbarThemeSwitcherButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 24px;
  color: ${props => (props.isDarkModeEnabled ? '#ffffff' : '#000000')};
  cursor: pointer;

  @media screen and (min-width: 768px) {
    margin-right: 20px;
  }
`

// Menu Button (Only visible on mobile)
export const NavbarMenuButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 24px;
  color: ${props => (props.isDarkModeEnabled ? '#ffffff' : '#000000')};
  cursor: pointer;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

// Logout Button
export const NavbarLogoutButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 24px;
  color: ${props => (props.isDarkModeEnabled ? '#ffffff' : '#000000')};
  cursor: pointer;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    margin-left: 20px;
  }
`

// Navbar Profile Section (Only visible on desktop)
export const NavbarContentCard = styled.div`
  display: none;
  
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`

export const NavbarProfileCard = styled.img`
  width: 40px;
  border-radius: 20px;
`

// Popup Styles
export const PopupContentCard = styled.div`
  background-color: ${props =>
    props.isDarkModeEnabled ? '#1a1a1a' : '#ffffff'};
  padding: 20px;
  border-radius: 10px;
`

export const PopupText = styled.p`
  color: ${props => (props.isDarkModeEnabled ? '#ffffff' : '#000000')};
`

export const PopupButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`

export const PopupCancelButton = styled.button`
  background-color: transparent;
  border: 1px solid ${props =>
    props.isDarkModeEnabled ? '#ffffff' : '#000000'};
  color: ${props => (props.isDarkModeEnabled ? '#ffffff' : '#000000')};
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
`

export const PopupLogoutButton = styled.button`
  background-color: red;
  border: none;
  color: #ffffff;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
`
