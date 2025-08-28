const pad_with_zeroes = (number, lenght) => {
  var my_string = "" + number;
  while (my_string.length < lenght) {
    my_string = "0" + my_string;
  }

  return my_string;
};

export default async (Model, RunningNumber, modelName, body) => {
  let reqData = body;
  const runningNumber = await RunningNumber.findOne({
    where: { runningDate: new Date(), requestType: modelName },
  });
  let currentRunningNumber;
  if (!runningNumber) {
    const newNumberDate = await RunningNumber.create({
      runningNumber: 1,
      runningDate: new Date(),
      requestType: modelName,
    });

    currentRunningNumber = newNumberDate.dataValues.runningNumber;
  } else {
    currentRunningNumber = runningNumber.dataValues.runningNumber;
  }

  // await RunningNumber.update({ runningNumber: currentRunningNumber + 1 }, { where: { runningDate: new Date() } })
  var runningDate = new Date();
  var runningDateStr =
    runningDate.getFullYear() +
    "" +
    pad_with_zeroes(runningDate.getMonth() + 1, 2) +
    "" +
    pad_with_zeroes(runningDate.getDate(), 2) +
    "" +
    pad_with_zeroes(currentRunningNumber, 6);
  console.log(runningDateStr);

  reqData.request_no = runningDateStr;

  const data = await Model.create(reqData);

  await RunningNumber.update(
    { runningNumber: currentRunningNumber + 1 },
    { where: { runningDate: new Date(), requestType: modelName } }
  );

  return data;
};
