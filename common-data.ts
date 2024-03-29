import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const companyName = "TheBunch.ai";

export const email = "a@b.com";
export const phone = "1234567890";
export const instagram = "thebunch.ai";
export const facebook = "people/The-Bunchai/100080487391695";
export const linkedIn = "thebunch-ai";
export const socialLinks = [
  {
    name: "email",
    id: email,
    link: `mailto:${email}`,
    icon: EmailRoundedIcon
  },
  {
    name: "instagram",
    id: instagram,
    link: `https://www.instagram.com/${instagram}`,
    icon: InstagramIcon
  },
  {
    name: "facebook",
    id: facebook,
    link: `https://www.facebook.com/${facebook}`,
    icon: FacebookIcon
  },
  {
    name: "linkedin",
    id: linkedIn,
    link: `https://www.linkedin.com/company/${linkedIn}`,
    icon: LinkedInIcon
  }
];

//navigation bar - header
export const navBarContent = {
  leftText: companyName,
  locationText: "Where are you?",
  nav: {
    links: [
      {
        text: "Home",
        link: "/"
      },
      {
        text: "All Events",
        link: "/events"
      },
      {
        text: "The Bucketlist Projects",
        link: "/projects/the-bucketlist-project"
      },
      {
        text: "Let's Collaborate",
        link: "/projects/collaborate"
      },
      {
        text: "About Us",
        link: "/about"
      },
      {
        text: "FAQs",
        link: "/faqs"
      }
    ]
  }
};

//footer
export const footerContent: {
  topText: string;
  nav: {
    text: string;
    link: string;
    isLong: boolean;
  }[];
  socials: {
    topText: string;
    links: typeof socialLinks;
  };
  attributes: {
    text: string;
    links: {
      [key: string]: {
        link: string;
        text: string;
      };
    };
  };
  bottomText: string;
} = {
  topText: companyName,
  nav: [
    {
      text: "Past Events",
      link: "/events?category=past",
      isLong: false
    },
    {
      text: "Upcoming Events",
      link: "/events?category=upcoming",
      isLong: false
    },
    {
      text: "The Bucketlist Project",
      link: "/bucketlist",
      isLong: true
    },
    {
      text: "Let's Collaborate",
      link: "/collaborate",
      isLong: false
    },
    {
      text: "FAQs",
      link: "/faqs",
      isLong: false
    }
  ],
  socials: {
    topText: "Follow us",
    // links: socialLinks.filter((social) => social.name !== "email")
    links: socialLinks
  },
  attributes: {
    // text: "Designed by <DESIGNER> | Developed by <DEVELOPER>",
    text: "Developed by <DEVELOPER>",
    links: {
      // "<DESIGNER>": {
      //   link: "https://www.linkedin.com/in/anjalijoshy/",
      //   text: "Anjali Joshy"
      // },
      "<DEVELOPER>": {
        link: "https://www.hymnsofweb.com",
        text: "Hymns Of Web"
      }
    }
  },
  bottomText: "2024 TheBunch.ai | All rights reserved"
};

export const meta: {
  [key: string]: {
    title: string;
    description: string;
    og: {
      title: string;
      description: string;
    };
  };
} = {
  home: {
    title: "TheBunch.ai | Home",
    description: "Home page of the app",
    og: {
      title: "TheBunch.ai | Home",
      description: "Home page of the app"
    }
  },
  events: {
    title: "TheBunch.ai | Events",
    description: "Events page of the app",
    og: {
      title: "TheBunch.ai | Events",
      description: "Events page of the app"
    }
  },
  projects: {
    title: "TheBunch.ai | Projects",
    description: "Projects page of the app",
    og: {
      title: "TheBunch.ai | Projects",
      description: "Projects page of the app"
    }
  },
  about: {
    title: "TheBunch.ai | About",
    description: "About page of the app",
    og: {
      title: "TheBunch.ai | About",
      description: "About page of the app"
    }
  },
  faqs: {
    title: "TheBunch.ai | FAQs",
    description: "FAQ page of the app",
    og: {
      title: "TheBunch.ai | FAQs",
      description: "FAQ page of the app"
    }
  },
  404: {
    title: "TheBunch.ai | Page Not Found",
    description: "404 page of the app",
    og: {
      title: "TheBunch.ai | Page Not Found",
      description: "404 page of the app"
    }
  }
};
