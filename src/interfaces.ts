export interface ITodo {
  title: string;
  id: number;
  completed: boolean;
}
export interface Date {
  id: number;
  last: number;
  lowestAsk: number;
  highestBid: number;
  percentChange: number;
  baseVolume: number;
  quoteVolume: number;
  isFrozen: number;
  postOnly: number;
  high24hr: number;
  low24hr: number;
}
