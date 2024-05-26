const Property = require('../models/Property');

const addProperty = async (req, res) => {
  try {
    const property = new Property({ ...req.body, seller: req.user._id });
    await property.save();
    res.status(201).json(property);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getProperties = async (req, res) => {
  try {
    const properties = await Property.find().populate('seller', 'firstName lastName email phoneNumber');
    res.json(properties);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateProperty = async (req, res) => {
  try {
    const property = await Property.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(property);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteProperty = async (req, res) => {
  try {
    await Property.findByIdAndDelete(req.params.id);
    res.json({ message: 'Property deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const likeProperty = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    property.likes += 1;
    await property.save();
    res.json(property);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { addProperty, getProperties, updateProperty, deleteProperty, likeProperty };
