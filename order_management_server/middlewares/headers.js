
export default function headers(req, res, next) {
  try {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "*");
      res.setHeader("Content-Type", "multipart/form-data");
      res.setHeader(
        "Access-Control-Allow-Headers",
        "Authorization,Content-Type,IPAddress,UniqueId"
      );
      res.setHeader("Access-Control-Allow-Credentials", "true");
    next();
  } catch (e) {
    next(e);
  }
}
