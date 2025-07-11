import "./SideMenu.css";
import MenuItem from "./MenuItem";

const SideMenu = ({menuItems}) => {
    return (
        <nav id="side-menu">
            <ul>
                {menuItems.map((menuItem, index) => <MenuItem key={index} menuItem={menuItem} />)}
            </ul>
        </nav>
    );
};

export default SideMenu;