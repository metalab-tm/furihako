import "./Menu.css";
import MenuItem from "./MenuItem";
import {motion} from 'framer-motion'; /* 縦長レイアウト時のメニューにアニメーションを実装するために必要 */

const menuVariants = {
    open: {y: '0%', transition: {type: 'tween', ease: 'easeOut', duration: 0.3}},
    closed: {y: '-100%', transition: {type: 'tween', ease: 'easeIn', duration: 0.3}}
};

const Menu = ({menuItems, isMenuOpen, toggleMenu}) => {
    return (
        /* メニューの余白部分をクリックしても反応するよう、motion.navにonClickを設定 */
        <motion.nav id="menu" variants={menuVariants} animate={isMenuOpen ? "open" : "closed"} onClick={toggleMenu}>
            {/* MenuItemのクリックイベントがmotion.navまで伝播しないよう、ulにstopPropagationを設定 */}
            <ul onClick={(e) => e.stopPropagation()}>
                {menuItems.map((menuItem, index) => <MenuItem key={index} menuItem={menuItem} toggleMenu={toggleMenu} />)}
            </ul>
        </motion.nav>
    );
};

export default Menu;