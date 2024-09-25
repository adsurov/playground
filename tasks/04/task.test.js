import { expect, describe, test } from 'vitest';
import { isPalindrome } from './task.js';

describe('isPalindrome', () => {
    test('should return true for a valid palindrome', () => {
        expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
    });

    test('should return false for a non-palindrome', () => {
        expect(isPalindrome("race a car")).toBe(false);
    });

    test('should return true for an empty string', () => {
        expect(isPalindrome(" ")).toBe(true);
    });

    test('should handle strings with only non-alphanumeric characters', () => {
        expect(isPalindrome(".,")).toBe(true);
    });

    test('should handle strings with mixed case', () => {
        expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
    });

    test('should handle strings with numbers', () => {
        expect(isPalindrome("12321")).toBe(true);
        expect(isPalindrome("123 321")).toBe(true);
        expect(isPalindrome("123 421")).toBe(false);
    });

    test('should handle long palindromes', () => {
        const longPalindrome = "a".repeat(100000) + "b" + "a".repeat(100000);
        expect(isPalindrome(longPalindrome)).toBe(true);
    });
});