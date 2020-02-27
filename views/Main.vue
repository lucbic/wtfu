<template>
  <nb-container>
    <nb-header :style="{ backgroundColor: 'orange' }">
      <nb-body>
        
      </nb-body>
    </nb-header>

    <nb-content class="wtfu__content" padder>
     <nb-card v-for="alarm in alarms" :key="alarm.id">
        <nb-card-item>
          <nb-left>
            <nb-text>{{ getTime(alarm) }}</nb-text>
          </nb-left>

          <nb-body>
            <nb-text>{{ alarm.label }}</nb-text>
          </nb-body>

          <nb-right>
            <nb-switch :value="alarm.active"/>
          </nb-right>
        </nb-card-item >
     </nb-card>
    </nb-content>

     <nb-button
        class="wtfu_add-button"
        success
        large
        rounded
        icon-left
        type="Ionicons"
        :onPress="onAddPress"
      >
        <nb-icon name="add"/>
      </nb-button>
  </nb-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'MainView',

  data: () => ({
    numberX: 0,
  }),

  computed: {
    ...mapState([
      'alarms'
    ])
  },

  methods: {
    onAddPress () { this.numberX++ },

    getTime ({ timeSet }) {
      return `${timeSet.hours}:${timeSet.minutes}`
    }
  }
  
}
</script>

<style>
.wtfu_app { flex: 1; }

.wtfu__content {
  position: relative;
  background-color: grey;
}

.wtfu_add-button {
  width: 80px;
  height: 80px;
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>