import Link from "next/link";

export const navLinkList = [
  {
    name: "Affiliate",
    url: "https://affiliate.zatiqeasy.com/",
  },
  {
    name: "Contact",
    url: "https://www.zatiq.com/contact-us",
  },
  {
    name: "About us",
    url: "https://www.zatiq.com/about-us",
  },
];

export const landingInfoList = [
  {
    iconUrl: "/assets/images/spark.svg",
    title: "Fastest E-commerce website builder",
    description: "Get your website up and running in just 10 seconds. Requires No code, with no complications, in no time.",
  },
  {
    iconUrl: "/assets/images/wallet.svg",
    title: "Streamlined payment gateway",
    description: "Apart from Bkash, Nogod or Rocket, ZatiqEasy has its own payment gateway ZSP that makes transactions easy and effortless.",
  },
  {
    iconUrl: "/assets/images/cart.svg",
    title: "Integrated delivery system",
    description: "With delivery partners like Steadfast and Patho to RedX and complete the sales process.",
  },
];

export const landingStatList = [
  {
    title: "Fastetst",
    description: "ecommerce builder in Bangladesh",
  },
  {
    title: "50,000+",
    description: "sellers worldwide have trusted our platform",
  },
  {
    title: "100,000+",
    description: "monthly orders processed worldwide",
  },
  { title: "1500 M+", description: "in revenue generated by sellers just in 2024!" },
];

export const landingPricingList = [
  {
    id: 0,
    name: "Starter plan",
    iconUrl: "/assets/images/lock.png",
    description: "Start your website for free with our starter plan!",
    price: "0",
    buttonIconUrl: "/assets/images/add.svg",
    buttonText: "Launch now",
    redirectUrl: "#",
    color: {
      button: "#334155",
      text: "#0F172A",
      border: "#64748B",
    },
  },
  {
    id: 1,
    name: "Premium plan",
    iconUrl: "/assets/images/diamond.png",
    description: "Get Access to unlimited features with our premium plan at just 500 taka per month!",
    price: "500",
    buttonIconUrl: "/assets/images/diamond.svg",
    buttonText: "Subscribe now",
    redirectUrl: "#",
    color: {
      button: "#6634FF",
      text: "#541DFF",
      border: "#541DFF",
    },
  },
];

export const socialLinks = [
  {
    name: "Facebook",
    iconUrl: "/assets/images/facebook.svg",
    url: "https://www.facebook.com/zatiqeasy",
  },
  {
    name: "Linkedin",
    iconUrl: "/assets/images/linkedin.svg",
    url: "https://www.linkedin.com/company/zatiqeasy/",
  },
  {
    name: "Youtube",
    iconUrl: "/assets/images/youtube.svg",
    url: "https://www.youtube.com/@zatiqeasy",
  },
  {
    name: "Instagram",
    iconUrl: "/assets/images/instagram.svg",
    url: "https://www.instagram.com/zatiqeasy/",
  },
  {
    name: "Telegram",
    iconUrl: "/assets/images/telegram.svg",
    url: "https://t.me/zatiqeasy",
  },
  {
    name: "Tiktok",
    iconUrl: "/assets/images/tiktok.svg",
    url: "https://www.tiktok.com/@zatiqeasy",
  },
];

export const toolList = [
  {
    iconUrl: "/assets/images/plug.svg",
    title: "Connect your shop to Social Media pages for maximum visibility",
  },
  {
    iconUrl: "/assets/images/code.svg",
    title: "Optimize your ad campaigns with Meta Pixel",
  },
  {
    iconUrl: "/assets/images/box_rotate.svg",
    title: "Manage tags and track events using Google Tag Manager (GTM)",
  },
  {
    iconUrl: "/assets/images/inventory.svg",
    title: "Easy inventory setup and management",
  },
  {
    iconUrl: "/assets/images/server.svg",
    title: "Server side tracking",
  },
  {
    iconUrl: "/assets/images/warning.svg",
    title: "Check for fraud orders",
  },
];

export const impactList = [
  {
    imageUrl: "/assets/images/website_builder.png",
    title: (
      <p>
        Fastest E-commerce <br />
        website builder
      </p>
    ),
    description: "Get your website up and running in just 10 seconds. Requires No code, with no complications, in no time.",
  },
  {
    imageUrl: "/assets/images/streamline.png",
    title: (
      <p>
        Streamlined
        <br />
        payment gateway
      </p>
    ),
    description: "Apart from Bkash, Nogod or Rocket, ZatiqEasy has its own payment gateway ZSP that makes transactions easy and effortless.",
  },
  {
    imageUrl: "/assets/images/delivery_system.png",
    title: (
      <p>
        Integrated <br />
        delivery system
      </p>
    ),
    description: "With delivery partners like Steadfast and Patho to RedX and complete the sales process.",
  },
];

export const growList = [
  {
    imageUrl: "/assets/images/grow.png",
    title: (
      <p className="text-center">
        Fastest
        <br />
        ecommerce builder
        <br />
        in Bangladesh
      </p>
    ),
  },
  {
    imageUrl: "/assets/images/customers.png",
    title: (
      <p className="text-center">
        Trusted by over <br />
        50,000+ sellers
      </p>
    ),

    subtitle: (
      <Link href={"#"} className="flex flex-col items-center ">
        <p className="underline text-center">Explore how they generated millions of</p>
        <div className="flex  items-center gap-2">
          <p className="underline">revenue using ZatiqEasy</p>
          <div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="12" fill="#E2E8F0" />
              <path d="M8 16L16 8M16 8H10M16 8V14" stroke="#334155" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
      </Link>
    ),
  },
  {
    imageUrl: "/assets/images/orders.png",
    title: (
      <p className="text-center">
        Processing
        <br /> over 100,000+
        <br /> monthly orders
      </p>
    ),
  },
];