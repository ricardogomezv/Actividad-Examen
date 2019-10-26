'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProvedoresSchema extends Schema {
  up () {
    this.create('provedores', (table) => {
      table.increments()
      table.string('nombre', 50).notNullable()
      table.string('apellido', 50).notNullable()
      table.string('direcion', 100).notNullable()
      table.string('emppresa', 50).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('provedores')
  }
}

module.exports = ProvedoresSchema
