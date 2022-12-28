const nodemailer = require("nodemailer");

const createTransport = () => {
  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "fernandorapud@gmail.com",
      pass: "wumxjdofskilholk",
    },
  })
}

const sendMail = async () => {
  const trasporter = await createTransport();
  await trasporter.sendMail({
    from: '<fernandorapud@gmail.com>',
    to: 'mafut50@gmail.com',
    subject: 'Prueba',
    text: 'Te llegó un mail de prueba, felicidades!'
  })
}

sendMail();
