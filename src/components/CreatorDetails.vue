<template>
  <div class="user-tag d-flex align-items-center">
    <img class="rounded-pill" :src="creator.picture" alt="" />
    <p class="m-0 ps-3">{{ creator.name }}</p>
  </div>
</template>


<script>
export default {
  props: {
    creator: {
      type: Object,
      required: true
    }
  }
}
</script>


<style lang="scss" scoped>
.user-tag {
  & img {
    height: 50px;
  }
}
</style>