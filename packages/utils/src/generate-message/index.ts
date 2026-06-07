export function generateWhatsappmessage({
  email,
  message,
  name,
  phone,
  service,
  location,
  time,
}: {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  location: string;
  time: string;
}) {
  const generatedMessage = `
Hello Handych Team 👋

My name is ${name}.

I would like to book a ${service} service.

📍 Location: ${location}
🕒 Preferred Time: ${time}

Here are my contact details:

📞 Phone: ${phone}
📧 Email: ${email}

Additional Requirements / Notes:

${message}

Please let me know:
• Service availability for the requested time
• Estimated pricing
• Any additional information you may need

Looking forward to your response.

Thank you,
${name}
`;

  return generatedMessage;
}
