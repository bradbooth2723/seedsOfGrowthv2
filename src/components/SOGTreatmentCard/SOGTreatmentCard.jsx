import './styles.css';
import treatments from 'data/treatmentFocus.json';

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