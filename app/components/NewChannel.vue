<!--suppress ALL -->
<template>
  <Page class="page">
    <ActionBar class="action-bar">
      <NavigationButton text="Go Back" android-system-icon="ic_menu_back" @tap="$navigateBack" />
      <ActionItem
        icon="res://menu"
        text="hamburguer_icon"
        android:visibility="collapsed"
        ios.position="left"
        @tap="$navigateBack"
      />
      <TextField
        v-model="channel"
        hint="Canal..."
        @textChange="onTextChange"
        @focus="onFocus"
        @blur="onBlur"
        @returnPress="onReturnPress"
      />
    </ActionBar>

    <GridLayout class="page__content">
      <Label class="page__content-placeholder" :text="message" />
      <!--            TODO PUBLISHED CHANNELS LIST AND FILTERED-->
    </GridLayout>
  </Page>
</template>

<script>

export default {
  name: 'NewChannel',
  data () {
    return {
      channel: ''
    }
  },
  computed: {
    message () {
      return "No s'ha trobat cap canal!"
    }
  },
  methods: {
    onFocus () {
      console.log('FOCUS!')
    },
    onBlur () {
      console.log('BLUR!')
    },
    onTextChange () {
      console.log('TEXT CHANGED!')
    },
    onReturnPress () {
      console.log('RETURN PRESSED!')
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
