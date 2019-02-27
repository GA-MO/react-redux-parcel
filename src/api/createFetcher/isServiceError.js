export default res => {
  if (res.data.status === 400) return true
  return false
}
