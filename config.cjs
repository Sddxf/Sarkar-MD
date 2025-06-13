// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "Sarkarmd$eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0FvUVNmZ3MwbXdheS9PK0QxUms1Rk5PM25ZeHcvNEl1UHp2VzVQYjExWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRGxKZDRkUFNqdFp4WDV0cFJGWVFmbFBxUmVNNjZFWm8wVFFxTzlFTGduQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXRzNVd0lWTzgvWW9aSlVQVjJIMWsvOGlrUGdxRzJvVlVURW5lOE5wZzN3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJueGp4RlVEbm1RVjV5QlhiQ1h4K3VvNnc1UVlGUWdodWxFUmNpSVA4R2w0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndMazNRL0RacWVPWGZMYmtaZzFMWHJPYU1FaEtSdStjQ0lBMTNxN2RORjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldBZm5GTGZuSFFlMFdScXFYYWZTUHRnaWhRT21VbUphQm53S3lvV0QvRVE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkxONHE5dGUyRXhQQTJxWTR5SlJwb1RyYVMrQTMyZGpJRmtEaUtUMDVtWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTExTak1BdlBocDV0QVBtSVJoTWNNYUNoNi92STNmRCtmcndDbVp3SFBncz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitZRVdhQ3EvcStzc0RjTmsxWFhMcW1rN3hTdFdIWlc5QlFEWW9lMG5tZVQyRjZ4QWt4aXdhTDI1U21qVFJvOTBPbGxXbnVvcUkxZEFhKytTa0FMV0RRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTEwLCJhZHZTZWNyZXRLZXkiOiJSWGV4aS9QRzBxNE5paHU3d2VTamNMaUJTUGV4TjczVml1ZG5KKzdjVTd3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiIxMjNMT1RVUyIsIm1lIjp7ImlkIjoiMjU1NjUyMzk4NjE0OjU4QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTA1MjUzMDg5MzMzMjc1OjU4QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTDJYbHFrREVQT3ZyOElHR0JBZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZGoxaCtVTXc2YTc4ZTZRM1Z6bkdVNENrdkZ6UFpFS1ZlZzk1S0Z5aWRnbz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiTlV3VUFienNDeEVsc2NwbTJWUXRZRDZLZkg5SlpqWEVmcm1sdHo4VjFCemx6NGZqU0FrNW1GTTRNSlU4a3J2OUVUa0JsN05jc3hOSVpkdmVzYlVoRHc9PSIsImRldmljZVNpZ25hdHVyZSI6IlIzKzN0V1lXNWlsYzJLZ2NVcERHbVBGNkJyUURMckNnaGt3Y05reXNTK2pkNSt3T0ZWdGxSY1JFMStNeVdOU0k5aXFSbnJ5bWw5dXJYYjVCNDRHS0N3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU1NjUyMzk4NjE0OjU4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlhZOVlmbERNT211L0h1a04xYzV4bE9BcEx4Y3oyUkNsWG9QZVNoY29uWUsifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lEUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0OTgwMDk1MCwibGFzdFByb3BIYXNoIjoiMlAxWWhmIn0=",
  PREFIX: process.env.PREFIX || '.',
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  
  AUTO_BIO: process.env.AUTO_BIO !== undefined ? process.env.AUTO_BIO === 'true' : false,
  CHAT_BOT: process.env.CHAT_BOT !== undefined ? process.env.CHAT_BOT === 'true' : false,
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "private",
  OWNER_NAME: process.env.OWNER_NAME || "©Bandaheali",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "255652398614",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};


module.exports = config;
