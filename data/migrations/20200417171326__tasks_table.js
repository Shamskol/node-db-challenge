
exports.up = function(knex) {
    return knex.schema.createTable(`tasks`, tbl => {
        tbl.increments("id");
        tbl.string(`description`, 255).notNullable();
        tbl.string(`notes`, 255);
        tbl
          .boolean(`completed`)
          .notNullable()
          .defaultTo(false);

        //   tbl
        //   .integer(`project_id`)
        //   .unsigned()
        //   .notNullable()
        //   .references(`id`)
        //   .inTable(`projects`)
        //   .onDelete(`CASCADE`)
        //   .onUpdate(`CASCADE`);
      });
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists(`tasks`);
  
};
