export interface Fund {
  instrumentId: string;
  change1m: number;
  change1y: number;
  change3m: number;
  change3y: number;
  currency: string;
  fundName: string;
  fundType: string;
  fundCompany: string;
  yearHigh: number;
  yearLow: number;
}
