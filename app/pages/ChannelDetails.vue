<template lang="html">
  <PageLayout :title="channel.name" :name="ChannelDetails">
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
        <channel-info-tab :channel="channel" />
      </TabContentItem>

      <TabContentItem>
        <GridLayout>
          <Label text="Settings" class="h2 text-center" />
        </GridLayout>
      </TabContentItem>
    </Tabs>
  </PageLayout>
</template>

<script>
import ChannelInfoTab from '../components/ChannelInfoTab'

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
  }
}
</script>

<style lang="scss">
  // Start custom common variables
  @import "~@nativescript/theme/scss/variables/blue";
  // End custom common variables

  // Custom styles

</style>
