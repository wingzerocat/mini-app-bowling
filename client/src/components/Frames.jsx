import React from 'react';
import Frame from './Frame.jsx';

const Frames = (props) => (
    <div className="container">
        {props.list.map(frame => <Frame frame={frame} frames={props.frames}/>)}
    </div>
);

export default Frames;