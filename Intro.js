const { bot, getBuffer, jidToNum, genThumbnail } = require('../lib/')
const image = 'https://i.imgur.com/hwAUxB9.jpeg' //MAIN IMAGE URL HERE
const logo = 'https://telegra.ph/file/b1a153ed50e122440e8bb.jpg'

bot(
	{
		pattern: 'intro ?(.*)',
		fromMe: true,
		desc: 'Shows My Intro',
		type: 'misc',
	},   async (message, match) => {
        const jid = message.jid
        const number = message.client.user.jid
        const thumb = await getBuffer(image)
        const thumbnail = await getBuffer(logo)
        const viz = {}
        // ADDED /* TO REMOVE LINK PREVIEW TYPE
        viz.linkPreview = {
               renderLargerThumbnail: true,
               showAdAttribution: true,
               head: "CYPHER SIR",
               body: "CLICK HERE TO GETπ« !",
               mediaType: 1,
               thumbnail: thumb.buffer,
               sourceUrl: "http://wa.me/917306099272?text=_αHEY CYPHER SIRπͺ_"
             }
        // ADDED */ TO REMOVE LINK PREVIEW TYPE
        viz.quoted = {
            key: {
                fromMe: false,
                participant: "0@s.whatsapp.net",
                remoteJid: "status@broadcast"
            },
           message: {
		'contactMessage': {
		'displayName': `${message.pushName}`, //ADD `${message.client.user.name}` TO DISPLAY CLIENT USER NAME.
		'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;'${message.client.user.name}',;;;\nFN:'${message.client.user.name}',\nitem1.TEL;waid=${jidToNum(number)}\nitem1.X-ABLabel:WhatsApp\nEND:VCARD`,
		'jpegThumbnail': await genThumbnail(thumbnail.buffer)
                }
            }
        }
     message.sendMessage(`0ΫͺΫͺΰ½΄ΰ½»κ¦½κ¦ΌΜ·βΈβΉβ’βββββββββββββββ‘α­
β       *γ π π¬ ππ‘π§π₯π’ γ*
β *Name      : *CYPHER SIR*
β *Place       : *K E R A L A*
β *Gender   :*  Male
β *Age          :* 20
β *Hobby     :* PLAY πβ‘
β *Phone     :* +91 730609272
β *IG ID        :* in.cypher
β *Status     :* SINGLE π
β°βββββκͺΆ ΫͺΫͺΰ½΄ΫͺΫͺΰ½΄ΫͺΫͺΰ½΄ΫͺΫͺΰ½΄ΫͺΫͺΰ½΄ΫͺΫͺΰ½΄ΫͺΫͺΰ½΄ΫͺΫͺΰ½΄ΫͺΫͺΰ½΄ΫͺΫͺΰ½΄ΫͺΫͺΫͺCYPHER)
   }
);
