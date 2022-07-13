<template>
  <ul>
    <li
      v-for="(item, index) in listStatusResult"
      :key="index"
      :class="{ complete: item.complete }"
    >
      <div class="item-status" @click="completeItem(index)">
        <span v-if="item.complete">✓</span>
        <span v-else></span>
      </div>
      <input type="text" v-model="item.name" class="item-text" />
      <span class="remove-item" @click="removeItem(index)">×</span>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["items",'listStatus'],
  data() {
    return {
      itemText: "",
      result: this.items,
    };
  },
  methods: {
    completeItem(index) {
      return (this.items[index].complete = !this.items[index].complete);
    },
    removeItem(index) {
      return this.items.splice(index, 1);
    }
  },
  computed:{
    listStatusResult() {
      switch (this.listStatus) {
        case "Active":
          this.result = this.items.filter(el => (el.complete == false));
          break;
        case "Completed":
          this.result = this.items.filter(el => (el.complete == true));
          break;
        default:
          this.result = this.items;
          break;
      }
      console.log(this.listStatus)
      console.log(this.result)
      return this.result;
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: auto;
  max-height: 300px;
  overflow-y: scroll;
}

li {
  position: relative;
  padding: 15px 0;
  font-size: 24px;
  border-bottom: 1px solid #ededed;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

li .item-text {
  box-sizing: border-box;
  flex: 0 0 92%;
  line-height: 1;
  font-weight: 100;
  padding-left: 15px;
  border: none;
  padding-right: 45px;
  font-size: inherit;
  line-height: 1;
}

li .item-text:focus {
  outline: none;
}

.complete .item-text {
  opacity: 0.25;
  text-decoration: line-through;
}

li .item-status {
  flex: 0 0 8%;
  cursor: pointer;
}

li .item-status span {
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 100%;
  display: block;
  width: 22px;
  height: 22px;
  margin: 4px auto 0 auto;
  line-height: 0.75;
  text-align: center;
  color: green;
  padding-left: 2px;
}

li:hover .remove-item {
  opacity: 1;
}

.remove-item {
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 30px;
  font-weight: 100;
  color: #cc9a9a;
  width: 40px;
  height: 40px;
  text-align: center;
  opacity: 0;
  transition: 0.25s all;
}

.remove-item:hover {
  color: #af5b5e;
}
</style>
