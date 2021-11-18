<template>
  <div class="row my-3 justify-content-center">
    <div class="col-md-8">
      <div class="bg-white rounded elevation-1 p-3">
        <div class="text-end p-3">
          <button
            class="btn btn-success"
            @click="bid"
            :disabled="!account.id || hasBid"
            :title="account.id ? 'bid' : 'please login to bid'"
          >
            Bid: ${{ car.price + 250 }}
          </button>
        </div>
        <h5 class="text-dark lighten-50" v-if="bids.length === 0">
          There are no bids yet
        </h5>
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
          <CreatorDetails :creator="bid" />
          <p>${{ bid.amount }}</p>
          <!-- only show if they are the creator and not the top bid -->
          <div v-if="bid.accountId == account.id && i != 0">
            <button class="btn btn-sucess" @click="bidAgain(bid)">
              Increase Bid
            </button>
            <button class="btn btn-danger" @click="withdraw(bid.bidId)">
              Withdraw
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { computed } from '@vue/reactivity'
import { AppState } from '../AppState'
import { onMounted } from '@vue/runtime-core'
import { bidsService } from '../services/BidsService'
import { useRoute } from 'vue-router'
import Pop from '../utils/Pop'
import { logger } from '../utils/Logger'
export default {
  setup() {
    const route = useRoute()
    onMounted(() => {
      bidsService.getBidsForCar(route.params.id)
    })
    return {
      car: computed(() => AppState.activeCar),
      account: computed(() => AppState.account),
      bids: computed(() => AppState.bids.sort((a, b) => {
        return b.amount - a.amount
      })),
      hasBid: computed(() => {
        const found = AppState.bids.find(b => b.accountId === AppState.account.id)
        return found ? true : false
      }),
      async bid() {
        try {
          const newBid = {
            carId: route.params.id,
            accountId: AppState.account.id,
            amount: AppState.activeCar.price + 250
          }
          await bidsService.create(newBid)
          AppState.activeCar.price += 250
          Pop.toast("Bid Added", 'success')
        } catch (error) {
          logger.error(error)
          Pop.toast('something went wrong', 'error')
        }
      },
      async bidAgain(bid) {
        try {
          bid.amount += 250
          await bidsService.edit(bid)
          AppState.activeCar.price += 250
          Pop.toast("Increased Bid", 'success')
        } catch (error) {
          logger.error(error)
          Pop.toast('something went wrong', 'error')
        }
      },
      async withdraw(id) {
        try {
          await bidsService.remove(id)
          Pop.toast("withdrawn")
        } catch (error) {
          logger.error(error)
          Pop.toast('something went wrong', 'error')
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
</style>