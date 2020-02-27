<template>
  <view class="wtfu-app">
    <app-loading v-if="!isAppReady" />

    <app-navigation v-else />
  </view>
</template>

<script>
import Vue from 'vue-native-core'
import Store from './store'
import * as Font from 'expo-font'
import AppNavigation from './router/AppNavigation.vue'
import { VueNativeBase } from 'native-base'
import { AppLoading } from 'expo'
import { mapActions } from 'vuex'

// registering all native-base components to the global scope of the Vue
Vue.use(VueNativeBase)

// register vuex store in vue prototype
Vue.prototype.$store = Store

export default {
  components: { AppLoading, AppNavigation },

  data: () => ({
    isAppReady: false
  }),

  methods: {
    ...mapActions({
      loadState: 'load'
    }),

    async loadFonts() {
      try {
        await Font.loadAsync({
          Roboto: require("./node_modules/native-base/Fonts/Roboto.ttf"),
          Roboto_medium: require("./node_modules/native-base/Fonts/Roboto_medium.ttf"),
          Ionicons: require("./node_modules/@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Ionicons.ttf")
        })
      } catch (error) {
        console.log("some error occured", error)
      }
    }
  },

  async mounted () {
    this.isAppReady = false
    await this.loadFonts()
    await this.loadState()
    this.isAppReady = true
  }
}
</script>

<style>
.wtfu-app {
  flex: 1;
}
</style>
