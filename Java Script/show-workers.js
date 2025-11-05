
const workers = [
  { name: "Ramesh Kumar", job: "Electrician", experience: "3 Years", location: "Lucknow", phone: "9876543210", img: "https://cdn-icons-png.flaticon.com/512/1995/1995574.png" },
  { name: "Sohan Lal", job: "Plumber", experience: "2 Years", location: "Kanpur", phone: "9988776655", img: "https://cdn-icons-png.flaticon.com/512/921/921094.png" },
  { name: "Anil Verma", job: "Painter", experience: "4 Years", location: "Varanasi", phone: "9090909090", img: "https://cdn-icons-png.flaticon.com/512/2977/2977985.png" },
  { name: "Vikas Singh", job: "Construction Worker", experience: "5 Years", location: "Prayagraj", phone: "8765432109", img: "https://cdn-icons-png.flaticon.com/512/2814/2814677.png" },
  { name: "Arjun Das", job: "Welder", experience: "3 Years", location: "Gorakhpur", phone: "8877665544", img: "https://cdn-icons-png.flaticon.com/512/2576/2576645.png" },
  { name: "Karan Gupta", job: "Carpenter", experience: "6 Years", location: "Ayodhya", phone: "9123456789", img: "https://cdn-icons-png.flaticon.com/512/1995/1995528.png" },
  { name: "Deepak Sharma", job: "Mechanic", experience: "4 Years", location: "Noida", phone: "9812345678", img: "https://cdn-icons-png.flaticon.com/512/921/921087.png" },
  { name: "Manoj Patel", job: "Gardener", experience: "2 Years", location: "Jhansi", phone: "9012345678", img: "https://cdn-icons-png.flaticon.com/512/4320/4320341.png" },
  { name: "Rajeev Mishra", job: "Driver", experience: "5 Years", location: "Meerut", phone: "9876501234", img: "https://cdn-icons-png.flaticon.com/512/921/921077.png" },
  { name: "Santosh Yadav", job: "Mason", experience: "4 Years", location: "Bareilly", phone: "9345678901", img: "https://cdn-icons-png.flaticon.com/512/921/921096.png" },
  { name: "Mukesh Chauhan", job: "Tailor", experience: "3 Years", location: "Agra", phone: "9234567890", img: "https://cdn-icons-png.flaticon.com/512/921/921090.png" },
  { name: "Vineet Kumar", job: "Cook", experience: "5 Years", location: "Delhi", phone: "9654321987", img: "https://cdn-icons-png.flaticon.com/512/2922/2922510.png" },
  { name: "Alok Pandey", job: "Security Guard", experience: "3 Years", location: "Lucknow", phone: "9765432198", img: "https://cdn-icons-png.flaticon.com/512/4320/4320398.png" },
  { name: "Sunil Rawat", job: "Cleaner", experience: "2 Years", location: "Kanpur", phone: "9345678210", img: "https://cdn-icons-png.flaticon.com/512/4320/4320340.png" },
  { name: "Harish Tiwari", job: "AC Technician", experience: "4 Years", location: "Ghaziabad", phone: "9123098765", img: "https://cdn-icons-png.flaticon.com/512/4320/4320330.png" }
];

const workerList = document.getElementById("workerList");

workers.forEach(worker => {
  const card = document.createElement("div");
  card.className = "worker-card";

  card.innerHTML = `
    <img src="${worker.img}" alt="${worker.name}">
    <h3>${worker.name}</h3>
    <p><strong>${worker.job}</strong></p>
    <p>${worker.experience}</p>
    <p>${worker.location}</p>
    <button onclick="callWorker('${worker.phone}')">📞 Call Now</button>
    <button onclick="whatsappWorker('${worker.phone}')">💬 WhatsApp</button>
  `;

  workerList.appendChild(card);
});

function callWorker(number) {
  window.location.href = `tel:${number}`;
}

function whatsappWorker(number) {
  window.open(`https://wa.me/${number}`, "_blank");
}
card.innerHTML = `
  <h3>${worker.job}</h3>
  <p>Experience: ${worker.experience}</p>
  <p>Location: ${worker.location}</p>
  <button class="call-btn" onclick="callWorker('${worker.phone}')">📞 Call Now</button>
  <button class="whatsapp-btn" onclick="whatsappWorker('${worker.phone}')">💬 WhatsApp</button>
`;
