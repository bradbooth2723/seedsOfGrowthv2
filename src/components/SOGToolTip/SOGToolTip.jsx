import './styles.css';

const SOGToolTip = ({ toolTipText, position, children, ...props }) => {
    return (
        <div className="tool-tip">
            {children}
            <div className={position}>
                <span className='tool-tip-text'>{toolTipText}</span>
            </div>
            
        </div>
    )
}

export default SOGToolTip;