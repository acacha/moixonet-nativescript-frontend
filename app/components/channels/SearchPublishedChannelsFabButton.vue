<template>
  <Fab
    row="1"
    icon="res://baseline_add_white_24"
    ripple-color="#f1f1f1"
    class="fab-button"
    @tap="$emit('tap')"
  />
</template>

<script>
export default {
  name: 'SearchPublishedChannelsFabButton'
}
</script>

<style scoped lang="scss">
  // Custom styles
  .fab-button {
    height: 70;
    width: 70; /// this is required on iOS - Android does not require width so you might need to adjust styles
    margin: 15;
    background-color: #ff4081;
    horizontal-align: right;
    vertical-align: bottom;
  }
</style>
