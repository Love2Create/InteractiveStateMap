import { useState} from 'react';
import './StateMap.css';
import Legend from './Legend';

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
                    fill={props.stateMapData[item].acres === "0" ? "#c4c0bc" : "#988c83" }
                    stroke="white"
                    strokeWidth="2px"
                    acres={props.stateMapData[item].acres}
                    onMouseEnter={mouseEnterHandler}
                    onMouseLeave={mouseLeaveHandler}
                    onTouchStart={mouseEnterHandler}
                />)}
            </svg>
            <div>
                <Legend />
            </div>
        </div>
    );
};

export default StateMap;