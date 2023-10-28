import React from "react";

const DummyChart = () => (
    <div>
        <h2>Dummy Chart</h2>
        <img src={`https://picsum.photos/200/300?d=${Date.now()}`} />
    </div>
);

export default DummyChart;