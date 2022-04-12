import React from "react";

export default ({tableNames, rows, data, addFunction}) => {

  const getValue = (data, tableName, row) => {
    if (tableName in data && row in data[tableName]) {
      return data[tableName][row];
    } else {
      return "Add Score";
    }
  }

  const createRows = name => {

    return (
      <div>
        {rows.map((row, index) => (
          <div className="Box-row d-flex flex-justify-between">
            {row}
            <input
              className="form-control input-sm"
              type="text"
              placeholder={getValue(data, name, row)}
              onChange={event =>
                addFunction(name, row, event.target.value)
              }
            />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div>
        {tableNames.map((name, index) => (
          <div className="pt-6">
            <div className="Box col-6 mx-auto">
              <div className="Box-header Box-title">{name}</div>
              <div>{createRows(name)}</div>
            </div>
          </div>
        ))}
      </div>    
  )
}