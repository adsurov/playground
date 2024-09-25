import { expect, describe, test } from 'vitest';
import { twoSum } from './task.js';

describe('twoSum', () => {
    test('should return correct indices for Example 1', () => {
        expect(twoSum([2,7,11,15], 9)).toEqual(expect.arrayContaining([0,1]));
    });

    test('should return correct indices for Example 2', () => {
        expect(twoSum([3,2,4], 6)).toEqual(expect.arrayContaining([1,2]));
    });

    test('should return correct indices for Example 3', () => {
        expect(twoSum([3,3], 6)).toEqual(expect.arrayContaining([0,1]));
    });

    test('should handle negative numbers', () => {
        expect(twoSum([-1,-2,-3,-4,-5], -8)).toEqual(expect.arrayContaining([2,4]));
    });

    test('should handle larger arrays', () => {
        const largeArray = Array.from({length: 1000}, (_, i) => i + 1);
        expect(twoSum(largeArray, 1999)).toEqual(expect.arrayContaining([998,999]));
    });

    test('should return empty array if no solution exists', () => {
        expect(twoSum([1,2,3], 10)).toEqual([]);
    });
});