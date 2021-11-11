module.exports = {
  format: 'A3',
  orientation: 'portrait',
  border: '8mm',
  header: {
      height: '15mm',
      contents: '<h4 style=" color:blue; font-size:30; font-weight:800; text-align: center">Fitness report</h4>'
  },
  footer: {
    height: '20mm',
    contents: {
      first: 'Cover Page',
      2: 'Second Page',
      default: '<span style=" color: #444;">{{page}}</span>/<span>{{pages}}</span>',
      last: 'Last Page'
    }
  }
}