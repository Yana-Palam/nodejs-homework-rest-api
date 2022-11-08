const express = require("express");

const { ctrlWrapper } = require("../../helpers");

const ctrl = require("../../controllers/contacts");

const { validateBody } = require("../../middlewares");

const schema = require("../../schemas");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.listContacts));

router.get("/:contactId", ctrlWrapper(ctrl.getContactById));

router.post("/", validateBody(schema.addSchema), ctrlWrapper(ctrl.addContact));

router.delete("/:contactId", ctrlWrapper(ctrl.removeContact));

router.put(
  "/:contactId",
  validateBody(schema.addSchema),
  ctrlWrapper(ctrl.updateContact)
);

module.exports = router;
