<!--suppress HtmlUnknownTag -->
<template>
  <PageLayout title="Els meus canals" name="Home">
    <GridLayout class="page__content">
      <user-channels></user-channels>
      <search-published-channels-fab-button @tap="$navigateTo(NewChannel)"></search-published-channels-fab-button>
    </GridLayout>
  </PageLayout>
</template>

<script>
import UserChannels from '../components/channels/UserChannels'
import NewChannel from './NewChannel'
import SearchPublishedChannelsFabButton from '../components/channels/SearchPublishedChannelsFabButton'

export default {
  components: {
    'user-channels': UserChannels,
    'search-published-channels-fab-button': SearchPublishedChannelsFabButton
  },
  data () {
    return {
      NewChannel
    }
  }
}
</script>
