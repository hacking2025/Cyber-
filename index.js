module.exports.handleEvent = function ({ api, event }) {
  const { body, threadID, messageID, senderID } = event;

  if (event._autoreplyHandled) return;
  event._autoreplyHandled = true;

  if (!body) return;

  const msg = body.toLowerCase();

  const replies = [
    "কি অবস্থা হুজুর? 😂",
    "ভাই আর কত জ্বালাবেন 😒",
    "তুমি না হলে আমি নেই 💔",
    "আর বলো না ভাই, জীবনটাই হ্যাক 😆",
    "বলো বোট ভাইজান, তোমার লাগবো কিতা? 🤖",
    "তুমি কি জানো আমি তোমায় কতো ভালোবাসি? ❤️",
    "এই যে সুন্দর মানুষটা, কেমন আছো? 🥰",
    "কি খবর পাগলাটে! 🐸",
    "অ্যাই... আর একটু বলো তো, মজা লাগছে! 😜",
    "ভাই তোমার জন্য বটও প্রেমে পড়ছে 🤖❤️"
  ];

  const randomReply = replies[Math.floor(Math.random() * replies.length)];

  if (msg.includes("hello") || msg.includes("hi") || msg.includes("vai") || msg.includes("valo") || msg.includes("kemon")) {
    api.sendMessage(randomReply, threadID, messageID);
  }
};
