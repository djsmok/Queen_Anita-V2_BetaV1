//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://hi_uvp7_user:rtOPrWH43wmm3H3bKfjk9a0Cu3HlJlwk@dpg-cqpan5jqf0us73afblh0-a.oregon-postgres.render.com/hi_uvp7";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUZ0ZFRmUGswQlY0WDBncG9wdE95akNMVTZYZW9McFUvVHV4amJZdkpGWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTDBLUkJQT0RCNCswQm9WYVhtU3MwOGVQVkJnbTRacTNGZFpKem9Fb2RVST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzRmdIelpja3d4ZGVwS3hjdmw0LzZJc3lFUlJNSnplS0FIbGxta2kxeDJjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0YXNHblZPZ0YyQlhrNlRKTklpOERlaGRnVnlXRlR5MXgzRE05L0NWbG1NPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktOSnM4YXZpcDR1ZjhGSU9QYWRta243V2ZUTzZRZTU0dXR0Z0Fqalc4Rkk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IittcFlFMDNHc0lwUE1QeGVtMVdERWRraXFpTmVUWDZYZUROQUZmQStaUkE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUJQbmN0OVdFa3NGV1VwTDhMQXJiaEwvNW9GQXNVYjM4cmNuQTF0blgyZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEwvS1FnejdzQUthRjJETTMwb3l2anB2SFN0NWh2TURMRkttbElvYXhuOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijd6R2U3clUxbXlJMlVTVzNQZzJNaHJHeXpXRm1ZaUVYNm5yWVl2TTc4VldPbnlEN3c5aTlPUHhQYVE0dEZqUUk3bGlYcUh2SkhSUHRxMGJxM1Z5c2pnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTEwLCJhZHZTZWNyZXRLZXkiOiJQc0tNY0h0bjZvcEo0citRanlkTWxySUc4M01sVzRpOUZ3d1FhdG5kbGVZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJBLXJPVzZTQ1NGLTNpZ2hhLTIzVzlBIiwicGhvbmVJZCI6IjczMjQ5MTcwLWE0ZWQtNGFkZi1iY2E2LWJjMTQyOTQ1NzlhMCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5d1p3dWhmdGxNciszNW02bXg2YVVvVVVmQVE9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpoanVMSitySTJWWXdVMGlPU3JJZG82MitYTT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0o3azY4b0lFSk9MKzdVR0dCVWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ikh3QU4wTGloNFJMRW9pSzJWc1pZTGlsVERNZ2dyeGtuOGFSa2gvOXFmQjQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkRhbVhkcU1RdWE1dklLM3JVaUpURHBCZlhtUjZXck1JL2Mxa2hlQUYvS3kzRnVSbk1RVUZzMUVCSWQzTHJxazU0TFNXVXZHN0xwRTNGYUMyMzROeEF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJEREE3ZGY4bDJmZGsvajU4Rmx4UVZCcUtVSTNpUDBCRjFGcTVrOUdhZ0orMmlPc1dwUmZES3pTNGVpSWQ3NSswcm1UR1hhUUNMckhCSmdmVDhPb3VpQT09In0sIm1lIjp7ImlkIjoiMjMzNTM5OTU4ODY0OjkwQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMzM3MDMxNjIwODE1MTM6OTBAbGlkIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzMzUzOTk1ODg2NDo5MEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSOEFEZEM0b2VFU3hLSWl0bGJHV0M0cFV3eklJSzhaSi9Ha1pJZi9hbndlIn19XSwicGxhdGZvcm0iOiJpcGhvbmUiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlEUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMzc3ODQ2NCwibGFzdFByb3BIYXNoIjoiNEZkSWo2IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFEcGQifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
