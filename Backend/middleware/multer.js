import multer from "multer";

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024, files: 1 },
  fileFilter: (req, file, cb) => {
    if (ALLOWED_TYPES.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Only JPG, PNG or WebP images are allowed"));
    }
  },
});

export const uploadSingleImage = (req, res, next) => {
  upload.single("image")(req, res, (err) => {
    if (!err) return next();

    const message =
      err.code === "LIMIT_FILE_SIZE" ? "Image must be under 5 MB" : err.message;

    return res.status(400).json({ success: false, message });
  });
};

export default upload;
