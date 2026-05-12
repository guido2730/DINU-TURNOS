const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyoZMWoiMutNpY8wpJkrdQ0CV_EmaNzmddagEmDhIG0LWwhhBCvZI_YUIL-NlrZIum7Pg/exec";

export default async function handler(req, res) {
  const { fecha } = req.query;
  if (!fecha) return res.status(400).json({ error: "fecha requerida" });

  try {
    const response = await fetch(`${SCRIPT_URL}?action=ocupados&fecha=${fecha}`);
    const data = await response.json();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json(data);
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
}
