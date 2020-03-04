<template>
  <touchable-opacity
    :on-long-press="() => $emit('on-press', alarm.id)"
  >
    <nb-card class="wtfu__card">
      <nb-card-item class="wtfu__card-item">
        <nb-left>
          <nb-text class="wtfu__card-time">
            {{ getTime(alarm) }}
          </nb-text>
        </nb-left>

        <nb-body class="wtfu__card-body">
          <nb-text>
            {{ alarm.label }}
          </nb-text>
        </nb-body>

        <nb-right>
          <nb-switch
            :value="alarm.active"
            :on-change="() => $emit('on-toggle', alarm.id)"
          />
        </nb-right>
      </nb-card-item >
    </nb-card>
  </touchable-opacity>
</template>

<script>
import { parseTime } from '../modules/helpers'

export default {
  props: {
    alarm: Object
  },

  methods: {
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
.wtfu__card {
  height: 80px;
  align-items: center;
}

.wtfu__card-item { height: 100%; }

.wtfu__card-body { justify-content: center; }

.wtfu__card-time { font-size: 22px; }
</style>
