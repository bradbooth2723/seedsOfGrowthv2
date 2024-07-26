import {Link, useMatch, useResolvedPath} from "react-router-dom";
import PropTypes from "prop-types";

import './styles.css';

/**
 * @description Wraps element in <Link>
 *
 * @component
 * @param {string} to - link for new component when clicked on
 * @param {JSX.Element} children - element to be wrapped in <Link> tag
 * @param props
 * @returns {JSX.Element}
 */
const CustomLink = ({ to, children, ...props }) => {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    const classname = 'link';
    return (
        <div className={isActive ? 'link link--active' : 'link'}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </div>
    )
}

CustomLink.propTypes = {
    to: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string,
    ]).isRequired,
};

export default CustomLink;