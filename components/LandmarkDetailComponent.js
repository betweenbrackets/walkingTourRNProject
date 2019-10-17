import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { LANDMARKS } from '../shared/landmarks';

function RenderLandmark(props) {

    const landmarks = props.landmarks;

    if (landmarks != null) {
        return (
            <Card
                featuredTitle={landmarks.name}
                image={require('./images1/2panamaHotel.png')}>
                <Text style={{ margin: 10 }}>
                    {landmarks.description}
                </Text>
            </Card>
        );
    }
    else {
        return (<View></View>);
    }
}

class LandmarkDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            landmarks: LANDMARKS
        };
    }

    static navigationOptions = {
        title: 'Landmark Details'
    };

    render() {
        const landmarkId = this.props.navigation.getParam('landmarkId', '');
        return (
            <RenderLandmark landmarks={this.state.landmarks[+landmarkId]} />
        );
    }
}

export default LandmarkDetail;