import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HeaderIconWrapper = ({ icon }) => {
  return (
    <div className="header-icon-wrapper">
        <FontAwesomeIcon icon={icon} className="icon" />
    </div>
  )
}

export default HeaderIconWrapper