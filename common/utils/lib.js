const crypto = require('crypto');

export const createID = (data, len) => {
  return crypto
    .createHmac('sha256', { outputLength: len })
    .update(data)
    .digest('hex');
};
