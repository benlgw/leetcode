// 238. Product of Array Except Self
// Time Complexity: O(n)

function productExceptSelf(nums: number[]): number[] {
  const prefix: number[] = getPrefix(nums)
  console.log(prefix)
  const postfix: number[] = getPostfix(nums)
  console.log(postfix)

  const answer: number[] = new Array(nums.length).fill(1)
  answer.forEach((number, index) => {
    answer[index] = index === 0 ?
      1 * postfix[index + 1] :
      index !== answer.length - 1 ?
      prefix[index - 1] * postfix[index + 1] :
      prefix[index - 1] * 1
  })

  return answer
}

function getPrefix(nums: number[]): number[] {
  const prefix = new Array(nums.length)
  nums.forEach((number, index) => {
    prefix[index] = index === 0 ?
      number * 1 :
      number * prefix[index - 1]
  })
  return prefix
}

function getPostfix(nums: number[]): number[] {
  const postfix = new Array(nums.length)
  const postfixIndexLength = postfix.length - 1
  nums.forEach((number, index) => {
    let reverseIndex = postfixIndexLength - index
    postfix[reverseIndex] = index === 0 ?
      nums[reverseIndex] * 1 :
      nums[reverseIndex] * postfix[reverseIndex + 1]
  })
  return postfix
}

console.log(productExceptSelf([4, 3, 2, 1, 2]))
