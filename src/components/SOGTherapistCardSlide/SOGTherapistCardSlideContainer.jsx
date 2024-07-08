import './styles.css';

const SOGTherapistCardSlideContainer = () => {
    return (
        <div className="therapist-card-slide-container">
            {/* TODO: Use flex container for this? */}

            <div className='therapist-card-slide-interior'>
                {/* TODO: Therapist Cards */}
                {/* TODO: L/R Buttons */}
                <button className='prev'>&#10094;</button>
                <button className='next'>&#10095;</button>
            </div>
            <br />

            <div>
                {/* TODO: Add circles. CSS shows static number of circles. Need to make number of circles dynamic. Maybe a count a for...each loop */}
            </div>
        </div>
    )
}

export default SOGTherapistCardSlideContainer;