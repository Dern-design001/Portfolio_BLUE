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

    // Check if MongoDB is connected
    const mongoose = require('mongoose');
    if (mongoose.connection.readyState !== 1) {
      // MongoDB not connected - just log and return success
      console.log('Contact form submission (MongoDB not connected):');
      console.log(`From: ${email}`);
      console.log(`Message: ${message}`);
      
      return res.status(200).json({
        success: true,
        message: 'Message received successfully',
        note: 'Database not connected - message logged to console'
      });
    }

    // MongoDB is connected - save to database
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
