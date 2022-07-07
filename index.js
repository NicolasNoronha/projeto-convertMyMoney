const express = require('express') // import
const app = express() //chama o express
const path = require('path')

const convert = require('./lib/convert')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public'))) // lugar para guardar os arquivos como CSS ('public' é o nome da pasta node)

app.get('/', (req, res) => {
  res.render('home')
})


app.get('/cotacao', (req, res) => {
  const { cotacao, quantidade } = req.query

  //if para verificar se os cotacao e quantidade existe
  if (cotacao, quantidade) {
    const conversao = convert.convert(cotacao, quantidade)
    res.render('cotacao', {
      error: false,
      cotacao: convert.toMoney(cotacao),
      quantidade: convert.toMoney(quantidade),
      conversao: convert.toMoney(conversao)
    })
  } else {
    res.render('cotacao', {
      error: 'Valores Inválidos'

    })

  }

})


app.listen(3000, err => {
  if (err) {
    console.log('Problema ao inicar o sistema')
  } else {
    console.log('Sistema está no ar')
  }
})