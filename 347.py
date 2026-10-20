# 347. Top K Frequent Elements
# Time Complexity: O(n^2)

import heapq

class Solution:
    def topKFrequent(self, nums: list[int], k: int) -> list[int]:
        frequency_map: dict[int, int] = {}

        for number in nums:
            frequency_map[number] = frequency_map.get(number, 0) + 1

        return heapq.nlargest(k, frequency_map.keys(), key = frequency_map.get)
