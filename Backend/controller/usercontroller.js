
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const db = require('../config/db');
const jwt = require('jsonwebtoken');
const randomstring = require('randomstring');
const sendMail = require('../helper/sendMaill');
const nodemailer = require('nodemailer');



const contactSubmit = async (req, res) => {
    const name = req.body.name;
    const mailSubject = '@no_reply_mail';
    const email = req.body.email;
    const text = req.body.text;
    const content = `<h1>Thanks,<br> ${name} <br>for contacting us, we will get back to you as soon as possible.</h1>`;

    if (name.length !== 0 && email.length !== 0) {
        //sendMail(email, mailSubject, content);
        //sendMail('jangralakshay611@gmail.com', 'A person contacted us on FitSyncX.', `<h1>Email:<br> ${email}<br>Text:<br> ${text} </h1>`);

        try {
            var transport = await nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: "lakshay.jangra.394@gmail.com",
                    pass: 'cfaprmptfpvzdffd'
                }
            });

            const mailOptions1 = {
                from: "lakshay.jangra.394@gmail.com",
                to: email,
                subject: mailSubject,
                html: content
            }
            const mailOptions2 = {
                from: "lakshay.jangra.394@gmail.com",
                to: 'jangralakshay611@gmail.com',
                subject: 'A person contacted us on FitSyncX.',
                html: `<h1>Email:<br> ${email}<br>Text:<br> ${text} </h1>`
            }
            await transport.sendMail(mailOptions1, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log("mail Sent Succesfully", info.response);
                }
            })
            await transport.sendMail(mailOptions2, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log("mail Sent Succesfully", info.response);
                }
            })
        } catch (error) {
            console.log(error.message);
        }



        
        return res.status(200).json({
            success: true,
            message: "Message sent successfully"
        });
    } else {
        return res.status(400).json({
            success: false,
            message: "Name and Email are required"
        });
    }
};



const register = async (req, res) => {
    const error = validationResult(req);

    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() })
    }
    db.query(`SELECT * FROM users WHERE LOWER(EMAIL) = LOWER(${db.escape(
        req.body.email
    )});`,
        (err, result) => {
            if (result && result.length) {
                return res.status(409).send({
                    msg: 'User Exist'
                });
            }
            else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        return res.status(400).send({
                            msg: err
                        });
                    }
                    else {
                        db.query(`INSERT INTO users(NAME,EMAIL,PHONE,PASSWORD) 
                            VALUES('${req.body.name.toUpperCase()}',UPPER(${db.escape(req.body.email)}),${db.escape(req.body.phone)},${db.escape(hash)});`,
                            (err, result) => {
                                if (err) {
                                    return res.status(500).send({
                                        msg: err
                                    });
                                }
                                let mailSubject = 'Mail Verification';
                                const randomToken = randomstring.generate();
                                let content = '<p>Hey!' + req.body.name + '\
                                Please <a href="https://fitsyncx-new.onrender.com/mail-verification?token='+ randomToken + '"> Verify</a> your Mail.'


                                try {
        var transport = await nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: "lakshay.jangra.394@gmail.com",
                pass: 'cfaprmptfpvzdffd'
            }
        });

        const mailOptions = {
            from: "lakshay.jangra.394@gmail.com",
            to: req.body.mail,
            subject: mailSubject,
            html: content
        }
        await transport.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log("mail Sent Succesfully", info.response);
            }
        })
    } catch (error) {
        console.log(error.message);
    }
                                
                                
                                
                                //sendMail(req.body.email, mailSubject, content);
                                db.query('UPDATE users set token=? where email=?', [randomToken, req.body.email], function (error, result) {
                                    if (error) {
                                        return res.status(400).send({
                                            msg: error
                                        });
                                    }
                                })
                                return res.status(200).send({
                                    msg: `User ${req.body.email} is registered.`
                                });
                            })
                    }
                })
            }
        })
}

const verifyMail = (req, res) => {
    var token = req.query.token;
    db.query('SELECT * FROM users WHERE TOKEN=? LIMIT 1', token, function (error, result, fields) {
        if (error) {
            console.log(error.message);
        }
        if (result.length > 0) {
            db.query(`update users set token = null , is_verified = 1 where EMAIL = '${result[0].EMAIL}'
                `);

            return res.render('mailVerification', {
                message: "Mail verified!"
            })
        }
        else {
            return res.render('404');
        }
    })

}


const login = (req, res) => {
    const error = validationResult(req);

    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() })
    }
    db.query(`SELECT * FROM users where EMAIL = '${req.body.email.toUpperCase()}';`,
        (err, result) => {
            if (err) {
                res.status(400).send({
                    msg: err
                })
            }
            if (!result.length) {
                return res.status(401).send({
                    msg: "Usernsme and Password not matched."
                })
            }
            bcrypt.compare(
                req.body.password,
                result[0]['PASSWORD'], (berr, bresult) => {
                    if (berr) {
                        res.status(400).send({
                            msg: berr
                        })
                    }
                    if (bresult) {
                        const token = jwt.sign({ email: result[0]['EMAIL'] }, process.env.JWT_SECRET, { expiresIn: '1h' });

                        return res.status(200).send({
                            msg: "Logged In",
                            token,
                            user: result[0]
                        })
                    }

                    return res.status(401).send({
                        msg: "Usernsme and Password not matched end."
                    })
                })

        }
    );
}

const admin_login = (req, res) => {
    const error = validationResult(req);

    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() })
    }
    db.query(`SELECT * FROM admin where email = '${req.body.email.toUpperCase()}';`,
        (err, result) => {
            if (err) {
                res.status(400).send({
                    msg: err
                })
            }
            if (!result.length) {
                return res.status(401).send({
                    msg: "Usernsme and Password not matched."
                })
            }
            bcrypt.compare(
                req.body.password,
                result[0]['password'], (berr, bresult) => {
                    if (berr) {
                        res.status(400).send({
                            msg: berr
                        })
                    }
                    if (bresult) {
                        //const token = jwt.sign({ email: result[0]['email'] }, process.env.JWT_SECRET, { expiresIn: '1h' });

                        return res.status(200).send({
                            msg: "Logged In",
                            //token,
                            user: result[0]
                        })
                    }

                    return res.status(401).send({
                        msg: "Usernsme and Password not matched end."
                    })
                })

        }
    );
}

const getUsers = (req, res) => {
    const sql = 'SELECT id, firstName, lastName, email,phone, age, fees FROM main_users';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching users:', err);
            return res.status(500).json({ error: 'Failed to fetch users' });
        }
        res.json(results);
    });
};

const insert_user = async (req, res) => {
    const { firstName, lastName, email, phone, password, age, fees } = req.body;

    if (!firstName || !lastName || !email || !password || !age || !fees || !phone) {
        return res.status(400).json({ error: 'Please fill in all fields' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const sql = `
      INSERT INTO main_users (firstName, lastName, email,phone, password, age, fees)
      VALUES (?, ?, ?,?, ?, ?, ?)
    `;
        const values = [firstName, lastName, email, phone, hashedPassword, age, fees];

        db.query(sql, values, (err, result) => {
            if (err) {
                console.error('Error inserting user:', err);
                return res.status(500).json({ error: 'Failed to add user' });
            }
            res.status(201).json({ message: 'User added successfully' });
        });
    } catch (err) {
        res.status(500).json({ error: 'Server error during user creation' });
    }
};

const delete_user = (req, res) => {
    const userId = req.params.id;

    const sql = 'DELETE FROM main_users WHERE id = ?';

    db.query(sql, [userId], (err, result) => {
        if (err) {
            console.error('Error deleting user:', err);
            return res.status(500).json({ error: 'Failed to delete user' });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json({ message: 'User deleted successfully' });
    });
};




const delete_trainer = (req, res) => {
    const id = req.params.id;
    const sql = 'DELETE FROM trainers WHERE id = ?';

    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error('Error deleting trainer:', err);
            return res.status(500).json({ error: 'Failed to delete trainer' });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Trainer not found' });
        }

        res.json({ message: 'Trainer deleted successfully' });
    });
};


const getUserAttendance = (req, res) => {
    const userId = req.params.userId;
    const sql = 'SELECT * FROM user_attendance WHERE user_id = ?';

    db.query(sql, [userId], (err, results) => {
        if (err) {
            console.error('Error fetching attendance:', err);
            return res.status(500).json({ error: 'Failed to fetch attendance' });
        }
        res.json(results);
    });
};

const markAttendance = (req, res) => {
    const { user_id, date } = req.body;

    const checkSql = 'SELECT * FROM user_attendance WHERE user_id = ? AND date = ?';
    db.query(checkSql, [user_id, date], (err, results) => {
        if (err) {
            console.error('Error checking attendance:', err);
            return res.status(500).json({ error: 'Failed to check attendance' });
        }

        if (results.length > 0) {
            return res.status(400).json({ message: 'Attendance already marked for today' });
        }

        const insertSql = 'INSERT INTO user_attendance (user_id, date, status) VALUES (?, ?, ?)';
        db.query(insertSql, [user_id, date, 'Present'], (err, result) => {
            if (err) {
                console.error('Error marking attendance:', err);
                return res.status(500).json({ error: 'Failed to mark attendance' });
            }
            res.status(201).json({ message: 'Attendance marked successfully' });
        });
    });
};

module.exports = {
    register,
    verifyMail,
    login,
    admin_login,
    getUsers,
    insert_user,
    delete_user,
    delete_trainer,
    getUserAttendance,
    markAttendance,
    contactSubmit
}








