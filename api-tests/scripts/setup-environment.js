import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config();

const templatePath = '../tests/postman/postman_environment.json';  
const outputPath = '..tests/postman/postman_environment.json';  

const template = fs.readFileSync(templatePath, 'utf8');
let config = JSON.parse(template);

config.values.forEach(value => {
    if(value.key === "api_key") {
        value.value = process.env.API_KEY;
    }
    if(value.key === "token") {
        value.value = process.env.TOKEN;
    }
});

fs.writeFileSync(outputPath, JSON.stringify(config, null, 2));