export default function getStudentIdsSum(getListStudents) {
  return getListStudents.reduce((result, student) => result + student.id, 0);
}
