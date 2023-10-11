import { Link, useLoaderData } from 'react-router-dom'

function Show(props) {
  const assignment = useLoaderData();
  return <>
    <div>
        <h2>Subject: {assignment.subject}</h2>
        <h2>Assignment: {assignment.homework}</h2>
        <h2>Due: {assignment.due}</h2>
        <h2>Notes: {assignment.notes}</h2>
        <h2>ID: {assignment.id}</h2>
      <Link to="/">
        <button>Back to Assignments</button>
      </Link>
    </div>
  </>
}

export default Show