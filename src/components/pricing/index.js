import React, { Component } from 'react'
import MyButtons from '../extras/MyButton'
import Zoom from 'react-reveal/Zoom'

export default class Pricing extends Component {

    state={
        prices:[100,500,1000],
        positions:['Regular', 'VIP', 'VVIP'],
        desc:[
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'
        ],
        linkto:['http://sales/r','http://sales/v','http://sales/vv'],
        delay:[500,0,500]
    }

    showBoxes = () => (
        this.state.prices.map((box,i)=>(
            <Zoom delay={this.state.delay[i]}key={i}>
            <div className='pricing_item'>
                <div className="pricing_inner_wrapper">
                    <div className="pricing_title">
                        <span>{this.state.prices[i]}</span>
                        <span>{this.state.positions[i]}</span>
                    </div>
                    <div className="pricing_description">
                    <span>{this.state.desc[i]}</span>
                    </div>
                    <div className="pricing_buttons">
                        <MyButtons
                            text="Purchase"
                            bck="#ffa800"
                            color="#fff"
                            link={this.state.linkto[i]}
                        />
                    </div>
                </div>
            </div>
            </Zoom>
        ))
    )

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>

                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>
                </div>
                
            </div>
        )
    }
}
