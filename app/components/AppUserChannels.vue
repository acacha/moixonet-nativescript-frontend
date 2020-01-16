<template>
  <StackLayout>
    <!--    <Label class="page__content-placeholder" :text="channels" />-->
    <RadListView
      for="channel in channels"
      @itemTap="$emit('selected')"
    >
      <v-template>
        <!--        <StackLayout class="item" orientation="vertical">-->
        <!--          <Label :text="channel.name" class="nameLabel" />-->
        <!--        </StackLayout>-->
        <GridLayout rows="auto" columns="auto, *, auto">
          <Image row="0" col="0" :src="imagealt" class="thumb img-rounded m-l-10" />
          <StackLayout row="0" col="1">
            <Label :text="channel.name" class="list-group-item-heading" />
            <Label :text="'Subscrit des de ' + channel.created_at" text-wrap="true" class="list-group-item-text" />
          </StackLayout>
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
