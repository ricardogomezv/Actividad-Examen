'use strict'

const Product = use('App/Models/Product');

class ProductController {

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
    let product = await Product.all();
    console.log(product.row);
   return response.json(product);
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

    const product = new Product()
    product.codigo = request.input('codigo')
    product.nombreProducto = request.input('nombreProducto')
    product.precio = request.input('precio')
    product.cantidad = request.input('cantidad')
    product.marca = request.input('marca')
    product.provedor = request.input('provedor')

    console.log(product);

    await product.save();
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
    let product = await Product.find(params.id);
    
    product.codigo = request.input('codigo')
    product.nombreProducto = request.input('nombreProducto')
    product.precio = request.input('precio')
    product.cantidad = request.input('cantidad')
    product.marca = request.input('marca')
    product.provedor = request.input('provedor')

   
    console.log(product);

    await product.save();
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
    const product = await Product.find(params.id);
    product.delete();

  }

}

module.exports = ProductController
