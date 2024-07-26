import PropTypes from "prop-types";

import './styles.css';

const SOGToolTip = ({ toolTipText, position, children }) => {
    return (
        <div className="tool-tip">
            {children}
            <div className={position}>
                <span className='tool-tip-text'>{toolTipText}</span>
            </div>
            
        </div>
    )
}

SOGToolTip.propTypes = {
    toolTipText: PropTypes.string,
    position: PropTypes.string,
    children: PropTypes.node,
}

export default SOGToolTip;