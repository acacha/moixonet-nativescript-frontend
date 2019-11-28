<!--suppress ALL -->
<template lang="html">
  <RadSideDrawer ref="drawer" drawer-location="Left" gestures-enabled="true" :drawer-transition="transition">
    <StackLayout -drawer-content background-color="#ffffff">
      <slot name="drawerContent" />
    </StackLayout>
    <Frame ref="drawerMainContent" -main-content>
      <slot name="mainContent" />
    </Frame>
  </RadSideDrawer>
</template>

<script>
import { SlideInOnTopTransition } from 'nativescript-ui-sidedrawer'

export default {
  data () {
    return {
      transition: new SlideInOnTopTransition()
    }
  }
}
</script>

<style scoped lang="scss">
    // Start custom common variables
    @import '~@nativescript/theme/scss/variables/blue';
    // End custom common variables

    // Custom styles
</style>
