import url from './url';
import { redirect } from 'react-router-dom'

export const createAction = async ({ request }) => {
  const formData = await request.formData();
  const newAssignment = {
    subject: formData.get("subject"),
    homework: formData.get("homework"),
    due: formData.get("due"),
    notes: formData.get("notes"),
  }
  
  await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newAssignment)
  })
  return redirect("/")
}

export const updateAction = async ({ request, params }) => {
  const id = params.id
  const formData = await request.formData();
  const updatedAssignment = {
    subject: formData.get("subject"),
    homework: formData.get("homework"),
    due: formData.get("due"),
    notes: formData.get("notes"),
  }
  await fetch(url + id, {
    method: "put",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedAssignment)
  })
  return redirect (`/assignments/${id}`)
}

export const deleteAction = async ({ params }) => {
  const id = params.id
  await fetch(url + id, {
    method: "delete"
  })
  return redirect("/")
}