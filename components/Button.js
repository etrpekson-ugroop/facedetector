import React from 'react';
import {
    AppRegistry,
    Component,
    Text,
    View,
    TouchableHighlight
} from 'react-native';

export default class Button extends Component {
    render() {
        return (
            <TouchableHighlight underlayColor={"#E8E8E8"} onPress={this.props.onpress} style={this.props.button_styles}>
                <View>
                    <Text style={this.props.button_text_styles}>
                        {this.props.text}
                    </Text>
                </View>
            </TouchableHighlight>
        )
    }
}

AppRegistry.registerComponent('Button', () => Button);