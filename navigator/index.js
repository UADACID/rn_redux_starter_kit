import React from 'react';
import { Easing, Animated } from 'react-native'
import { connect } from 'react-redux'
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

import TodoList from '../screens/TodoList'
import PageTwo from '../screens/PageTwo'



const AppNavigator =  StackNavigator({
  TodoList: {
    screen: TodoList,
  },
  PageTwo : {
    screen: PageTwo
  }
},{
  // headerMode:'none',
  transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.inOut(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;
        const height = layout.initHeight;
        const width = layout.initWidth
        const translateX = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
        });

        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [width, 0, 0],
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 0.1, 1],
        });

        const scale = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0.5, 0.1, 1],
        })

        return { opacity, transform: [{ translateX },{scale},{translateY}] };
      },
    }),
});

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('TodoList'));

export const navReducer = (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};

const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);

const addListener = createReduxBoundAddListener("root");

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav, addListener })} />
)

const mapStateToProps = state => ({
  nav: state.nav
})


export default connect(mapStateToProps)(AppWithNavigationState)
