// File: add.test.ts

import { add } from '../../src/utils/tools'; // Update the import path based on your project structure

describe('add function', () => {
  test('should add two numbers correctly', () => {
    // Test cases
    expect(add(2, 3)).toEqual(5);
  });
});
