import './DataTable.css';

const DataTable = (props) => {

    return(
        <section className="stateData-table__wrapper">
            <table summary="state acre table">
                <thead>
                    <tr>
                        <th className="stateData-table__th">State Name</th>
                        <th className="stateData-table__th">Total Certified Organic Valley Acres</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(props.stateMapData).filter(item => props.stateMapData[item].acres != "0").map(item => {
                        return <tr key={item}>
                            <td className="stateData-table__td">{item}</td>
                            <td className="stateData-table__td">{props.stateMapData[item].acres}</td>
                        </tr>
                    }
                    )}
                </tbody>
            </table>
        </section>
    );
};

export default DataTable;