export interface TelegramLeadPayload {
  patientName: string;
  phone: string;
  topic: string;
  preferredTime: string;
  source?: string;
}

export const TELEGRAM_CONFIG = {
  botToken: '8604473703:AAHr1qqxXtQID8PT9vTuZcSYNe3I9YZ9-QA',
  chatId: '661590737',
  botUsername: 'SmileDent_Leads_bot'
};

export async function sendLeadToTelegram(lead: TelegramLeadPayload): Promise<boolean> {
  const rawDigits = lead.phone.replace(/\D/g, '');
  const leadId = `#${Math.floor(100000 + Math.random() * 900000)}`;
  const timeStr = new Date().toLocaleString('uk-UA', { timeZone: 'Europe/Kyiv' });

  const textLines = [
    `🦷 <b>НОВА ЗАЯВКА • СМАЙЛ ДЕНТ (ПОЛТАВА)</b>`,
    `━━━━━━━━━━━━━━━━━━`,
    `🔑 <b>ID заявки:</b> <code>${leadId}</code>`,
    `👤 <b>Пацієнт:</b> ${escapeHtml(lead.patientName)}`,
    `📞 <b>Телефон:</b> <code>${escapeHtml(lead.phone)}</code>`,
    `📋 <b>Послуга / Лікар:</b> ${escapeHtml(lead.topic)}`,
    `⏰ <b>Бажаний час:</b> ${escapeHtml(lead.preferredTime)}`,
    `📍 <b>Джерело:</b> ${escapeHtml(lead.source || 'Онлайн-запис на сайті')}`,
    `━━━━━━━━━━━━━━━━━━`,
    `⏱ <i>Час отримання: ${timeStr}</i>`
  ];

  const inlineKeyboard = [
    [
      { text: '💬 Написати в Telegram', url: `https://t.me/+${rawDigits}` },
      { text: '📱 WhatsApp', url: `https://wa.me/${rawDigits}` }
    ]
  ];

  try {
    const res = await fetch(`https://api.telegram.org/bot${TELEGRAM_CONFIG.botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CONFIG.chatId,
        text: textLines.join('\n'),
        parse_mode: 'HTML',
        reply_markup: { inline_keyboard: inlineKeyboard }
      })
    });
    return res.ok;
  } catch (error) {
    console.error('[LeadTriad] Telegram dispatch error:', error);
    return false;
  }
}

function escapeHtml(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
