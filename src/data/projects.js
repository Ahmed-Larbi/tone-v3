// projects.js
import falahPhoto from './falah/image1.png'
import falahPhoto2 from './falah/image2.png'
import falahPhoto3 from './falah/image3.png'
import calendar from "./calendar.png";
import square from "./square.png"

const projectsData = [
  {
    id: 1,
    breadcrumb: ["Home", "Projects", "Al Falah Villa"],
    title: "Al Falah Villa",
    details: [
      { label: "Project Duration", value: "40 Days (Estimated)", icon: calendar  },
      { label: "Total Area", value: "600 SQM", icon: square  }
    ],
    images: [
      falahPhoto,
      falahPhoto2,
      falahPhoto3
    ],
    content: [
      "Lorem ipsum dolor sit amet...",
      "More detailed description here..."
    ],
    recentProjects: [
      { image: falahPhoto, title: "Palm Jumeirah Residence", category: "Category A" },
      { image: falahPhoto, title: "Project Title", category: "Category B" },
      { image: falahPhoto, title: "Project Title", category: "Category B" }

    ]
  },
  {
    id: 2,
    breadcrumb: ["Home", "Projects", "Palm Jumeirah Residence"],
    title: "Palm Jumeirah Residence",
    details: [
      { label: "Project Duration", value: "30 Days" },
      { label: "Total Area", value: "450 SQM" }
    ],
    images: [
      "/path/to/another-image1.jpg",
      "/path/to/another-image2.jpg"
    ],
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Additional description content here."
    ],
    recentProjects: [
      { image: "/path/to/another-recent1.jpg", title: "Project Title B", category: "Category C" },
      { image: "/path/to/another-recent2.jpg", title: "Project Title D", category: "Category D" }
    ]
  }
];

export default projectsData;
