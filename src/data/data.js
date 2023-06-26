import {
  AiOutlineHome,
  AiOutlineCalculator,
  AiOutlineSetting,
  AiOutlineShareAlt
} from "react-icons/ai";
import { RiUserLine } from "react-icons/ri";
import {
  FaRegLightbulb,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaDribble,
  FaShippingFast
} from "react-icons/fa";
import { CgCardClubs } from "react-icons/cg";
import { TbMailOpened } from "react-icons/tb";
import { GoMail } from "react-icons/go";
import { GiChart } from "react-icons/gi";
import { FiLayers } from "react-icons/fi";
import { BsPhone, BsPhoneVibrate, BsVectorPen } from "react-icons/bs";
import {
  MdShareLocation,
  MdLocalShipping,
  MdOutlineLocalShipping
} from "react-icons/md";

export const menu = [
  {
    id: 1,
    text: "home",
    url: "/",
    icon: <AiOutlineHome />
  },
  {
    id: 2,
    text: "resume",
    url: "/resume",
    icon: <RiUserLine />
  },
  {
    id: 3,
    text: "portfolio",
    url: "/portfolio",
    icon: <FaRegLightbulb />
  },
  {
    id: 4,
    text: "blog",
    url: "/blog",
    icon: <CgCardClubs />
  },
  {
    id: 5,
    text: "contact",
    url: "/contact",
    icon: <TbMailOpened />
  }
];

export const socialIcon = [
  {
    id: 1,
    icon: <FaFacebookF />,
    class: "facebook"
  },
  {
    id: 2,
    icon: <FaTwitter />,
    class: "twitter"
  },
  {
    id: 3,
    icon: <FaDribble />,
    class: "dribble"
  },
  {
    id: 4,
    icon: <FaInstagram />,
    class: "instagram"
  }
];

export const side = [
  {
    id: 1,
    num: 85,
    text: "Nackend Development",
    class: "skill1"
  },
  {
    id: 2,
    num: 92,
    text: "Frontend Development",
    class: "skill2"
  },
  {
    id: 3,
    num: 71,
    text: "Illustration",
    class: "skill3"
  }
];

export const about = [
  {
    details: [
      {
        text: "My Name",
        value: "Mayur Gangwani",
        icon: <RiUserLine />
      },
      {
        text: "My Age",
        value: "30 Years 98 Days",
        icon: <AiOutlineCalculator />
      },
      { text: "Email Address", value: "mayur@example.com", icon: <GoMail /> },
      {
        text: "Phone Number",
        value: "+91-8007456245",
        icon: <BsPhoneVibrate />
      },
      {
        text: "Address",
        value: "Click here to view Map",
        icon: <MdShareLocation />
      }
    ],

    bio: [
      {
        para1:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida risus commodo. Quis ipsum suspendisse ultrices gravida.",
        para2:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        para3:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        images: "./images/bio.png"
      }
    ],

    services: [
      {
        id: 1,
        icon: <AiOutlineSetting />,
        title: "Web Development",
        text: "from scratch",
        desc:
          "Sunil explicabo. Nemo enim ipsam voluptatem quia sit voluptas aspernatur."
      },
      {
        id: 2,
        icon: <BsVectorPen />,
        title: "UX Recherche",
        text: "Data Collector",
        desc:
          "Sunil explicabo. Nemo enim ipsam voluptatem quia sit voluptas aspernatur."
      },
      {
        id: 3,
        icon: <FiLayers />,
        title: "UI Design",
        text: "Creative Design",
        desc:
          "Sunil explicabo. Nemo enim ipsam voluptatem quia sit voluptas aspernatur."
      },
      {
        id: 4,
        icon: <BsPhone />,
        title: "Application",
        text: "Stand Alone",
        desc:
          "Sunil explicabo. Nemo enim ipsam voluptatem quia sit voluptas aspernatur."
      },
      {
        id: 5,
        icon: <AiOutlineShareAlt />,
        title: "Social Media",
        text: "Digital Product",
        desc:
          "Sunil explicabo. Nemo enim ipsam voluptatem quia sit voluptas aspernatur."
      },
      {
        id: 6,
        icon: <GiChart />,
        title: "Search Engine",
        text: "Page Rank",
        desc:
          "Sunil explicabo. Nemo enim ipsam voluptatem quia sit voluptas aspernatur."
      }
    ],

    review: [
      {
        id: 1,
        desc:
          "They'll have to make the best of things its an uphill climb. Californ'y is the place you oughtto be So they loaded up the truck and moved to Beverly. Hills thatSwimmin' pools movie stars.Maybe you and me were never meant to be.",
        name: "Tom Holland",
        link: "google.com",
        cover: "./images/aut1.jpg"
      },
      {
        id: 2,
        desc:
          "They'll have to make the best of things its an uphill climb. Californ'y is the place you oughtto be So they loaded up the truck and moved to Beverly. Hills thatSwimmin' pools movie stars.Maybe you and me were never meant to be.",
        name: "Mayur Gangwani",
        link: "google.com",
        cover: "./images/aut2.jpg"
      },
      {
        id: 3,
        desc:
          "They'll have to make the best of things its an uphill climb. Californ'y is the place you oughtto be So they loaded up the truck and moved to Beverly. Hills thatSwimmin' pools movie stars.Maybe you and me were never meant to be.",
        name: "Cristiano Messi",
        link: "google.com",
        cover: "./images/aut3.jpg"
      }
    ],

    price: [
      {
        id: 1,
        icon: <MdOutlineLocalShipping />,
        title: "STARTER PACKAGE",
        desc: "Suitable for small business or organization",
        pri: "1000.00"
      },
      {
        id: 2,
        icon: <MdLocalShipping />,
        title: "BUSINESS PACKAGE",
        desc: "Suitable for small business or organization",
        pri: "2700.00"
      },
      {
        id: 3,
        icon: <FaShippingFast />,
        title: "PRO PACKAGE",
        desc: "Suitable for small business or organization",
        pri: "6700.00"
      }
    ]
  }
];
