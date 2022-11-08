const contacts = require("../../models/contacts/contacts");
const { HttpError } = require("../../helpers");

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await contacts.getContactById(contactId);
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

module.exports = getContactById;
