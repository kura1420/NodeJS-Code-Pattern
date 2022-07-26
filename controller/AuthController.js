const { body, validationResult } = require('express-validator');
const logger = require('../library/logger');
const generator = require('../library/generator');
const userModel = require('../model/user');
const mail = require('../config/mail');

const msgValidator = require('../lang/id/validator');

const errorFormatter = ({ msg }) => [msg];

exports.loginCheck = async (req, res, next) => {
  try {
    const errors = validationResult(req).formatWith(errorFormatter);

    if (!errors.isEmpty()) {
      res
        .status(422)
        .json(errors.mapped());
    } else {
      const {
        username,
        password,
      } = req.body;

      const sql = '(username = $1 AND active = true) OR (email = $1 AND active = true) OR (handphone = $1 AND active = true)';
      const params = [username];

      const rows = await userModel.search(sql, params);

      // console.log(rows);

      res
        .send('ok');
    }
  } catch (error) {
    logger.write(__filename, 'error', next);
    next(error);
  }
};

exports.forgotCheck = async (req, res, next) => {
  try {
    const errors = validationResult(req).formatWith(errorFormatter);

    if (!errors.isEmpty()) {
      res
        .status(422)
        .json(errors.mapped());
    } else {
      const {
        email,
      } = req.body;

      const sql = 'email = $1 AND active = true';
      const paramSearch = [email];

      const rows = await userModel.search(sql, paramSearch);

      if (rows.length > 0) {
        const row = rows[0];
        const token = generator.random(36);
        const WEB = process.env.APP_WEB;

        const templateHTMLForgot = `<h1>Hi ${row.username}</h1>
				<p>Please click this <a href="${WEB}reset/${token}">link</a> to reset your password.</p>
				<p>OR you can copy and paste this link directly into your browser</p>
				<p>
					<a href="${WEB}reset/${token}">
						${WEB}reset/${token}
					</a>
				</p>`;

        const mailOptions = {
          from: 'no-reply@domain.com',
          to: row.email,
          subject: 'Forgot the password!',
          html: templateHTMLForgot,
        };

        await new Promise((resolve, reject) => {
          mail.sendMail(mailOptions, (error) => {
            if (error) {
              reject(error);
            } else {
              resolve();
            }
          });
        });

        const fields = 'reset_token = $1';
        const where = 'id = $2';
        const paramUpdate = [token, row.id];

        await userModel.update(fields, where, paramUpdate);
      }

      res
        .status(200)
        .json('ok');
    }
  } catch (error) {
    logger.write(__filename, 'error', next);
    next(error);
  }
};

exports.validate = (method) => {
  switch (method) {
    case 'login':
      return [
        body('username')
          .notEmpty()
          .withMessage(msgValidator('required', 'username')),

        body('password')
          .notEmpty()
          .withMessage(msgValidator('required', 'password')),
      ];

    case 'forgot':
      return [
        body('email')
          .notEmpty()
          .withMessage(msgValidator('required', 'email')),
      ];

    case 'checkToken':
      return [
        body('token')
          .notEmpty()
          .withMessage(msgValidator('required', 'token')),
      ];

    default:
      break;
  }
};
