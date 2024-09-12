import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {FaMoon} from 'react-icons/fa'
import {FiMenu, FiSun, FiLogOut} from 'react-icons/fi'
import NxtWatchAppContext from '../../Context/NxtWatchAppContext'
import {
  NavbarBgContainer,
  NavbarHeaderCard,
  NavbarHeaderLogoCard,
  NavbarHeaderContentCard,
  NavbarThemeSwitcherButton,
  NavbarMenuButton,
  NavbarLogoutButton,
  NavbarProfileCard,
  NavbarContentCard,
  PopupContentCard,
  PopupText,
  PopupButtonsContainer,
  PopupCancelButton,
  PopupLogoutButton,
} from './styledComponent'
import MobileNavbarMenuCard from '../MobileNavbarMenuCard'

class Navbar extends Component {
  state = {
    showMobileMenu: false,
  }

  onToggleMobileMenuCard = () => {
    this.setState(prevState => ({showMobileMenu: !prevState.showMobileMenu}))
  }

  onClickLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    const {showMobileMenu} = this.state

    return (
      <NxtWatchAppContext.Consumer>
        {value => {
          const {isDarkModeEnabled, onToggleDarkMode} = value
          const logoUrl = isDarkModeEnabled
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <NavbarBgContainer isDarkModeEnabled={isDarkModeEnabled}>
              {/* Header */}
              <NavbarHeaderCard>
                <Link to="/">
                  <NavbarHeaderLogoCard src={logoUrl} alt="website logo" />
                </Link>

                <NavbarHeaderContentCard>
                  {/* Dark Mode Toggle Button */}
                  <NavbarThemeSwitcherButton
                    type="button"
                    data-testid="theme"
                    onClick={onToggleDarkMode}
                    isDarkModeEnabled={isDarkModeEnabled}
                  >
                    {isDarkModeEnabled ? <FiSun /> : <FaMoon />}
                  </NavbarThemeSwitcherButton>

                  {/* Mobile Menu Toggle */}
                  <NavbarMenuButton
                    type="button"
                    onClick={this.onToggleMobileMenuCard}
                  >
                    <FiMenu />
                  </NavbarMenuButton>

                  {/* Logout Popup */}
                  <Popup
                    modal
                    trigger={
                      <NavbarLogoutButton type="button">
                        <FiLogOut />
                      </NavbarLogoutButton>
                    }
                  >
                    {close => (
                      <PopupContentCard isDarkModeEnabled={isDarkModeEnabled}>
                        <PopupText>Are you sure, you want to logout?</PopupText>
                        <PopupButtonsContainer>
                          <PopupCancelButton
                            type="button"
                            onClick={() => close()}
                            isDarkModeEnabled={isDarkModeEnabled}
                          >
                            Cancel
                          </PopupCancelButton>
                          <PopupLogoutButton
                            type="button"
                            onClick={this.onClickLogout}
                          >
                            Confirm
                          </PopupLogoutButton>
                        </PopupButtonsContainer>
                      </PopupContentCard>
                    )}
                  </Popup>
                </NavbarHeaderContentCard>
              </NavbarHeaderCard>

              {/* Mobile Menu */}
              {showMobileMenu && (
                <MobileNavbarMenuCard isDarkModeEnabled={isDarkModeEnabled} />
              )}

              {/* Profile and Logout */}
              <NavbarContentCard>
                <NavbarProfileCard
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </NavbarContentCard>
            </NavbarBgContainer>
          )
        }}
      </NxtWatchAppContext.Consumer>
    )
  }
}

export default withRouter(Navbar)
