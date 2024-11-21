// script.js
document.getElementById('translate-button').addEventListener('click', () => {
    const inputText = document.getElementById('input-text').value.trim();

    if (!inputText) {
        alert('กรุณากรอกข้อความภาษาบาลี');
        return;
    }

    // ตัวอย่างโค้ดแปลภาษา (จำลอง)
    const translation = mockTranslate(inputText);

    // แสดงผลลัพธ์
    document.getElementById('output-text').textContent = translation;
});

// ฟังก์ชันจำลองสำหรับแปลภาษา
function mockTranslate(text) {
    // ตัวอย่าง: ใส่คำแปลง่าย ๆ
    return `แปลความหมายของ "${text}" ได้ว่า: ตัวอย่างคำแปล`;
}
