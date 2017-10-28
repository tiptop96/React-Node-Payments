<<<<<<< HEAD
const FRONTEND_DEV_URLS = [ 
    'http://localhost:3000'
];
=======
const FRONTEND_DEV_URLS = [ 'http://localhost:3000','http://localhost:3000','https://polyscapestudio.com','https://www.polyscapestudio.com' ];
>>>>>>> d6c8cd557898db0c5ce81fcbba3156e413ecb56b

const FRONTEND_PROD_URLS = [
    'https://polyscapestudio.com','https://www.polyscapestudio.com'
];

module.exports = process.env.NODE_ENV === 'production'
    ? FRONTEND_PROD_URLS
    : FRONTEND_DEV_URLS;