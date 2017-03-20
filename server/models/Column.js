function Column(name, dataType, constraint) {
  this.name = name || "";
  this.dataType = dataType || "";
  this.constraint = constraint || "";
}
  Column.prototype.toSQL = function() {
    return this.name + " " + this.dataType + " " + this.constraint;
  };

module.exports = Column;
