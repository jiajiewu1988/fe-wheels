const { Auctioneer, Bidder } = require('./observer');

const auctioneer = new Auctioneer();

const bidder1 = new Bidder("Ross");
auctioneer.registerBidder(bidder1);
const bidder2 = new Bidder("Joey");
auctioneer.registerBidder(bidder2);

bidder1.giveNewPrice(400);
bidder2.giveNewPrice(550);
auctioneer.announceNewBidderPrice();

/*
Expected console output

Ross is offering 400.
Joey is offering 550.
Sold to Joey
*/