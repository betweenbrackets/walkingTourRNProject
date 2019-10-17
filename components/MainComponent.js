import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Menu from './MenuComponent';
import LandmarkDetail from './LandmarkDetailComponent';
//import { LANDMARKS } from '../shared/landmarks';

const MenuNavigator = createStackNavigator({
    Menu: { screen: Menu },
    LandmarkDetail: { screen: LandmarkDetail }
}, {
    initialRouteName: 'Menu',
    navigationOptions: {
        headerStyle: {
            backgroundColor: "#ffff99"
        },
        headerTintColor: '#96B83D',
        headerTitleStyle: {
            color: "#96B83D"
        }
    }
});

class Main extends Component {
    //constructor(props) {
    //super(props);
    //this.state = {
    //dishes: DISHES,
    //selectedDish: null
    //};
    //}

    //onDishSelect(dishId) {
    //this.setState({ selectedDish: dishId })
    //}

    render() {
        return (
            <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
                <MenuNavigator />
            </View>
        );
    }
}

export default Main;