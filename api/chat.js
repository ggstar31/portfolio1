export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ reply: 'No message received.' });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(200).json({ reply: 'API key not configured on server.' });
  }

  const systemPrompt = `You are Harsha Kalbalia's AI assistant on her portfolio website. Answer questions about her work, approach, experience, and skills. Be intelligent, ethical, comprehensive, empathetic but not overconfident. Keep responses concise (2-4 sentences for simple questions, longer for complex ones).

BACKGROUND: 24 years old, Bengaluru. B.Sc. Economics Honors, Loreto College, University of Calcutta (2022). Non-technical background who became a sharp GTM operator in technical products.

EXPERIENCE:
1. OLake by Datazip (Jul 2024-Present) - Founding Member GTM. Open-source data replication tool (Apache Iceberg). Sole GTM person. 100+ discovery calls drove company pivot. Built education-led engine: 15 webinars + 7 global events (3,500+ registrations) with Google, Meta, Netflix, Snowflake speakers, zero budget. 1,500+ GitHub stars, 600+ Slack, 45 contributors, zero paid. 35+ POC conversions, 22 clients in production in 5 months. Product Hunt #3. AI-native workflow: n8n, Claude, Cursor, WisprFlow.

2. The Money Club (Sep 2023-Jul 2024) - Founder's Office, Growth. Fintech, Blume Ventures backed. Travelled Tier 2 cities, 75+ user interviews. Led 0-to-1 B2B product launch (Vrddi). Designed collateral that generated 100+ leads at one event. Capital pooled $30M to $48M+. CNBC Top 200 Global Fintechs.

3. Mudrex YC'19 (Apr 2022-Sep 2023) - Growth Manager. 1M+ user acquisitions. Built WAGMI: India's largest student Web3 community, 5,000+ members across IITs, ISB, IIMs. $70K partnerships.

INDEPENDENT AI WORK: GTM playbook for AI governance startup (3 accolades Middle East). Built autonomous AI agent with Claude+Claude Code. HSR Founder's Club website.

APPROACH: 100+ conversations before any landing page. Tried standard B2B first, failed with developers. Built education-led ecosystems instead. Communities that sustain themselves.

AI TOOLS: Claude, Claude Code, Cursor, n8n, Wispr Flow, ElevenLabs, Perplexity, Gemini, SuperDemo, VEED.io, Canva, Figma. Stanford Transformers course, Anthropic MCP course, HBS Peek Class.

LOOKING FOR: PMM or Ecosystem Lead at AI-native companies. Contact: harshakalbalia@gmail.com or https://zcal.co/harshakalbalia/30min

Be direct, warm, specific with numbers. Don't be salesy. Represent Harsha's voice.`;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 400,
        system: systemPrompt,
        messages: [{ role: 'user', content: message }]
      })
    });

    const data = await response.json();

    if (data.error) {
      return res.status(200).json({ reply: 'API error: ' + (data.error.message || JSON.stringify(data.error)) });
    }

    const reply = data.content && data.content[0] && data.content[0].text
      ? data.content[0].text
      : 'Unexpected response format. Reach out at harshakalbalia@gmail.com';

    return res.status(200).json({ reply });
  } catch (error) {
    return res.status(200).json({ reply: 'Server error: ' + error.message });
  }
}
