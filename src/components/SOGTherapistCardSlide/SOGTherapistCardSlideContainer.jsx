import './styles.css';
import SOGTherapistCard from 'components/SOGTherapistCard/SOGTherapistCard';
import therapists from 'data/therapistDetails.json';
import * as React from 'react';

// TODO: Clean up component a little...maybe make a little more modular.
// TODO: Make arrow buttons look nicer
// TODO: Make therapist headshots clickable images
// TODO: Make carousel circular
// TODO: Container should be in same spot regardless if arrow buttons are enabled
const SOGTherapistCardSlideContainer = () => {
    const [groupNumber, setGroupNumber] = React.useState(0);

    var showNext = false;
    var showPrev = false;
    var showDots = false;
    
    const groupSize = 3;
    var dots = document.getElementsByClassName('dot');

    for(var i = 0; dots && i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }

    const therapistGroups = makeCarouselGroups(therapists, groupSize);

    if ((dots.length > 0) && therapistGroups.length > 1) {
        showDots = true;
        dots[groupNumber].className += ' active';
    }


    if (groupNumber > 0) {
        showPrev = true;
    }


    if (groupNumber < therapistGroups.length - 1) {
        showNext = true;
    }

    const handleNext = (event) => {
        setGroupNumber(groupNumber + 1);
    }

    const handlePrev = (event) => {
        setGroupNumber(groupNumber - 1);
    }

    const handleDot = (event) => {
        setGroupNumber(event);
    }

    return (
        <>
            <div className="therapist-card-slide-container">
                {showPrev ? <button className='prev' onClick={handlePrev}>&#10094;</button> : null }
                <div className='therapist-card-slide-interior'>
                    {therapistGroups[groupNumber].map((therapist, index) => {
                        const { headShot, name, titles, proNoun, focus } = therapist;

                        // TODO: Should be based on screen size
                        const numOfCards = 3;
                        const className = (index + 1) % 3 == 0 ? 'cards last' : 'cards';
                        return (
                            <SOGTherapistCard key={index} img={headShot} therapist={name} title={titles} proNouns={proNoun} focus={focus} className={className} />
                        )
                    })}
                </div>
                {showNext ? <button className='next' onClick={handleNext}>&#10095;</button> : null }
            </div>
            {showDots ? (
                <div className='bubbles'>
                    {therapistGroups.map((_, index) => (<span key={index} class='dot' onClick={() => handleDot(index)}></span>))}
                </div>
            ) : null}
            
        </>
    )
}

const makeCarouselGroups = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );

export default SOGTherapistCardSlideContainer;