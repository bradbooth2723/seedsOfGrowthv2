import PropTypes from "prop-types";

import './styles.css';

// TODO: Add feature to make dropdown trigger on hover or click

/**
 * @description - Dropdown menu which shows menu on hover
 *
 * @param trigger {JSX.Element} - Main element
 * @param menu {Array<JSX.Element>} - Menu options in dropdown menu
 * @returns {JSX.Element}
 */
const Dropdown = ({ trigger, menu }) => {
    return (
        <div className='dropdown'>
            <div className='dropdown--button'>{trigger}&#9660;</div>
            <nav className='dropdown--menu'>
                {menu.map((menuItem, index) => {
                    return <div key={index}>{menuItem}</div>;
                })}
            </nav>

        </div>
    );
}

Dropdown.propTypes = {
    trigger: PropTypes.element.isRequired,
    menu: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Dropdown;