import { Link, useLoaderData, Form } from 'react-router-dom'

function Show(props) {
  const assignment = useLoaderData()[0];
  //const assignment = [{subject: "test"}]
  console.log(assignment)
  return <>
    <h1>Assignments</h1>
    <div>
      <div className="show">
        <h4 className="colorA"><span className=
"subject">Subject: </span>{assignment.subject}</h4>
        <h4 className="colorB"><span className="subject">Assignment: </span>{assignment.homework}</h4>
        <h4 className="colorA"><span className="subject">Due: </span>{assignment.due}</h4>
        <h4 className="colorB"><span className="subject">Notes: </span> {assignment.notes}</h4>
      </div>
        {/*<h3>ID: {assignment.id}</h3>*/}
      <Form method="post" action={`/update/${assignment.id}`}>
        <input type="text" name="subject" placeholder="Subject" defaultValue={assignment.subject} />
        <input type="text" name="homework" placeholder="Assignment" defaultValue={assignment.homework} />
        <input type="text" name="due" placeholder="Due By" defaultValue={assignment.due} />
        <input type="text" name="notes" placeholder="Notes" defaultValue={assignment.notes} />
        <button className="updateBtn">Update Assignment</button>
      </Form>
      <Form method="post" action={`/delete/${assignment.id}`}>
        <button className="deleteBtn">Remove Assignment</button>
      </Form>
      <Link to="/">
        <button className="backBtn">Back to Assignments</button>
      </Link>
    </div>
  </>
}

export default Show