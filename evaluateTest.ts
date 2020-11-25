/* 
  Quick Summary:
  Function that evaluates users test results from the personality quiz
  Determines answer and sends back for later storage in a database
  
*/

// Types and Interfaces
type Answer = {
  question_id: number;
  q_type: string;
  answer: number;
};

type ResultData = Answer[];

export const evaluateTest = async (data: ResultData): Promise<string> => {
  const types: string[] = ["D", "I", "S", "C"];
  const totals: number[] = [];
  const mediansArray: number[] = [];

  //Get total for each of types
  await types.forEach((type: string) => {
    let total = 0;
    let currentValues: number[] = [];
    for (let i = 0; i < data.length; i++) {
      const questionType = data[i]["q_type"];
      const answerVal = data[i]["answer"];
      if (type == questionType) {
        total = total + answerVal;
        currentValues.push(answerVal);
      }
    }

    const sortedAnswerVals = currentValues.sort((a, b) => a - b);
    const median = calculateMedian(sortedAnswerVals);

    mediansArray.push(median);
    totals.push(total);
  });
  console.log("The medians", mediansArray);

  const highestResult = findSingleWinner(totals);
  const highestMedian = findSingleWinner(mediansArray);
  // try to find winner by highest total
  if (highestResult.length == 1) {
    const answer = types[highestResult[0]];
    return answer;
    // then highest median
  } else if (highestMedian.length == 1) {
    const answer = types[highestMedian[0]];
    return answer;
  } else {
    // if still a tie, choose winner at random from leftovers
    const randomWinner =
      highestMedian[Math.floor(Math.random() * highestMedian.length)];
    const answer = types[randomWinner];
    return answer;
  }
};

const calculateMedian = (answerVals: number[]): number => {
  const midpoint = Math.floor(answerVals.length / 2);
  const oddLength = answerVals.length % 2 !== 0;

  if (oddLength) {
    return answerVals[midpoint];
  } else {
    return (answerVals[midpoint - 1] + answerVals[midpoint]) / 2;
  }
};

const findSingleWinner = (array: number[]): number[] => {
  const maxValue = array.reduce((m, n) => Math.max(m, n));
  const indexes = [...array.keys()].filter((i) => array[i] === maxValue);
  return indexes;
};
