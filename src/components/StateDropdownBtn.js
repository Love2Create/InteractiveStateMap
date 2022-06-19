import './StateDropdownBtn.css';

const StateDropdownBtn = (props) => {

    return(
        <form className="StateDropdownBtn-wrapper">
            <select id="stateName">
            {Object.keys(props.stateMapData).map (item =>
                <option key={item} value={item}>
                    {item}
                </option>
            )}
            </select>
        </form>
    );
};

export default StateDropdownBtn;