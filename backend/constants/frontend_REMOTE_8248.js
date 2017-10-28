const FRONTEND_DEV_URLS = [ 'http://localhost:3000','http://localhost:3000','https://polyscapestudio.com','https://www.polyscapestudio.com' ];

const FRONTEND_PROD_URLS = [
    '<MYDOMAIN>'
];

module.exports = process.env.NODE_ENV === 'production'
    ? FRONTEND_PROD_URLS
    : FRONTEND_DEV_URLS;