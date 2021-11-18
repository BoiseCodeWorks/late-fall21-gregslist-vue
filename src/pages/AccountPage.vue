<template>
  <div class="account container-fluid">
    <div class="row cars mt-3">
      <h3>My Car Listings</h3>
      <div class="col-md-4" v-for="c in cars" :key="c.id">
        <Car :car="c" />
      </div>
    </div>
    <div class="row cars mt-3">
      <h3>My Car Bids</h3>
      <!-- TODO CarBids Here -->
      <div v-for="bid in myBids" :key="bid.id">
        <Car :car="bid" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import { carsService } from '../services/CarsService'
import { logger } from '../utils/Logger'
import { AuthService } from '../services/AuthService'
import { bidsService } from '../services/BidsService'
export default {
  name: 'Account',
  setup() {
    const account = computed(() => AppState.account)
    onMounted(() => {
      carsService.getAll('?creatorId=' + AuthService.userInfo.id)
      bidsService.getBidsForAccount()
    })

    return {
      account,
      cars: computed(() => AppState.cars),
      myBids: computed(() => AppState.myBids)
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
