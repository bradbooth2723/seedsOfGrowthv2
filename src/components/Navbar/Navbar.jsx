import PropTypes from 'prop-types';

import './styles.css';

// TODO: Make this more generic to handle variable input to tab list
// TODO: Ability for dropdown tab as well

/**
 * @description Header navigation bar component
 *
 * @component
 * @param {JSX.Element} title - A React component for the home button on left side of Navbar
 * @param {Array.<JSX.Element>} tabs - Right Justified menu options
 * @param {Object} props
 *
 * @returns {JSX.Element}
 */
const Navbar = ({ title, tabs, ...props}) => {
    return (
        <nav className='nav' {...props}>
            {title}
            <ul>
                {tabs.map((tab, index) => {
                    return (<li key={index}>
                        {tab}
                    </li>);
                })}
            </ul>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.element,
    tabs: PropTypes.arrayOf(PropTypes.element)
};


export default Navbar