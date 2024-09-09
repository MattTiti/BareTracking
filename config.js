import themes from "daisyui/src/theming/themes";

const config = {
  appName: "Bare Tracking",
  appDescription:
    "A bare bones macro tracker with everything you need and nothing you don’t",
  domainName: "baretracking.com",
  crisp: {
    id: "",
    onlyShowOnRoutes: ["/"],
  },
  stripe: {
    plans: [
      {
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1PwVrGIEfj3N1wDk42dqqcHr"
            : "price_1PwVrGIEfj3N1wDk42dqqcHr",
        name: "Yearly",
        mode: "subscription",
        description: "Full access to all features for a year",
        price: 19.99,
        priceAnchor: 29.99,
        features: [
          { name: "All tracking features" },
          { name: "Verified food options" },
          { name: "Intake Charts" },
          { name: "Access to future updates" },
          { name: "24/7 support" },
        ],
        buttonMessage: "A yearly subscription at a monthly price",
      },
      {
        isFeatured: true,
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1PwVrDIEfj3N1wDkRY5oJU1b"
            : "price_1PwVrDIEfj3N1wDkRY5oJU1b",
        name: "Unlimited",
        mode: "payment",
        description: "A one-time payment for lifetime access",
        price: 39.99,
        priceAnchor: 49.99,
        features: [
          { name: "All tracking features" },
          { name: "Verified food options" },
          { name: "Intake Charts" },
          { name: "Access to future updates" },
          { name: "24/7 support" },
        ],
        buttonMessage: "Pay once, own forever",
      },
    ],
  },
  mailgun: {
    subdomain: "mg",
    fromNoReply: `Bare Tracking <noreply@mg.baretracking.com>`,
    fromAdmin: `Matt at Bare Tracking <matt@mg.baretracking.com>`,
    supportEmail: "matt@mg.baretracking.com",
    forwardRepliesTo: "matthewtiti@gmail.com",
  },
  colors: {
    theme: "dark",
    main: themes["light"]["primary"],
    toast: "#000000",
  },
  auth: {
    loginUrl: "/api/auth/signin",
    callbackUrl: "/dashboard",
  },
  googleAnalyticsId: "G-KPX007RR3P",
};

export default config;
