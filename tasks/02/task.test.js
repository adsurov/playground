import { expect, describe, test } from 'vitest';
import { isBalanced } from './task.js';

describe('isBalanced', () => {
  test('should return truthy for balanced brackets', () => {
    expect(isBalanced('{[()]}')).toBeTruthy();
    expect(isBalanced('{{[[(())]]}}')).toBeTruthy();
    expect(isBalanced('()')).toBeTruthy();
    expect(isBalanced('[]')).toBeTruthy();
    expect(isBalanced('{}')).toBeTruthy();
  });

  test('should return falsy for unbalanced brackets', () => {
    expect(isBalanced('{[(])}')).toBeFalsy();
    expect(isBalanced('{{[(])]}}')).toBeFalsy();
    expect(isBalanced('(]')).toBeFalsy();
    expect(isBalanced('[}')).toBeFalsy();
    expect(isBalanced('{(')).toBeFalsy();
  });

  test('should return truthy for empty string', () => {
    expect(isBalanced('')).toBeTruthy();
  });

  test('should return falsy for single bracket', () => {
    expect(isBalanced('(')).toBeFalsy();
    expect(isBalanced(')')).toBeFalsy();
    expect(isBalanced('[')).toBeFalsy();
    expect(isBalanced(']')).toBeFalsy();
    expect(isBalanced('{')).toBeFalsy();
    expect(isBalanced('}')).toBeFalsy();
  });

  test('should return falsy for mixed unbalanced brackets', () => {
    expect(isBalanced('({[}])')).toBeFalsy();
    expect(isBalanced('((())]){')).toBeFalsy();
    expect(isBalanced('}{})')).toBeFalsy();
  });

  test('should return truthy for nested balanced brackets', () => {
    expect(isBalanced('({[]}){}')).toBeTruthy();
    expect(isBalanced('((()))[[]]{{{}}}[]')).toBeTruthy();
    expect(isBalanced('{()[{}]}')).toBeTruthy();
  });
});