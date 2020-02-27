<template>
  <view class="wtfu-app">
    <app-loading v-if="!isAppReady" />

    <app-navigation v-else />
  </view>
</template>

<script>
import Vue from 'vue-native-core'
import * as Font from 'expo-font'
import AppNavigation from './router/AppNavigation.vue'
import { VueNativeBase } from 'native-base'
import { AppLoading } from 'expo'

// registering all native-base components to the global scope of the Vue
Vue.use(VueNativeBase)

export default {
  components: { AppLoading, AppNavigation },

  data: () => ({
    isAppReady: false
  }),

  methods: {
    async loadFonts() {
      try {
        this.isAppReady = false
        await Font.loadAsync({
          Roboto: require("./node_modules/native-base/Fonts/Roboto.ttf"),
          Roboto_medium: require("./node_modules/native-base/Fonts/Roboto_medium.ttf"),
          Ionicons: require("./node_modules/@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Ionicons.ttf")
        })
        this.isAppReady = true
      } catch (error) {
        console.log("some error occured", error)
        this.isAppReady = true
      }
    }
  },

  created () {
    this.loadFonts()
  }
}
</script>

<style>
.wtfu-app {
  flex: 1;
}
</style>
