export const vehicles = [
  {
    vehicleName: "Car",
    type: "car",
    amount: "#1000",
  },
  {
    vehicleName: "Keke",
    type: "keke",
    amount: "#500",
  },
  {
    vehicleName: "Bus",
    type: "bus",
    amount: "#300",
  },
];

export const riders = [
  {
    type: "car",
    location: { lat: 8.490495, lng: 4.5422 },
  },
  {
    type: "bus",
    location: { lat: 8.490495, lng: 4.5411 },
  },
  {
    type: "keke",
    location: { lat: 8.490405, lng: 4.5414 },
  },
];

export const homeOptions = [
  {
    title: "Get a Ride",
    name: "get ride",
  },
  {
    title: "Wallet",
    name: "wallet",
  },
  {
    title: "Packages",
    name: "packages",
  },
  {
    title: "Bookings",
    name: "bookings",
  },
];

export const profileData = [
  {
    title: "Security",
  },
  {
    title: "Share App",
  },
  {
    title: "Customer Support",
  },
  {
    title: "Terms of Services",
  },

  {
    title: "Sign Out",
  },
];

export const securityScreenData = [
  {
    title: "Change PIN",
  },
  {
    title: "Change Password",
  },
  {
    title: "Allow Biometrics",
    toggleButton: true,
  },
];

export const profileSuccessData = [
  {
    title: "Awesome!!!",
    desc: "You have successfully updated your profile information",
    type: "editProfile",
  },
  {
    title: "Transaction PIN OK!",
    desc: "You can now Change your Transaction Pin",
    type: "old_pin",
  },
  {
    title: "Transaction PIN Changed Successfully",
    type: "new_pin",
  },
  {
    title: "Password  Changed Successfully",
    type: "change_password",
  },
];
