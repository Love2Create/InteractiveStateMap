import { useState} from 'react';
import './StateMap.css';

const StateMap = (props) => {

    const [currentAcres, updateCurrentAcres] = useState('');
    const [currentState, updateCurrentState] = useState('');

    const mouseEnterHandler = (e) => {
        const acresData = e.target.getAttribute('acres');
        const stateData = e.target.getAttribute('id');
        updateCurrentAcres(acresData);
        updateCurrentState(stateData);
    };

    const mouseLeaveHandler = (e) => {
        updateCurrentAcres('');
        updateCurrentState('');
    };

    return (
        <div className="state-map">
            <svg x="0" y="0" width="575" height="356" viewBox="174 100 959 593">
                {Object.keys(props.stateMapData).map(item => <path 
                    id={item} 
                    key={item} 
                    d={props.stateMapData[item].shape} 
                    acres={props.stateMapData[item].acres}
                    onMouseEnter={mouseEnterHandler}
                    onMouseLeave={mouseLeaveHandler}
                    onTouchStart={mouseEnterHandler}
                />)}
            </svg>
            <div>
                <p>State: {currentState}</p>
                <p>Acres: {currentAcres}</p>
            </div>
        </div>
    );
};

export default StateMap;