import { Link } from "react-router-dom"

function Assignment({ assignment }) {
  console.log({ assignment })
  return <>
    <h3>Subject: {assignment.subject}</h3>
    <h4>Assignment: {assignment.homework}</h4>
    <h4>Due: {assignment.due}</h4>
    <h4>Notes: {assignment.notes}</h4>
    <h4>ID: {assignment.id}</h4>
  </>
}

export default Assignment