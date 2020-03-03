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

  getters: {
    getAlarm: state => id => {
      return state.alarms.find(alarm => alarm.id === id)
    }
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
    },

    deleteAlarm: ({ alarms }, alarmId) => {
      const alarm = alarms.find(({ id }) => id === alarmId)

      if (alarm)
        alarms.splice(alarms.indexOf(alarm), 1)
    },

    editAlarm: ({ alarms }, { id: alarmId, label, timeSet }) => {
      const alarm = alarms.find(({ id }) => id === alarmId)

      alarm.label = label
      alarm.timeSet = timeSet
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