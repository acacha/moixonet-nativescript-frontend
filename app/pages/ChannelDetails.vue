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

    <Tabs selected-index="0" tabs-position="bottom">
      <TabStrip>
        <TabStripItem class="navigation__item">
          <Label text="Missatges" />
          <Image src.decode="font://&#xf015;" class="fas t-36" />
        </TabStripItem>
        <TabStripItem class="navigation__item">
          <Label text="Calendari" />
          <Image src.decode="font://&#xf1ea;" class="far t-36" />
        </TabStripItem>
        <TabStripItem class="navigation__item">
          <Label text="Informació" />
          <Image src.decode="font://&#xf002;" class="fas t-36" />
        </TabStripItem>
        <TabStripItem class="navigation__item">
          <Label text="Settings" />
          <Image src.decode="font://&#xf002;" class="fas t-36" />
        </TabStripItem>
      </TabStrip>

      <TabContentItem>
        <GridLayout>
          <Label text="Missatges" class="h2 text-center" />
        </GridLayout>
      </TabContentItem>

      <TabContentItem>
        <GridLayout>
          <Label text="Calendari" class="h2 text-center" />
        </GridLayout>
      </TabContentItem>

      <TabContentItem>
        <channel-info-tab :channel="channel"/>
      </TabContentItem>

      <TabContentItem>
        <GridLayout>
          <Label text="Settings" class="h2 text-center" />
        </GridLayout>
      </TabContentItem>
    </Tabs>
  </Page>
</template>

<script>
import ChannelInfoTab from '../components/ChannelInfoTab'
import * as utils from '~/shared/utils'
import SelectedPageService from "../shared/selected-page-service"

export default {
  name: 'ChannelDetails',
  components: {
    'channel-info-tab': ChannelInfoTab
  },
  props: {
    channel: {
      type: Object,
      required: true
    }
  },
  mounted () {
    SelectedPageService.getInstance().updateSelectedPage('ChannelsList')
  },
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
