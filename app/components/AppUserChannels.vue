<template>
  <StackLayout>
    <!--    <Label class="page__content-placeholder" :text="channels" />-->
    <RadListView
      for="channel in channels"
      @itemTap="$emit('selected')"
    >
      <v-template>
        <GridLayout rows="auto" columns="auto, *, auto">
          <Image row="0" col="0" :src="imagealt" class="thumb img-rounded m-l-10" />
          <StackLayout row="0" col="1">
            <Label class="list-group-item-heading">{{ channel.name }} ({{ channel.messages_number }})</Label>
            <Label :text="'Subscrit des de ' + channel.created_at" text-wrap="true" class="list-group-item-text" />
          </StackLayout>
<!--          // TODO -> BUTTON ACTION CAN BE MODIFIED USING SLOT. Per exemple subscriure en comptes de sortir del canal-->
          <Button col="2" text="Sortir" @tap="$emit('leave')" />
        </GridLayout>
      </v-template>
    </RadListView>
  </StackLayout>
</template>

<script>
export default {
  name: 'AppUserChannels',
  props: {
    channels: {
      type: Array,
      required: true
    }
  },
  computed: {
    imagealt () {
      return 'https://loremflickr.com/60/60'
    }
  }
}
</script>
