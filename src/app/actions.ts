"use server";

import { revalidateTag } from "next/cache";

export const refreshData1 = async () => {
  console.log('refreshData1')
  revalidateTag('data1')
}

export const refreshData2 = async () => {
  console.log('refreshData2')
  revalidateTag('data2')
}