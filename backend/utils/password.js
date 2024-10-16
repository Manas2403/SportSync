// Importing necessary modules
import dotenv from 'dotenv';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import CryptoJS from 'crypto-js';

// Load environment variables from .env file
dotenv.config();

/**
 * Generates a JWT (JSON Web Token) with a specified payload and expiration time.
 * @param {Object} object - The payload to be included in the token.
 * @param {string} [expiresIn='30d'] - The expiration time of the token (default is 30 days).
 * @returns {string} - The generated JWT.
 */
export function getJwt(object, expiresIn = '30d') {
  const secret = process.env.SECRET; // Fetching the secret key from environment variables
  const options = {
    algorithm: 'HS256', // Specifying the signing algorithm
    expiresIn: expiresIn, // Setting the expiration time
  };

  // Signing the token with the payload and secret key
  const token = jwt.sign({ payload: object }, secret, options);

  return token; // Returning the generated token
}

/**
 * Hashes a password using PBKDF2 with a specified salt and iterations.
 * @param {string} password - The password to be hashed.
 * @returns {string} - The hashed password.
 */
export async function hash_password(password) {
  const salt = process.env.SECRET; // Using the secret as the salt
  const genHash = crypto
    .pbkdf2Sync(password, salt, 10000, 64, 'sha512') // Generating the hash
    .toString('hex'); // Converting the hash to hexadecimal format
  return genHash; // Returning the hashed password
}

/**
 * Encrypts a given string using AES encryption.
 * @param {string} str - The string to be encrypted.
 * @returns {string} - The encrypted string.
 */
export function encryptString(str) {
  const encrypted = CryptoJS.AES.encrypt(str, process.env.SECRET); // Encrypting the string
  console.log(encrypted.toString()); // Logging the encrypted string
  return encrypted.toString(); // Returning the encrypted string
}

/**
 * Decrypts an AES encrypted string.
 * @param {string} encryptedStr - The string to be decrypted.
 * @returns {string} - The decrypted string.
 */
export function dcryptString(encryptedStr) {
  encryptedStr = encryptedStr.replace(/ /g, '+'); // Replacing spaces with plus signs for URL compatibility
  const decrypted = CryptoJS.AES.decrypt(encryptedStr, process.env.SECRET); // Decrypting the string
  return decrypted.toString(CryptoJS.enc.Utf8); // Returning the decrypted string in UTF-8 format
}
