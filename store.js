import Vue from 'vue-native-core'
import Vuex from 'vuex'
import { AsyncStorage } from 'react-native';
import { generateUUID } from './modules/helpers'

// mocked data:
// import mockedAlarms from './mock/alarms'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    alarms: []
  },

  mutations: {
    setNewAlarm: ({ alarms }, { label, hours, minutes }) => {
      const newAlarm = {
        id: generateUUID(),
        label,
        timeSet: { hours, minutes },
        active: true
      }

      alarms.push(newAlarm)
    },

    toggleAlarm: ({ alarms }, alarmId) => {
      const alarm = alarms.find(({ id }) => id === alarmId)

      if (alarm) alarm.active = !alarm.active
    }
  },

  actions: {
    load: async ({ state }) => {
      try {
        const persistedStore = await AsyncStorage.getItem('store')

        if (persistedStore) {
          const parsedStore = JSON.parse(persistedStore)
          store.replaceState(parsedStore)
        }
      } catch (error) { throw error }
    }
  }
})

store.subscribe((mutations, state) => {
  AsyncStorage.setItem('store', JSON.stringify(state))
})

export default store