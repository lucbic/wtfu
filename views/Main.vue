<template>
  <nb-container>
    <nb-header :style="{ backgroundColor: 'orange' }">
      <nb-body>
        
      </nb-body>
    </nb-header>

    <nb-content class="wtfu__content">
     
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
        <nb-text>{{ `${numberX}` }}</nb-text>
      </nb-button>
  </nb-container>
</template>

<script>
export default {
   data: () => ({
    numberX: 0
  }),

  methods: {
    onAddPress () {
      console.log('PREIS')
      this.numberX++
    }
  }
  
}
</script>

<style>
.wtfu__content {
  position: relative;
  background-color: cyan;
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