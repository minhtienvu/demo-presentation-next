import React, { Component } from 'react';

class Demo extends Component {
    constructor(props){
        super(props)
        this.state = {
            // Khi tạo state thì react đã tạo cho bộ getters, setters rồi
            randomNumber: 0
        }
        // Cách 1
        // this.getRandomNumber = this.getRandomNumber.bind(this)
    }

    // Cách 1
    // getRandomNumber(){
    //     this.setState(() => ({
    //         randomNumber: Math.floor(Math.random() * 30)
    //     }))
    //     console.log("getRandomNumber")
    //     console.log(this.state.randomNumber)
    // };

    // Cách 2
    getRandomNumber = () => {
        this.setState(() => ({
            randomNumber: Math.floor(Math.random() * 30)
        }))
        console.log("getRandomNumber")
        console.log(this.state.randomNumber)
    }

    alertSomething = () => {
        alert("Alert something. Even actived! ");
    }



    render() {
        console.log("render")
        // Day la JSX
        return (
            <>
                <h1>Demo State</h1>
                <h2>randomNumber: {this.state.randomNumber}</h2>
                <button onClick={this.getRandomNumber}>Get random number</button>
                <button onClick={ this.alertSomething }>
                    Click me!
                </button>
                {/* Lưu ý */}
                {/* <button onClick={ this.alertSomething() }>
                    Click me!
                </button> */}
                {/* this.alertSomething() đang thực thi 1 function */}
                {/* this.alertSomething đang gọi là chờ */}
            </>
        )

        // Day la cach cu, khong co JSX
        // return React.createElement('div', { className: "text" }, React.createElement('h1', null, 'Hello, I am JSX')); 
    }
}

export default Demo
