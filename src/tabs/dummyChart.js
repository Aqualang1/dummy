import React from "react";

const DummyChart = (props) => {    
    
    const {title} = props;
    
    return <div>
        <h2>{title}</h2>
        <img src={`https://picsum.photos/200/300?d=${Date.now()}`} alt="media"/>
    </div>
};

export default DummyChart;