import './App.css';
import React, {Component} from 'react';
import Item from "./Item";


class App extends Component {


    render() {
        return (
            <div className="container">
                <div className="row">
                    {
                        Array.from(Array(8)).map((i, index) => {
                            return <div className="col-sm-6 col-lg-3 margin-bottom"><Item/></div>
                        })
                    }

                </div>
                <div className="row">
                    <div className="col text-center">
                        <button type="button" className="btn btn-primary" onClick={() => window.location.reload(false)}>
                            Reload All
                        </button>
                    </div>

                </div>
            </div>

        );
    }


}

export default App;
