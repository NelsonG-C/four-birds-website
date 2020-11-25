import { mockData } from "./mockdata";
import { evaluateTest } from "../evaluateTest";

test("Evaluate totals from test submission, provide totals", async () => {
  const data = mockData;
  const response = await evaluateTest(data);
  expect(response).toEqual("I");
});
