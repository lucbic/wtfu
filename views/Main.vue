<template>
  <nb-container>
    <nb-content class="wtfu__content">
      <alarm-card
        v-for="alarm in alarms"
        :key="alarm.id"
        :alarm="alarm"
        @on-press="onCardPress($event)"
        @on-toggle="onToggle($event)"
      />
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
import AlarmCard from '../components/AlarmCard'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'MainView',

  components: {
    AlarmCard
  },

  props: {
    navigation: Object
  },

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

    onToggle (id) {
      this.toggleAlarm(id)
    }
  }
  
}
</script>

<style>
.wtfu_app { flex: 1; }

.wtfu__content {
  position: relative;
  padding: 10px;
  background-color:lightslategray;
}

.wtfu_add-button {
  background-color: #6d54dd;
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