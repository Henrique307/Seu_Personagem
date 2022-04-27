import Express from 'express';
import consign from 'consign';

const app = Express()

app.listen(3000, ()=>console.log('ta na porta 3000'))

app.get('/', (req,res) => {
    res.send('Olá Mundo!!!!!!!!!!!!!!!!!!!!!!!!!!')
})



