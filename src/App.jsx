import React, { useEffect, useState } from "react";
import Table from "./Table";
import List from "./List";
import { Link } from "react-router-dom";

const AppHook = () => {
  const [buttonClicked, setButtonClicked] = useState('');
  const [assignments, setAssignments] = useState([]);
  const [students, setStudents] = useState([]);
  const [grades, setGrades] = useState({});
  const [tabChoice, setTabChoice] = useState(<div/>);

  const handleButtonClicked = buttonName => setButtonClicked(buttonName);

  useEffect(() => {


    const addAssignment = assignmentName => setAssignments(assignments.concat(assignmentName));

    const addStudent = studentName => setStudents(students.concat(studentName));

    const addGrade = (assignment, studentName, score) => {
      if (!(assignment in grades)) {
        grades[assignment] = {};
      }
      grades[assignment][studentName] = score;
      setGrades(grades);
    }
    /*Uncomment below to render assignments*/
    if (buttonClicked === "assignments") {
      let choice =
        <List
          placeholder="Add Assignment..."
          currList={assignments}
          addFunction={addAssignment}
          title="Assignments"
        />
      ;
      setTabChoice(choice);
    }
    /* Change below to render students*/
    if (buttonClicked === "students") {
      let choice =
        <List
          placeholder="Add Student..." 
          currList={students}
          addFunction={addStudent}
          title="Student Roster"
        />
      ;
      setTabChoice(choice);
    }

    /* Uncomment lines below to render grades*/
    if (buttonClicked === "grades") {
      let choice = 
        <Table
          tableNames={assignments}
          rows={students}
          addFunction={addGrade}
          data={grades}
        />
      ;
      setTabChoice(choice);
    }
  }, [buttonClicked, assignments, students, grades])

  return (
    <div>
        <div className="Box Box--spacious f4">
          <div className="Box-header">
          <Link to="/invoices">Invoices</Link> | {" "}
          <Link to="/expenses">Expenses</Link> | {" "}
          <Link to="/hooks">Hooks</Link>
          <h3 className="Box-title d-flex flex-justify-center">GradeBook</h3>
          </div>
        </div>
        <nav className="UnderlineNav d-flex flex-justify-center">
          <div className="UnderlineNav-body pt-6">
            <button
              className="btn btn-primary"
              onClick={() => handleButtonClicked("assignments")}
            >
              Assignments
            </button>
            <button
              className="btn btn-primary"
              onClick={() => handleButtonClicked("students")}
            >
              Students
            </button>
            <button
              className="btn btn-primary"
              onClick={() => handleButtonClicked("grades")}
            >
              Grades
            </button>
          </div>
        </nav>
        {tabChoice}
      </div>
  )
}

export default AppHook;
