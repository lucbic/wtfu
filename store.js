import Vue from 'vue-native-core'
import Vuex from 'vuex'
import { AsyncStorage } from 'react-native';

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
    setNewAlarm: (state, data) => {
    }
  },

  actions: {
    load: async ({ state }) => {
      try {
        const persistedStore = await AsyncStorage.getItem('store')

        if (persistedStore) {
          this.replaceState(Object.assign(state, JSON.parse(persistedStore)))
          alert('There is persisted store data')
        }
      } catch (error) { throw error }
    }
  }
})

store.subscribe((mutations, state) => {
  AsyncStorage.setItem('store', JSON.stringify(state))
})

export default store