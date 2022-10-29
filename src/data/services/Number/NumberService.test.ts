import { NumberService } from './NumberService';

describe('NumberService', () => {
    // beforeAll(() => {
    //     jest.useFakeTimers();
    //     jest.spyOn(global, 'setTimeout');
    // });
    // afterAll(() => {
    //     jest.useRealTimers();
    //     jest.clearAllTimers();
    // });
    it('should test number format', () => {
        expect(NumberService.format(1000)).toBe('1K');
        expect(NumberService.format(1000000)).toBe('1M');
        expect(NumberService.format(1000000000)).toBe('1B');
        expect(NumberService.format(1000000000000)).toBe('1T');
    });
});
