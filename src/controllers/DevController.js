const axios = require('axios');

const Dev = require('../models/Dev');

module.exports = {
  async store(req, res) {
    const { github_username, techs, latitude, longitude } = req.body;

    let dev = await Dev.findOne({ github_username });
    if (!dev) {
      const response = await axios.get(`https://api.github.com/users/${github_username}`);
      const { name = login, avatar_url, bio } = response.data;
    
      const techsArray = techs.split(',').map(o => o.trim());
    
      const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
      };
    
      dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location,
      });
    } else {
      return res.status(400).json({ status: 400, message: 'Dev already created' });
    }
  
    return res.json(dev);
  }
};
