import styled from 'styled-components'

// NavbarBgContainer (Dark mode styles for navbar)
export const NavbarBgContainer = styled.nav`
  background-color: ${props =>
    props.isDarkModeEnabled ? '#212121' : '#ffffff'};
  padding: 16px;
`

// NavbarHeaderCard (Main container for header)
export const NavbarHeaderCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

// NavbarHeaderLogoCard (Website logo styling)
export const NavbarHeaderLogoCard = styled.img`
  width: 150px;
`

// NavbarHeaderContentCard (For medium and large devices layout)
export const NavbarHeaderContentCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    justify-content: flex-end;
  }
`

// NavbarContentCard (For profile and logout button)
export const NavbarContentCard = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }
`

// NavbarProfileCard (For profile image styling)
export const NavbarProfileCard = styled.img`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    width: 40px;
    border-radius: 20px;
    margin-right: 16px;
  }
`

// NavbarLogoutButton (Logout button)
export const NavbarLogoutButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;

  /* Icon styling */
  .logout-icon {
    display: block; /* Show icon on all screens */
    font-size: 24px;
  }

  /* For mobile screens */
  @media screen and (max-width: 767px) {
    border: none;
    padding: 0; /* Remove border and padding on mobile */
  }

  /* For medium and larger screens */
  @media screen and (min-width: 768px) {
    border: 1px solid ${props =>
      props.isDarkModeEnabled ? '#ffffff' : '#000000'};
    color: ${props => (props.isDarkModeEnabled ? '#ffffff' : '#000000')};

    /* Hide the logout icon on medium and large screens */
    .logout-icon {
      display: none;
    }

    /* Show the logout text on larger screens */
    &::after {
      content: 'Logout';
      margin-left: 8px; /* Space between icon and text */
      display: inline-block;
    }
  }
`

// NavbarThemeSwitcherButton (For dark mode toggle)
export const NavbarThemeSwitcherButton = styled.button`
  display: block;
  background-color: transparent;
  border: none;
  color: ${props => (props.isDarkModeEnabled ? '#ffffff' : '#000000')};
  font-size: 24px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    display: block;
  }
`

// NavbarMenuButton (Mobile menu icon)
export const NavbarMenuButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => (props.isDarkModeEnabled ? '#ffffff' : '#000000')};
  font-size: 24px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

// PopupContentCard (Popup modal content)
export const PopupContentCard = styled.div`
  background-color: ${props =>
    props.isDarkModeEnabled ? '#212121' : '#ffffff'};
  padding: 20px;
  border-radius: 8px;
  text-align: center;
`

// PopupText (Popup message text)
export const PopupText = styled.p`
  font-size: 18px;
  color: ${props => (props.isDarkModeEnabled ? '#ffffff' : '#000000')};
`

// PopupButtonsContainer (Buttons container in popup)
export const PopupButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`

// PopupCancelButton (Cancel button in popup)
export const PopupCancelButton = styled.button`
  background-color: transparent;
  border: 1px solid ${props =>
    props.isDarkModeEnabled ? '#ffffff' : '#000000'};
  color: ${props => (props.isDarkModeEnabled ? '#ffffff' : '#000000')};
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 4px;
`

// PopupLogoutButton (Confirm logout button in popup)
export const PopupLogoutButton = styled.button`
  background-color: #ff0b37;
  color: #ffffff;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
`
