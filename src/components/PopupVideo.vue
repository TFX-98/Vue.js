<template>
  <div class="video">
    <div class="check">
      <input
        type="checkbox"
        :disabled="isProcessing"
        id="checkbox"
        v-model="checked"
      />
      <label for="checkbox"> Double sided document (for video) </label>
    </div>
    <BaseButton class="btn" :text="btnText" @click="processingListener" />
    <p v-if="isProcessing">Status: {{ status }}</p>
    <video v-show="isProcessing" autoPlay playsInline ref="video" />
  </div>
</template>

<script>
import { computed, onMounted, ref } from "vue";

import BaseButton from "./BaseButton.vue";

export default {
  components: {
    BaseButton,
  },
  props: {
    status: String,
  },
  setup(_, ctx) {
    let checked = ref(false),
      isProcessing = ref(false);

    const video = ref(null);

    onMounted(() => {
      ctx.emit("set-video", video.value);
    });

    const btnText = computed(() =>
      isProcessing.value ? "Stop recognition" : "Start recognition"
    );

    function processingListener() {
      isProcessing.value = !isProcessing.value;

      if (isProcessing.value) {
        ctx.emit("processing-video", checked.value, isProcessing.value);
      } else {
        ctx.emit("stop-processing");
      }
    }

    return {
      checked,
      btnText,
      video,
      isProcessing,
      processingListener,
    };
  },
};
</script>

<style lang="scss" scoped>
.video {
  text-align: center;

  video {
    width: 100%;
    object-fit: cover;
    transform: scaleX(-1);
  }

  .btn {
    margin: 15px 0;
  }

  p {
    font-size: 18px;
    font-weight: 600;
    margin: 0 0 15px 0;
  }
}
</style>
