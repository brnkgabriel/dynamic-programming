// Implement a Fibonacci Algorithm that obtains a it's value
// for the provided input.
// The Algorithm will:
// - return the fibonacci value of provided input
// - return 0 if input is negative or 0
// - return 1 for positive number for input = 1 or 2

const fibonacci = (n, memo={}) => {
  if (n in memo) return memo[n]
  if (n < 1) return 0
  if (n === 1) return 1

  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo)
  return memo[n]
}

// _________ _______  _______ _________   _______  _______  _______  _______  _______
// \__   __/(  ____ \(  ____ \\__   __/  (  ____ \(  ___  )(  ____ \(  ____ \(  ____ \
//    ) (   | (    \/| (    \/   ) (     | (    \/| (   ) || (    \/| (    \/| (    \/
//    | |   | (__    | (_____    | |     | |      | (___) || (_____ | (__    | (_____
//    | |   |  __)   (_____  )   | |     | |      |  ___  |(_____  )|  __)   (_____  )
//    | |   | (            ) |   | |     | |      | (   ) |      ) || (            ) |
//    | |   | (____/\/\____) |   | |     | (____/\| )   ( |/\____) || (____/\/\____) |
//    )_(   (_______/\_______)   )_(     (_______/|/     \|\_______)(_______/\_______)
//                             ____       _
//                             |  _ \     | |
//                             | |_) | ___| | _____      __
//                             |  _ < / _ \ |/ _ \ \ /\ / /
//                             | |_) |  __/ | (_) \ V  V /
//                             |____/ \___|_|\___/ \_/\_/
//                         ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

mocha.setup("bdd");
const { assert } = chai;

const sortedNumsArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const fibonacciSeries = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

describe("binarySearch()", () => {
  it("returns 0 for negative numbers or input at index 0", () => {
    assert.equal(fibonacci(-1), 0);
    assert.equal(fibonacci(0), 0);
  });
  it("returns 1 for input 1 & 2", () => {
    assert.equal(fibonacci(1), 1);
    assert.equal(fibonacci(2), 1);
  });
  it("return the fibonacci of 5 to equal 5", () => {
    assert.equal(fibonacci(5), 5);
  });
});

mocha.run();
