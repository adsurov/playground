import { expect, describe, test } from 'vitest';
import { fizzBuzz } from './task.js';

describe('fizzBuzz', () => {
  test('should return an empty array for n = 0', () => {
    expect(fizzBuzz(0)).toEqual([]);
  });

  test('should return correct array for n = 1', () => {
    expect(fizzBuzz(1)).toEqual(["1"]);
  });

  test('should return correct array for n = 3', () => {
    expect(fizzBuzz(3)).toEqual(["1", "2", "Fizz"]);
  });

  test('should return correct array for n = 5', () => {
    expect(fizzBuzz(5)).toEqual(["1", "2", "Fizz", "4", "Buzz"]);
  });

  test('should return correct array for n = 15', () => {
    expect(fizzBuzz(15)).toEqual([
      "1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"
    ]);
  });

  test('should handle larger numbers correctly', () => {
    const result = fizzBuzz(100);
    expect(result).toHaveLength(100);
    expect(result[14]).toBe("FizzBuzz");
    expect(result[29]).toBe("FizzBuzz");
    expect(result[98]).toBe("Fizz");
    expect(result[99]).toBe("Buzz");
  });
});