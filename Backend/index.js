const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const userRouter = require('./routes/userRoute')
const webRouter = require('./routes/webRoute')
const multer = require('multer');
const path = require('path');
require('dotenv').config();
const db = require('./config/db')



const app = express();
app.use(cors(
    {
        origin: "*",
    }
));

app.use('/uploads', express.static('uploads'));

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', userRouter);
app.use('/', webRouter);


require('./config/db')

app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "ERROR";
    res.status(err.statusCode).json({
        message: err.message,
    })
})


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const uniqueName =
            Date.now() + '-' + Math.round(Math.random() * 1e9) + path.extname(file.originalname);
        cb(null, uniqueName);
    },
});

const upload = multer({ storage });

// Route to add a trainer
app.post('/api/trainers', upload.single('image'), (req, res) => {
    const { name, email, address, phone, age } = req.body;
    const image = req.file ? req.file.filename : null;

    if (!name || !email || !address || !phone || !age || !image) {
        return res.status(400).json({ error: 'All fields are required including image' });
    }

    const sql = 'INSERT INTO trainers (name, email, address, phone, age, image) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(sql, [name, email, address, phone, age, image], (err, result) => {
        if (err) {
            console.error('Error inserting trainer:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        res.json({ message: 'Trainer added successfully' });


    });
});

app.get('/api/trainers', (req, res) => {
    const sql = 'SELECT * FROM trainers';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching trainers:', err);
            return res.status(500).json({ error: 'Failed to fetch trainers' });
        }
        res.json(results);
    });
});
app.get('/api/attendance/:userId', (req, res) => {
    const userId = req.params.userId;
    const sql = `SELECT date, status FROM user_attendance WHERE user_id = ?`;

    db.query(sql, [userId], (err, results) => {
        if (err) {
            console.error('Error fetching attendance:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        res.json(results);
    });
});

app.post('/api/attendance/mark', (req, res) => {
    const { user_id, date } = req.body;

    const checkSql = `SELECT * FROM user_attendance WHERE user_id = ? AND date = ?`;
    const insertSql = `INSERT INTO user_attendance (user_id, date, status) VALUES (?, ?, 'Present')`;

    db.query(checkSql, [user_id, date], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });

        if (result.length > 0) {
            return res.status(200).json({ message: 'Already marked' });
        }

        db.query(insertSql, [user_id, date], (err2) => {
            if (err2) return res.status(500).json({ error: err2.message });
            res.status(200).json({ message: 'Marked Present' });
        });
    });
});

app.listen(8000, () => {
    console.log("My Server");

})



