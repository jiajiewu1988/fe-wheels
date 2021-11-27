class Auctioneer {
  constructor() {
    this.observerList = [];
  }
  registerBidder(observer) {
    this.observerList.push(observer);
  }

  announceNewBidderPrice() {
    this.notifyBidders();
  }

  notifyBidders() {
    this.observerList.forEach(observer => observer.update());
  }
}

class Bidder {
  constructor(name, bidPrice) {
    this.name = name;
    this.bidPrice = bidPrice || 0;
  }

  update() {
    console.log(`${this.name} is offering ${this.bidPrice}.`);
    if (this.bidPrice > 500) {
      console.log(`Sold to ${this.name}`);
    }
  }

  giveNewPrice(bidPrice) {
    this.bidPrice = bidPrice || 0;
  }
}

module.exports = {
  Auctioneer: Auctioneer,
  Bidder: Bidder,
};
