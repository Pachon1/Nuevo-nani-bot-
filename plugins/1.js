import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {
try {
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'	
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'	
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money, joincount } = global.db.data.users[m.sender]
let user = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let pp = gataMenu3.getRandom()
let pareja = global.db.data.users[m.sender].pasangan 
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
//let fsizedoc = '1'.repeat(10)
//let adReply = { fileLength: fsizedoc, seconds: fsizedoc, contextInfo: { forwardingScore: fsizedoc, externalAdReply: { showAdAttribution: true, title: wm, body: '👋 ' + username, mediaUrl: ig, description: 'Hola', previewType: 'PHOTO', thumbnail: await(await fetch(gataMenu.getRandom())).buffer(), sourceUrl: redesMenu.getRandom() }}}
const numberToEmoji = { "0": "0️⃣", "1": "1️⃣", "2": "2️⃣", "3": "3️⃣", "4": "4️⃣", "5": "5️⃣", "6": "6️⃣", "7": "7️⃣", "8": "8️⃣", "9": "9️⃣", }
let lvl = level
let emoji = Array.from(lvl.toString()).map((digit) => numberToEmoji[digit] || "❓").join("")

let menu = `${lenguajeGB['smsConfi2']()} *${user.genero === 0 ? '👤' : user.genero == 'Ocultado 🕶️' ? `🕶️` : user.genero == 'Mujer 🚺' ? `🚺` : user.genero == 'Hombre 🚹' ? `🚹` : '👤'} ${user.registered === true ? user.name : username}*${(conn.user.jid == global.conn.user.jid ? '' : `\n*SOY SUB BOT DE: https://wa.me/${global.conn.user.jid.split`@`[0]}*`) || ''}

\`\`\`${week}, ${date}\`\`\`
--------------------------------
𝐏𝐑𝐎𝐏𝐈𝐄𝐓𝐀𝐑𝐈𝐎 𝐘 𝐂𝐑𝐄𝐀𝐃𝐎𝐑 𝐃𝐄𝐋 𝐁𝐎𝐓
🥷🏻 Wa.me/593993370003 
--------------------------------
*╭━━━[ 𝑃𝐴𝑅𝐸𝐽𝐴𝑆  👩🏻‍❤️‍👨🏻]━━⬣*
┃ ¡𝐷𝑒𝑐𝑙𝑎́𝑟𝑎𝑡𝑒 𝑐𝑜𝑛 𝑎𝑙𝑔𝑢𝑖𝑒𝑛
┃ 𝑝𝑎𝑟𝑎 𝑞𝑢𝑒 𝑠𝑒𝑎𝑛 𝑝𝑎𝑟𝑒𝑗𝑎𝑠!
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃♥️➺ _.listaparejas_
┃♥️➺ _.mipareja_
┃♥️➺ _.pareja *@tag*_
┃♥️➺ _.aceptar *@tag*_
┃♥️➺ _.rechazar *@tag*_
┃♥️➺ _.terminar *@tag*_
┃♥️➺ _.amor *tag*_
┃♥️➺ _.beso *@tag*_
┃🧡➺ _.topparejas_
┃🧡➺ _.amistad_
┃🧡➺ _.formarpareja_
┃🧡➺ _.love *@tag*_
┃😈➺ _.follar *@tag*_
┃😈➺ _.coger *@tag*_
*╰━━━━━━━━━━━━⬣*

*╭━━━[ 𝐹𝑅𝐸𝐸 𝐹𝐼𝑅𝐸 🎮]━━⬣*
┃ ¡𝐽𝑢𝑒𝑔𝑎 𝑓𝑟𝑒𝑒 𝑓𝑖𝑟𝑒 𝑐𝑜𝑛 𝑡𝑢𝑠 𝑎𝑚𝑖𝑔𝑜𝑠!
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🇧🇷➺ _.4vs4_
┃🇧🇷➺ _.4vs4interno_
┃🇧🇷➺ _.6vs6_
┃🇧🇷➺ _.6vs6interno_
┃🇮🇲➺ _.8vs8_
┃🇦🇱➺ _.12vs12_
┃🇦🇴➺ _.16vs16_
┃🇰🇬➺ _.20vs20_
┃🇦🇶➺ _.clasificatoria_
┃🇦🇶➺ _.duelo_
┃🇦🇶➺ _.duo_
┃🇦🇶➺ _.compe_
┃👹➺ _.pvpm1014 *@tag*_
┃👹➺ _.pvpsmg  *@tag*_
*╰━━━━━━━━━━━━⬣*

*╭━━━[ 𝐶𝐴𝑅𝑇𝐴𝑆  💌]━━⬣*
┃ ¡𝐷𝑒𝑑𝑖𝑐𝑎𝑙𝑒 𝑢𝑛 𝑚𝑒𝑛𝑠𝑎𝑗𝑒
┃  𝑎 𝑒𝑠𝑎 𝑝𝑒𝑟𝑠𝑜𝑛𝑎 𝑒𝑠𝑝𝑒𝑐𝑖𝑎𝑙!
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃💌➺ _.animo *@tag*_
┃💌➺ _.carta *@tag*_
┃💌➺ _.carta2 *@tag*_
┃💌➺ _.carta3 *@tag*_
┃💌➺ _.confesion *@tag*_
┃💌➺ _.buenosdias *@tag*_
┃💌➺ _.buenastardes *@tag*_
┃💌➺ _.buenasnoches *@tag*_
┃💌➺ _.buenamadrugada *@tag*_
┃💌➺ _.pervertido *@tag*_  
┃💌➺ _.pervertida *@tag*_
*╰━━━━━━━━━━━━⬣*

*╭━〔 𝐽𝑈𝐸𝐺𝑂𝑆 & 𝑀𝑈𝐿𝑇𝐼𝐽𝑈𝐸𝐺𝑂𝑆  〕━⬣*
┃📍➺ _.pvp *Sala 1*_
┃📍➺ _.top *palabras random*_
┃📍➺ _.topalcoholicos_
┃📍➺ _.topcachudos_
┃📍➺ _.topchichonas_
┃📍➺ _.topjugadores_
┃📍➺ _.topinfieles_
┃📍➺ _.topfieles_
┃📍➺ _.topculonas_
┃📍➺ _.topbinarios_
┃📍➺ _.topsidosos_
┃📍➺ _.topm1014_
┃📍➺ _topump_
┃📍➺ _.topcompe_
┃📍➺ _.topmapa_
┃📍➺ _.topfeos_
┃📍➺ _.mates | matemáticas | math_
┃📍➺ _.deltictactoe | delttt_
┃📍➺ _.topgays_
┃📍➺ _.topotakus_
┃📍➺ _.toppajer@s_
┃📍➺ _.topput@s_
┃📍➺ _.topintegrantes_
┃📍➺ _.toplagrasa_
┃📍➺ _.toppanafrescos_
┃📍➺ _.topshiposters_
┃📍➺ _.toplindos_
┃📍➺ _.topfamosos_
┃📍➺ _.culona *nombre : @tag*_
┃📍➺ _.tetona *nombre : @tag*_
┃📍➺ _.cogible *nombre : @tag*_
┃📍➺ _.gay | gay *@tag*_
┃📍➺ _.gay2 *nombre : @tag*_
┃📍➺ _.lesbiana *nombre : @tag*_
┃📍➺ _.manca *nombre : @tag*_
┃📍➺ _.manco *nombre : @tag*_
┃📍➺ _.pajero *nombre : @tag*_
┃📍➺ _.pajera *nombre : @tag*_
┃📍➺ _.puto *nombre : @tag*_
┃📍➺ _.puta *nombre : @tag*_
┃📍➺ _.rata *nombre : @tag*_
┃📍➺ _.doxear *nombre : @tag*_
┃📍➺ _.doxxeame_
┃📍➺ _.pregunta *texto*_
┃📍➺ _.apostar | slot *cantidad*_
┃📍➺ _.piropo_
┃📍➺ _.frase_
┃📍➺ _.dado_
┃📍➺ _.verdad_
┃📍➺ _.reto_
┃📍➺ _.fantasmas_
*╰━━━━━━━━━━━━⬣*

*╭━[ 𝐷𝐸𝑆𝐶𝐴𝑅𝐺𝐴𝑆 𝐷𝐸 𝐶𝑂𝑁𝑇𝐸𝑁𝐼𝐷𝑂𝑆 ]━⬣*
┃🚀➺ _.imagen | image *texto*_
┃🚀➺ _.pinterest | dlpinterest *texto*_
┃🚀➺ _.wallpaper|wp *texto*_
┃🚀➺ _.play | Nombre de la canción*_
┃🚀➺ _.play.1 *texto o link*_
┃🚀➺ _.play.2 *texto o link*_ 
┃🚀➺ _.ytmp3 | yta *link*_
┃🚀➺ _.ytmp4 | ytv *link*_
┃🚀➺ _.pdocaudio | ytadoc *link*_
┃🚀➺ _.pdocvieo | ytvdoc *link*_
┃🚀➺ _.tw |twdl | twitter *link*_
┃🚀➺ _.facebook | fb *link*_
┃🚀➺ _.instagram *link video o imagen*_
┃🚀➺ _.verig | igstalk *usuario(a)*_
┃🚀➺ _.ighistoria | igstory *usuario(a)*_
┃🚀➺ _.tiktok *link*_
┃🚀➺ _.tiktokfoto | tiktokphoto *usuario(a)*_
┃🚀➺ _.vertiktok | tiktokstalk *usuario(a)*_
┃🚀➺ _.mediafire | dlmediafire *link*_
┃🚀➺ _.clima *país ciudad*_
┃🚀➺ _.consejo_
┃🚀➺ _.morse codificar *texto*_
┃🚀➺ _.morse decodificar *morse*_
┃🚀➺ _.fraseromantica_
┃🚀➺ _.historia_
*╰━━━━━━━━━━━━⬣*

*╭━[ 𝑆𝑇𝐼𝐶𝐾𝐸𝑅𝑆 & 𝐹𝐼𝐿𝑇𝑅𝑂𝑆  ]━⬣*
┃ *Realiza stickers o crea*
┃ *stickers con filtros!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🎐 _.sticker | s *imagen o video*_
┃🎐 _.sticker | s *url de tipo jpg*_
┃🎐 _.emojimix *😺+😆*_
┃🎐 _.scircle | círculo *imagen*_
┃🎐 _.semoji | emoji *tipo emoji*_
┃🎐 _.attp *texto*_
┃🎐 _.attp2 *texto*_
┃🎐 _.ttp *texto*_
┃🎐 _.ttp2 *texto*_
┃🎐 _.ttp3 *texto*_
┃🎐 _.ttp4 *texto*_
┃🎐 _.ttp5 *texto*_
┃🎐 _.ttp6 *texto*_
┃🎐 _.dado_
┃🎐 _.stickermarker *efecto : responder a imagen*_
┃🎐 _.stickerfilter *efecto : responder a imagen*_
┃🎐 _.cs *:* cs2_
*╰━━━━━━━━━━━━⬣*

*╭━[𝑀𝑂𝐷𝐼𝐹𝐼𝐶𝐴𝑅 𝑆𝑇𝐼𝐶𝐾𝐸𝑅𝑆]━⬣*
┃ *Personaliza la información del Sticker!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃💡 _.wm *packname|author*_
┃💡 _.wm *texto1|texto2*_
*╰━━━━━━━━━━━━⬣*

*╭━[ 𝑆𝑇𝐼𝐶𝐾𝐸𝑅𝑆 𝐷𝐼𝑁𝐴𝑀𝐼𝐶𝑂𝑆 ]━⬣*
┃ *Realiza acciones con Stickers*
┃ *Etiquetando a alguien!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃⛱️ _.palmaditas | pat *@tag*_
┃⛱️ _.bofetada | slap *@tag*_
┃⛱️ _.golpear *@tag*_
┃⛱️ _.besar | kiss *@tag*_
┃⛱️ _.alimentar | food *@tag*_
*╰━━━━━━━━━━━━⬣*

*╭━[ 𝐶𝑂𝑁𝑉𝐸𝑅𝑇𝐼𝐷𝑂𝑅𝐸𝑆]━⬣*
┃ *Convierte sticker en imagen!!*
┃ *Crea enlace de archivos!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🛰️➺ _.toimg | img | jpg *sticker*_
┃🛰️➺ _.tomp3 | mp3 *video o nota de voz*_
┃🛰️➺ _.tovn | vn *video o audio*_
┃🛰️➺ _.tovideo *audio*_
┃🛰️➺ _.tourl *video, imagen*_
┃🛰️➺ _.toenlace  *video, imagen o audio*_
┃🛰️➺ _.tts es *texto*_
*╰━━━━━━━━━━━━⬣*

*╭━━━[ 𝐸𝐹𝐸𝐶𝑇𝑂𝑆 ]━━⬣*
┃⛺ _.simpcard *@tag*_
┃⛺ _.hornycard *@tag*_
┃⛺ _.lolice *@tag*_
┃⛺ _.ytcomment *texto*_
┃⛺ _.itssostupid_
┃⛺ _.pixelar_
┃⛺ _.blur_
*╰━━━━━━━━━━━━⬣*

*╭━━━[ 𝐿𝑂𝐺𝑂𝑆 🔆 ]━━⬣*
┃ *Crea Logos o personaliza*
┃ *la información del Logo!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🌅 _.menulogos2_
*╰━━━━━━━━━━━━⬣*

*╰━━━━━━━━━━━━⬣*
┃ *Conversar con 𝐸𝐿𝐼𝑇𝐸 𝐵𝑂𝑇!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🪄➺ _.chatgpt *pregunta*_
┃🪄➺ _.chatgptvoz *pregunta*_
┃🪄➺ _.simi | okgoogle *texto*_
┃🪄➺ _.bot *texto*_
┃🪄➺ _.ia *Pregunta*_
┃🪄➺ _.pregunta *texto*_
┃🪄➺ _.simsimi | bixby *texto*_
*╰━━━━━━━━━━━━⬣*

*╭━[ 𝑀𝑂𝐷𝐼𝐹𝐼𝐶𝐴𝑅 𝐴𝑈𝐷𝐼𝑂 🧰 ]━⬣*
┃ *Realiza Modificaciones*
┃ *al Audio o Nota de Voz!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🧰 _.bass_
┃🧰 _.blown_
┃🧰 _.deep_
┃🧰 _.earrape_
┃🧰 _.fast_
┃🧰 _.fat_
┃🧰 _.nightcore_
┃🧰 _.reverse_
┃🧰 _.robot_
┃🧰 _.slow_
┃🧰 _.smooth_
┃🧰 _.tupai_
*╰━━━━━━━━━━━━⬣*

*╭━━━[ 𝐴𝑈𝐷𝐼𝑂𝑆🔊 ]━━⬣*
┃ *Visita el Menú de Audios!!*
┃ *Disfruta de una Gran Variedad*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➫🔊 _.audios_
*╰━━━━━━━━━━━━⬣*

*╭━[ 𝐶𝐻𝐴𝑇 𝐴𝑁𝑂𝑁𝐼𝑀𝑂 ]━⬣*
┃ *¡Escribe con Alguien* 
┃ *de forma Anónima!* 
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃👤➺ _.chatanonimo | anonimochat_
┃👤➺ _.anonimoch_
┃👤➺ _.start_
┃👤➺ _.next_
┃👤➺ _.leave_
*╰━━━━━━━━━━━━⬣*

*╭━[ 𝑉𝑂𝑇𝐴𝐶𝐼𝑂𝑁𝐸𝑆 𝐸𝑁 𝐺𝑅𝑈𝑃𝑂📧 ]━⬣*
┃ *Ahora puedes hacer*
┃ *Votaciones en Grupos!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃📧➺ _.crearvoto | startvoto *texto*_
┃📧➺ _.sivotar | upvote_
┃📧➺ _.novotar | devote_
┃📧➺ _.vervotos | cekvoto_
┃📧➺ _.delvoto | deletevoto_
*╰━━━━━━━━━━━━⬣*

*╭━━[ 𝐵𝑈𝑆𝑄𝑈𝐸𝐷𝐴🔍 ]━━⬣*
┃ *Busca lo que quieres con ELITE BOT!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🔍➺ _.cuevana *nombre de la peli*_
┃🔍➺ _.mangainfo *texto*_
┃🔍➺ _.google *texto*_
┃🔍➺ _.letra | lirik *texto*_
┃🔍➺ _.ytsearch | yts *texto*_
┃🔍➺ _.wiki | wikipedia *texto*_
*╰━━━━━━━━━━━━⬣*

*╭━━[ 𝐻𝐸𝑅𝑅𝐴𝑀𝐼𝐸𝑁𝑇𝐴𝑆 🛠️ ]━━⬣*
┃🛠️ _.afk *motivo*_
┃🛠️ _.acortar *url*_
┃🛠️ _.calc *operacion math*_
┃🛠️ _.del *respondre a mensaje del Bot*_
┃🛠️ _.qrcode *texto*_
┃🛠️ _.readmore *texto1|texto2*_
┃🛠️ _.spamwa *numero|texto|cantidad*_
┃🛠️ _.styletext *texto*_
┃🛠️ _.traducir *texto*_
┃🛠️➺ _.morse codificar *texto*_
┃🛠️➺ _.morse decodificar *morse*_
┃🛠️➺ _.encuesta | poll *Motivo*_
┃🛠️➺ _.horario_
*╰━━━━━━━━━━━━⬣*

*╭━━━[ 𝐴𝐽𝑈𝑆𝑇𝐸𝑆 𝐷𝐸𝐿 𝐺𝑅𝑈𝑃𝑂 ]━━━⬣*
┃ *Configura si eres Propietario(a) y/o*
┃ *Admin!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃⚙️ _.on *:* off *bienvenida | welcome*_
┃⚙️ _.on *:* off *avisos | detect*_
┃⚙️ _.on *:* off *autonivel | autolevelup*_
┃⚙️ _.on *:* off *restringir | restrict*_
┃⚙️ _.on *:* off *antillamar | anticall*_
┃⚙️ _.on *:* off *publico | public*_
┃⚙️ _.on *:* off *autovisto | autoread*_
┃⚙️ _.on *:* off *temporal*_
┃⚙️ _.on *:* off *stickers*_
┃⚙️ _.on *:* off *autosticker*_
┃⚙️ _.on *:* off *reacciones | reaction*_
┃⚙️ _.on *:* off *audios*_
┃⚙️ _.on *:* off *modocaliente | modohorny*_
┃⚙️ _.on *:* off *antitoxicos | antitoxic*_
┃⚙️ _.on *:* off *antiver | antiviewonce*_
┃⚙️ _.on *:* off *antieliminar | antidelete*_
┃⚙️ _.on *:* off *antinternacional | antifake*_
┃⚙️ _.on *:* off *antienlace | antilink*_
┃⚙️ _.on *:* off *antienlace2 | antilink2*_
┃⚙️ _.on *:* off *antitiktok | antitk*_
┃⚙️ _.on *:* off *antiyoutube | antiyt*_
┃⚙️ _.on *:* off *antitelegram | antitel*_
┃⚙️ _.on *:* off *antifacebook | antifb*_
┃⚙️ _.on *:* off *antinstagram | antig*_
┃⚙️ _.on *:* off *antitwitter | antitw*_
┃⚙️ _.on *:* off *soloprivados | pconly*_
┃⚙️ _.on *:* off *sologrupos | gconly*_
*╰━━━━━━━━━━━━⬣*

*╭━[ 𝐶𝑂𝑁𝐹𝐼𝐺𝑈𝑅𝐴𝐶𝐼𝑂́𝑁 𝐷𝐸𝐿 𝐺𝑅𝑈𝑃𝑂 ]━⬣*
┃ *Mejora tú Grupo con ELITE BOT!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🌐➺ _.rip *@tag*_
┃🌐➺ _.add *numero*_
┃🌐➺ _.kicknum *codigo país*_
┃🌐➺ _.ban *@tag*_
┃🌐➺ _.grupo *abrir : cerrar*_
┃🌐➺ _.group *open : close*_
┃🌐➺ _.daradmin | promote *@tag*_
┃🌐➺ _.quitar | demote *@tag*_
┃🌐➺ _.banchat_
┃🌐➺ _.unbanchat_
┃🌐➺ _.banuser *@tag*_
┃🌐➺ _.unbanuser *@tag*_
┃🌐➺ _.listbanuser_
┃🌐➺ _.admins *texto*_
┃🌐➺ _.invocar *texto*_
┃🌐➺ _.todos *texto*_
┃🌐➺ _.notify *texto*_
┃🌐➺ _.infogrupo | infogroup_
┃🌐➺ _.grupotiempo | grouptime *Cantidad*_
┃🌐➺ _.advertencia *@tag*_
┃🌐➺ _.deladvertencia *@tag*_
┃🌐➺ _.delwarn *@tag*_
┃🌐➺ _.crearvoto | startvoto *texto*_
┃🌐➺ _.sivotar | upvote_
┃🌐➺ _.novotar | devote_
┃🌐➺ _.vervotos | cekvoto_
┃🌐➺ _.delvoto | deletevoto_
┃🌐➺ _.enlace | link_
┃🌐➺ _.newnombre | nuevonombre *texto*_
┃🌐➺ _.newdesc | descripcion *texto*_
┃🌐➺ _.setwelcome | bienvenida *texto*_
┃🌐➺ _.setbye | despedida *texto*_
┃🌐➺ _.nuevoenlace | resetlink_
┃🌐➺ _.on_
┃🌐➺ _.off_
*╰━━━━━━━━━━━━⬣*

*╭━[ 𝑅𝐴𝑀𝐷𝑂𝑁 𝐴𝑁𝐼𝑀𝐸🧩 ]━⬣*
┃🧩 _.chica_
┃🧩 _.chico_
┃🧩 _.cristianoronaldo_
┃🧩 _.messi_
┃🧩 _.meme_
┃🧩 _.meme2_
┃🧩 _.itzy_
┃🧩 _.blackpink_
┃🧩 _.kpop *blackpink : exo : bts*_
┃🧩 _.lolivid_
┃🧩 _.loli_
┃🧩 _.navidad_
┃🧩 _.ppcouple_
┃🧩 _.neko_
┃🧩 _.waifu_
┃🧩 _.akira_
┃🧩 _.akiyama_
┃🧩 _.anna_
┃🧩 _.asuna_
┃🧩 _.ayuzawa_
┃🧩 _.boruto_
┃🧩 _.chiho_
┃🧩 _.chitoge_
┃🧩 _.deidara_
┃🧩 _.erza_
┃🧩 _.elaina_
┃🧩 _.eba_
┃🧩 _.emilia_
┃🧩 _.hestia_
┃🧩 _.hinata_
┃🧩 _.inori_
┃🧩 _.isuzu_
┃🧩 _.itachi_
┃🧩 _.itori_
┃🧩 _.kaga_
┃🧩 _.kagura_
┃🧩 _.kaori_
┃🧩 _.keneki_
┃🧩 _.kotori_
┃🧩 _.kurumi_
┃🧩 _.madara_
┃🧩 _.mikasa_
┃🧩 _.miku_
┃🧩 _.minato_
┃🧩 _.naruto_
┃🧩 _.nezuko_
┃🧩 _.sagiri_
┃🧩 _.sasuke_
┃🧩 _.sakura_
┃🧩 _.cosplay_
*╰━━━━━━━━━━━━⬣*

*╭━[ 𝑀𝐸𝑁𝑈 𝑃𝐴𝑅𝐴 𝑃𝑅𝑂𝑃𝐼𝐸𝑇𝐴𝑅𝐼𝑂]━⬣*
┃ *Comandos solo para Propietario/a!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃💎 _.creador_
┃💎 _.estado_
┃💎 _.infogrupo_
┃💎 _.listagrupos_
┃💎 _.join *enlace*_
┃💎 _.unete *enlace*_
┃💎➺ _.dardiamantes *cantidad*_
┃💎➺ _.darxp *cantidad*_
┃💎➺ _.dargatacoins *cantidad*_
┃💎➺ _.addprem | userpremium *@tag* *cantidad*_
┃💎➺ _.addprem2 | userpremium2 *@tag* *cantidad*_
┃💎➺ _.addprem3 | userpremium3 *@tag* *cantidad*_
┃💎➺ _.addprem4 | userpremium4 *@tag* *cantidad*_
┃💎➺ _.idioma | language_
┃💎➺ _.cajafuerte_
┃💎➺ _.comunicar | broadcastall | bc *texto*_
┃💎➺ _.broadcastchats | bcc *texto*_
┃💎➺ _.comunicarpv *texto*_
┃💎➺ _.broadcastgc *texto*_
┃💎➺ _.comunicargrupos *texto*_
┃💎➺ _.borrartmp | cleartmp_
┃💎➺ _.delexp *@tag*_
┃💎➺ _.delgatacoins *@tag*_
┃💎➺ _.deldiamantes *@tag*_
┃💎➺ _.reiniciar | restart_
┃💎➺ _.ctualizar | update_
┃💎➺ _.addprem | +prem *@tag*_
┃💎➺ _.delprem | -prem *@tag*_
┃💎➺ _.listapremium | listprem_
┃💎➺ _.añadirdiamantes *@tag cantidad*_
┃💎➺ _.añadirxp *@tag cantidad*_
┃💎➺ _.añadirgatacoins *@tag cantidad*_
*╰━━━━━━━━━━━━⬣*`.trim()

 
await conn.sendFile(m.chat, gataMenu3.getRandom(), 'gata.mp4', menu, fkontak)
	
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}

handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|kika|ayuda|commands|commandos|menucompleto|allmenu|allm|m|\?)$/i
//handler.register = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
