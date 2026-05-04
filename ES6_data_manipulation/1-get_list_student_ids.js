export default function getListStudentIds(idArray) {
  if (!Array.isArray(idArray)) {
    return [];
  }
  return idArray.map((obj) => obj.id);
}
