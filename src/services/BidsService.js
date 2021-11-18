import { AppState } from "../AppState"
import { AccountBid, CarBid } from "../Models/Bids"
import { Car } from '../Models/Car'
import { logger } from "../utils/Logger"
import { api } from './AxiosService'

class BidsService {

  async create(bid) {
    const res = await api.post('api/bids', bid)
    // REVIEW
    AppState.accountBids = new CarBid(res.data)
    AppState.bids.unshift(new AccountBid(res.data))
  }

  async edit(bid) {
    const res = await api.put('api/bids/' + bid.id, bid)
    const index = AppState.bid.findIndex(c => c.id === bid.id)
    if (index === -1) {
      AppState.cars.push(updatedCar)
      return
    }
    AppState.cars.splice(index, 1, updatedCar)
  }
  async remove() {
    const res = await api.delete('api/cars/' + AppState.activeCar.id)
    logger.log(res.data)
    AppState.cars = AppState.cars.filter(c => c.id !== AppState.activeCar.id)
    AppState.activeCar = new Car()
  }
}

export const bidsService = new BidsService()