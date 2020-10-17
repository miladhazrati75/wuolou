const bcrypt = require("bcrypt");
const users = require("../../../models").users;
const jwt = require("jsonwebtoken");
class AuthController {
  static register(req, res) {
    console.log(req.body);
    bcrypt
      .hash(req.body.password, 10)
      .then((result) => {
        users
          .create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            nationalCode: req.body.nationalCode,
            email: req.body.email,
            cellPhone: req.body.cellPhone,
            telephone: req.body.telephone,
            username: req.body.username,
            password: result,
            officeName: req.body.officeName,
            address: req.body.address,
          })
          .then((queryResult) => res.sendStatus(200))
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  }
  static login(req, res) {
    const { username, password, checkBox } = req.body;
    users
      .findOne({
        where: {
          username: username,
        },
      })
      .then((queryResult) => {
        if (!Object.keys(queryResult).length) {
          res.status(401).json({
            error: "ایمیل یا پسورد اشتباه است.",
          });
        } else {
          bcrypt
            .compare(password, queryResult.password)
            .then((result) => {
              if (!result) {
                res.status(401).json({
                  error: "ایمیل یا پسورد اشتباه است.",
                });
              } else {
                // Issue token
                const payload = {
                  fullName: queryResult.firstName + " " + queryResult.lastName,
                  username: queryResult.username,
                  idUser: queryResult.id,
                };
                const token = jwt.sign(payload, "secret", {
                  expiresIn: "1h",
                });
                if (checkBox)
                  res.cookie("token", token, { httpOnly: true }).send({
                    token: token,
                    fullName:
                      queryResult.firstName + " " + queryResult.lastName,
                    idUser: queryResult.id,
                  });
                else
                  res.send({
                    token: token,
                    fullName:
                      queryResult.firstName + " " + queryResult.lastName,
                    idUser: queryResult.id,
                  });
              }
            })
            .catch((error) => console.log(error));
        }
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({
          error: "Internal error please try again",
        });
      });
  }
  static withAuth(req, res, next) {
    const token = req.cookies.token;
    if (!token) {
      res.status(401).send("Unauthorized: No token provided");
    } else {
      jwt.verify(token, "secret", function (err, decoded) {
        if (err) {
          res.status(401).send("Unauthorized: Invalid token");
        } else {
          req.username = decoded.username;
          req.fullName = decoded.fullName;
          next();
        }
      });
    }
  }
  static checkToken(req, res) {
    const token = req.body.token || req.cookies.token;
    console.log(token);
    if (!token) {
      res.status(401).send("Unauthorized: No token provided");
    } else {
      jwt.verify(token, "secret", function (err, decoded) {
        if (err) {
          res.status(401).send("Unauthorized: Invalid token");
        } else {
          const decodedData = {
            username: decoded.username,
            fullName: decoded.fullName,
          };
          res.status(200).send(decodedData);
        }
      });
    }
  }
  static getUser(req, res) {
    users
      .findOne({
        where: {
          id: req.body.id,
        },
      })
      .then((queryResult) => res.send(queryResult))
      .catch((error) => console.log(error));
  }
  static updateUserIdentity(req, res) {
    users
      .update(
        {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          nationalCode: req.body.nationalCode,
          cellPhone: req.body.cellPhone,
          telephone: req.body.telephone,
          officeName: req.body.officeName,
          address: req.body.address,
        },
        {
          where: {
            id: req.body.id,
          },
        }
      )
      .then((queryResult) => res.status(200))
      .catch((error) => console.log(error));
  }
  static updateUserInfo(req, res) {
    users
      .update(
        {
          email: req.body.email,
          username: req.body.username,
        },
        {
          where: {
            id: req.body.id,
          },
        }
      )
      .then((queryResult) => res.status(200))
      .catch((error) => console.log(error));
  }
}
module.exports = AuthController;
