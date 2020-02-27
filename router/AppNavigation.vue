<template>
  <app-navigator/>
</template>

<script>
import {
  createAppContainer,
  createStackNavigator,
} from 'vue-native-router'

import MainView from '../views/Main'

const StackNavigator = createStackNavigator(
  {
    MainView: { screen: MainView }
  },
  {
    initialRouteName: 'MainView'
  }
)

export default {
  name: 'AppNavigation',

  components: { AppNavigator: createAppContainer(StackNavigator) }
}
</script>
