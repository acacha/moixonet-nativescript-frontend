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
      <Label class="action-bar-title" automation-text="action_bar_label" text="Els meus canals" />
    </ActionBar>

    <GridLayout class="page__content">
      <ListView for="item in channels" @itemTap="onItemTap">
        <v-template>
          <Label :text="item.name" />
        </v-template>
      </ListView>
    </GridLayout>
  </Page>
</template>

<script>

export default {
  name: 'ChannelsList',
  data () {
    return {
      channels: [
        {
          id: 1,
          name: 'Canal 1'
        },
        {
          id: 2,
          name: 'Canal 2'
        },
        {
          id: 3,
          name: 'Canal 3'
        },
        {
          id: 4,
          name: 'Canal 4'
        }
      ]
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
