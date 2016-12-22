const Mongoose = require('mongoose')
const Transaction = Mongoose.model('Transaction')

module.exports = {
  index: (req, res) => {
      Transaction.find(Transaction.date = Date.now()).then(sales =>{
          let total = 0;
          for (let sale of sales){
              total += Number(sale.price)
          }
          let salesCount = sales.length
          res.render('home/index', {salesCount: salesCount,total: total });
      })


  }
};