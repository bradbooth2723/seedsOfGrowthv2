import './styles.css';
import treatments from 'data/treatmentFocus.json';

// TODO: Should be a carasoul when on lowest screen setting
// TODO: Make sure body starts at same place for all cards
const SOGTreatmentCard = () => {
    return (<>
        {treatments.map((treatment, index) => {
            return (
                <div className='treatment-card' key={index}>
                    <h1>{treatment.title}</h1>
                    <p>{treatment.description}</p>
                </div>
            )
        })}
    </> );
}

export default SOGTreatmentCard;