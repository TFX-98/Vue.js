<template>
  <h1>{{ head }}</h1>
</template>

<script>
export default {
  data() {
    return {
      head: "todos"
    };
  }
};
</script>

<style scoped>
h1 {
  font-size: 100px;
  font-weight: 100;
  text-align: center;
  color: rgba(175, 47, 47, 0.15);
  margin: 50px auto 30px auto;
}
</style>
