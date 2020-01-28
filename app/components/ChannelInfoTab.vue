<template>
  <GridLayout>
    <Label :text="channel.name" class="h2 text-center" />
  </GridLayout>
</template>

<script>
export default {
  name: 'ChannelInfoTab',
  props: {
    channel: {
      type: Object,
      required: true
    }
  }
}
</script>
