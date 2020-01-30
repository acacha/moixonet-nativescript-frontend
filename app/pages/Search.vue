<template>
  <PageLayout title="Search" name="Search">
    <GridLayout class="page__content">
      <Label class="page__content-icon fas" text.decode="&#xf002;" />
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
