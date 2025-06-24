// JavaScript เบื้องต้นสำหรับเว็บไซต์โรงเรียนสีฟ้า
console.log('Welcome to Blue School Website!');

function calculatePhysio() {
    const weight = parseFloat(document.getElementById('weight').value);
    const minutes = parseFloat(document.getElementById('minutes').value);
    const activity = parseFloat(document.getElementById('activity').value);
    const age = parseFloat(document.getElementById('age').value);
    const intensity = parseFloat(document.getElementById('intensity').value);
    if (isNaN(weight) || isNaN(minutes) || isNaN(activity) || isNaN(age) || isNaN(intensity)) {
        document.getElementById('result').innerHTML = '<span style="color:red;">กรุณากรอกข้อมูลให้ครบถ้วน</span>';
        return;
    }
    // คำนวณพลังงานที่ใช้ (kcal) = METs x น้ำหนัก(kg) x ชั่วโมง
    const hours = minutes / 60;
    const energy = activity * weight * hours;
    // สมมุติค่าพลังงานกล้ามเนื้อ = 40% ของพลังงานรวม
    const muscleEnergy = energy * 0.4;
    // ค่ากายภาพบำบัด (สมมุติคิด 500 บาท/ชั่วโมง)
    const physioCost = Math.ceil(hours * 500);
    // คำนวณอัตราการเต้นของหัวใจโดยประมาณ
    // HRmax = 220 - อายุ, Target HR = HRmax * %intensity
    const hrMax = 220 - age;
    const targetHR = Math.round(hrMax * intensity);
    document.getElementById('result').innerHTML =
        `<b>พลังงานที่ใช้:</b> ${energy.toFixed(2)} kcal<br>` +
        `<b>ค่าพลังงานกล้ามเนื้อ:</b> ${muscleEnergy.toFixed(2)} kcal<br>` +
        `<b>ค่ากายภาพบำบัดโดยประมาณ:</b> ${physioCost} บาท<br>` +
        `<b>อัตราการเต้นของหัวใจเป้าหมาย:</b> ${targetHR} ครั้ง/นาที`;
}