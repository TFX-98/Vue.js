<template>
  <div class="wrapper">
    <DataExtraction
      :status="status"
      :currentSettings="currentSettings"
      @processing-video="isModal = isVideo = true"
      @processing-images="processingImage"
      @change-settings="changeSettings"
    />
    <DataSamples @processing-sample="processingImage" />
    <DataResult v-if="result" :data="result" />
    <BaseModal
      v-if="isModal"
      class="modal-wrapper"
      @close-modal="isModal = false"
    >
      <PopupVideo
        v-if="isVideo"
        :status="status"
        @processing-video="processingVideo"
        @set-video="setVideo"
        @stop-processing="stopProcessing"
      />
      <PopupSettings v-else @save-settings="saveSettings" />
    </BaseModal>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { DocumentReaderProcessor } from "@regulaforensics/vp-frontend-components/";

import DataExtraction from "./DataExtraction.vue";
import DataSamples from "./DataSamples.vue";
import PopupSettings from "./PopupSettings.vue";
import PopupVideo from "./PopupVideo.vue";
import DataResult from "./DataResult.vue";
import BaseButton from "./BaseButton.vue";
import BaseModal from "./BaseModal.vue";

export default {
  components: {
    DataExtraction,
    DataSamples,
    PopupSettings,
    PopupVideo,
    DataResult,
    BaseButton,
    BaseModal,
  },
  setup() {
    let status = ref(""),
      isVideo = ref(true),
      isModal = ref(false),
      isStopped = ref(false),
      currentSettings = ref({}),
      currentSettingsType = ref(""),
      result = ref(""),
      service;

    onMounted(async () => {
      service = new DocumentReaderProcessor();

      status.value = "Preapring...";
      await service.prepare();
      status.value = "Initializing...";
      await service.initialize({ license: "" });

      currentSettings.value = {
        streamParam: service.streamParam,
        recognizerProcessParam: service.recognizerProcessParam,
        imageProcessParam: service.imageProcessParam,
      };

      status.value = "Ready to use";
    });

    async function pageListener(currententPage) {
      status.value = "Flip the document";

      setTimeout(async () => {
        status.value =
          "In process. Check console to see data about every frame.";
        await currententPage.startNextPage();
      }, 3000);
    }

    function setVideo(video) {
      service.videoElement = video;
    }

    function prepareProcessing() {
      isStopped.value = false;
      result.value = "";
      status.value = "In process. Check console to see data about every frame.";
      service.recognizeListener = (a) => console.log(a);
    }

    async function processingVideo(isDoublePage) {
      prepareProcessing();

      const data = await service.startRecognition(
        isDoublePage ? pageListener : null
      );

      if (!isStopped.value) completionProcessing(data);
    }

    function completionProcessing(data) {
      service.stopRecognition();
      result.value = JSON.stringify(data, null, 4);
      isModal.value = false;
      status.value = "Done!";
    }

    function stopProcessing() {
      service.stopRecognition();
      isModal.value = false;
      isStopped.value = true;
      status.value = "Stopped.";
    }

    async function processingImage(images) {
      prepareProcessing();

      const data = await service.processImage(images);

      completionProcessing(data);
    }

    function changeSettings(type) {
      currentSettingsType.value = type;
      isVideo.value = false;
      isModal.value = true;
    }

    function saveSettings(settings) {
      switch (currentSettingsType.value) {
        case "streamParam":
          service.streamParam = JSON.parse(settings);
          break;
        case "recognizerProcessParam":
          service.recognizerProcessParam = JSON.parse(settings);
          break;
        case "imageProcessParam":
          service.imageProcessParam = JSON.parse(settings);
          break;
        default:
          break;
      }

      currentSettings.value = {
        streamParam: service.streamParam,
        recognizerProcessParam: service.recognizerProcessParam,
        imageProcessParam: service.imageProcessParam,
      };

      isModal.value = false;
    }

    return {
      status,
      isVideo,
      isModal,
      isStopped,
      currentSettings,
      currentSettingsType,
      result,
      setVideo,
      processingVideo,
      stopProcessing,
      processingImage,
      changeSettings,
      saveSettings,
    };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  max-width: 1200px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
}
</style>
