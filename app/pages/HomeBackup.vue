<!--suppress HtmlUnknownTag -->
<template>
  <PageLayout title="Els meus canals" name="Home">
    <GridLayout class="page__content">
      <template v-if="channels.length > 0">
        <user-channels :channels="channels" />
        <Button class="page__content-cta c-bg-ruby" automation-text="new_channel_button" text="Eliminar tots els canals " @tap="removeAll" />
      </template>
      <template v-else>
        <Label class="page__content-icon fas" text.decode="&#xf0c9;" />
        <Label class="page__content-placeholder" :text="message" />
        <Button class="page__content-cta -primary" automation-text="new_channel_button" text="Nou canal" @tap="newChannel" />
        <GridLayout rows="auto" columns="*,*">
          <Button col="0" text="Nou canal sample" @tap="newSampleChannel" />
          <Button col="1" text="Omplir amb canals exemple" @tap="newSampleChannels" />
        </GridLayout>
      </template>
      <Fab
        row="1"
        icon="res://baseline_add_white_24"
        ripple-color="#f1f1f1"
        class="fab-button"
        @tap="newChannel"
      />
    </GridLayout>
  </PageLayout>
</template>

<script>
import UserChannels from '../components/UserChannels'
import channelsData from '../data/channels.json'
import NewChannel from './NewChannel'

export default {
  components: {
    'user-channels': UserChannels
  },
  data () {
    return {
      channels: channelsData
    }
  },
  computed: {
    message () {
      return 'No esteu subscrit a cap canal'
    }
  },
  methods: {
    newChannel () {
      this.$navigateTo(NewChannel)
    },
    newSampleChannel () {
      this.channels.push({
        id: 1,
        name: 'Canal exemple',
        created_at: 'Fa 1 segon'
      })
    },
    newSampleChannels () {
      this.channels = channelsData
    },
    removeAll () {
      // TODO CONFIRM
      this.channels = []
    }
  }
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
