function Table(name) {
  this.name = name || "";
  this.columns = [];
}
  Table.prototype.addColumn = function(column) {
    this.columns.push(column);
  };
  Table.prototype.toSQL = function() {
    var createStatement = "CREATE TABLE IF NOT EXISTS " + this.name;
    var colStart = " (";
    var colEnd = ");";
    var columns = this.columns;
    var columnString = [];

    for (var i = 0; i < columns.length; i++) {
      columnString[i] = columns[i].toSQL();
    }
    columnString = columnString.join(", ");

    return createStatement + colStart + columnString + colEnd;
  };

module.exports = Table;
