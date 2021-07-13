const arrow = (param = "Tywin") => {
  let arr1 = ['Cersei', 'Jaime']
  let arr2 = [param, 'Tyrion']
  param = [...arr1, ...arr2]
  return param
}
