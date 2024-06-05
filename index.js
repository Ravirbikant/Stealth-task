const users = [
  {
    name: "Ravi Kumar",
    email: "ravi.kumar@example.com",
    phone: "918273645101",
    address: {
      street: "MG Road",
      city: "Bangalore",
    },
  },
  {
    name: "Sita Sharma",
    email: "sita.sharma@example.com",
    phone: "917263546102",
    address: {
      street: "Gandhi Nagar",
      city: "Delhi",
    },
  },
  {
    name: "Aman Verma",
    email: "aman.verma@example.com",
    phone: "918273645103",
    address: {
      street: "Park Street",
      city: "Kolkata",
    },
  },
  {
    name: "Rani Singh",
    email: "rani.singh@example.com",
    phone: "917263546104",
    address: {
      street: "Marine Drive",
      city: "Mumbai",
    },
  },
  {
    name: "Vikas Gupta",
    email: "vikas.gupta@example.com",
    phone: "918273645105",
    address: {
      street: "Sector 15",
      city: "Chandigarh",
    },
  },
  {
    name: "Priya Jain",
    email: "priya.jain@example.com",
    phone: "917263546106",
    address: {
      street: "Anna Nagar",
      city: "Chennai",
    },
  },
  {
    name: "Karan Kapoor",
    email: "karan.kapoor@example.com",
    phone: "918273645107",
    address: {
      street: "Lal Chowk",
      city: "Srinagar",
    },
  },
  {
    name: "Neha Patel",
    email: "neha.patel@example.com",
    phone: "917263546108",
    address: {
      street: "CG Road",
      city: "Ahmedabad",
    },
  },
  {
    name: "Aakash Mehta",
    email: "aakash.mehta@example.com",
    phone: "918273645109",
    address: {
      street: "Banjara Hills",
      city: "Hyderabad",
    },
  },
  {
    name: "Divya Desai",
    email: "divya.desai@example.com",
    phone: "917263546110",
    address: {
      street: "Raj Bhavan Road",
      city: "Pune",
    },
  },
];

const container = document.getElementById("user-cards-container");

users.map((user) => {
  const card = document.createElement("div");
  card.className = "card";

  const name = document.createElement("h2");
  name.textContent = user.name;
  card.appendChild(name);

  const email = document.createElement("p");
  email.textContent = `Email: ${user.email}`;
  card.appendChild(email);

  const phone = document.createElement("p");
  phone.textContent = `Phone: ${user.phone}`;
  card.appendChild(phone);

  const address = document.createElement("p");
  address.className = "address";
  address.textContent = `Address: ${user.address.street}, ${user.address.city}`;
  card.appendChild(address);

  container.appendChild(card);
});
