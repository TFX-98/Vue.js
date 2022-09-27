<template>
  <data-processing />
</template>

<script>
import DataProcessing from "./components/DataProcessing.vue";

export default {
  components: {
    DataProcessing,
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  background-color: #e3edf7;
  font-family: Arial, sans-serif;
}
</style>
