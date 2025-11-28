require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Configuración del transporte de correo
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || '465'),
  secure: true, // true para puerto 465
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Verificar configuración al iniciar
console.log('Configuración de correo:');
console.log('- Host:', process.env.EMAIL_HOST);
console.log('- Port:', process.env.EMAIL_PORT);
console.log('- User:', process.env.EMAIL_USER);
console.log('- Pass configurado:', process.env.EMAIL_PASS ? 'Sí' : 'No');

// Ruta para manejar el envío de correos
app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Configuración del correo
    const mailOptions = {
      from: `"Sitio Web" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // Correo al que llegará el mensaje
      subject: `Nuevo mensaje de contacto de ${name}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone || 'No proporcionado'}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    };

    // Enviar el correo
    await transporter.sendMail(mailOptions);

    // Enviar confirmación al remitente
    const confirmOptions = {
      from: `"Ingeniera Mayra Castillo" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: '¡Gracias por contactarnos!',
      html: `
        <h2>¡Gracias por contactarnos, ${name}!</h2>
        <p>Hemos recibido tu mensaje y nos pondremos en contacto contigo lo antes posible.</p>
        <p><strong>Tu mensaje:</strong></p>
        <p>${message}</p>
        <p>Atentamente,<br>El equipo de Ing. Mayra Castillo</p>
      `,
    };

    await transporter.sendMail(confirmOptions);

    res.status(200).json({ success: true, message: 'Mensaje enviado correctamente' });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    res.status(500).json({
      success: false,
      message: 'Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.'
    });
  }
});

// En producción, servimos la aplicación React
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'dist')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
}

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
