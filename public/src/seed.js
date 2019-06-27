export const Seed = (function() {
  "use strict";
  const products = [
    {
      id: 1,
      title: "Yellow Pail",
      description: "On-demand sand castle construction expertise.",
      url: "#",
      votes: 25,
      submitterAvatarUrl: "./src/images/avatars/daniel.jpg",
      productImageUrl: "./src/images/products/image-aqua.png"
    },
    {
      id: 2,
      title: "Supermajority: The Fantasy Congress League",
      description:
        "Earn points when your favorite politicians pass legislation.",
      url: "#",
      votes: 25,
      submitterAvatarUrl: "./src/images/avatars/kristy.png",
      productImageUrl: "./src/images/products/image-rose.png"
    },
    {
      id: 3,
      title: "Tinfoild: Tailored tinfoil hats",
      description: "We already have your measurements and shipping address.",
      url: "#",
      votes: 25,
      submitterAvatarUrl: "./src/images/avatars/veronika.jpg",
      productImageUrl: "./src/images/products/image-steel.png"
    },
    {
      id: 4,
      title: "Haught or Naught",
      description: "High-minded or absent-minded? You decide.",
      url: "#",
      votes: 25,
      submitterAvatarUrl: "./src/images/avatars/molly.png",
      productImageUrl: "./src/images/products/image-yellow.png"
    }
  ];

  return { products };
})();
