'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Classroom extends Model {
    students(){
        return this.belongsToMany('App/Models/Student')
    }
}

module.exports = Classroom
