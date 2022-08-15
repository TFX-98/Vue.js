<template>
  <footer>
    <div class="active-wrapper">
      <span class="active-count">{{ activeLength }} item left</span>
    </div>

    <div class="list-status">
      <span @click="changeList" data-value="All" class="active">All</span>
      <span @click="changeList" data-value="Active">Active</span>
      <span @click="changeList" data-value="Completed">Completed</span>
    </div>

    <div class="clear-completed" v-show="completedLength">
      <span @click="clearCompleted">Clear completed</span>
    </div>
  </footer>
</template>

<script>
export default {
  props: ["items", "listStatus"],
  methods: {
    clearCompleted() {
      this.allCompleted = false;
      this.$emit(
        "removeItems",
        this.items.filter(item => item.complete == false)
      );
    },
    changeList(event) {
      const listParent = document.querySelectorAll(".list-status span");
      listParent.forEach(el => el.classList.remove("active"));
      const { target } = event;
      target.classList.add("active");
      this.$emit("changeListStatus", target.getAttribute("data-value"));
    }
  },
  computed: {
    activeLength() {
      return this.items.filter(item => item.complete == false).length;
    },
    completedLength() {
      return this.items.filter(item => item.complete == true).length > 0;
    }
  }
};
</script>

<style scoped>
footer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  height: 50px;
}

footer > * {
  box-sizing: border-box;
  color: #777;
  padding: 0 15px;
}

footer .active-wrapper {
  flex: 0 0 30%;
}

footer .list-status {
  flex: 0 0 40%;
  text-align: center;
}

footer .list-status span {
  margin: 0 3px;
  cursor: pointer;
}

footer .list-status span {
  position: relative;
}

footer .list-status span:after {
  content: "";
  display: block;
  height: 1px;
  width: 0;
  background: #777;
  position: absolute;
  left: 0;
  bottom: -3px;
  transition: width 0.25s;
}

footer .list-status span:hover::after {
  width: 100%;
}

footer .list-status .active:after {
  width: 100%;
}

footer .clear-completed {
  cursor: pointer;
  flex: 0 0 30%;
  text-align: right;
}

footer .clear-completed span {
  position: relative;
}

footer .clear-completed span:after {
  content: "";
  display: block;
  height: 1px;
  width: 0;
  background: #777;
  position: absolute;
  left: 0;
  bottom: -3px;
  transition: width 0.25s;
}

footer .clear-completed:hover span:after {
  width: 100%;
}
</style>
