import express from "express"; 
import cors from "cors"; 
const app = express();
const port = 3000; 

app.use(cors()); 
app.use(express.json()); 

app.get('/', (req, res) => {
res.send('Ya estoy respondiendo!');
})

app.get('/saludar/:nombre', (req, res) => {
    const { nombre } = req.params;
    res.status(200).send(`Hola ${nombre}`);
  });


app.get('/validarfecha/:ano/:mes/:dia', (req, res) => {
    const { ano, mes, dia } = req.params;
    
    const fechaStr = `${ano}-${mes.padStart(2, '0')}-${dia.padStart(2, '0')}`;
    const fecha = new Date(fechaStr);

    if (isNaN(Date.parse(fechaStr))) {
      return res.status(400).send('Fecha inválida');
    }
    
    const fechaValida = 
      fecha.getFullYear() == ano &&
      (fecha.getMonth() + 1) == mes &&
      fecha.getDate() == dia;
    
    if (!fechaValida) {
      return res.status(400).send('Fecha inválida');
    }
    
    res.status(200).send('Fecha válida');
  });

  

  app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
  });