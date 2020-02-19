<template>
  <view class="container">
    <text class="text-color-primary">My Vue Native App</text>
      <!-- <accordion
        :data-array="accordionItems"
        :expanded="accordionExpanded"
      /> -->
  </view>
</template>

<script>
export default {
  data: () => ({
    accordionItems: [
      { title: 'kibe', content: 'frito'},
      { title: 'coxinha', content: 'frita'},
      { title: 'esfirra', content: 'assada'},
    ],
    accordionExpanded: false
  })
}
</script>

<style>
.container {
  background-color: white;
  align-items: center;
  justify-content: center;
  flex: 1;
}
.text-color-primary {
  color: blue;
}
</style>
