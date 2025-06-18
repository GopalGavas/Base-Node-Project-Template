const { createLogger, format, transports } = require("winston");
const { combine, timestamp, label, printf } = format;
const path = require("path");

const customFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} : [${label || "no label"}] : ${level} : ${message}`;
});

const logger = (moduleFilename) => {
  return createLogger({
    format: combine(
      label({ label: path.relative(process.cwd(), moduleFilename) }),
      timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
      customFormat
    ),
    transports: [
      new transports.Console(),
      new transports.File({ filename: "combined.logs" }),
    ],
  });
};
module.exports = logger;
