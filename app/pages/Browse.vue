<template>
  <PageLayout title="Browse" name="Browse">
    <GridLayout class="page__content">
      <Label class="page__content-icon far" text.decode="&#xf1ea;" />
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
