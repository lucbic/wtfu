<template>
  <nb-container>
    <nb-content class="wtfu__set-new-alarm-content">
      <nb-view>
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

      <nb-button
        large
        icon-left
        :style="{ marginTop: 40 }"
        :onPress="onAddPress"
      >
        <nb-icon name="add"/>

        <nb-text>
          Adicionar alarme
        </nb-text>
      </nb-button>
    </nb-content>
  </nb-container>
</template>

<script>
import { mapMutations } from 'vuex'
import { defaultHours, defaultMinutes } from '../content/timePickerData'

export default {
  name: 'SetNewAlarmView',

  props: {
    navigation: Object
  },

  data: () => ({
    hourSelected: 0,
    minuteSelected: 0,
    label: '',
    defaultHours,
    defaultMinutes
  }),

  computed: {
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
      'setNewAlarm'
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
    }
  }
}
</script>

<style>
.wtfu__set-new-alarm-content {
  flex: 1;
  padding: 20px;
  background-color:lightslategray;
}
</style>