import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID j8KLrBsafkiTiK9bZXM1vHkbAYjxBM-kV2Kl9eydkPA',
  },
});
