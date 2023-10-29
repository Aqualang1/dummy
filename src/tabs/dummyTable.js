import React from "react";

const DummyTable = (props) => {
  
  const {title} = props;
  
  return <table>
    <thead>
      <tr>
        <th>
          {title}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <img src={`https://picsum.photos/200/300?d=${Date.now()}`} alt="media"/>
        </td>
      </tr>
    </tbody>
  </table>
}

export default DummyTable;