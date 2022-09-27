<template>
  <button>{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: String,
  },
};
</script>

<style lang="scss" scoped>
button {
  width: fit-content;
  padding: 10px 30px;
  font-size: 16px;
  cursor: pointer;
  color: #ffffff;
  background: #7e57c5;
  border: none;
  box-shadow: none;
  border-radius: 2px;
  transition: background 0.25s ease-in-out;

  &:hover {
    background: #6a3ebb;
  }
}
</style>
