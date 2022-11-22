const updateContact = require("./updateContact");
const addContact = require("./addContact");
const listContacts = require("./listContacts");
const getContactById = require("./getContactById");
const removeContact = require("./removeContact");
const updateFavorite = require("./updateFavorite");

module.exports = {
  listContacts,
  updateContact,
  addContact,
  getContactById,
  removeContact,
  updateFavorite,
};
