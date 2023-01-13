import '../../styles/header.css'

import Logo from '../../assets/images/logo.png'
import MenuListItem from './MenuListItem'
import { faHeart, faMagnifyingGlass, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'
import MenuBurger from './MenuBurger'
import HeaderIconWrapper from './HeaderIconWrapper'

const menuLinkList = [
  {
    text: 'Theme Demo',
    url: "#",
    labelType: 'new',
  },
  {
    text: 'Shop',
    url: "#",
    labelType: 'hot'
  },
  {
    text: 'Product',
    url: "#"
  },
  {
    text: 'Blog',
    url: "#"
  },
  {
    text: 'New In',
    url: "#"
  },
  {
    text: 'Trends',
    url: "#"
  },
  {
    text: 'Collections',
    url: "#"
  }
]

const Header = () => {
  return (
    <section className="header">
      <div className="logo-wrapper">
        <img src={Logo} alt="Logo" />
      </div>
      <nav className="header-nav">
        <ul className="menu-list">
          {menuLinkList.map((listItem, index) => (
            <MenuListItem key={`menu-list-item-${index}`} text={listItem.text} url={listItem.url} labelType={listItem.labelType} />
          ))}
        </ul> 
      </nav>
      <div className="header-actions">
          <HeaderIconWrapper icon={faMagnifyingGlass} />
          <HeaderIconWrapper icon={faUser} labelType="hot" />
          <HeaderIconWrapper icon={faHeart} />
          <HeaderIconWrapper icon={faShoppingCart} />
          <MenuBurger />  
      </div>
    </section>  
  )
}

export default Header