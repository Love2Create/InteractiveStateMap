import './Legend.css';

const Legend = () => {
    return(
        <section className="legend-wrapper">
            <div className="legend-totalAcre">
                <div className="legend-totalAcre__label">TOTAL CERTIFIED ORGANIC VALLEY ACRES</div>
                <div className="legend-totalAcre__number">
                    <h2>397,269</h2>
                </div>
            </div>
            <div className="legend-colorInfo">
                <div className="display-flex">
                    <div className="legend-colorInfo__box legend-colorInfo__color__hasAcres"></div>
                    <div className="legend-colorInfo__label">ORGANIC VALLEY ACRES</div>
                </div>
                <div className="display-flex">
                    <div className="legend-colorInfo__box legend-colorInfo__box__selected"></div>
                    <div className="legend-colorInfo__label">ORGANIC VALLEY ACRES (SELECTED)</div>
                </div>
                <div className="display-flex">
                    <div className="legend-colorInfo__box legend-colorInfo__color__noAcres"></div>
                    <div className="legend-colorInfo__label">NO ORGANIC VALLEY ACRES</div>
                </div>
            </div>

        </section>
    );
}

export default Legend;