const Contact = require('../models/Contact');

exports.submitContact = async (req, res) => {
  try {
    const { email, message } = req.body;

    if (!email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Email and message are required' 
      });
    }

    const contact = new Contact({
      email,
      message,
    });

    await contact.save();

    res.status(201).json({
      success: true,
      message: 'Message sent successfully',
      data: contact,
    });
  } catch (error) {
    console.error('Error submitting contact:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message',
      error: error.message,
    });
  }
};
