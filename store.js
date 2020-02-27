import Vue from 'vue-native-core'
import Vuex from 'vuex'

// mocked data:
import mockedAlarms from './mock/alarms'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // alarms: []

    // mocked data:
    alarms: mockedAlarms
  },
  mutations: {
    setAlarm (state) {
    }
  }
})

export default store;