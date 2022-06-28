import './Legend.css';

const Legend = () => {
    return(
        <section className="legend-wrapper">

            {/* ---------- total acres ---------- */}
            <div className="legend-totalAcre__wrapper">
                <div className="legend-totalAcre__label">TOTAL CERTIFIED ORGANIC VALLEY ACRES</div>
                <div className="legend-totalAcre__number">
                    <h2>397,269</h2>
                </div>
            </div>

            {/* ---------- colors ---------- */}
            <div className="legend-colorInfo__mainWrapper">

                {/* with acres - default */}
                <div className="legend-sectionWrapper">
                    <div className="legend-colorInfo__colorBox legend-colorInfo__colorBox__hasAcres"></div>
                    <div className="legend-colorInfo__colorBox__label">ORGANIC VALLEY ACRES</div>
                </div>

                {/* with acres - selected */}
                <div className="legend-sectionWrapper">
                    <div className="legend-colorInfo__colorBox legend-colorInfo__colorBox__selected"></div>
                    <div className="legend-colorInfo__colorBox__label">ORGANIC VALLEY ACRES (SELECTED)</div>
                </div>

                {/* no acres */}
                <div className="legend-sectionWrapper">
                    <div className="legend-colorInfo__colorBox legend-colorInfo__colorBox__noAcres"></div>
                    <div className="legend-colorInfo__colorBox__label">NO ORGANIC VALLEY ACRES</div>
                </div>
            </div>

        </section>
    );
}

export default Legend;