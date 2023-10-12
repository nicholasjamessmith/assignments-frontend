import { Link, useLoaderData, Form } from 'react-router-dom'

function Show(props) {
  const assignment = useLoaderData()[0];
  //const assignment = [{subject: "test"}]
  console.log(assignment)
  return <>
    <div>
        <h2>Subject: {assignment.subject}</h2>
        <h2>Assignment: {assignment.homework}</h2>
        <h2>Due: {assignment.due}</h2>
        <h2>Notes: {assignment.notes}</h2>
        <h2>ID: {assignment.id}</h2>
      <Form method="post" action={`/update/${assignment.id}`}>
        <input type="text" name="subject" placeholder="Subject" defaultValue={assignment.subject} />
        <input type="text" name="homework" placeholder="Assignment" defaultValue={assignment.homework} />
        <input type="text" name="due" placeholder="Due By" defaultValue={assignment.due} />
        <input type="text" name="notes" placeholder="Notes" defaultValue={assignment.notes} />
        <button>Update Assignment</button>
      </Form>
      <Form method="post" action={`/delete/${assignment.id}`}>
        <button>Remove Assignment</button>
      </Form>
      <Link to="/">
        <button>Back to Assignments</button>
      </Link>
    </div>
  </>
}

export default Show