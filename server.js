// server.js
const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = 3000;

// Configuração do Multer para armazenar uploads temporariamente
const storage = multer.diskStorage({
  destination: './uploads',
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });

// Middleware para servir arquivos estáticos
app.use(express.static('public'));

// Rota de upload
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('Nenhum arquivo enviado.');
  }
  res.json({
    message: 'Arquivo recebido com sucesso!',
    filePath: `/uploads/${req.file.filename}`,
  });
  data = new FormData();
  data.append('media', fs.createReadStream(`uploads/${req.file.filename}`));
  data.append('models', 'deepfake');
  data.append('api_user', '933992579');
  data.append('api_secret', '88rdvzLDAKPhjqxaQjcGwY5uDiS4djpf');

  axios({
    method: 'post',
    url:'https://api.sightengine.com/1.0/check.json',
    data: data,
    headers: data.getHeaders()
  })
  .then(function (response) {
    // on success: handle response
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    if (error.response) console.log(error.response.data);
    else console.log(error.message);
  });
});

// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

// this example uses axios and form-data
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
