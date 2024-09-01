const ColumnList = ({ columns }) => {
  const columnStyle = {
    backgroundColor: "rgb(58, 56, 56)",
    width: "80%",
    margin: "0 auto",
    borderRadius: "5px",
    height: "30px",
  };

  return (
    <div className="columns">
      {columns.map((column) => (
        <div style={columnStyle} className="column" key={column.id}>
          <h2>{column.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default ColumnList;
