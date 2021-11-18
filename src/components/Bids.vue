<template>
  <div class="row my-3 justify-content-center">
    <div class="col-md-8">
      <div class="bg-white rounded elevation-1 p-3">
        <!-- REVIEW BIDS GO HERE  -->
        <div
          v-for="(bid, i) in bids"
          :key="bid.id"
          class="
            border border-primary
            rounded
            m-2
            p-2
            d-flex
            justify-content-between
          "
        >
          <CreatorDetails :creator="bid.creator" />
          <p>{{ bid.price }}</p>
          <!-- only show if they are the creator and not the top bid -->
          <div v-if="bid.creatorId == account.id && i != 0">
            <button class="btn btn-sucess">Increase Bid</button>
            <button class="btn btn-danger">Withdraw</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { computed } from '@vue/reactivity'
import { AppState } from '../AppState'
export default {
  setup() {
    return {
      account: computed(() => AppState.account),
      bids: computed(() => AppState.bids.sort((a, b) => {
        return a.price - b.price
      }))
    }
  }
}
</script>


<style lang="scss" scoped>
</style>