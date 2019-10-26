'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')
Route.get('provedor', 'ProvedorController.index') //muestra los productos
Route.get('product', 'ProductController.index') //muestra los productos


Route.post('createP', 'ProvedorController.store')
Route.post('editP/:id', 'ProvedorController.update')//edita un producto requiere=save()-id
Route.get('delete/:id', 'ProvedorController.destroy')


Route.post('create', 'ProductController.store')
Route.post('edit/:id', 'ProductController.update')//edita un producto requiere=save()-id
Route.get('delete/:id', 'ProductController.destroy')