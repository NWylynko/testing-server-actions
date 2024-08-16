"use client"

import { refreshData1, refreshData2 } from "./actions";
import { useMutation } from "@tanstack/react-query";

export default function Button() {
  const { mutate: mutateData1 } = useMutation({
    mutationKey: ['data1'],
    mutationFn: () => refreshData1(),
  });

  const { mutate: mutateData2 } = useMutation({
    mutationKey: ['data2'],
    mutationFn: () => refreshData2(),
  });

  return (
    <div>
      <button onClick={() => mutateData1()}>Refresh Data 1</button>
      <button onClick={() => mutateData2()}>Refresh Data 2</button>
    </div>
  );
}