/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('projects', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('project_type')
    table.string('link')
    table.string('github')
    table.string('date_completed')
    table.string('image')
    table.boolean('featured')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('projects')
}
