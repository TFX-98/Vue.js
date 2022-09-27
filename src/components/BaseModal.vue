<template>
  <div class="modal">
    <div class="modal-content">
      <slot />
      <svg
        viewBox="64 64 896 896"
        width="15"
        height="15"
        @click="$emit('close-modal')"
      >
        <path
          d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"
        />
      </svg>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  &-content {
    position: relative;
    max-width: 700px;
    background: #ffffff;
    border: 2px solid #c7c7c7;
    border-radius: 5px;
    padding: 25px;

    svg {
      position: absolute;
      top: 5px;
      right: 5px;
      opacity: 0.5;
      cursor: pointer;
      transition: opacity 0.25s ease-in-out;

      &:hover {
        opacity: 1;
      }
    }
  }
}
</style>
