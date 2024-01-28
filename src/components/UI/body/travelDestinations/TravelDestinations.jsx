import React from 'react';
import './travelDestinations.css';
import greece from '../pictures/1greece.png';
import lisbon from '../pictures/2lisbon.png';
import egypt from '../pictures/3egypt.png';
import rome from '../pictures/4rome.png';


const TravelDestinations = () => {
    return (
        <div>
            <h2>POPULAR TRAVEL DESTINATIONS</h2>
                <div className='destinations-box'>
                    <div className='box'>
                        <img src={greece} alt="Greece" className="image" />
                        <h2>Unforgettable vacation in Greece</h2>
                        <p>Lorem ipsum dolor sit amet. Ea nihil illum non vitae sunt quo recusandae
                            voluptas? Eum dolores culpa nam numquam eligendi et dolore dolores.
                            Non quis tempore id ullam maiores et dignissimos assumenda eos velit quia ut tempora voluptas.
                        </p>
                    </div>
                    <div className='box'>
                        <img src={lisbon} alt="Lisbon" className="image" />
                        <h2>Unforgettable vacation in Lisbon</h2>
                        <p>Lorem ipsum dolor sit amet. Ea nihil illum non vitae sunt quo recusandae
                            voluptas? Eum dolores culpa nam numquam eligendi et dolore dolores.
                            Non quis tempore id ullam maiores et dignissimos assumenda eos velit quia ut tempora voluptas.
                        </p>
                    </div>

              
                    <div className='box'>
                        <img src={egypt} alt="Egypt" className="image" />
                        <h2>Unforgettable vacation in Egypt</h2>
                        <p>Lorem ipsum dolor sit amet. Ea nihil illum non vitae sunt quo recusandae
                            voluptas? Eum dolores culpa nam numquam eligendi et dolore dolores.
                            Non quis tempore id ullam maiores et dignissimos assumenda eos velit quia ut tempora voluptas.
                        </p>
                    </div>
                    <div className='box'>
                        <img src={rome} alt="Rome" className="image" />
                        <h2>Unforgettable vacation in Rome</h2>
                        <p>Lorem ipsum dolor sit amet. Ea nihil illum non vitae sunt quo recusandae
                            voluptas? Eum dolores culpa nam numquam eligendi et dolore dolores.
                            Non quis tempore id ullam maiores et dignissimos assumenda eos velit quia ut tempora voluptas.
                        </p>
                    </div>
                </div>
            </div>
    );
};

export default TravelDestinations;
