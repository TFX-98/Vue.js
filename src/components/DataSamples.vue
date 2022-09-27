<template>
  <div class="samples">
    <div class="samples__items">
      <div v-for="item in images" :key="item.id" class="samples__item">
        <img
          :src="item.image"
          :alt="item.id"
          @click="preparingImage(item.image)"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup(_, ctx) {
    const images = [
      {
        id: 1,
        image: "/assets/images/01.jpg",
      },
      {
        id: 2,
        image: "/assets/images/02.jpg",
      },
      {
        id: 3,
        image: "/assets/images/03.jpg",
      },
      {
        id: 4,
        image: "/assets/images/04.jpg",
      },
      {
        id: 5,
        image: "/assets/images/05.jpg",
      },
      {
        id: 6,
        image: "/assets/images/06.jpg",
      },
    ];

    function preparingImage(image) {
      fetch(image)
        .then((res) => res.blob())
        .then((blob) => {
          ctx.emit("processing-sample", [blob]);
        });
    }

    return {
      images,
      preparingImage,
    };
  },
};
</script>

<style lang="scss" scoped>
.samples {
  width: 66.6%;
  padding-left: 50px;
  margin-top: 30px;

  &__items {
    display: flex;
    flex-wrap: wrap;
  }

  &__item {
    width: 33.3%;
    padding: 10px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      cursor: pointer;
      border: 2px solid rgba(0, 0, 0, 0);
      transition: border 0.25s ease-in-out;

      &:hover {
        border: 2px solid rgba(0, 0, 0, 1);
      }
    }
  }
}
</style>
