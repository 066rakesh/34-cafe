import cloudinary from "../config/cloudinary";

export const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    const streamUpload = () => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: "cafe-menu" },
          (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          }
        );

        stream.end(req.file.buffer);
      });
    };

    const result = await streamUpload();

    res.status(200).json({
      success: true,
      url: result.secure_url,
    });
  } catch (error) {
    console.error("Upload error", error);
    res.status(500).json({
      success: false,
      message: "Image upload failed",
    });
  }
};
