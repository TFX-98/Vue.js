<template>
  <div class="settings">
    <div
      v-for="item in settings"
      :key="item.type"
      :class="['item', { opened: item.opened }]"
    >
      <div class="title" @click="item.opened = !item.opened">
        <p>{{ item.title }}</p>
        <svg width="11" height="16" viewBox="0 0 11 16">
          <path
            d="M2.58555 0.460653L7.93916 5.92706L10.0684 8.07678L8 10.1651L2.64639 15.5701C2.34221 15.8772 1.97719 16 1.55133 16C1.12548 16 0.760456 15.8772 0.456274 15.5701C-0.152091 15.0173 -0.152091 14.0345 0.456274 13.4203L5.80989 8.01536L0.456274 2.61036C-0.152091 2.05758 -0.152091 1.07486 0.456274 0.460653C1.0038 -0.153551 1.97719 -0.153551 2.58555 0.460653Z"
          />
        </svg>
      </div>
      <div class="content">
        <BaseButton
          text="Change"
          @click="$emit('change-settings', item.type)"
        />
        <span>
          {{ JSON.stringify(data[item.type], null, 4) }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import BaseButton from "./BaseButton.vue";

export default {
  components: {
    BaseButton,
  },
  props: {
    data: Object,
  },
  setup() {
    const settings = ref([
      {
        title: "Stream param",
        type: "streamParam",
        opened: false,
      },
      {
        title: "Recognizer process param",
        type: "recognizerProcessParam",
        opened: false,
      },
      {
        title: "Image process param",
        type: "imageProcessParam",
        opened: false,
      },
    ]);

    return {
      settings,
    };
  },
};
</script>

<style lang="scss" scoped>
.settings {
  width: 100%;
  background: #fff;
  padding: 15px;
  max-height: 250px;
  overflow-y: scroll;

  .item {
    font-size: 14px;
    line-height: 1.5;
    word-break: break-all;
    word-wrap: break-word;
    white-space: pre;
    white-space: pre-wrap;

    &:not(:last-child) {
      margin-bottom: 15px;
    }

    .title {
      display: flex;
      align-items: center;
      cursor: pointer;

      p {
        font-size: 16px;
        font-weight: 600;
        margin: 0;
      }

      svg {
        margin-left: auto;
        transform: rotate(90deg);
      }
    }

    .content {
      display: none;
      position: relative;
      height: 100%;
      background-color: #e7e8ed;
      padding: 10px;
      margin-top: 15px;

      &::v-deep button {
        position: absolute;
        top: 10px;
        right: 10px;
        width: auto;
        height: 25px;
        padding: 3px 5px;
        font-size: 12px;
      }
    }

    &.opened {
      svg {
        transform: rotate(-90deg);
      }

      .content {
        display: block;
      }
    }
  }
}
</style>
