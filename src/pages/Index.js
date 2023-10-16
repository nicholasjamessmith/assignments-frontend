import Assignment from "../components/Assignment"
import { useLoaderData, Form} from "react-router-dom"

function Index(props) {
  const assignments = useLoaderData()
  return <>
    <h1>Assignments</h1>
    <Form method="post" action="/create">
      <input type="text" name="subject" placeholder="Subject" />
      <input type="text" name="homework" placeholder="Assignment" />
      <input type="text" name="due" placeholder="Due By" />
      <input type="text" name="notes" placeholder="Notes" />
      <button className="createBtn">Create Assignment</button>
    </Form>
    {assignments.map((assignment) => <Assignment assignment={assignment} key={assignment.id} />)}
    </>
}

export default Index