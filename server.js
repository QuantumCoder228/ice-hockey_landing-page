import express from 'express'; // Заменяем require на import

const app = express();

app.get('/matches', (req, res) => {
    res.json({ matches: ['match1', 'match2', 'match3'] });
});

const PORT = 3001; // Измените порт с 3000 на 3001
app.listen(PORT, () => console.log(`Server running on http://127.0.0.1:${PORT}`));


import cors from 'cors';

// Разрешить все запросы с любого источника
app.use(cors());

// Ваши маршруты
app.get('/matches', (req, res) => {
    res.json({ matches: ["match1", "match2", "match3"] });
});

app.listen(3000, () => {
    console.log('Server running on http://127.0.0.1:3000');
});
