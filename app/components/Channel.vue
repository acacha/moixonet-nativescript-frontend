<template>
  <Page class="page">
    <ActionBar class="action-bar">
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$navigateBack"/>
      <ActionItem icon="res://menu"
                  text="hamburguer_icon"
                  android:visibility="collapsed"
                  @tap="$navigateBack"
                  ios.position="left">
      </ActionItem>
      <Label class="action-bar-title" automationText="action_bar_label" text="Detall canal"></Label>
    </ActionBar>

    <TabView :selectedIndex="selectedIndex" @selectedIndexChange="indexChange">
      <TabViewItem title="Tab 1">
        <Label text="Content for Tab 1" />
      </TabViewItem>
      <TabViewItem title="Tab 2">
        <Label text="Content for Tab 2" />
      </TabViewItem>
      <TabViewItem title="Tab 3">
        <Label text="Content for Tab 3" />
      </TabViewItem>
      <TabViewItem title="Tab 4">
        <Label text="Content for Tab 4" />
      </TabViewItem>
    </TabView>

  </Page>
</template>

<script>
export default {
  name: 'Channel',
  data () {
    return {
      selectedIndex: 0
    }
  },
  methods: {
    indexChange: function (args) {
      const newIndex = args.value
      console.log('Current tab index: ' + newIndex)
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
