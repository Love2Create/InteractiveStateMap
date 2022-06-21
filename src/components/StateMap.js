import { useState} from 'react';
import './StateMap.css';
import Legend from './Legend';

const StateMap = (props) => {

    const [currentAcres, updateCurrentAcres] = useState('');
    const [currentState, updateCurrentState] = useState('');
    const [tempState, updateTempState] = useState ('');
    const [currentMouseX, updateMouseX]= useState (0);
    const [currentMouseY, updateMouseY]= useState (0);


    const clickHandler = (e) => {
        const acresData = e.target.getAttribute('acres');
        const stateData = e.target.getAttribute('id');
        updateCurrentAcres(acresData);
        updateCurrentState(stateData);

        props.onStateSelectHandler(stateData);
    };

    const mouseEnterHandler = (e) => {

        
    }

    const mouseLeaveHandler = (e) => {
        updateCurrentAcres('');
        updateCurrentState('');
        updateTempState('');
    };

    const mouseMoveHandler = (e) => {

        const acres = e.target.getAttribute('acres');
        const acresMsg = acres === "0" ? <p className="hoverMsg__extraInfo">NO ORGANIC VALLEY ACRES</p> : <p className="hoverMsg__extraInfo">CLICK TO LEARN MORE</p>;
        const tempStateMsg = <p className="temp-msg__stateName">{e.target.getAttribute('id')}<br />{acresMsg}</p>;

        updateTempState(tempStateMsg);

        updateMouseX(e.clientX);
        updateMouseY(e.clientY);
        
    };


    return (
        <div className="state-map" aria-hidden="true" role="presentation">
            <div className={tempState==='' ? 'hoverMsg hide' : 'hoverMsg'} style={{left:`${currentMouseX}px`, top:`${currentMouseY}px`} }>{tempState}</div>
            <svg x="0" y="0" width="575" height="356" viewBox="174 100 959 593">
                {Object.keys(props.stateMapData).filter(item=>props.stateMapData[item].acres != "0").map(item => <path
                    className={props.selectedState === item ? 'selected' : ''} 
                    id={item} 
                    key={item} 
                    d={props.stateMapData[item].shape} 
                    fill="#988c83"
                    stroke="white"
                    strokeWidth="2px"
                    acres={props.stateMapData[item].acres}
                    onClick={clickHandler}
                    onMouseEnter={mouseEnterHandler}
                    onMouseLeave={mouseLeaveHandler}
                    onMouseMove={mouseMoveHandler}
                    onMouseUp={mouseLeaveHandler}
                />)}
                {Object.keys(props.stateMapData).filter(item=>props.stateMapData[item].acres === "0").map(item => <path
                    className={props.selectedState === item ? 'selected' : ''} 
                    id={item} 
                    key={item} 
                    d={props.stateMapData[item].shape} 
                    fill="#c4c0bc"
                    stroke="white"
                    strokeWidth="2px"
                    acres={props.stateMapData[item].acres}
                    onMouseEnter={mouseEnterHandler}
                    onMouseLeave={mouseLeaveHandler}
                    onMouseMove={mouseMoveHandler}
                />)}
            </svg>
            <div>
                <Legend />
            </div>
        </div>
    );
};

export default StateMap;