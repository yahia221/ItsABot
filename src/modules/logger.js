module.exports = () => {
    const winston = require('winston');
    const { createLogger, format, transports, } = winston;
    const { combine, printf, } = format;

    const printFormat = printf(({ level, message, }) => `[KryptoBot][${level}][${new Date().toLocaleTimeString('en-US')}]: ${message}`);

    return createLogger({
        level: 'info',
        format: combine(
            printFormat,
            winston.format.colorize({ all: true, })
        ),
        defaultMeta: { service: 'user-service', },
        transports: [
            new transports.Console(),
        ],
    });
};
