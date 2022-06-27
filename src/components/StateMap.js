import { useState } from 'react';
import './StateMap.css';
import Legend from './Legend';

const StateMap = (props) => {

    const [currentAcres, updateCurrentAcres] = useState('');
    const [currentState, updateCurrentState] = useState('');
    const [tempState, updateTempState] = useState('');
    const [currentMouseX, updateMouseX] = useState(0);
    const [currentMouseY, updateMouseY] = useState(0);
    const [currentStateShape, setStateShape] = useState('');

    const clickHandler = (e) => {
        const shape = e.target.getAttribute('d');
        const acresData = e.target.getAttribute('acres');
        const stateData = e.target.getAttribute('id');
        updateCurrentAcres(acresData);
        updateCurrentState(stateData);

        setStateShape(shape);

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
        const acresMsg = acres === "0" ? <div className="hoverMsg__extraInfo">NO ORGANIC VALLEY ACRES</div> : <div className="hoverMsg__extraInfo">CLICK TO LEARN MORE</div>;
        const tempStateMsg = <div className="temp-msg__stateName">{e.target.getAttribute('id')}<br />{acresMsg}</div>;

        updateTempState(tempStateMsg);

        updateMouseX(e.clientX);
        updateMouseY(e.clientY);

    };


    return (
        <div className="state-map" aria-hidden="true" role="presentation">
            <div className={tempState === '' ? 'hoverMsg hide' : 'hoverMsg'} style={{ left: `${currentMouseX}px`, top: `${currentMouseY}px` }}>{tempState}</div>
            <svg x="0" y="0" width="575" height="356" viewBox="174 100 959 593">
                {/* <defs>
                    <clipPath id="selectionMask">
                        <path d={currentStateShape} />
                    </clipPath>
                </defs> */}
                <g>
                    {Object.keys(props.stateMapData).filter(item => props.stateMapData[item].acres !== "0").map(item => <path
                        className={props.selectedState === item ? 'selected' : ''}
                        id={item}
                        key={item}
                        d={props.stateMapData[item].shape}
                        fill="#988b83"
                        stroke="white"
                        strokeWidth="2px"
                        acres={props.stateMapData[item].acres}
                        onClick={clickHandler}
                        onMouseEnter={mouseEnterHandler}
                        onMouseLeave={mouseLeaveHandler}
                        onMouseMove={mouseMoveHandler}
                        onMouseUp={mouseLeaveHandler}
                    />)}
                </g>
                <g>
                    {Object.keys(props.stateMapData).filter(item => props.stateMapData[item].acres === "0").map(item => <path
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
                </g>
                {/* <g className="line-pattern">
                    {[...new Array(300).keys()].map(item => <line x1="0" y1={-100 + item * 10} x2="1500" y2={-600 + item * 10} stroke="#ffffff" strokeWidth="2px" clipPath="url(#selectionMask)" key={item} />)}
                </g> */}
            </svg>
            <div>
                <Legend />
            </div>
        </div>
    );
};

export default StateMap;