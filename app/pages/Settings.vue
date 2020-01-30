<template>
  <PageLayout title="Settings" name="Settings">
    <GridLayout class="page__content">
      <Label class="page__content-icon fas" text.decode="&#xf013;" />
      <Label class="page__content-placeholder" :text="message" />
    </GridLayout>
  </PageLayout>
</template>

<script>
export default {
  computed: {
    message () {
      return '<!-- Page content goes here -->'
    }
  }
}
</script>
