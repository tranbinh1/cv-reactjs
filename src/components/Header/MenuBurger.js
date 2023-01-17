import { useState } from "react"

const MenuBurger = () => {
    const [open, setOpen] = useState(false);

    const toggleOpenBurger = () => {
        setOpen(prevOpen => !prevOpen);
    }
    
    return (
        <div className={`menu-burger ${open ? "open" : ""}`} onClick={toggleOpenBurger}>
            <span className="line line-1"/>
            <span className="line line-2"/>
            <span className="line line-3"/>
        </div>
    )
}

export default MenuBurger