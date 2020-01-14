<template
  xmlns:android="http://schemas.android.com/apk/res/android"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://schemas.android.com/apk/res/android "
>
  <Page class="page">
    <ActionBar class="action-bar">
      <ActionBar class="action-bar">
        <NavigationButton
          text="hamburguer_icon"
          ios:visibility="collapsed"
          icon="res://menu"
          @tap="onDrawerButtonTap"
        />
        <ActionItem
          icon="res://menu"
          text="hamburguer_icon"
          android:visibility="collapsed"
          ios.position="left"
          @tap="onDrawerButtonTap"
        />
        <Label class="action-bar-title" automation-text="action_bar_label" text="PROVA CANALS" />
      </ActionBar>

      <GridLayout class="page__content">
        <ListView for="item in channels" @itemTap="onItemTap">
          <v-template>
            <Label :text="item.name" />
          </v-template>
        </ListView>
      </GridLayout>
    </actionbar>
  </Page>
</template>

<script>
import channelsFixture from '../../e2e/fixtures/channels'
export default {
  name: 'ChannelsList',
  data () {
    return {
      channels: channelsFixture
    }
  },
  methods: {
    onItemTap () {
      console.log('ITEM TAP!')
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
