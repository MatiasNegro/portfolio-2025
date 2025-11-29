export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    // 1. Parsing dei dati dal form React
    const { name, email, message } = await request.json();

    // 2. Validazione minima
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Dati mancanti" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    // 3. Chiamata alle API di Resend
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // IMPORTANTE: Se usi il dominio di test, 'from' DEVE essere questo:
        from: "Portfolio <onboarding@resend.dev>", 
        // IMPORTANTE: In modalità test, puoi inviare SOLO alla tua email di registrazione Resend:
        to: ["matiasnegro@outlook.it"], 
        subject: `[Portfolio] Messaggio da ${name}`,
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

    // 4. Gestione Errori Specifica di Resend (DEBUG)
    if (!resendResponse.ok) {
      // Restituisce l'errore esatto di Resend al browser (es. "restricted_to_verified_email")
      return new Response(JSON.stringify(data), { 
        status: resendResponse.status,
        headers: { "Content-Type": "application/json" }
      });
    }

    // 5. Successo
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } catch (err) {
    // 6. Gestione Errori Generici (Crash del codice)
    return new Response(JSON.stringify({ 
      error: err.message, 
      stack: err.stack 
    }), { 
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}