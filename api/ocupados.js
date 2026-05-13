const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzff4YWmWCUld1RTPf0fKt2UruJGOoLy7WTnvHDGiFnZ4_Xs4IYXB5R_2wdkRiPNAQSuw/exec";

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
