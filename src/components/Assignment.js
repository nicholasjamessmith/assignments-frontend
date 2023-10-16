import { Link } from "react-router-dom"

function Assignment({ assignment }) {
  //console.log({ assignment })
  return <>
    <div className="assignment">
      <Link to={`/assignments/${assignment.id}`}>
        <h4 className="colorA"><span className="subject">Subject: </span>{assignment.subject}</h4>
        <h4 className="colorB"><span className="subject">Assignment: </span>{assignment.homework}</h4>
        <h4 className="colorA"><span className="subject">Due: </span>{assignment.due}</h4>
        <h4 className="colorB"><span className="subject">Notes: </span>{assignment.notes}</h4>
        {/*<h4 className="id">ID: {assignment.id}</h4>*/}
      </Link>
    </div>
  </>
}

export default Assignment