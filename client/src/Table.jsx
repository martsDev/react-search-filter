import React from 'react';

const Table = ({ data }) => {
  return (
      <table>
          <tbody>
              <tr>
                  <th>Title</th>
                  <th>Author</th>
              </tr>
             {data.map((item) => 
                <tr>
                    <td>{item.book}</td>
                    <td>{item.author}</td>
                </tr>
             )}
          </tbody>
      </table>
  );
}

export default Table;
