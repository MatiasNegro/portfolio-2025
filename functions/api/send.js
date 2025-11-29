/* functions/api/send.js */
export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    // 1. Parsing dei dati dal form React
    const { name, email, message } = await request.json();

    // 2. Validazione minima
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Dati mancanti" }), { status: 400 });
    }

    // 3. Chiamata alle API di Resend
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio <onboarding@resend.dev>", //        to: ["matiasnegro@outlook.it"],
        subject: `[Portfolio] Messaggio da ${name}`, // Tag per il filtro Outlook
        reply_to: email,
        html: `
          <div style="font-family: sans-serif; color: #333;">
            <h2>Nuovo contatto dal Portfolio</h2>
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <hr />
            <p><strong>Messaggio:</strong></p>
            <p style="background-color: #f4f4f5; padding: 15px; border-radius: 5px;">${message}</p>
          </div>
        `,
      }),
    });

    const data = await resendResponse.json();

    if (!resendResponse.ok) {
      console.error("Resend Error:", data);
      throw new Error("Errore nell'invio email");
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { "Content-Type": "application/json" },
      status: 200 
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}