<template>
  <nb-container>
    <nb-content class="wtfu__set-new-alarm-content">
      <!-- <nb-form> -->
        <nb-picker
          :selectedValue="hourSelected"
          :onValueChange="onHourChange"
        >
          <item
            v-for="(value, label) in defaultHours"
            :label="label"
            :value="value"
            :key="label"
          />
        </nb-picker>

        <nb-picker
          :selectedValue="minuteSelected"
          :onValueChange="onMinuteChange"
        >
          <item
            v-for="(value, label) in defaultMinutes"
            :label="label"
            :value="value"
            :key="label"
          />
        </nb-picker>
      <!-- </nb-form> -->
      
    </nb-content>
  </nb-container>
</template>

<script>
const defaultHours = {
  '00': 0,
  '01': 1,
  '02': 2,
  '03': 3,
  '04': 4,
  '05': 5,
  '06': 6,
  '07': 7,
  '08': 8,
  '09': 9,
  '10': 10,
  '11': 11,
  '12': 12,
  '13': 13,
  '14': 14,
  '15': 15,
  '16': 16,
  '17': 17,
  '18': 18,
  '19': 19,
  '20': 20,
  '21': 21,
  '22': 22,
  '23': 23
}

export default {
  name: 'SetNewAlarmView',

  data: () => ({
    numberX: 0,
    hourSelected: 0,
    minuteSelected: 0,
    defaultHours,
    defaultMinutes: defaultHours
  }),

  computed: {
  },

  methods: {
    onHourChange (newHour) {
      this.hourSelected = newHour
    },
    onMinuteChange (newMinute) {
      this.minuteSelected = newMinute
    }
  }
}
</script>

<style>

</style>