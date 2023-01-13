import Label from "../Labels/Label"

const MenuListItem = ({ text, url, labelType=null }) => {
    return (  
        <li className="menu-list-item">
            <Label labelType={labelType}/>
            <a href={url} className="link">{text}</a>
        </li> 
    )
}

export default MenuListItem