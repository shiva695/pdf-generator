const fs = require('fs')
const pdf = require('pdf-creator-node')
const path = require('path')
const options = require('../helpers/option')
const datas = require('../helpers/data')

const homeView = (req,res,next) => {
  res.render('home')
}

const generatePdf = (req, res, next) => {
  const html = fs.readFileSync(path.join(__dirname, '../views/template.html'), 'utf-8')
  const fileName = Math.random() + '_doc' + '.pdf';
  let array = []

  datas.forEach(data => {
    const prod = {
      name: data.name,
      description: data.description,
      unit: data.unit,
      quantity: data.quantity,
      price: data.price,
      total: data.quantity * data.price,
      imgurl: data.imgurl
    }
    array.push(prod)
  });
  let subTotal = 0;
  array.forEach(i => {
    subTotal += i.total
  });
  const tax = (subTotal * 20) / 100
  const grandtotal = subTotal-tax
  const obj = {
    prodList: array,
    subtotal: subTotal,
    tax: tax,
    gtotal: grandtotal
  }
  const document = {
    html: html,
    data: {
      products: obj
    },
    path: './docs/' + fileName

  }
  // CREATEN PDF FILES
  pdf.create(document, options).then(res => {
        console.log(res)
  }).catch(error => {
       console.log(error)
  });
  const filepath = '/docs/' + fileName
  res.render('download', {
    path: filepath
  })
}

module.exports = {
  homeView,
  generatePdf
}