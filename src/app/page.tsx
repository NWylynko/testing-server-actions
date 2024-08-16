import Button from "./button";
import { getData1, getData2 } from "./data";

export default async function Page() {

  const data1 = await getData1(0)
  const data2 = await getData2(0)

  return (
    <div>
      <h1>Hello World</h1>
      <div>
        <pre>{JSON.stringify(data1, null, 2)}</pre>
      </div>
      <div>
        <pre>{JSON.stringify(data2, null, 2)}</pre>
      </div>

      <Button />
    </div>
  );
}