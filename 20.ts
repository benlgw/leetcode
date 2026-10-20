// 20. Valid Parentheses
// Time Complexity: O(n^2)

type parenthesis = {
  ")": string,
  "]": string,
  "}": string,
}

function isValid(s: string): boolean {
  const arr: string[] = s.split("")
  const parentheses: parenthesis = { ")": "(", "]": "[", "}": "{" }
  const stack: string[] = []

  const keys: string[] = Object.keys(parentheses)
  const values: string[] = Object.values(parentheses)

  for (let bracket of arr) {
    // check if bracket is a value
    if (values.includes(bracket)) {
      stack.push(keys[values.indexOf(bracket)])
    }
    // check if bracket is a key
    if (keys.includes(bracket)) {
      if (stack.pop() === bracket) {
        continue
      } else {
        return false
      }
    }
  }
  if (stack.length) {
    return false
  }
  return true
};
