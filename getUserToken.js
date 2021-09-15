'use strict';

const { StreamChat } = require('stream-chat');
const config = require('./config');

module.exports = async (req, res) => {

  const streamChatServerClient = new StreamChat(config.STREAM_PUBLIC, config.STREAM_SECRET);

  if (req.method === 'POST') {
    try {
      const chatToken = streamChatServerClient.createToken(req.body.id);
      return res.end(JSON.stringify({chatToken}));
    } catch (error) {
      return res.status(400).end(JSON.stringify({error}));
    }
  }
  return res.status(404).end();
};
