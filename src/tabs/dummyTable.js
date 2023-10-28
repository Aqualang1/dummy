import React from "react";

const DummyTable = () => {
  return <table>
    <thead>
      <tr>
        <th>
          Dummy Table
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <img src={`https://picsum.photos/200/300?d=${Date.now()}`} />
        </td>
      </tr>
    </tbody>
  </table>
}

export default DummyTable;