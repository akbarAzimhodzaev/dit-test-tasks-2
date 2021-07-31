import './App.css';
import Tooltip from './components/Tooltip'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Tooltip Examples</h1>

                <Tooltip content={`tooltip`} placement="top">
                    <div className="">
                        element with top tooltip
                    </div>
                </Tooltip>

                <Tooltip content={`tooltip`} placement="bottom">
                    <div className="">
                        element with tooltip
                    </div>
                </Tooltip>

                <Tooltip content={`tooltip`} placement="left">
                    <div className="">
                        element with left tooltip
                    </div>
                </Tooltip>

                <Tooltip content={`tooltip`} placement="right">
                    <div className="">
                        element with right tooltip
                    </div>
                </Tooltip>

                <Tooltip content={`tooltip`} placement="right" triggers="click">
                    <div className="">
                        element with right placement trigger click
                    </div>
                </Tooltip>

                <Tooltip content={`tooltip`}>
                    <div className="">
                        long text element Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut debitis et
                        obcaecati soluta. Deleniti dicta iure rem! A ad architecto cum expedita libero necessitatibus
                        officiis omnis optio sapiente ut.
                    </div>
                </Tooltip>

                <Tooltip content={`tooltip`}>
                    <button className="">
                        Button with tooltip
                    </button>
                </Tooltip>
            </header>
        </div>
    );
}

export default App;
