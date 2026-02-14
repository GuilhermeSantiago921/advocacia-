const form = document.querySelector("#leadForm");
const feedback = document.querySelector("#formFeedback");
const yearSpan = document.querySelector("#year");

if (yearSpan) {
  yearSpan.textContent = String(new Date().getFullYear());
}

if (form && feedback) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      feedback.textContent = "Revise os campos obrigatórios antes de continuar.";
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);
    const nome = String(formData.get("nome") || "").trim();
    const telefone = String(formData.get("telefone") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const area = String(formData.get("area") || "").trim();
    const mensagem = String(formData.get("mensagem") || "").trim();

    const texto = [
      "Olá, gostaria de atendimento jurídico imediato.",
      "",
      `Nome: ${nome}`,
      `Telefone: ${telefone}`,
      `E-mail: ${email}`,
      `Área: ${area}`,
      `Resumo do caso: ${mensagem}`,
      "",
      "Confirmo que a demanda é no território nacional."
    ].join("\n");

    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(texto)}`;

    feedback.textContent = "Redirecionando para o WhatsApp...";
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    form.reset();
  });
}