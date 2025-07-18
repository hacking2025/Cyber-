module.exports.handleEvent = function ({ api, event }) {
  const { threadID, messageID, senderID } = event;

  // Prevent multiple triggers
  if (event._autoreactHandled) return;
  event._autoreactHandled = true;

  // Your Facebook UID
  const targetUID = "61577863095840";

  // React 🎀 if message is from specific UID
  if (senderID === targetUID) {
    api.setMessageReaction("🎀", messageID, (err) => {}, true);
  }
};
