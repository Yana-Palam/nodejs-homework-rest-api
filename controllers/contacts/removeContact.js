const contacts = require("../../models/contacts/contacts");
const { HttpError } = require("../../helpers");

const removeContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await contacts.removeContact(contactId);
  if (!result) {
    throw HttpError(404);
  }
  res.json({ message: "contact deleted" });
};

module.exports = removeContact;
