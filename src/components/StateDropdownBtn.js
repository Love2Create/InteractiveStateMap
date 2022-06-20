import './StateDropdownBtn.css';

const StateDropdownBtn = (props) => {

   const stateSelectHandler = (e) => {
    // console.log(e.target.value);
    props.onStateSelectHandler(e.target.value);
   }

    return(
        <form className="StateDropdownBtn-wrapper">
            <label className="StateDropdownBtn-dropdown__label">
                <span>Select a State with Organic Valley Acres</span>
                <select title="state selector" id="stateName" value={props.selectedState} onChange={stateSelectHandler}>
                    <option value="">Pick a State</option>
                {Object.keys(props.stateMapData).filter(item => props.stateMapData[item].acres != "0").map (item =>
                    <option key={item} value={item}>
                        {item}:  {props.stateMapData[item].acres} acres
                    </option>
                )}
                </select>
            </label>
        </form>
    );
};

export default StateDropdownBtn;