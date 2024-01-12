import "dotenv/config";
import JWT from "jsonwebtoken";

export function generateToken(payload) {
  return new Promise((resolve, reject) => {
    JWT.sign(payload, process.env.SECRET_KEY, { algorithm: 'HS256', expiresIn: '1d'}, (err, token) => {
      if (err) {
        reject(new Error('ERR_INVALID_TOKEN'));
      } else {
        resolve(token);
      }
    });
  });
}
