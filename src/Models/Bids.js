// {
//   id: 'Bid id'
//   carId: 'Car id'
//   bidderId: 'Some account Id',
//   price: SOME NUMBER
//   ?car: {... car data}
//   ?bidder: {.... account data}
// }


class Bid {
  constructor(data) {
    this.bidId = data.id
    this.accountId = data.accountId
    this.carId = data.carId
    this.amount = data.amount
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
    this.id = data.account.id
    this.name = data.account.name
    this.picture = data.account.picture
  }
}