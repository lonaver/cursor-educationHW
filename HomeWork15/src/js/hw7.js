export const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
export const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
export const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };
export const wrapperHW7 = document.querySelector(".wrapper_HW7");

export function getMyTaxes(salary) {
  return this.tax * salary;
}
