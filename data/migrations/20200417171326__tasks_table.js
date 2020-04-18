
exports.up = function(knex) {
    return knex.schema.createTable(`tasks_table`, tbl => {
        tbl.increments();
        tbl.string(`description`, 255).notNullable();
        tbl.string(`notes`, 255);
        tbl
          .boolean(`completed`)
          .notNullable()
          .defaultTo(false);
      });
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists(`tasks_table`);
  
};
