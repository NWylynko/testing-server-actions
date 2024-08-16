import { unstable_cache } from "next/cache"

const uncached_getData1 = async (seed: number) => {
  console.log('uncached_getData1')

  return {
    seed,
    data: 'data1',
    time: Date.now(),
    num: Math.random()
  }
}

const uncached_getData2 = async (seed: number) => {
  console.log('uncached_getData2')

  return {
    seed,
    data: 'data2',
    time: Date.now(),
    num: Math.random()
  }
}

export const getData1 = unstable_cache(uncached_getData1, ['data1'], { tags: ['data1'] })
export const getData2 = unstable_cache(uncached_getData2, ['data2'], { tags: ['data2'] })