// src/config.js

const config = {
  // Meta Information
  meta: {
    title: "Triguna & Izza Wedding",
    description: "We are getting married and would love for you to be a part of our celebration.",
    ogImage: "/images/og-image.jpg",
    favicon: "/images/favicon.ico",
  },

  // Couple Information
  couple: {
    weddingInvitation: "Tanpa mengurangi rasa hormat.\nKami mengundang Bapak/Ibu/Saudara/i\nserta Kerabat sekalian untuk menghadiri\nacara pernikahan kami :",
    groomName: "Triguna",
    brideName: "Izza",
    groomFullName: "dr. Trigunadi Sejahtera",
    brideFullName: "Fatmawatia Izzati",
    groomImage: "/images/groom.jpg",
    brideImage: "/images/bride.jpg",
    hashtag: "#TriganaIzzaWedding2024",
    groomSibling: "ketiga",
    groomFather: "Prof.Dr.dr. Sanusi",
    groomMother: "Prof.Dr.dr. Irmawati",
    brideSibling: "kedua",
    brideFather: "Ir. Darmawan",
    brideMother: "Ayu Dewi",
  },

  galleries: [
    "/galleries/image8.jpg",
    "/galleries/image1.jpg",
    "/galleries/image2.jpg",
    "/galleries/image3.jpg",
    "/galleries/image4.jpg",
    "/galleries/image5.jpg",
    "/galleries/image6.jpg",
    "/galleries/image7.jpg",
  ],

  // Event Details
  event: {
    date: "2025-01-24",
    time: "10:00",
    timezone: "WIB",
    dateTime: "2025-01-24T10:00:47Z", // ISO 8601 format
    venue: {
      name: "Grand Ballroom, Hotel Majesty",
      address: "Jl. Example Street No. 123, City Name",
      date: "2025-12-24",
      time: "10:00 - 17:00 WIB",
      phone: "+62 123 4567 890",
      maps_url: "https://maps.app.goo.gl/rztZVvepvKvg63G28",
      maps_embed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15926.82271125763!2d98.89800620000001!3d3.6543981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30314ba146ca72b1%3A0x79d40206bc7bd50e!2sIndomaret%20Pantai%20Labu%20Pekan!5e0!3m2!1sen!2sid!4v1736667827746!5m2!1sen!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    },
  },

  eventDetails: [{
    title: "Akad Nikah - Triguna & Izza Wedding",
    date: "2025-12-24",
    startTime: "10:00",
    endTime: "11:00",
    timeZone: "Asia/Jakarta",
    location: "Grand Ballroom, Hotel Majesty",
    description: "We invite you to join us in celebrating our wedding ceremony."
  }, {
    title: "Resepsi Nikah - Triguna & Izza Wedding",
    date: "2025-12-24",
    startTime: "11:00",
    endTime: "17:00",
    timeZone: "Asia/Jakarta",
    location: "Grand Ballroom, Hotel Majesty",
    description: "We invite you to join us in celebrating our wedding ceremony."
  }, {
    title: "Live Streaming - Triguna & Izza Wedding",
    date: "2025-12-24",
    startTime: "10:00",
    endTime: "17:00",
    timeZone: "Asia/Jakarta",
    location: {
      instagram: "https://www.instagram.com",
      youtube: "https://www.youtube.com",
      facebook: "",
      twitter: "",
    },
    description: "We invite you to join us in celebrating our wedding ceremony."
  }],

  loveStory: [
    {
      date: "12 Januari 2015",
      title: "Pertemuan Pertama",
      description: "Kami pertama kali dikenalkan oleh keluarga sebagai perantara, karena kami masing-masing mencari pasangan yang baik dalam agama dan akhlaknya. Dari perkenalan ini, kami mulai berkomunikasi dengan niat yang tulus."
    },
    {
      date: "20 Juni 2019",
      title: "Doa dan Istikharah",
      description: "Setelah saling mengenal, kami berdua melakukan istikharah, memohon petunjuk Allah untuk keputusan yang terbaik dalam memilih pasangan hidup."
    },
    {
      date: "19 April 2024",
      title: "Lamaran (Khitbah)",
      description: "Dengan restu orang tua, kami melanjutkan ke tahap khitbah (lamaran), sebagai langkah menuju pernikahan yang insya Allah penuh berkah."
    },
    {
      date: "01 Januari 2025",
      title: "Komitmen Pernikahan",
      description: "Kami siap melanjutkan hubungan ini ke pernikahan, dengan niat untuk menjadi pasangan yang saling mendukung dalam kebaikan dan taat kepada Allah SWT."
    },
  ],

  audio: {
    src: "/audio/backsound.mp3",
    title: "Fulfilling Humming",
    artist: "Nasheed",
    autoplay: true,
    loop: true,
    toastDuration: 5000,
    pauseOnInactive: true,
    resumeOnReturn: true, 
  },

  bankAccounts: [
    {
      bank: 'Bank Central Asia',
      accountNumber: '1234567890',
      accountName: 'FULAN',
      logo: '/path/to/bca-logo.png'
    },
    {
      bank: 'Bank Mandiri',
      accountNumber: '0987654321',
      accountName: 'FULANA',
      logo: '/path/to/mandiri-logo.png'
    }
  ]
};

export default config;