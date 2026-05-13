const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyoZMWoiMutNpY8wpJkrdQ0CV_EmaNzmddagEmDhIG0LWwhhBCvZI_YUIL-NlrZIum7Pg/exec";

export default async function handler(req, res) {
  const { fechaInicio } = req.query;
  if (!fechaInicio) return res.status(400).json({ error: "fechaInicio requerida" });

  try {
    const response = await fetch(`${SCRIPT_URL}?action=semana&fechaInicio=${fechaInicio}`);
    const data = await response.json();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json(data);
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
}
