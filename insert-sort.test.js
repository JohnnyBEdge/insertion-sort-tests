const insertionSort = require('./insert-sort')

describe("insertion sort algorithm", () => {

    test('array is not empty', () => {
        expect(() => {
            insertionSort([]);
        }).toThrow(new Error('Array cannot be empty'));
    });
    
    test('input is an array', () => {
        expect(() => {
            insertionSort("1", "30", "12", "10");
        }).toThrow(new Error('Input is not an array'));
    });
    
    test('array contains only numbers', () => {
        expect(() => {
            insertionSort(["cat", 32, "dog", 0, 20]);
        }).toThrow(new Error('Array should only contain numbers'));
    });

    test('can sort an array of integers', () => {
        const expected = [1, 2];
        const actual = insertionSort([2, 1]);
        expect(actual).toEqual(expected);
    });

    test('can sort an array of integers', () => {
        const expected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const actual = insertionSort([10, 5, 3, 2, 1, 4, 0, 6, 8, 7, 9])
        expect(actual).toEqual(expected);
    });

    test('returns the same, already sorted array', () => {
        const expected = [11, 12, 13];
        const actual = insertionSort([11, 12, 13]);
        expect(actual).toEqual(expected);
    });
    
    test('can sort negative numbers', () => {
        const expected = [-43, -10, -9, -5, 0];
        const actual = insertionSort([-5, -10, 0, -43, -9]);
        expect(actual).toEqual(expected);
    });
    
    test('can sort floats', () => {
        const expected = [0.9, 1.2, 2.2, 4.5, 13.4];
        const actual = insertionSort([1.2, 4.5, 2.2, 0.9, 13.4]);
        expect(actual).toEqual(expected);
    });
    
    test('can sort floats, negative and positive numbers', () => {
        const expected = [-143, -32, 0, 2, 32, 53.2, 99.9];
        const actual = insertionSort([-143, 32, 53.2, 0, -32, 99.9, 2]);
        expect(actual).toEqual(expected);
    });

});