const PAYMENT_SERVER_URL = process.env.NODE_ENV === 'production' 
? 'https://polyscapestudio.com/api' 
: 'http://localhost:8080/api';
export default PAYMENT_SERVER_URL;