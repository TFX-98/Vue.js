<template>
  <div class="extraction">
    <p class="status">Status: {{ status }}</p>
    <div class="buttons">
      <BaseButton text="Processing video" @click="$emit('processing-video')" />
      <BaseButton text="Upload image" @click="input.click()" />
    </div>
    <DataSettings
      :data="currentSettings"
      @change-settings="(type) => $emit('change-settings', type)"
    />
    <input
      v-show="false"
      ref="input"
      type="file"
      @change="$emit('processing-images', $event.target.files)"
    />
  </div>
</template>

<script>
import DataSettings from "./DataSettings.vue";
import BaseButton from "./BaseButton.vue";
import { ref } from '@vue/reactivity';

export default {
  components: {
    DataSettings,
    BaseButton,
  },
  props: {
    status: Object,
    currentSettings: String,
  },
  setup() {
    const input = ref(null);

    return {
      input,
    };
  },
};
</script>

<style lang="scss" scoped>
.extraction {
  width: 33.3%;

  p {
    font-size: 18px;
    font-weight: 600;
    margin: 30px 0 15px 0;
  }

  .buttons {
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
  }
}
</style>
