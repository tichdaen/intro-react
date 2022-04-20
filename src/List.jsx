import React, { useState } from "react";

// Node 16으로 다운 그레이드 후 eslint 설정이 약간 변경된듯
// eslint-disable-next-line
export default ({title, placeholder, currList, addFunction}) => {

  const [value, setValue] = useState('');

  const handleChange = e => setValue(e.target.value);

  const handleSubmit = e => {
    setValue('');
    addFunction(value);
    e.preventDefault();
  }

  return (
    <div className="col-6 mx-auto">
        <p className="h2">{title}</p>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              className="form-control input-sm"
              type="text"
              placeholder={placeholder}
              value={value}
              onChange={handleChange}
            />
          </label>
          <input className="btn btn-sm" type="submit" value="Submit" />
        </form>
        <ul className="Box">
          <div className="Box-header">{title}</div>
          {currList.map((item, index) => (
            <li className="Box-row" key={index}>
              {" "}
              {item}{" "}
            </li>
          ))}
        </ul>
      </div>
  )
}

// class Lists extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: ""
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({ value: event.target.value });
//   }

//   handleSubmit(event) {
//     this.setState({
//       value: ""
//     });

//     this.props.addFunction(this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <div className="col-6 mx-auto">
//         {/*Replace the code below to call the title prop*/}
//         <p className="h2">{this.props.title}</p>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             <input
//               className="form-control input-sm"
//               type="text"
//               placeholder={this.props.placeholder}
//               value={this.state.value}
//               onChange={this.handleChange}
//             />
//           </label>
//           <input className="btn btn-sm" type="submit" value="Submit" />
//         </form>
//         <ul className="Box">
//           <div className="Box-header">{this.props.title}</div>
//           {this.props.currList.map((item, index) => (
//             <li className="Box-row" key={index}>
//               {" "}
//               {item}{" "}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// export default List;
