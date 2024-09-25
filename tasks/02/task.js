/*
See description.md for task details
*/

// Example strings
const goodExamples = [
    '({}[])',
    '{{}}(())',
    '[{()}]',
    '(([{}]))',
    '{}()[]'
];

const badExamples = [
    '({)}',
    '(()',
    '[{]}',
    '{[}]',
    '(]'
];


/**
 * Checks if a string of brackets is balanced.
 *
 * @param {string} s - The string of brackets to check.
 * @returns {boolean} True if the brackets are balanced, false otherwise.
 *
 * @example
 * isBalanced("({[]})");
 * // Returns: true
 *
 * @example
 * isBalanced("([)]");
 * // Returns: false
 */
export function isBalanced(s) {
  return false;
}

