<template>
  <nb-container>
    <nb-content class="wtfu__content">
      <touchable-opacity
        v-for="alarm in alarms"
        :key="alarm.id"
        :on-long-press="() => onCardPress(alarm.id)"
      >
        <nb-card>
          <nb-card-item>
            <nb-left>
              <nb-text>{{ getTime(alarm) }}</nb-text>
            </nb-left>

            <nb-body>
              <nb-text>{{ alarm.label }}</nb-text>
            </nb-body>

            <nb-right>
              <nb-switch
                :value="alarm.active"
                :on-change="() => onSwitch(alarm.id)"
              />
            </nb-right>
          </nb-card-item >
        </nb-card>
      </touchable-opacity>
    </nb-content>

     <nb-button
        class="wtfu_add-button"
        rounded
        :onPress="onAddPress"
      >
        <nb-icon name="add"/>
      </nb-button>
  </nb-container>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

const parseTime = val => {
   const stringed = val.toString()
   return stringed.length === 1 ? '0' + stringed : stringed
}

export default {
  name: 'MainView',

  props: {
    navigation: Object
  },

  data: () => ({
  }),

  computed: {
    ...mapState([
      'alarms'
    ])
  },

  methods: {
    ...mapMutations([
      'toggleAlarm'
    ]),

    onAddPress () {
      this.navigation.navigate('SetAlarmView')
    },

    onCardPress (id) {
      this.navigation.navigate('SetAlarmView', { id })
    },

    onSwitch (id) {
      this.toggleAlarm(id)
    },

    getTime ({ timeSet }) {
      const { hours, minutes } = timeSet
      const parsedHours = parseTime(hours)
      const parsedMinutes = parseTime(minutes)

      return `${parsedHours}:${parsedMinutes}`
    }
  }
  
}
</script>

<style>
.wtfu_app { flex: 1; }

.wtfu__content {
  position: relative;
  padding: 20px;
  background-color:lightslategray;
}

.wtfu_add-button {
  width: 60px;
  height: 60px;
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>