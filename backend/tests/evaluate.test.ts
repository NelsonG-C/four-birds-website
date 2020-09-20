import { mockData } from "./mockdata";

export const evaluateTest = async (data: any) => {
  const types = ["D", "I", "S", "C"];
  const totals: number[] = [];

  //Get type total counts

  await types.forEach((i) => {
    let total = 0;
    for (let j = 0; j < data.length; j++) {
      if (i == data[j]["q_type"]) {
        total = total + data[j]["answer"];
      }
    }
    totals.push(total);
    console.log(totals);
  });
  console.log(totals);

  //determine max value
  /* var maxIndex = 0;
  for (var i = 0; i < totals.length ; i++) {
    if (totals[i] >)
  }
  */

  const max = totals.reduce((m, n) => Math.max(m, n));
  const indexes = [...totals.keys()].filter((i) => totals[i] === max);
  console.log(indexes);

  return indexes;
  //to count answers for each type
  //compare totals
  //
};

test("Evaluate totals from test submission, provide totals", async () => {
  const data = mockData;
  const response = await evaluateTest(data);
  expect(response).toEqual([3]);
});
