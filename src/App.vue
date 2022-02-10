<template>
  <div class="todo">
    <HeadModule />
    <div class="todo-app">
      <InputModule :items="items" :allCompleted="allCompleted" />
      <ListModule :items="items" :listStatus="listStatus" />
      <FooterModule :items="items" :listStatus="listStatus" @removeItems="updateItems" @changeListStatus="updateList" />
      <!--Outside computed-->
    </div>
  </div>
</template>

<script>
import HeadModule from "./components/Head.vue";
import InputModule from "./components/Input.vue";
import ListModule from "./components/List.vue";
import FooterModule from "./components/Footer.vue";

export default {
  components: {
    HeadModule,
    InputModule,
    ListModule,
    FooterModule
  },
  data() {
    return {
      items: [],
      listStatus: "All",
      allCompleted: false
    };
  },
  methods: {
    updateItems(res) {
      this.items = res;
    },
    updateList(res) {
      this.listStatus = res;
    }
  },
  computed:{
    ifAllComplete(){
      this.allCompleted = this.items.length == this.items.filter(x=>x.complete == true).length;
      return this.allCompleted;
    }
  }
};
</script>

<style>
.todo {
  max-width: 500px;
  margin: auto;
}

.todo-app {
  background: #fff;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%), 0 25px 50px 0 rgb(0 0 0 / 10%);
}
</style>
