import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import MyButton from '../extras/MyButton';


export default class Discount extends Component {
    state = {
        discountStart:0,
        discountEnd:30
    }

    percentage = () => {
        if(this.state.discountStart < this.state.discountEnd){
            this.setState({
                discountStart: this.state.discountStart + 1
            })

        }
    }

    componentDidUpdate(){
        setTimeout(()=>{
            this.percentage()
        },30)
    }

    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                <Fade
                    onReveal={()=> this.percentage()}
                >
                    <div className="discount_percentage">
                        <span>{this.state.discountStart}%</span>
                        <span>OFF</span>
                        
                    </div>
                </Fade> 
                <Slide right>  
                    <div className="discount_description">
                        <h3>Purchase Ticket before 25th JUNE</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </p>

                        <MyButton
                            text="Purchase Tickets"
                            bck="#ffa800"
                            color="#fff"
                            link="http://google.com"
                        />
                
                    </div>
                </Slide>
                </div>
            </div>
        )
    }
}
