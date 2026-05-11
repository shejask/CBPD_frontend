const fd = "-----123\r\nContent-Disposition: form-data; name=\"fullName\"\r\n\r\nJohn\r\n-----123\r\nContent-Disposition: form-data; name=\"passportPhoto\"; filename=\"test.jpg\"\r\nContent-Type: image/jpeg\r\n\r\nFAKEIMAGE\r\n-----123--\r\n";
fetch('http://localhost:3000/api/student', {
  method: 'POST',
  headers: {
    'Content-Type': 'multipart/form-data; boundary=---123'
  },
  body: fd
}).then(r => r.text()).then(t => console.log("RESPONSE:", t.substring(0, 200))).catch(e => console.error("ERROR:", e));
