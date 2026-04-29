export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberOfDepartments(departments) {
      return Object.keys(departments).length;
    }
  };
}
