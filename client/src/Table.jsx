import React from 'react';

const Table = ({ book }) => {
  return (
      <table>
          <tbody>
              <tr>
                  <th>Title</th>
                  <th>Author</th>
              </tr>
             {book.map((item) => 
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
