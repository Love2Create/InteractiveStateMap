

const DataTable = (props) => {

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>State Name</th>
                        <th>Total Certified Organic Valley Acres</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(props.stateMapData).map(item => {
                        return <tr key={item}>
                            <td>{item}</td>
                            <td>{props.stateMapData[item].acres}</td>
                        </tr>
                    }
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;