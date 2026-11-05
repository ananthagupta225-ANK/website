/**
 * ANK HR SERVICES — WEBSITE ENQUIRY HANDLER
 * ---------------------------------------------------------------------------
 * Receives enquiries from the website contact form and appends them to a
 * Google Sheet, with an optional email notification.
 *
 * Setup instructions: see DEPLOYMENT.md in the website project.
 * ---------------------------------------------------------------------------
 */

/* ========================= SETTINGS — EDIT THESE ========================= */

var CONFIG = {
  // The tab name inside the spreadsheet. Created automatically if missing.
  SHEET_NAME: 'Enquiries',

  // Where to email each new enquiry. Leave as '' to turn notifications off.
  // Several addresses can be separated by commas.
  NOTIFY_EMAIL: '',

  // Reject submissions completed faster than this many seconds. Real people
  // take longer than this; most bots do not.
  MIN_SECONDS: 3,

  // Maximum characters accepted in the message field.
  MAX_MESSAGE_LENGTH: 5000
};

/* ======================= NOTHING BELOW NEEDS EDITING ===================== */

var HEADERS = [
  'Timestamp',
  'Name',
  'Company',
  'Email',
  'Phone',
  'Services',
  'Employees',
  'Preferred contact',
  'Message',
  'Consent',
  'Submitted from'
];

/**
 * Entry point for the website form (POST).
 */
function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return respond({ ok: false, error: 'empty_request' });
    }

    var data = JSON.parse(e.postData.contents);

    // --- Spam checks -------------------------------------------------------
    // 1. Honeypot: a field hidden from people. If it is filled, it is a bot.
    if (data.website) {
      return respond({ ok: true, note: 'discarded' });
    }

    // 2. Time trap: submissions completed implausibly fast are discarded.
    var started = Number(data.startedAt || 0);
    if (started > 0) {
      var seconds = (Date.now() - started) / 1000;
      if (seconds < CONFIG.MIN_SECONDS) {
        return respond({ ok: true, note: 'discarded' });
      }
    }

    // --- Validation (mirrors the browser-side rules) -----------------------
    var name = trim(data.name);
    var email = trim(data.email);
    var phone = trim(data.phone);
    var message = trim(data.message);

    if (!name) return respond({ ok: false, error: 'name_required' });
    if (!email && !phone) return respond({ ok: false, error: 'contact_required' });
    if (!message) return respond({ ok: false, error: 'message_required' });
    if (message.length > CONFIG.MAX_MESSAGE_LENGTH) {
      message = message.substring(0, CONFIG.MAX_MESSAGE_LENGTH) + ' […truncated]';
    }

    // --- Write to the sheet ------------------------------------------------
    var sheet = getSheet();
    var timestamp = new Date();

    sheet.appendRow([
      timestamp,
      name,
      trim(data.company),
      email,
      phone,
      trim(data.services),
      trim(data.employees),
      trim(data.preferredContact),
      message,
      data.consent ? 'Yes' : 'No',
      trim(data.page)
    ]);

    // --- Optional email notification ---------------------------------------
    if (CONFIG.NOTIFY_EMAIL) {
      notify({
        name: name,
        company: trim(data.company),
        email: email,
        phone: phone,
        services: trim(data.services),
        employees: trim(data.employees),
        preferredContact: trim(data.preferredContact),
        message: message,
        page: trim(data.page),
        timestamp: timestamp
      });
    }

    return respond({ ok: true });
  } catch (err) {
    console.error('Enquiry handler failed: ' + err);
    return respond({ ok: false, error: 'server_error' });
  }
}

/**
 * Health check — opening the Web App URL in a browser should show this.
 */
function doGet() {
  return respond({ ok: true, service: 'ANK HR Services enquiry handler' });
}

/* ------------------------------- helpers -------------------------------- */

function respond(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON
  );
}

function trim(value) {
  return value === null || value === undefined ? '' : String(value).trim();
}

function getSheet() {
  var book = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = book.getSheetByName(CONFIG.SHEET_NAME);

  if (!sheet) {
    sheet = book.insertSheet(CONFIG.SHEET_NAME);
  }

  // Create (or repair) the header row the first time it is needed.
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    var header = sheet.getRange(1, 1, 1, HEADERS.length);
    header.setFontWeight('bold');
    header.setBackground('#08244F');
    header.setFontColor('#FFFFFF');
    sheet.setFrozenRows(1);
    sheet.setColumnWidth(1, 150); // Timestamp
    sheet.setColumnWidth(2, 160); // Name
    sheet.setColumnWidth(3, 170); // Company
    sheet.setColumnWidth(4, 200); // Email
    sheet.setColumnWidth(6, 230); // Services
    sheet.setColumnWidth(9, 420); // Message
  }

  return sheet;
}

function notify(enquiry) {
  var subject =
    'New website enquiry — ' +
    enquiry.name +
    (enquiry.company ? ' (' + enquiry.company + ')' : '');

  var lines = [
    'A new enquiry was submitted on the ANK HR Services website.',
    '',
    'Name:              ' + enquiry.name,
    'Company:           ' + (enquiry.company || '—'),
    'Email:             ' + (enquiry.email || '—'),
    'Phone:             ' + (enquiry.phone || '—'),
    'Services:          ' + (enquiry.services || '—'),
    'Employees:         ' + (enquiry.employees || '—'),
    'Preferred contact: ' + (enquiry.preferredContact || 'No preference'),
    'Submitted from:    ' + (enquiry.page || '—'),
    'Received:          ' + enquiry.timestamp,
    '',
    'Requirement details',
    '-------------------',
    enquiry.message,
    '',
    'Open the enquiry sheet: ' + SpreadsheetApp.getActiveSpreadsheet().getUrl()
  ];

  MailApp.sendEmail({
    to: CONFIG.NOTIFY_EMAIL,
    subject: subject,
    body: lines.join('\n'),
    replyTo: enquiry.email || undefined,
    name: 'ANK HR Services website'
  });
}

/**
 * Run this once from the Apps Script editor to confirm the sheet and the
 * email notification are both working. It writes one test row.
 */
function runSelfTest() {
  var fake = {
    postData: {
      contents: JSON.stringify({
        name: 'Test Enquiry',
        company: 'Self test',
        email: 'test@example.com',
        phone: '9700369225',
        services: 'Payroll Management',
        employees: '1 – 25',
        preferredContact: 'Email',
        message: 'This is a self-test row. Delete it once setup is confirmed.',
        consent: 'Yes',
        page: '/contact/',
        website: '',
        startedAt: String(Date.now() - 10000)
      })
    }
  };
  var out = doPost(fake);
  console.log(out.getContent());
}
