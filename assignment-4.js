//problem-1
function calculateTax(income, expenses) {
  const remain = income - expenses;
  if (expenses < 0 || income < 0 || expenses > income) {
    return "Invalid Input";
  } else {
    const tax = remain * 0.2;
    return tax;
  }
}

const tax = calculateTax(6000, -1500);
console.log(tax);

//problem-2
function sendNotification(email) {
  const notification = email.split("@");
  if (email.indexOf("@") === -1) {
    return "Invalid Email";
  } else {
    return notification[0] + " sent you an email from " + notification[1];
  }
}
const notification = sendNotification("farhan34@yahoo.com");
console.log(notification);

//problem-3
function checkDigitsInName(name) {
  if (typeof name !== "string") {
    return "Invalid Input";
  } else {
    for (let element of name) {
      if (!isNaN(element)) {
        return true;
      }
    }
    return false;
  }
}

const hasDigits = checkDigitsInName("Raj123");
console.log(hasDigits);

//problem-4
function calculateFinalScore(obj) {
  let totalScore = obj.schoolGrade + obj.testScore;
  if (typeof obj !== "object" || obj === null) {
    return "Invalid Input";
  } else {
    if (
      typeof obj.name === "string" &&
      typeof obj.testScore === "number" &&
      obj.testScore <= 50 &&
      obj.schoolGrade <= 30 &&
      typeof obj.schoolGrade === "number" &&
      typeof obj.isFFamily === "boolean"
    ) {
      if (obj.isFFamily) {
        totalScore = totalScore + 20;
      }
      if (totalScore >= 80) {
        return true;
      } else {
        return false;
      }
    }
  }
}

const result = calculateFinalScore({
  name: "Rajib",
  testScore: 45,
  schoolGrade: 25,
  isFFamily: false,
});
console.log(result);

//problem-5

function waitingTime(waitingTimes, serialNumber) {
  let totalTime = 0;
  let avgTime;
  if (!Array.isArray(waitingTimes) || !Number.isInteger(serialNumber)) {
    return "Invalid Input";
  } else {
    for (let time of waitingTimes) {
      totalTime += time;
      avgTime = Math.round(totalTime / waitingTimes.length);
    }
    if (serialNumber > waitingTimes.length) {
      const serialRemain = serialNumber - waitingTimes.length - 1;
      return serialRemain * avgTime;
    }
  }
}

console.log(waitingTime([7, 8, 3, 4, 5], "9"));
