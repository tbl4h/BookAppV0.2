export class Fork {
    id: string;
    startingValue: number;
    expectedValue: number;
    minProbability: number;
    minProfit: number;

    constructor(_id = '0', _startingValue = 0, _expectedValue = 0, _minProbability = 0, _minProfit = 0) {
        this.id = _id;
        this.startingValue = _startingValue;
        this.expectedValue = _expectedValue;
        this.minProbability = _minProbability;
        this.minProfit = _minProfit;
    }
}
