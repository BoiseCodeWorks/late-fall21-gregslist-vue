import { AppState } from "../AppState"
import { AccountBid, CarBid } from "../Models/Bids"
import { logger } from "../utils/Logger"
import { api } from './AxiosService'

class BidsService {

  async getBidsForAccount() {
    const res = await api.get('account/bids')
    logger.log('accountBids', res.data)
    AppState.myBids = res.data.map(b => new CarBid(b))
  }

  async getBidsForCar(carId) {
    const res = await api.get(`api/cars/${carId}/bids`)
    logger.log('carBids', res.data)
    AppState.bids = res.data.map(b => new AccountBid(b))
  }

  async create(bid) {
    const res = await api.post('api/bids', bid)
    AppState.accountBids = new CarBid(res.data)
    AppState.bids.unshift(new AccountBid(res.data))
  }

  async edit(bid) {
    await api.put('api/bids/' + bid.bidId, bid)
    const index = AppState.bids.findIndex(b => b.bidId === bid.bidId)
    AppState.bids.splice(index, 1, bid)
  }

  async remove(id) {
    const res = await api.delete('api/bids/' + id)
    AppState.bids = AppState.bids.filter(b => b.bidId !== id)
  }
}

export const bidsService = new BidsService()