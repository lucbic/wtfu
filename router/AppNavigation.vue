<template>
  <app-navigator/>
</template>

<script>
import {
  createAppContainer,
  createStackNavigator,
} from 'vue-native-router'

import MainView from '../views/Main'
import SetAlarmView from '../views/SetAlarm'

const StackNavigator = createStackNavigator(
  {
    MainView: { screen: MainView },
    SetAlarmView: { screen: SetAlarmView }
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
