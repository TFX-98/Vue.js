<template>
  <div class="result">
    <p>Response</p>
    <span>
      {{ data }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
  },
};
</script>

<style lang="scss" scoped>
.result {
  background: #fff;
  padding: 25px;
  margin: 30px auto;
  width: 100%;
  color: #131313;
  border-radius: 5px;
  max-height: 800px;
  overflow: hidden auto;

  p {
    width: 100%;
    font-size: 18px;
    font-weight: 600;
    margin: 0 0 15px 0;
  }

  span {
    font-size: 14px;
    line-height: 1.5;
    word-break: break-all;
    word-wrap: break-word;
    white-space: pre;
    white-space: pre-wrap;
  }
}
</style>
