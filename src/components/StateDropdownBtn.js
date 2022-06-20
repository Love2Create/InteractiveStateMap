import './StateDropdownBtn.css';

const StateDropdownBtn = (props) => {

   const stateSelectHandler = (e) => {
    // console.log(e.target.value);
    props.onStateSelectHandler(e.target.value);
   }

    return(
        <form className="StateDropdownBtn-wrapper">
            <label className="StateDropdownBtn-dropdown__label" >Select a State with Organic Valley Acres</label>
            <select id="stateName" value={props.selectedState} onChange={stateSelectHandler}>
            {Object.keys(props.stateMapData).filter(item => props.stateMapData[item].acres != "0").map (item =>
                <option key={item} value={item}>
                    {item}:  {props.stateMapData[item].acres} acres
                </option>
            )}
            </select>
        </form>
    );
};

export default StateDropdownBtn;