'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductosSchema extends Schema {
  up () {
    this.create('productos', (table) => {
      table.increments()
      table.string('codigo', 50).notNullable()
      table.string('nombreProducto', 50).notNullable()
      table.float('precio', 2).notNullable()
      table.integer('cantidad').notNullable()
      table.string('marca', 50).notNullable()
      table.integer('provedor').unsigned().references('id').inTable('provedores')
      table.timestamps()
    })
  }

  down () {
    this.drop('productos')
  }
}

module.exports = ProductosSchema
