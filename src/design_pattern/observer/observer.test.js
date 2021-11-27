const { Auctioneer, Bidder } = require('./observer');

describe('Test observer pattern', () => {
  const auctioneer = new Auctioneer();
  const bidderRoss = new Bidder("Ross");
  const bidderJoey = new Bidder("Joey");

  beforeEach(() => {
    // register subscribers
    auctioneer.registerBidder(bidderRoss);
    auctioneer.registerBidder(bidderJoey);
  });

  test('Subject should have subscriber Ross and Joey', () => {
    const expected = [bidderRoss, bidderJoey];
    expect(auctioneer.observerList).toEqual(expect.arrayContaining(expected));
  });

  test('Ross set bid price to 400', () => {
    bidderRoss.giveNewPrice(400);
    expect(bidderRoss.bidPrice).toBe(400);
  });

  test('Joey set bid price to 550', () => {
    bidderJoey.giveNewPrice(550);
    expect(bidderJoey.bidPrice).toBe(550);
  });

  test('Test console outputs - observer pattern', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    auctioneer.announceNewBidderPrice();
    expect(consoleSpy).toHaveBeenCalledWith('Ross is offering 400.');
    expect(consoleSpy).toHaveBeenCalledWith('Joey is offering 550.');
    expect(consoleSpy).toHaveBeenCalledWith('Sold to Joey');
  });
});
