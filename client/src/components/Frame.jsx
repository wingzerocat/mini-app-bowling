import React from 'react';

const Frame = (props) => (
    <div className="frame" >
        <div className="num">{props.frame.slice(6)}</div>
        <div className="row">
            <div className="tl">
                {props.frames[props.frame][0]}
            </div>
            <div className="tr">
                {props.frames[props.frame][1]}
            </div>
        </div>
        <div className="bot">
        {props.frames[props.frame][2]}
        </div>
    </div>
);

export default Frame;