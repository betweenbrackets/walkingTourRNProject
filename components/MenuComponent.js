import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { LANDMARKS } from '../shared/landmarks';

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            landmarks: LANDMARKS
        };
    }

    static navigationOptions = {
        title: 'Walking Tour'
    };

    render() {
        const renderMenuItem = ({ item, index }) => {
            return (
                <ListItem
                    key={index}
                    title={item.name}
                    subtitle={item.description}
                    onPress={() => navigate('LandmarkDetail', { landmarkId: item.id })}
                    leftAvatar={{ source: require('./images1/2panamaHotel.png') }}
                />
            );
        }
        const { navigate } = this.props.navigation;
        return (
            <FlatList
                data={this.state.landmarks}
                renderItem={renderMenuItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default Menu;