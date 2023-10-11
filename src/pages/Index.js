import Assignment from "../components/Assignment"
import { useLoaderData } from "react-router-dom"

function Index(props) {
  const assignments = useLoaderData()
  return assignments.map((assignment) => <Assignment assignment={assignment} key={assignment.id} />);
}

export default Index