/* =====================================================
   VOLTBLOOM — others/links.js
   ✏  Edit this ONE file to update ALL links sitewide.
   ===================================================== */

/* ---------- YOUR LINKS — EDIT THESE ---------- */
var VB = {
 
  course_arduino:  'https://docs.google.com/forms/d/YOUR_ID/viewform',
  course_iot:      'https://docs.google.com/forms/d/YOUR_ID/viewform',
  course_robotics: 'https://docs.google.com/forms/d/YOUR_ID/viewform',
  course_pcb:      'https://docs.google.com/forms/d/YOUR_ID/viewform',
  course_sensor:   'https://docs.google.com/forms/d/YOUR_ID/viewform',
  course_power:    'https://docs.google.com/forms/d/YOUR_ID/viewform',
  /* Social media */
  github:    'https://github.com/voltbloom',
  whatsapp:  'https://wa.me/1234567890',
  youtube:   'https://youtube.com/@voltbloom',
  twitter:   'https://twitter.com/voltbloom',
  instagram: 'https://instagram.com/voltbloom',

  /* Contact */
  email:    'hello@voltbloom.org',
  location: 'Nairobi, Kenya',
  hours:    'Mon–Fri  9 AM – 6 PM EAT',

  /* Event Google Sheets registration forms */
  ev_arduino:   'https://docs.google.com/forms/d/YOUR_FORM_ID_1/viewform',
  ev_hackathon: 'https://docs.google.com/forms/d/YOUR_FORM_ID_2/viewform',
  ev_pcb:       'https://docs.google.com/forms/d/YOUR_FORM_ID_3/viewform',

  /* Downloadable files (relative paths inside pdf/ folder) */
  dl_handbook:  'pdf/arduino-handbook.pdf',
  dl_code:      'pdf/starter-code.zip',
  dl_iot:       'pdf/iot-templates.zip',
  dl_pcb:       'pdf/pcb-cheatsheet.pdf',
  dl_sensors:   'pdf/sensor-datasheets.zip',

  /* Project GitHub repos */
  gh_irrigation: 'https://github.com/voltbloom/smart-irrigation',
  gh_robot:      'https://github.com/voltbloom/line-follower',
  gh_air:        'https://github.com/voltbloom/air-quality',
  gh_gesture:    'https://github.com/voltbloom/gesture-robot',
  gh_home:       'https://github.com/voltbloom/smart-home',
  gh_shield:     'https://github.com/voltbloom/vb-shield',

  /* Team member social links */
  alice_gh:    'https://github.com/alicemwangi',
  alice_wa:    'https://wa.me/254700000001',
  brian_gh:    'https://github.com/brianotieno',
  brian_wa:    'https://wa.me/254700000002',
  cynthia_gh:  'https://github.com/cynthiawanjiku',
  cynthia_wa:  'https://wa.me/254700000003',
  david_gh:    'https://github.com/davidkamau',
  david_wa:    'https://wa.me/254700000004',
};

/* ---------- AUTO-INJECT — do not edit below ---------- */
document.addEventListener('DOMContentLoaded', function () {

  /* data-vb="key" on <a> → sets href */
  document.querySelectorAll('[data-vb]').forEach(function (el) {
    var v = VB[el.getAttribute('data-vb')];
    if (v) el.href = v;
  });

  /* data-vbtxt="key" on any element → sets textContent */
  document.querySelectorAll('[data-vbtxt]').forEach(function (el) {
    var v = VB[el.getAttribute('data-vbtxt')];
    if (v) el.textContent = v;
  });

  /* data-vbmail="key" on <a> → mailto link + text */
  document.querySelectorAll('[data-vbmail]').forEach(function (el) {
    var v = VB[el.getAttribute('data-vbmail')];
    if (v) { el.href = 'mailto:' + v; el.textContent = v; }
  });
});
