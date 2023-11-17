const axios = require('axios');
const express = require('express');
const app = express();

app.get('/weather/cities', async (req, res) => {
    try {
        const { cities } = req.query;
        const apiResponse = await axios.get(`[WeatherAPIEndpoint]?cities=${cities}&appid=${process.env.API_KEY}`);
        res.json(apiResponse.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
