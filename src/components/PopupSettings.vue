<template>
  <p>Write new params (object) in textarea field</p>
  <textarea v-model="newSettings" />
  <BaseButton text="Save" @click="$emit('save-settings', newSettings)" />
</template>

<script>
import { ref } from "vue";

import BaseButton from "./BaseButton.vue";

export default {
  components: {
    BaseButton,
  },
  setup() {
    let newSettings = ref("");

    return {
      newSettings,
    };
  },
};
</script>

<style lang="scss" scoped>
textarea {
  width: 100%;
  height: 200px;
  margin-bottom: 30px;
}

.settings-btn {
  margin: 15px 0 15px auto;
}
</style>
