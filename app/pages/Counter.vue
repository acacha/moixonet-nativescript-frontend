<template>
  <PageLayout title="Counter" name="Counter">
    <GridLayout class="page__content">
      <Label class="page__content-icon far" text.decode="&#xf1ea;" />
      <Label class="page__content-placeholder" textWrap="true" :text="numberOfVisits" />
    </GridLayout>
  </PageLayout>
</template>

<script>

import {
  getBoolean,
  setBoolean,
  getNumber,
  setNumber,
  getString,
  setString,
  hasKey,
  remove,
  clear
} from "tns-core-modules/application-settings";

export default {
  name: 'DeviceInfo',
  data() {
    return {
      hits: 0
    }
  },
  computed: {
    numberOfVisits() {
      return "You've been here " + this.hits + " times."
    }
  },
  created () {
    this.hits = getNumber("hits",0);
    setNumber("hits", ++this.hits);
  }
}
</script>
