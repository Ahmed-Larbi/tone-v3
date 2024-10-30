// projects.js
import calendar from "./calendar.png";
import square from "./square.png"
// projects.js
export const flowerAndCoffeeShopImages = [
  require('./Flowerandcoffeeshop/1.jpg'),
  require('./Flowerandcoffeeshop/2.jpg'),
  require('./Flowerandcoffeeshop/3.jpg'),
  require('./Flowerandcoffeeshop/4.jpg'),
  require('./Flowerandcoffeeshop/5.jpg')
];

// Garhoud Office images
export const garhoudOfficeImages = [
  require('./GarhoudOffice/ENTRY-1.png'),
  require('./GarhoudOffice/LOUNGE-1.png'),
  require('./GarhoudOffice/MEETING--1.png'),
  require('./GarhoudOffice/RECEPTION-1.png'),
  require('./GarhoudOffice/manager office-1.png')
];


export const nadelshebaImages = [
  require('./NadElShebaVilla/BATHROOM CAM1.jpg'),
  require('./NadElShebaVilla/BOYS ROOM 1.png'),
  require('./NadElShebaVilla/Boys room 2.png'),
  require('./NadElShebaVilla/DRESSING SHOT.jpg'),
  require('./NadElShebaVilla/FINAL HALL CAM 2-FILTER-.jpg')
];

export const officeImages = [
  require('./QuiteOffice/17.png'),
  require('./QuiteOffice/18.png'),
  require('./QuiteOffice/19.png'),
  require('./QuiteOffice/20.png'),
  require('./QuiteOffice/elevation.png')
];

// Other icons
export const icons = {
  calendar: require('./calendar.png'),
  square: require('./square.png')
};



const projectsData = [
  {
    id: 1,
    breadcrumb: ["Home", "Projects", "Flower and Coffee Shop"],
    title: "Flower and Coffee Shop",
    details: [
      { label: "Project Duration", value: "40 Days (Estimated)", icon: calendar  },
      { label: "Total Area", value: "600 SQM", icon: square  }
    ],
    images:flowerAndCoffeeShopImages,
    content: [
      `Located in the heart of Al Ain, this unique project seamlessly blends the elegance of a flower shop with the warmth of a cozy coffee shop, creating an inviting and sensory-rich experience for visitors. The owner envisioned a space where customers can enjoy a serene ambiance, surrounded by beautifully arranged flowers, while sipping on carefully crafted coffee and indulging in light pastries. This dual-purpose establishment is designed to captivate the senses and offer a refreshing experience to those who appreciate the finer details of both nature and design.`,
      `
      The space exudes sophistication and warmth, with a soft color palette and elegant floral arrangements displayed throughout. The layout incorporates natural lighting to enhance the organic beauty of the flowers, complemented by sleek, modern furniture in shades of rich red and pastel pink, along with golden accents. The cafe’s interior features a perfect mix of floral décor and contemporary design elements, creating a luxurious yet welcoming environment.`,
      `
      Visitors are invited to unwind, surrounded by nature-inspired design, and explore the beauty of fresh flowers while enjoying high-quality coffee. Whether it’s a quiet corner for reading or a vibrant space for socializing, the shop is designed to cater to a variety of customers, offering them a multi-sensory experience that combines the fresh aroma of flowers with the rich scent of coffee.`
    ],
    recentProjects: [
      { image: garhoudOfficeImages[0], title: "Garhoud Office", id: 2, },
      { image: officeImages[0], title: "Quite Office", id: 4,  },
      { image: nadelshebaImages[0], title: "Nad AlSheba Villa", id: 3}

    ]
  },
  {
    id: 2,
    breadcrumb: ["Home", "Projects", "Garhoud Office"],
    title: "Garhoud Office",
    details: [
      { label: "Project Duration", value: "40 Days (Estimated)", icon: calendar  },
      { label: "Total Area", value: "600 SQM", icon: square  }
    ],
    images: garhoudOfficeImages,
    content: [
      `This luxurious office in Al Garhoud, Dubai, has been meticulously designed to combine elements of modern luxury with the calming influence of Zen Japanese aesthetics. The client, who regularly hosts high-profile individual clients, wanted to create a space that offers a unique atmosphere—one that exudes sophistication while promoting relaxation and mindfulness. Each area has been carefully curated to ensure that visitors feel comfortable, inspired, and impressed by the office's distinct ambiance.
      `,
      `The design balances minimalism and elegance, blending natural materials like wood with sleek, contemporary finishes. The office features open spaces with natural light flooding through large windows, while warm, neutral tones create a soothing atmosphere. The furniture and layout take inspiration from Japanese Zen design, with clean lines, soft textures, and the strategic use of plants to bring a sense of nature indoors.
      `,
      `The manager’s office is both functional and stylish, featuring high-end furniture that conveys authority and comfort. The meeting room is designed to facilitate collaboration while ensuring privacy and a professional atmosphere. Meanwhile, the reception area is a masterpiece in itself, offering a luxurious yet welcoming first impression with minimalist décor and a touch of modern art.
      `,
      `The Zen-inspired lounge area provides clients with a tranquil space to relax, with soft lighting, plush seating, and a natural color palette that promotes calmness and creativity. This area, combined with the sleek reception, serves to reinforce the office’s high-end reputation while offering a sense of peacefulness uncommon in typical business settings.
      `,
      `The entire office is designed to cater to high-end individual clients, offering them an atmosphere of exclusivity. The unique design elements ensure that every space within the office contributes to a memorable experience, fostering both productivity and serenity.`,

    ],
    recentProjects: [
      { image: flowerAndCoffeeShopImages[0], title: "Flower and Coffee Shop", id: 1,},
      { image: officeImages[0], title: "Quite Office",  id:4, },
      { image: nadelshebaImages[0], title: "Nad AlSheba Villa", id: 3, }
    ]
  },
  {
    id: 3,
    breadcrumb: ["Home", "Projects", "Nad ElSheba Villa"],
    title: "Nad ElSheba Villa",
    details: [
      { label: "Project Duration", value: "40 Days (Estimated)", icon: calendar  },
      { label: "Total Area", value: "600 SQM", icon: square  }
    ],
    images: nadelshebaImages,
    content: [
    `This beautifully designed villa in Nad El Sheba, Dubai, is a perfect blend of modern luxury and family-oriented functionality. Tailored for a family, each space has been thoughtfully created to ensure comfort, elegance, and practicality. The villa features a combination of open living spaces, private bedrooms, and unique design elements that cater to both adults and children, fostering a balanced living environment.
    `,
    `The design adopts a minimalist approach with clean lines, neutral tones, and touches of luxury. The living room, with its large open space and elegant marble finishes, creates a warm yet sophisticated area for family gatherings. The kitchen, modern and sleek, is designed to be functional while maintaining an aesthetic harmony with the rest of the home.
    `,
    `The children's rooms have been tailored to inspire creativity and joy, with thematic designs like an outer space motif in the boys’ room, enhanced by soft, playful lighting that turns the room into a magical space at night. The girls' room exudes elegance and serenity, with soft pink tones and a chandelier centerpiece, creating a dream-like atmosphere.
    `,
    `The villa includes soundproof guest rooms to ensure privacy and comfort for visitors, while the bathrooms feature a modern mix of marble and vibrant textures for a luxurious touch. The overall layout maximizes space and natural light, with large windows and carefully chosen lighting fixtures that illuminate the villa beautifully both day and night.
    `,
    `Whether it’s the cozy, luxurious bedrooms or the vibrant, child-friendly spaces, this villa is designed to enhance family life, offering a peaceful retreat from the bustling city while maintaining a sense of modern luxury.
    `

    ],
    recentProjects: [
      { image: flowerAndCoffeeShopImages[0], title: "Flower and Coffee Shop", id: 1,},
      { image: garhoudOfficeImages[0], title: "Garhoud Office", id: 2  },
      { image: officeImages[0], title: "Quite Office", id: 4, }
    ]
  },
  {
    id: 4,
    breadcrumb: ["Home", "Projects", "Quite Office"],
    title: "Quite Office",
    details: [
      { label: "Project Duration", value: "40 Days (Estimated)", icon: calendar  },
      { label: "Total Area", value: "600 SQM", icon: square  }
    ],
    images: officeImages,
    content: [
        `Located in Dubai, this modern office space was created to provide employees with a harmonious balance between productivity and creativity. The design incorporates open workstations and private, soundproof rooms where employees can retreat for focused, quiet work sessions. The client envisioned a space that fosters creativity while ensuring comfort and functionality for all team members.
        `,
        `The office features a sleek, contemporary design with soft tones, clean lines, and modern lighting. Open workstations are complemented by quiet, isolated rooms where employees can enjoy peace and tranquility to brainstorm and work on creative projects without distractions. The use of greenery and modern furniture brings a touch of nature to the workspace, enhancing the overall atmosphere and encouraging a calm yet dynamic work environment.
        `,
        `The workspace is designed for versatility and practicality. While the open areas encourage collaboration and teamwork, the soundproof rooms offer a refuge for those needing uninterrupted focus. Each area has been thoughtfully crafted to maximize both space and comfort, ensuring that employees can work effectively and comfortably, whether individually or in groups.
        `,
        `This office design prioritizes the needs of modern workers by offering both collaborative and quiet zones. The blend of aesthetic appeal and practical functionality creates an inspiring environment that enhances creativity and productivity, making it the ideal workspace for professionals in a fast-paced business environment.`
    ],
    recentProjects: [
      { image: flowerAndCoffeeShopImages[0], title: "Flower and Coffee Shop", id: 1,},
      { image: nadelshebaImages[0], title: "Nad AlSheba Villa", id: 3  },
      { image: garhoudOfficeImages[0], title: "Garhoud Office", id: 2 }
    ]
  }
];

export default projectsData;
