'use strict';

const { StreamChat } = require('stream-chat');
const config = require('./config');
const db = require('./db');

module.exports = async (req, res) => {

  const streamChatServerClient = new StreamChat(config.STREAM_PUBLIC, config.STREAM_SECRET);
  try {
    const chatToken = streamChatServerClient.createToken(req.body.username);
    if (!db.includes(req.body.username)) db.push(req.body.username);
    return res.status(201).end(JSON.stringify({chatToken}));
  } catch (error) {
    return res.status(400).end(JSON.stringify({error: "Bad request"}));
  }
};
