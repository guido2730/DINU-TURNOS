const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyoZMWoiMutNpY8wpJkrdQ0CV_EmaNzmddagEmDhIG0LWwhhBCvZI_YUIL-NlrZIum7Pg/exec";

export default async function handler(req, res) {
  const { eventoId, fecha, horario } = req.query;
  if (!eventoId || !fecha || !horario) return res.status(400).json({ error: "Faltan parámetros" });

  try {
    const response = await fetch(`${SCRIPT_URL}?action=reprogramar&eventoId=${encodeURIComponent(eventoId)}&fecha=${fecha}&horario=${horario}`);
    const data = await response.json();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json(data);
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
}
