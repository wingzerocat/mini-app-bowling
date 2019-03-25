import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Pins from './components/Pins.jsx';
import Frames from './components/Frames.jsx';
import Buttons from './components/Buttons.jsx';

const newGame = () =>  ({
    activeFrame: 1,
    total: 0,
    frame_1: [null, null, null],
    frame_2: [null, null, null],
    frame_3: [null, null, null],
    frame_4: [null, null, null],
    frame_5: [null, null, null],
    frame_6: [null, null, null],
    frame_7: [null, null, null],
    frame_8: [null, null, null],
    frame_9: [null, null, null],
    frame_10: [null, null, null, null],
    bonus: [ 
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
    ]
});


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeFrame: 1,
            total: 0,
            frame_1: [null, null, null],
            frame_2: [null, null, null],
            frame_3: [null, null, null],
            frame_4: [null, null, null],
            frame_5: [null, null, null],
            frame_6: [null, null, null],
            frame_7: [null, null, null],
            frame_8: [null, null, null],
            frame_9: [null, null, null],
            frame_10: [null, null, null, null],
            bonus: [ 
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0]
            ]
        }
    }

    score(e) {
        var points = parseInt(e.target.value);
        var activeFrame = this.state.activeFrame;
        var frame = this.state['frame_' + Math.floor(activeFrame)];
        var newBonus = this.state.bonus;
        var total = this.state.total;

        if (Math.floor(activeFrame) > 2) {
            if (newBonus[Math.floor(activeFrame) - 3][0] === 2) {
                newBonus[Math.floor(activeFrame) - 3][1] += points;
                newBonus[Math.floor(activeFrame) - 3][0] = 1;

                this.setState({
                    total: total,
                    bonus: newBonus
                })
            } else if (newBonus[Math.floor(activeFrame) - 3][0] === 1) {
                newBonus[Math.floor(activeFrame) - 3][1] += points;
                newBonus[Math.floor(activeFrame) - 3][0] = 0;
                // total += points * 2;

                var prevFrame = this.state['frame_' + Math.floor(activeFrame - 2)];
                
                if (Math.floor(activeFrame) > 3) {
                    var oldFrame = this.state['frame_' + Math.floor(activeFrame - 3)];
                } else {
                    var oldFrame = [null, null, 0];
                }

                prevFrame[2] = prevFrame[2] + newBonus[Math.floor(activeFrame) - 3][1] + oldFrame[2];
                total = prevFrame[2];
                this.setState({
                    ['frame_' + (Math.floor(activeFrame) -2)]: prevFrame,
                    bonus: newBonus,
                    total: total
                })
            }
        }

        if (Math.floor(activeFrame) > 1) {
            console.log('check')
            if (newBonus[Math.floor(activeFrame) - 2][0] === 2) {
                newBonus[Math.floor(activeFrame) - 2][1] += points;
                newBonus[Math.floor(activeFrame) - 2][0] = 1;

                this.setState({
                    total: total,
                    bonus: newBonus
                })
            } else if (newBonus[Math.floor(activeFrame) - 2][0] === 1) {
                newBonus[Math.floor(activeFrame) - 2][1] += points;
                newBonus[Math.floor(activeFrame) - 2][0] = 0;
                var prevFrame = this.state['frame_' + Math.floor(activeFrame - 1)];
                
                if (Math.floor(activeFrame) > 2) {
                    var oldFrame = this.state['frame_' + Math.floor(activeFrame - 2)];
                }  else {
                    var oldFrame = [null, null, 0];
                }

                prevFrame[2] = prevFrame[2] + newBonus[Math.floor(activeFrame) - 2][1] + oldFrame[2];
                total = prevFrame[2];

                this.setState({
                    ['frame_' + (Math.floor(activeFrame) -1)]: prevFrame,
                    bonus: newBonus,
                    total: total
                })
            }
        }

        if (points === 10) {
            frame[1] = 'X';
            frame[2] = 10;
            newBonus[activeFrame - 1][0] = 2;
            this.setState({
                ['frame_' + activeFrame]: frame,
                activeFrame: activeFrame + 1,
                bonus: newBonus,
                total: total + 10
            })
        } 
        else if (frame[0] + points === 10) {
            frame[1] = '/';
            frame[2] = 10;
            newBonus[Math.floor(activeFrame) - 1][0] = 1;
            this.setState({
                ['frame_' + Math.floor(activeFrame)]: frame,
                activeFrame: activeFrame + 0.5,
                bonus: newBonus
            })
        } else if (activeFrame % 1 === 0) {
            console.log('first');
            frame[0] = points;
            frame[2] = points + total;
            this.setState({
                ['frame_' + Math.floor(activeFrame)]: frame,
                activeFrame: activeFrame + 0.5,
                total: total + points
            })
        } else if (activeFrame % 1 !== 0) {
            frame[1] = points;
            frame[2] = total + points;  
            this.setState({
                ['frame_' + Math.floor(activeFrame)]: frame,
                activeFrame: activeFrame + 0.5,
                total: total + points
            })
        }
    }

    newGame() {
        this.setState({
            ...newGame()
        })
    }

    render() {
        var frames = [
            'frame_1',
            'frame_2',
            'frame_3',
            'frame_4',
            'frame_5',
            'frame_6',
            'frame_7',
            'frame_8',
            'frame_9',
            'frame_10',
        ];

        return (
            <div>
                <button onClick={() => this.newGame()}>Restart</button>
                <Buttons score={this.score.bind(this)}/>
                <Frames list={frames} frames={this.state}/>
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('app'));