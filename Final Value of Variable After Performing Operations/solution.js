/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    const str = operations.join('').replaceAll('X', '')
    return (str.replaceAll('-', '').length / 2) - (str.replaceAll('+', '').length / 2)
};
