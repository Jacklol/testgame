import React, { Component } from 'react';

import { Button } from 'antd';

class CustomButton extends Component {
    render() {
        return (
                <Button
                    onClick={this.props.click}
                    type="primary">{this.props.buttonText}</Button>
        )
    }
}
export default CustomButton
