export enum Colours {
  white = "#fff",
  greyBlue = "var(--grey-blue)",
  deepBlue = "var(--deep-blue)",
  primary = "var(--primary)",
  primaryDark = "var(--dark-primary)",
  primaryBlue = "var(--primary-blue)",
  primaryGreen = "var(--primary-green)",
  offWhite = "var(--off-white)",
  lightGrey = "var(--light-grey)",
}

export enum ApplicationAreas {
  PaintsAndCoatings = "Paints and Coatings",
  Adhesives = "Adhesives",
  PolymerDispersion = "Polymer dispersions",
  HouseholdProducts = "Household products",
}

export const globalRoutes: any = {
  english: [
    { label: "Applications", urlPath: "/applications" },
    { label: "Careers", urlPath: "/careers" },
    { label: "About EVOPACK", urlPath: "/about" },
  ],
  german: [
    { label: "Anwendungen", urlPath: "/applications" },
    { label: "Jobs & Karriere", urlPath: "/careers" },
    { label: "Über EVOPACK", urlPath: "/about" },
  ],
};

export const globalFooterContent: any = {
  english: {
    subscriptionLabel: "Be the first to know",
    subscriptionPlaceholder: "Enter your email",
    imprintLinkLabel: "Imprint",
    dataPolicyLinkLabel: "Data Policy",
  },
  german: {
    subscriptionLabel: "Erfahren Sie alles zuerst",
    subscriptionPlaceholder: "Ihre E-Mail",
    imprintLinkLabel: "Impressum",
    dataPolicyLinkLabel: "Datenschutz",
  },
};

export const globalContactFormContent: any = {
  english: {
    heading: "Drop us a line",
    firstNamePlaceholder: "Full name",
    lastNamePlaceholder: "Company",
    emailPlaceholder: "Email",
    phonePlaceholder: "Phone",
    messagePlaceholder: "Message",
    GDPRCheckboxText:
      "Tick this box to sign up for marketing - you can unsubscribe at any time.",
    buttonText: "Send Message",
  },
  german: {
    heading: "Kontaktieren Sie uns",
    firstNamePlaceholder: "Name",
    lastNamePlaceholder: "Firma",
    emailPlaceholder: "E-Mail",
    phonePlaceholder: "Telefon",
    messagePlaceholder: "Nachricht",
    GDPRCheckboxText:
      "Aktivieren Sie dieses Feld, um Neuigkeiten von uns zu erhalten.",
    buttonText: "Nachricht senden",
  },
};

// export const iPad: any = !!window.navigator.userAgent.match(/iPad/i);
// export const iPhone: any = !!window.navigator.userAgent.match(/iPhone/i);
// export const iOS: any = iPad || iPhone;
