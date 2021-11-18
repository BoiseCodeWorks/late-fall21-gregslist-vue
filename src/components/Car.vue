<template>
  <div class="mt-3 selectable">
    <router-link :to="{ name: 'CarDetails', params: { id: car.id } }">
      <div class="bg-light elevation-1 rounded">
        <img
          class="car-img rounded-top w-100 img-fit"
          :src="car.imgUrl"
          alt="car image"
        />
        <div class="p-1 text-center">
          <p class="m-0">
            <b>{{ car.make }} - {{ car.model }}</b>
          </p>
        </div>
      </div>
    </router-link>
  </div>
</template>


<script>
export default {
  props: {
    car: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>
.img-fit {
  object-fit: cover;
  height: 200px;
  width: 200px;
}
</style>