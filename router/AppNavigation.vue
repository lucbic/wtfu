<template>
  <app-navigator/>
</template>

<script>
import {
  createAppContainer,
  createStackNavigator,
} from 'vue-native-router'

import MainView from '../views/Main'
import SetNewAlarmView from '../views/SetNewAlarm'

const StackNavigator = createStackNavigator(
  {
    MainView: { screen: MainView },
    SetNewAlarmView: { screen: SetNewAlarmView }
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
