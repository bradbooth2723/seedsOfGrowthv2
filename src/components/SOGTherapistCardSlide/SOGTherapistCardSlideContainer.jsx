import './styles.css';
import SOGTherapistCard from 'components/SOGTherapistCard/SOGTherapistCard';
import therapists from 'data/therapistDetails.json';
import { useResolvedPath } from 'react-router-dom';


const SOGTherapistCardSlideContainer = () => {
    return (
        <div className="therapist-card-slide-container">
            {/* TODO: Use flex container for this? */}

            {/* TODO: Only add circles and arrows as needed */}
            {/* TODO: Therapist Cards */}
            {/* TODO: L/R Buttons */}
            <button className='prev'>&#10094;</button>
            <div className='therapist-card-slide-interior'>
                {therapists.map((therapist, index) => {
                    const { headShot, name, titles, proNoun, focus } = therapist;

                    // TODO: Should be based on screen size
                    const numOfCards = 3;
                    const className = (index + 1) % 3 == 0 ? 'cards last' : 'cards';
                    return (
                        // <div className={className} >
                            <SOGTherapistCard key={index} img={headShot} therapist={name} title={titles} proNouns={proNoun} focus={focus} className={className} />
                        // </div>
                    )
                })}
            </div>
            <button className='next'>&#10095;</button>
            {/* <br />  */}
            {/* br causing extra line lol */}

            {/* TODO: Add circles. CSS shows static number of circles. Need to make number of circles dynamic. Maybe a count a for...each loop */}
        </div>
    )
}

export default SOGTherapistCardSlideContainer;