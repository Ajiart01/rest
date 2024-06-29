const express = require('express');
const asu = require('@xct007/frieren-scraper');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.static('public'));

// Routes
app.get('/download/facebook', async (req, res) => {
    const url = req.query.url;
    if (!url) {
        return res.json({ status: false, message: "Invalid URL" });
    }
    try {
        const result = await asu.facebook.v1(url);
        const hasil = result;
        res.json({ status: true, hasil });
    } catch (err) {
        res.status(500).json({ status: false, message: 'Error', error: err.message });
    }
});

app.get('/download/instagram', async (req, res) => {
    const url = req.query.url;
    if (!url) {
        return res.json({ status: false, message: "Invalid URL" });
    }
    try {
        const result = await asu.instagram.v1(url);
        const hasil = result;
        res.json({ status: true, hasil });
    } catch (err) {
        res.status(500).json({ status: false, message: 'Error', error: err.message });
    }
});

app.get('/download/tiktok', async (req, res) => {
    const url = req.query.url;
    if (!url) {
        return res.json({ status: false, message: "Invalid URL" });
    }
    try {
        const result = await asu.tiktok.v1(url);
        const hasil = result;
        res.json({ status: true, hasil });
    } catch (err) {
        res.status(500).json({ status: false, message: 'Error', error: err.message });
    }
});

// Server listening
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
