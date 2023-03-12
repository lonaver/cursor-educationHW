//HomeWork3

export const getSalary = () => {
  const salary = prompt("HOMEWORK3 Task4: Enter salary:");
  let numberSalary = Number(salary);
  if (typeof numberSalary !== "number" || isNaN(numberSalary)) return;
  numberSalary -= (numberSalary / 100) * 18 + (numberSalary / 100) * 1.5;
  return numberSalary;
};
