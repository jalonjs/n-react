import React from 'react'
import CSSModules from 'react-css-modules'
import aboutStyle from './about.scss'
import faStyle from 'font-awesome/css/font-awesome.css'
const styles = Object.assign(aboutStyle, faStyle);
import Logo from '../../static/image/logo.png'

@CSSModules(styles, {
    allowMultiple: true
})
export default class About extends React.Component {
    render() {
        return (
            <div className="fs">
                <h5>关于</h5>
                <img style={{ marginBottom: 10 }} width="60"
                     src="https://ss0.baidu.com/73t1bjeh1BF3odCf/it/u=1711333982,3893049826&fm=85&s=FDAE777E4436F598CA59C5C803006033"/>
                <div styleName="wrapper bg-green">
                    <h5 styleName="name"><i styleName="fa fa-list"></i>hi,I am Jalon!</h5>
                </div>
                work for:
                <img width="40" style={{ color:'#FFFFFF' }} styleName="wrapper bg-green" src={Logo}/>
            </div>
        )
    }
}