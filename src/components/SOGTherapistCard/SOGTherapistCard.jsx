import './styles.css';

const SOGTherapistCard = ({
  img,
  therapist,
  title,
  proNouns,
  focus,
  className,
  ...props
}) => {
    const p = (proNouns) => {
      switch (proNouns) {
        case 'M':
          return 'He/Him';
          break;
        case 'F':
          return 'She/Her';
        case 'T':
          return 'They/Them';
        default:
          return 'Prefer Not To Say';
      }
    }
    return (
    <div className={className + ' flex-container'}>
      <img src={`../img/${img}`} className='head-shot' height='65.5rem' width='65.5rem' />
      <h1 className='summary-title'>{`${therapist} | ${title.join(', ')}`}</h1>
      <p className='text'>{p(proNouns)}</p>
      <p className='text'>{focus.join(' | ')}</p>
    </div>
  );
};



export default SOGTherapistCard;
