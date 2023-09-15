import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'id';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `ʜᴀɪ ${taguser}

sᴀʏᴀ ᴀᴅᴀʟᴀʜ sɪsᴛᴇᴍ ᴏᴛᴏᴍᴀᴛɪs (ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ) ʏᴀɴɢ ᴅᴀᴘᴀᴛ ᴍᴇᴍʙᴀɴᴛᴜ ᴜɴᴛᴜᴋ ᴍᴇʟᴀᴋᴜᴋᴀɴ sᴇsᴜᴀᴛᴜ, ᴍᴇɴᴄᴀʀɪ ᴅᴀɴ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ᴅᴀᴛᴀ / ɪɴғᴏʀᴍᴀsɪ ʜᴀɴʏᴀ ᴍᴇʟᴀʟᴜɪ ᴡʜᴀᴛsᴀᴘᴘ.

ᴊɪᴋᴀ ᴍᴇɴᴇᴍᴜᴋᴀɴ ᴇʀʀᴏʀ ᴀᴛᴀᴜ ɪɴɢɪɴ ᴍᴇɴᴊᴀᴅɪ ᴘᴇɴɢɢᴜɴᴀ ᴘʀᴇᴍɪᴜᴍ/ᴠɪᴘ
ʙɪsᴀ ᴄʜᴀᴛ ᴏᴡɴᴇʀ ʙᴏᴛ.

${readMore}
╔══════════════════════════╗
 ╸╸╸╸╸╸╸╸╸╸ *ᴀʟʟ ᴍᴇɴᴜ*   ╸╸╸╸╸╸╸╸╸╸
╚══════════════════════════╝

╔══════════════════════⧐
╠══⧐ *ᴏᴡɴᴇʀ ᴍᴇɴᴜ*
║.sᴇᴛᴘʀᴇғɪx
║.ʀᴇsᴇᴛᴘʀᴇғɪx
║.ᴅᴇsᴀᴄᴛɪᴠᴀʀᴡᴀ
║.ᴀᴜᴛᴏᴀᴅᴍɪɴ
║.ᴄɪᴛᴇʀ
║.ʟᴇᴀᴠᴇɢᴄ
║.sᴀғᴇ
║.ʙʟᴏᴄᴋʟɪsᴛ
║.ʙʟᴏᴄᴋ
║.ᴜɴʙʟᴏᴄᴋ
║.ᴇɴᴀʙʟᴇ/ᴅɪsᴀʙʟᴇ
║.ᴍsɢ
║.ʙᴀɴᴄʜᴀᴛ
║.ᴜɴʙᴀɴᴄʜᴀᴛ
║.ʀᴇsᴇᴛᴜsᴇʀ
║.ʙᴀɴᴜsᴇʀ
║.ᴜɴʙᴀɴᴜsᴇʀ
║.ɢɪᴠᴇᴅᴍ
║.ᴀᴅᴅᴇxᴘ
║.ʙᴄ
║.ʙᴄᴄʜᴀᴛ
║.ʙᴄɢᴄ
║.ʙᴄʙᴏᴛ
║.ᴄʟᴇᴀʀᴛᴍᴘ
║.ʀᴇsᴛᴀʀᴛ
║.ᴜᴘᴅᴀᴛᴇ
║.ʙᴀɴʟɪsᴛ
║.ᴀᴅᴅᴘʀᴇᴍ 1/2/3/4
║.ᴅᴇʟᴘʀᴇᴍ
║.ʟɪsᴛᴄᴍᴅ
║.ᴀᴅᴅᴄᴍᴅ
║.ᴅᴇʟᴄᴍᴅ
║.sᴇᴛᴘᴘʙᴏᴛ
║.sᴀᴠᴇɪᴍᴀɢᴇ
║.ᴠɪᴇᴡɪᴍᴀɢᴇ
╚══════════════════════⧐

╔══════════════════════⧐
╠══⧐ *ɢᴀᴍᴇ ᴍᴇɴᴜ*
║.ғᴀᴋᴇ
║.ᴘᴘᴛ
║.ᴍᴛᴋ
║.ᴄᴇᴋɢᴀʏ
║.ʟᴇsʙɪᴀɴᴀ
║.sᴀɴɢᴇ
║.ʟᴏᴠᴇ
║.ʀᴀᴛᴀ
║.ᴅᴏxᴇᴀʀ
║.ᴀᴘᴀᴋᴀʜ
║.sᴜɪᴛᴘᴠᴘ
║.sᴏᴀʟʀᴀɴᴅᴏᴍ
║.ᴛᴀɴᴛᴀɴɢᴀɴ
║.ᴛᴇʙᴀᴋʟᴀɢᴜ
║.ᴄᴀʀɪᴋᴀᴛᴀ
╚══════════════════════⧐

╔══════════════════════⧐
╠══⧐ *ʀᴘɢ ᴍᴇɴᴜ*
║.ᴀᴅᴠᴇɴᴛᴜʀᴇ
║.ʜᴜɴᴛ
║.ᴄʜᴇsᴛ
║.ʙᴀʟᴀɴᴄᴇ
║.ᴄʟᴀɪᴍ
║.ʜᴇᴀʟ
║.ʟʙ
║.ʟᴇᴠᴇʟᴜᴘ
║.ᴍʏɴs
║.ᴘʀᴏғɪʟᴇ
║.ᴡᴏʀᴋ
║.ᴍɪɴɪɴɢ
║.ʙᴜʏ
║.ʙᴜʏᴀʟʟ
║.ʀᴇɢɪsᴛᴇʀ
║.ʀᴏʙᴇʀ
║.ᴛʀᴀɴsғᴇʀ
║.ᴜɴʀᴇɢ
╚══════════════════════⧐

╔══════════════════════⧐
╠══⧐ *ᴛᴏᴏʟs ᴍᴇɴᴜ*
║.ᴀɪ
║.ᴀɪᴠᴏɪᴄᴇ
║.ᴅᴇʟᴄʜᴀᴛɢᴘᴛ
║.ᴅᴇʟʟ-ᴇ
║.sᴘᴀᴍᴡᴀ
║.sɪᴢᴇ
║.ᴄᴜᴀᴄᴀ
║.ʀᴇᴀᴅᴠɪᴇᴡᴏɴᴄᴇ
║.sᴜʀᴠᴇʏ
║.ᴀғᴋ
║.ᴏᴄʀ
║.ʜᴅ
║.sʜᴏʀᴛᴇɴ
║.ᴄᴀʟᴄ (ᴄᴀʟᴄᴜʟᴀᴛɪᴏɴ)
║.ᴅᴇʟ
║.ᴡʜᴀᴛᴍᴜsɪᴄ
║.ʀᴇᴀᴅǫʀ
║.ǫʀᴄᴏᴅᴇ
║.ʀᴇᴀᴅᴍᴏʀᴇ
║.sᴛʏʟᴇᴛᴇxᴛ
║.ᴛʀᴀɴsʟᴀᴛᴇ
║.ɴᴏᴡᴀ
║.ᴛɪᴍᴇᴛᴀʙʟᴇ
╚══════════════════════⧐

╔══════════════════════⧐
╠══⧐ *ᴠᴏɪᴄᴇ ᴄʜᴀɴɢᴇʀ*
║.ʙᴀss
║.ʙʟᴏᴡɴ
║.ᴅᴇᴇᴘ
║.ғᴀsᴛ
║.ᴇᴀʀʀᴀᴘᴇ
║.ғᴀᴛ
║.ɴɪɢʜᴛᴄᴏʀᴇ
║.ʀᴇᴠᴇʀsᴇ
║.ʀᴏʙᴏᴛ
║.sʟᴏᴡ
║.sᴍᴏᴏᴛʜ
║.ᴛᴜᴘᴀɪ
╚══════════════════════⧐

╔══════════════════════⧐
╠══⧐ *ᴄʜᴀᴛ ᴀɴᴏɴɪᴍ*
║.sᴛᴀʀᴛ
║.ɴᴇxᴛ
║.ʟᴇᴀᴠᴇ
╚══════════════════════⧐

╔══════════════════════⧐
╠══⧐ *ᴀᴜᴅɪᴏs ᴍᴇɴᴜ*
║.ᴍᴇɴᴜᴀᴜᴅɪᴏs
╚══════════════════════⧐

╔══════════════════════⧐
╠══⧐ *ᴍᴇɴᴜ 18+*
║.sɪsᴜxғᴠsᴏsᴠᴢʜᴛᴏᴀʙsᴛᴏᴇᴠᴛɪsʙᴅ
╚══════════════════════⧐

╔══════════════════════⧐
╠══⧐ *ʀᴀɴᴅᴏᴍ ᴍᴇɴᴜ*
║.ᴋᴘᴏᴘ
║.ᴄʀɪsᴛɪᴀɴᴏʀᴏɴᴀʟᴅᴏ
║.ᴍᴇssɪ
║.ᴄᴀᴛ
║.ᴅᴏɢ
║.ᴍᴇᴍᴇ
║.ɪᴛᴢʏ
║.ʙʟᴀᴄᴋᴘɪɴᴋ
║.ɴᴀᴛᴀʟ
║.ᴍᴏɴᴛᴀɪɴ
║.ᴘᴜʙɢ
║.ᴡᴘɢᴀᴍɪɴɢ
║.ᴡᴘᴀᴇsᴛʜᴇᴛɪᴄ
║.ᴡᴘᴀᴇsᴛʜᴇᴛɪᴄ2
║.ᴡᴘʀᴀɴᴅᴏᴍ
║.ɪᴍɢʀᴀɴᴅᴏᴍ
║.ʀᴀɴᴅᴏᴍᴄᴀʀᴛᴏᴏɴ
║.ᴄʏʙᴇʀsᴘᴀᴄᴇ
║.ᴛᴇᴄʜɴᴏʟᴏɢʏ
║.ᴅᴏʀᴀᴇᴍᴏɴ
║.ʜᴀᴄᴋᴇʀ
║.ᴘʟᴀɴᴇᴛ
║.ʀᴀɴᴅᴏᴍᴘʀᴏғɪʟ
╚══════════════════════⧐

╔══════════════════════⧐
╠══⧐ *ᴍᴇɴᴜ ᴀɴɪᴍᴇ*
║.ᴍᴇɴᴜᴀɴɪᴍᴇs
╚══════════════════════⧐

╔══════════════════════⧐
╠══⧐ *ᴋᴀᴛᴀ ʀᴀɴᴅᴏᴍ*
║.ᴋᴀᴛᴀ-ᴘᴜᴊɪᴀɴ
║.ᴋᴀᴛᴀ-ɴᴀsᴇʜᴀᴛ
║.ᴋᴀᴛᴀ-ʙᴜᴄɪɴ
╚══════════════════════⧐

╔══════════════════════⧐
╠══⧐ *ᴄᴏɴᴠᴇʀᴛ ᴍᴇɴᴜ*
║.ᴛᴏᴀɴɪᴍᴇ
║.ᴛᴏɢɪғᴀᴜᴅ
║.ᴛᴏɪᴍɢ
║.ᴛᴏᴍᴘ3
║.ᴛᴏᴠɴ
║.ᴛᴏᴠɪᴅᴇᴏ
║.ᴛᴏᴜʀʟ
║.ᴛᴛs
╚══════════════════════⧐

╔══════════════════════⧐
╠══⧐ *ɢᴏᴜᴘs ᴍᴇɴᴜ*
║.ᴀᴅᴅ
║.ᴋɪᴄᴋ
║.ᴋɪᴄᴋ2
║.ʟɪsᴛɴᴜᴍ
║.ᴋɪᴄᴋɴᴜᴍ
║.ɢᴄ
║.ɢʀᴏᴜᴘᴛɪᴍᴇ
║.ᴘʀᴏᴍᴏᴛᴇ
║.ᴅᴇᴍᴏᴛᴇ
║.ɪɴғᴏɢᴄ
║.ʀᴇsᴇᴛʟɪɴᴋ
║.ʟɪɴᴋ
║.sᴇᴛɴᴀᴍᴇ
║.sᴇᴛᴅᴇsᴄ
║.sᴇᴛᴡᴇʟᴄᴏᴍᴇ
║.sᴇᴛʙʏᴇ
║.ʜɪᴅᴇᴛᴀɢ
║.ᴡᴀʀɴ
║.ᴜɴᴡᴀʀɴ
║.ʟɪsᴛᴡᴀʀɴ
║.ɢʜᴏsᴛs
║.ᴜɴʟᴏᴄᴋ
║.sᴇᴛᴘᴘ
╚══════════════════════⧐

╔══════════════════════⧐
╠══⧐ *sᴇᴀʀᴄʜɪɴɢ ᴍᴇɴᴜ*
║.ɢɪᴛʜᴜʙsᴇᴀʀᴄʜ
║.ᴘᴇʟɪsᴘʟᴜs
║.ᴍᴏᴅᴀᴘᴋ
║.xɴxxsᴇᴀʀᴄʜ
║.ᴀɴɪᴍᴇɪɴғᴏ
║.ɢᴏᴏɢʟᴇ
║.ʟᴇᴛʀᴀ
║.ᴡɪᴋɪᴘᴇᴅɪᴀ
║.ʏᴛsᴇᴀʀᴄʜ
║.ᴘʟᴀʏsᴛᴏʀᴇ
╚══════════════════════⧐

╔══════════════════════⧐
╠══⧐ *ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ*
║.ɪɴsᴛᴀɢʀᴀᴍ <ʟɪɴᴋ>
║.ɪɢsᴛᴏʀʏ <ᴜsᴇʀɴᴀᴍᴇ>
║.ᴛɪᴋᴛᴏᴋ <ʟɪɴᴋ>
║.ᴛɪᴋᴛᴏᴋɪᴍɢ <ʟɪɴᴋ>
║.ᴘᴘᴛɪᴋᴛᴏᴋ <ᴜsᴇʀɴᴀᴍᴇ>
║.ᴍᴇᴅɪᴀғɪʀᴇ <ʟɪɴᴋ>
║.ɢɪᴛᴄʟᴏɴᴇ <ʟɪɴᴋ>
║.xᴠɪᴅᴇᴏsᴅʟ <ʟɪɴᴋ>
║.xɴxxᴅʟ <ʟɪɴᴋ>
║.ᴛᴡɪᴛᴛᴇʀ <ʟɪɴᴋ>
║.ғʙ <ʟɪɴᴋ>
║.ᴅᴀᴘᴋ2 <ʟɪɴᴋ>
║.ɢᴅʀɪᴠᴇ <ʟɪɴᴋ>
║.sᴛɪᴄᴋᴇʀᴘᴀᴄᴋ <ʟɪɴᴋ>
║.ɪᴍᴀɢᴇɴ <ᴛᴇxᴛ>
║.ᴘɪɴᴛᴇʀᴇsᴛ <ᴛᴇxᴛ>
║.sᴘᴏᴛɪғʏ <ᴛᴇxᴛ/ʟɪɴᴋ>
║.ᴡᴀʟʟᴘᴀᴘᴇʀ <ᴛᴇxᴛ>
║.ʀɪɴɢᴛᴏɴᴇ <ᴛᴇxᴛ>
║.sᴏᴜɴᴅᴄʟᴏᴜᴅ <ᴛᴇxᴛ>
╚══════════════════════⧐

╔══════════════════════⧐
╠══⧐ *ʏᴏᴜᴛᴜʙᴇ ᴍᴇɴᴜ*
║.ʏᴛsʜᴏʀᴛ <ʟɪɴᴋ>
║.ʏᴛᴍᴘ3 <ʟɪɴᴋ>
║.ʏᴛᴍᴘ4 <ʟɪɴᴋ>
║.ᴘʟᴀʏ <ʟɪɴᴋ/ᴛᴇxᴛ>
║.ᴘʟᴀʏ2 <ʟɪɴᴋ/ᴛᴇxᴛ>
║.ᴘʟᴀʏ.1 <ʟɪɴᴋ/ᴛᴇxᴛ>
║.ᴘʟᴀʏ.2 <ʟɪɴᴋ/ᴛᴇxᴛ>
║.ᴘʟᴀʏᴅᴏᴄ <ʟɪɴᴋ/ᴛᴇxᴛ>
║.ᴘʟᴀʏᴅᴏᴄ2 <ʟɪɴᴋ/ᴛᴇxᴛ>
║.ᴘʟᴀʏʟɪsᴛ <ᴛᴇxᴛ>
╚═════════════════════⧐

╔═════════════════════⧐
╠══⧐ *sᴛᴀʟᴋᴇʀ ᴍᴇɴᴜ*
║.ᴛᴛsᴛᴀʟᴋ <ᴜsᴇʀɴᴀᴍᴇ>
║.ɪɢsᴛᴀʟᴋ <ᴜsᴇʀɴᴀᴍᴇ>
╚═════════════════════⧐

╔═════════════════════⧐
╠══⧐ *sᴛɪᴄᴋᴇʀ ᴍᴇɴᴜ*
║.s <ʀᴇᴘʟʏ ᴍᴇᴅɪᴀ> <ʟɪɴᴋ>
║.s2 <ʀᴇᴘʟʏ ᴍᴇᴅɪᴀ>
║.sᴛɪᴄᴋᴇʀ <ʀᴇᴘʟʏ ᴍᴇᴅɪᴀ>
║.sᴛɪᴄᴋᴇʀ2 <ʀᴇᴘʟʏ ᴍᴇᴅɪᴀ>
║.ᴇᴍᴏᴊɪᴍɪx <🥶+😒>
║.sʀᴇᴍᴏᴠᴇʙɢ <ʀᴇᴘʟʏ ᴍᴇᴅɪᴀ>
║.sᴄɪʀᴄʟᴇ <ʀᴇᴘʟʏ ᴍᴇᴅɪᴀ>
║.sᴇᴍᴏᴊɪ <🗿>
║.ᴏ̨ᴄ <ᴛᴇxᴛ>
║.ᴀᴛᴛᴘ <ᴛᴇxᴛ>
║.ᴀᴛᴛᴘ2 <ᴛᴇxᴛ>
║.ᴀᴛᴛᴘ3 <ᴛᴇxᴛ>
║.ᴛᴛᴘ <ᴛᴇxᴛ>
║.ᴛᴛᴘ2 <ᴛᴇxᴛ>
║.ᴛᴛᴘ3 <ᴛᴇxᴛ>
║.ᴛᴛᴘ4 <ᴛᴇxᴛ>
║.ᴛᴛᴘ5 <ᴛᴇxᴛ>
║.ᴘᴀᴛ <@ᴛᴀɢ>
║.sʟᴀᴘ <@ᴛᴀɢ>
║.ᴋɪss <@ᴛᴀɢ>
║.ᴅᴀᴅᴏ
║.sᴛɪᴄᴋᴇʀᴍᴀᴋᴇʀ
║.sᴛɪᴄᴋᴇʀғɪʟᴛᴇʀ
║.ᴄᴀʀᴛᴏᴏɴ <ʀᴇᴘʟʏ ᴍᴇᴅɪᴀ>
║.ᴡᴍ <ʀᴇᴘʟʏ sᴛɪᴄᴋᴇʀ>
╚═════════════════════⧐`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m);
  }
};
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
