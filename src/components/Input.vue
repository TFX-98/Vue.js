<template>
  <div class="input-wrapper">
    <span @click="allCompleteFunc" v-show="itemsLength">❯</span>
    <input
      type="text"
      v-model="newItem"
      @keyup.enter="addItem"
      :placeholder="backTxt"
    />
  </div>
</template>

<script>
export default {
  props: ["items", "allCompleted"],
  data() {
    return {
      newItem: "",
      backTxt: "What needs to be done?"
    };
  },
  methods: {
    addItem() {
      let result;
      if (this.newItem.trim().length > 0) {
        result = this.items.push({
          name: `${this.newItem}`,
          complete: false
        });
      }
      this.newItem = "";
      this.allCompleted = false;
      return result;
    },

    allCompleteFunc() {
      this.allCompleted = !this.allCompleted;
      return this.items.map(item => (item.complete = this.allCompleted));
    }
  },
  computed: {
    itemsLength() {
      return this.items.length > 0;
    }
  }
};
</script>

<style scoped>
.input-wrapper{
  position: relative;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgb(0 0 0 / 3%);
  padding: 5px 0 5px 40px;
}
.input-wrapper span {
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%) rotateZ(90deg);
  font-size: 20px;
  opacity: .5;
  height: 22px;
}

input {
  border: none;
  padding: 10px 15px;
  font-size: 24px;
  font-weight: 100;
  font-style: italic;
  width: calc(100% - 30px);
  margin-left: auto;
}

input:focus{
    outline: none;
}

input::placeholder{
  opacity: .1;
}
</style>
