import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';

global.hachejota = '𝙱𝚈 𝙷𝙰𝙲𝙷𝙴𝙹𝙾𝚃𝙰'
global.hb = 'HΔCHIҜΩβΩT-MD'
global.wm = '𝙷𝙰𝙲𝙷𝙸𝙺𝙾-𝙱𝙾𝚃-𝙼𝙳';
global.titulowm2 = `乂  𝐇 𝐀 𝐂 𝐇 𝐈 𝐊 𝐎 - 𝐁 𝐎 𝐓 - 𝐌 𝐃 乂`
global.gp1 = 'https://chat.whatsapp.com/FZ5NqcnUDsN6ZA8kBFnewH'
global.md = 'https://www.instagram.com/Jxtxn17'
global.canal = 'https://chat.whatsapp.com/FZ5NqcnUDsN6ZA8kBFnewH'
global.suittag = ['522212009202']
global.dono = [
  ['5214437863111', ' 𝙲𝚁𝙴𝙰𝙳𝙾𝚁 𝙷𝙹', true],
 
];
let file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright('Update \'config.js\''));
  import(`${file}?update=${Date.now()}`);
});
