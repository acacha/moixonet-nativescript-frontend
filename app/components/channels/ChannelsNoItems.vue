<template>
  <StackLayout>
    <Label class="page__content-icon fas" text.decode="&#xf0c9;" />
    <Label class="page__content-placeholder" :text="message" />
    <Button class="page__content-cta -primary" automation-text="new_channel_button" :text="buttonText" @tap="$navigateTo(NewChannel)" />
  </StackLayout>
</template>

<script>
import NewChannel from "../../pages/NewChannel"

export default {
  name: 'ChannelsNoItems',
  components: {

  },
  props: {
    message: {
      type: String,
      default: 'No esteu subscrit a cap canal'
    },
    buttonText: {
      type: String,
      default: 'Afegir canal'
    }
  },
  data () {
    return {
      NewChannel
    }
  }
}
</script>
