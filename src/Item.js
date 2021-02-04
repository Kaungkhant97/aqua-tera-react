import React, {Component} from 'react';

import PlaceHolder from './logo.svg';

class Item extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            url:  {PlaceHolder},



        };
    }

    render() {
        return (
            <div className="card">
                <img src={this.state.url} className="card-img-top" alt="..."/>
                {/*<img src={this.state.dog.url}></img>*/}
                {/*<button onClick={() => this.loadData()}>Load</button>*/}
                <button type="button" className="btn btn-primary" onClick={() => this.loadData()}>Reload
                </button>
            </div>

        );
    }

    componentDidMount() {
        this.loadData();

    }

    loadData() {
        return fetch("https://random.dog/woof.json")
            .then(response => response.json())
            .then(response => {
                if (response.url.match(/.(jpg|jpeg|png|gif)$/i)) {
                    this.setState({
                        url: response.url,
                        loading: false,

                    })
                } else {
                    this.loadData()

                }
            }).catch(err => {

            })
    }
}

export default Item;
