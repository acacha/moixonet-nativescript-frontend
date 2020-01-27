<template lang="html">
  <Page class="page">
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
      <Label class="action-bar-title" automation-text="action_bar_label" text="Detalls canal" />
    </ActionBar>

    <Tabs>
      <TabStrip>
        <TabStripItem class="navigation__item">
          <Label text="Home" />
          <Image src.decode="font://&#xf015;" class="fas t-36" />
        </TabStripItem>
        <TabStripItem class="navigation__item">
          <Label text="Browse" />
          <Image src.decode="font://&#xf1ea;" class="far t-36" />
        </TabStripItem>
        <TabStripItem class="navigation__item">
          <Label text="Search" />
          <Image src.decode="font://&#xf002;" class="fas t-36" />
        </TabStripItem>
      </TabStrip>

      <TabContentItem>
        <Frame>
          <Label text="CONTENT TAB 1" />
        </Frame>
      </TabContentItem>

      <TabContentItem>
        <Frame>
          <Label text="CONTENT TAB 2" />
        </Frame>
      </TabContentItem>

      <TabContentItem>
        <Frame>
          <Label text="CONTENT TAB 3" />
        </Frame>
      </TabContentItem>
    </Tabs>
  </Page>
</template>

<script>
import * as utils from '~/shared/utils'

export default {
  name: 'ChannelDetails',
  methods: {
    onDrawerButtonTap () {
      utils.showDrawer()
    }
  }
}
</script>

<style lang="scss">
  // Start custom common variables
  @import "~@nativescript/theme/scss/variables/blue";
  // End custom common variables

  // Custom styles

</style>
