import PropTypes from "prop-types";

import SOGToolTip from 'components/SOGToolTip/SOGToolTip.jsx';

import './styles.css';

const SOGTherapistCard = ({
  img,
  therapist,
  title,
  proNouns,
  focus,
  className,
}) => {
    const p = (proNouns) => {
      switch (proNouns) {
        case 'M':
          return 'He/Him';
        case 'F':
          return 'She/Her';
        case 'T':
          return 'They/Them';
        default:
          return 'Prefer Not To Say';
      }
    }
    const focusArray = BuildFocus(focus);
    return (
    <div className={className + ' flex-container'}>
      <img src={`../img/${img}`} className='head-shot' height='65.5rem' width='65.5rem' alt='' />
      <h1 className='summary-title'>{`${therapist} | ${title.join(', ')}`}</h1>
      <p className='text'>{p(proNouns)}</p>
      <div>
        {focusArray.map( element => element)}
      </div>
    </div>
  );
};

const BuildFocus = (focus) => {
  const focusArray = [];

  focus.forEach((element, index, array) => {
    focusArray.push(<SOGToolTip key={index} toolTipText={ToolTipText(element)} position='top'>{element}</SOGToolTip> );

    if (index !== array.length - 1) {
      focusArray.push(' | ');
    } 
  });
  return focusArray;
}

const ToolTipText = (focus) => {
  switch (focus) {
    case 'LTT':
      return 'Life Transitions Therapy';
    case 'DBT':
      return 'Dialectical Behavior Therapy';
    case 'CBT':
      return 'Cognitive Behavioral Therapy';
    case 'ACT':
      return 'Acceptance and Commitment Therapy';
    case 'CTT':
      return 'Complex Trauma Therapy';
    case 'NT':
      return 'Narrative Therapy';
  }
}

SOGTherapistCard.propTypes = {
  img: PropTypes.string,
  therapist: PropTypes.string,
  title: PropTypes.arrayOf(PropTypes.string),
  proNouns: PropTypes.string,
  focus: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
}

export default SOGTherapistCard;
