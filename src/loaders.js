import url from './url'

export const indexLoader = async () => {
  const response = await fetch(url)
  const assignments = await response.json()
  //console.log(assignments)
  return assignments
}

export const showLoader = async ({ params }) => {
  const id = params.id
  const response = await fetch(url + "/" + id)
  const assignment = await response.json()
  //console.log(assignment)
  return assignment
}