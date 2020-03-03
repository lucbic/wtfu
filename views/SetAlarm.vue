<template>
  <nb-container>
    <nb-content class="wtfu__set-new-alarm-content">
      <nb-view>
        <nb-title :style="{
          marginTop: 10,
          marginBottom: 40,
          color: '#3a3a3a',
        }">
          {{ alarmId ? 'Editar alarme' : 'Novo alarme' }}
        </nb-title>

        <nb-view :style="{ display: 'flex', flexDirection: 'row' }">
          <nb-label :style="{ flex: 1 }">
            Horas
          </nb-label>
          <nb-label :style="{ flex: 1 }">
            Minutos
          </nb-label>
        </nb-view>

        <nb-form :style="{ display: 'flex', flexDirection: 'row' }" >
          <nb-picker
            :selectedValue="hourSelected"
            :onValueChange="onHourChange"
            :style="{ flex: 1 }"
            mode="dropdown"
            prompt="hora"
          >
            <nb-item
              v-for="({ key, value}) in defaultHours"
              :label="key"
              :value="value"
              :key="key"
            />
          </nb-picker>

          <nb-picker
            :selectedValue="minuteSelected"
            :onValueChange="onMinuteChange"
            :style="{ flex: 1 }"
            mode="dropdown"
            prompt="minutos"
          >
            <nb-item
              v-for="({ key, value}) in defaultMinutes"
              :label="key"
              :value="value"
              :key="key"
            />
          </nb-picker>
        </nb-form>

        <nb-form>
          <nb-item last>
            <nb-input
              v-model="label"
              placeholder="Etiqueta"
            />
          </nb-item>
        </nb-form>
      </nb-view>

      <template v-if="alarmId">
        <nb-button
          large
          icon-left
          :style="{ marginTop: 40 }"
          :onPress="onSavePress"
        >
          <nb-icon name="ios-checkmark-circle-outline"/>

          <nb-text>
            Salvar alterações
          </nb-text>
        </nb-button>

        <nb-button
          large
          danger
          icon-left
          :style="{ marginTop: 20 }"
          :onPress="onDeletePress"
        >
          <nb-icon name="ios-trash"/>

          <nb-text>
            Remover alarme
          </nb-text>
        </nb-button>
      </template>

      <nb-button
        v-else
        large
        icon-left
        :style="{ marginTop: 40 }"
        :onPress="onAddPress"
      >
        <nb-icon name="ios-add-circle-outline"/>

        <nb-text>
          Adicionar alarme
        </nb-text>
      </nb-button>

    </nb-content>
  </nb-container>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { defaultHours, defaultMinutes } from '../content/timePickerData'
import { Alert } from 'react-native'

export default {
  name: 'SetAlarmView',

  props: {
    navigation: Object
  },

  data: () => ({
    hourSelected: 0,
    minuteSelected: 0,
    label: '',
    defaultHours,
    defaultMinutes,
    alarmId: null
  }),

  computed: {
    ...mapGetters([
      'getAlarm'
    ]),

    formData () {
      return {
        label: this.label,
        hours: this.hourSelected,
        minutes: this.minuteSelected
      }
    }
  },

  methods: {
    ...mapMutations([
      'setNewAlarm',
      'deleteAlarm',
      'editAlarm'
    ]),

    onHourChange (newHour) {
      this.hourSelected = newHour
    },

    onMinuteChange (newMinute) {
      this.minuteSelected = newMinute
    },

    onAddPress () {
      this.setNewAlarm(this.formData)
      this.navigation.navigate('MainView')
    },

    onSavePress () {
      const payroll = {
        id: this.alarmId,
        label: this.label,
        timeSet: {
          hours: this.hourSelected,
          minutes: this.minuteSelected
        }
      }

      this.editAlarm(payroll)
      this.navigation.navigate('MainView')
    },

    onDeletePress () {
      Alert.alert(
        'Deseja remover este alarme?',
        null,
        [
          {
            text: 'Cancelar',
            style: 'cancel'
          },
          {
            text: 'Remover',
            onPress: () => {
              this.deleteAlarm(this.alarmId)
              this.navigation.navigate('MainView')
            }
          }
        ],
        { cancelable: true }
      )
    }
  },

  beforeMount () {
    const state = this.navigation.state || {}
    const params = (state || {}).params
    const alarmId = (params || {}).id

    if (alarmId) {
      const alarm = this.getAlarm(alarmId)

      this.alarmId = alarmId
      this.hourSelected = alarm.timeSet.hours
      this.minuteSelected = alarm.timeSet.minutes
      this.label = alarm.label
    }
  }
}
</script>

<style>
.wtfu__set-new-alarm-content {
  flex: 1;
  padding: 10px;
  background-color:lightslategray;
}
</style>