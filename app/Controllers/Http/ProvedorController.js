'use strict'
const Provedor = use('App/Models/Provedor');

class ProvedorController {

    /**
   * Show a list of all products.
   * GET products
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let provedor = await Provedor.all();
   return response.json(provedor);
  }

  /**
   * Render a form to be used for creating a new product.
   * GET products/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new product.
   * POST products
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {

    const provedor = new Provedor()
    provedor.nombre = request.input('nombre')
    provedor.apellido = request.input('apellido')
    provedor.direcion = request.input('direcion')
    provedor.emppresa = request.input('emppresa')

    await provedor.save();
  }

  /**
   * Display a single product.
   * GET products/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing product.
   * GET products/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
   
  }

  /**
   * Update product details.
   * PUT or PATCH products/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    let provedor = await Provedor.find(params.id);
    
    provedor.nombre = request.input('nombre')
    provedor.apellido = request.input('apellido')
    provedor.direcion = request.input('direcion')
    provedor.emppresa = request.input('emppresa')
    await provedor.save();
  }

  /**
   * Delete a product with id.
   * DELETE products/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response, view }) {
    const provedor = await Provedor.find(params.id);
    provedor.delete();

  }

}

module.exports = ProvedorController
