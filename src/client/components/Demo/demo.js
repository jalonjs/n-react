import React from 'react';
import { Link } from 'react-router'

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <p>demo:
                    <Link to="/demo/demo1" activeStyle={{color: 'red'}}>demo1</Link>|
                    <Link to="/demo/demo2" activeStyle={{color: 'red'}}>demo2</Link>
                </p>
                <p>子页面:{ this.props.params.name }</p>
            </div>
        )
    }
}
