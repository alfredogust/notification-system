const notificationService = require("../services/notificationService");

exports.sendNotification = async (req, res) => {

  try {

    const payload = req.body;

    if (!payload.type) {
      return res.status(400).json({
        error: "Notification type is required"
      });
    }

    await notificationService.sendNotification(payload);

    res.json({
      success: true,
      message: "Notification sent successfully"
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      error: error.message
    });

  }

};