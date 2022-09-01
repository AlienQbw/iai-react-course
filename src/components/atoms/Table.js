const Table = ({ headers, data }) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((rowData) => (
            <tr key={rowData}>
              {rowData.map((cellData) => (
                <td key={Math.random() + cellData}>{cellData}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
