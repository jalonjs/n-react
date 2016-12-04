import React from 'react';
import {Link} from 'react-router'
import CSSModules from 'react-css-modules'
import faStyle from 'font-awesome/css/font-awesome.css'

@CSSModules(faStyle, {
    allowMultiple: true
})
export default class App extends React.Component {
    render() {
        return (
            <div className="content">
                <nav>
                    <Link to="/demo" activeStyle={{color: 'red'}}><i styleName="fa fa-star-o"></i>Demo</Link>|
                    <Link to="/about" activeStyle={{color: 'red'}}><i styleName="fa fa-rocket"></i>About</Link>
                </nav>
                {this.props.children}
            </div>
        )
    }
}
