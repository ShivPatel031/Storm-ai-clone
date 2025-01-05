export const example = [
  {
    title: "Location-based entertainment VR theater",
    text: `**Location-Based Entertainment VR Theater** Location-based
            entertainment (LBE) VR theater represents a dynamic intersection of
            virtual reality (VR) and immersive experiences, designed to
            transport participants into interactive and engaging environments
            outside`,
  },
  {
    title: "Aristotles Communication Model",
    text: `Aristotle's Communication Model, often referred to as the
                      Aristotle Model of Communication, is a seminal framework
                      developed by the Greek philosopher Aristotle around 300
                      BCE. It is one of the`,
  },
  {
    title: "Explain quantum physics and its applications today",
    text: `Quantum physics, also known as quantum mechanics, is a
                      fundamental theory in physics that describes the behavior
                      of matter and energy at atomic and subatomic scales.
                      Developed in the early`,
  },
];

export const menuOptions = [
  {
    svg: {
      dataPrefix: "fas",
      dataIcon: "plus",
      className: "svg-inline--fa fa-plus w-4",
      viewBox: "0 0 448 512",
    },
    path: {
      d: "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z",
    },
    name: "New Session",
    to: "/",
  },
  {
    svg: {
      dataPrefix: "far",
      dataIcon: "compass",
      className: "svg-inline--fa fa-compass w-4",
      viewBox: "0 0 512 512",
    },
    path: {
      d: "M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm306.7 69.1L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z",
    },
    name: "Discover",
    to: "/discover/articles",
  },
  {
    svg: {
      dataPrefix: "fas",
      dataIcon: "grip",
      className: "svg-inline--fa fa-grip w-4",
      viewBox: "0 0 448 512",
    },
    path: {
      d: "M128 136c0-22.1-17.9-40-40-40L40 96C17.9 96 0 113.9 0 136l0 48c0 22.1 17.9 40 40 40H88c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40H40c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40H88c22.1 0 40-17.9 40-40V328zm32-192v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40V136c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM288 328c0-22.1-17.9-40-40-40H200c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40V328zm32-192v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40V136c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM448 328c0-22.1-17.9-40-40-40H360c-22.1 0-40 17.9-40 40v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40V328z",
    },
    name: "My Library",
    to: "/myLibrary/all",
  },
];

export const modeOptions = [
  {
    onClick: "storm",
    option: { name: "STORM", purpose: "Article" },
  },
  {
    onClick: "co-storm",
    option: { name: "Co-STORM", purpose: "Roundtable conversation" },
  },
];
