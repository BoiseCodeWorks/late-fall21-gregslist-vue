// TODO
class Bid {
  constructor(bidData) {
    this.bidId = bidData.id
    this.bidPrice = data.price
  }
}

export class CarBid extends Bid {
  constructor(data) {
    super(data)
    this.id = data.car.id
    this.make = data.car.make
    this.model = data.car.model
    this.year = data.car.year
    this.description = data.car.description
    this.price = data.car.price
    this.color = data.car.color || '#ffffff'
    this.imgUrl = data.car.imgUrl
    this.creatorId = data.car.creatorId
    this.creator = data.car.creator || {}
  }
}

export class AccountBid extends Bid {
  constructor(data) {
    super(data)
    this.name = data.bidder.name
    this.picture = data.bidder.picture
  }
}