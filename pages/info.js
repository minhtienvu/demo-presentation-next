import React, { Component } from 'react';

class Info extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: "Vu Minh Tien"
        }
    }

    render() {
        console.log("render")
        // Day la JSX
        return (
            <>
                <h1>Demo Props</h1>
                <h1>Name: {this.props.name}</h1>
                <h1>Name: {this.props.age}</h1>
                <h1>Name: {this.props.address}</h1>
                {/* Sử dụng props.children để hiển thị nội dung của props */}
                <div>{ this.props.children }</div>
            </>
        )
    }
}

export default Info
