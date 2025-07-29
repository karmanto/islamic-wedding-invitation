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
  ],

  wishes: [
    {
      id: 1,
      name: "John Doe",
      message: "Wishing you both a lifetime of love, laughter, and happiness! 🎉 May this special day mark the beginning of an amazing journey together.",
      timestamp: "2024-12-24T23:20:00Z",
      attending: "attending"
    },
    {
      id: 2,
      name: "Natalie",
      message: "Congratulations on your wedding day! Your love story inspires us all. May your marriage be filled with endless joy and companionship.",
      timestamp: "2024-12-24T23:20:00Z",
      attending: "attending"
    },
    {
      id: 3,
      name: "Muhammad Rifqi",
      message: "Congratulations on your special day! May Allah bless your union with happiness, health, and prosperity. Amin.",
      timestamp: "2024-12-25T23:08:09Z",
      attending: "maybe"
    },
    {
      id: 4,
      name: "Sarah Johnson",
      message: "What a beautiful celebration! Your love shines through in everything you do. Wishing you many wonderful years together.",
      timestamp: "2024-12-25T14:30:00Z",
      attending: "attending"
    },
    {
      id: 5,
      name: "David Chen",
      message: "Your wedding day is just the beginning of a grand adventure. May you always support each other through life's ups and downs.",
      timestamp: "2024-12-26T08:15:00Z",
      attending: "not-attending"
    },
    {
      id: 6,
      name: "Emma Wilson",
      message: "So happy to witness this beautiful moment! May your love continue to grow stronger with each passing day.",
      timestamp: "2024-12-26T17:45:00Z",
      attending: "attending"
    },
    {
      id: 7,
      name: "Michael Brown",
      message: "Wishing you both endless happiness and a lifetime of cherished memories. Your love story is truly inspiring!",
      timestamp: "2024-12-27T12:22:00Z",
      attending: "maybe"
    },
    {
      id: 8,
      name: "Lisa Anderson",
      message: "Your wedding day marks the beginning of a beautiful new chapter. May your love continue to flourish.",
      timestamp: "2024-12-27T19:05:00Z",
      attending: "attending"
    },
    {
      id: 9,
      name: "James Taylor",
      message: "Congratulations on your special day! Your commitment to each other is truly admirable. Wishing you many happy returns.",
      timestamp: "2024-12-28T10:10:00Z",
      attending: "attending"
    },
    {
      id: 10,
      name: "Olivia Martinez",
      message: "May your marriage be filled with love, laughter, and countless joyful moments. You make a perfect couple!",
      timestamp: "2024-12-28T15:30:00Z",
      attending: "attending"
    },
    {
      id: 11,
      name: "Robert Garcia",
      message: "Your wedding day is a celebration of love that inspires everyone around you. Wishing you all the best for the future.",
      timestamp: "2024-12-29T09:45:00Z",
      attending: "attending"
    },
    {
      id: 12,
      name: "Sophia Rodriguez",
      message: "Congratulations on your marriage! May your life together be filled with endless happiness and mutual understanding.",
      timestamp: "2024-12-29T14:20:00Z",
      attending: "attending"
    },
    {
      id: 13,
      name: "William Hernandez",
      message: "Your love story is one for the books! Wishing you a lifetime of happiness and companionship.",
      timestamp: "2024-12-30T11:15:00Z",
      attending: "not-attending"
    },
    {
      id: 14,
      name: "Emily Lopez",
      message: "What a beautiful celebration! Your commitment to each other is truly touching. May your marriage be blessed.",
      timestamp: "2024-12-30T16:40:00Z",
      attending: "attending"
    },
    {
      id: 15,
      name: "Daniel Lee",
      message: "Congratulations on your special day! Your love gives hope to all of us searching for true companionship.",
      timestamp: "2024-12-31T08:30:00Z",
      attending: "maybe"
    },
    {
      id: 16,
      name: "Megan Walker",
      message: "Your wedding day marks the beginning of a wonderful journey. May you always cherish each moment together.",
      timestamp: "2024-12-31T13:25:00Z",
      attending: "attending"
    },
    {
      id: 17,
      name: "Christopher Hall",
      message: "Wishing you both endless happiness and a lifetime of beautiful memories. Your love story is truly inspiring!",
      timestamp: "2025-01-01T10:15:00Z",
      attending: "attending"
    },
    {
      id: 18,
      name: "Ashley Young",
      message: "Your wedding day is a celebration of love that touches everyone's heart. Wishing you all the best for the future.",
      timestamp: "2025-01-01T15:50:00Z",
      attending: "attending"
    },
    {
      id: 19,
      name: "Matthew King",
      message: "Congratulations on your marriage! May your life together be filled with love, laughter, and countless joyful moments.",
      timestamp: "2025-01-02T09:30:00Z",
      attending: "maybe"
    },
    {
      id: 20,
      name: "Jessica Wright",
      message: "Your love story is one for the books! Wishing you a lifetime of happiness and companionship.",
      timestamp: "2025-01-02T14:40:00Z",
      attending: "attending"
    }
  ]
};

export default config;