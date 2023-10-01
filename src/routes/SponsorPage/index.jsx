const SponsorPage = () => {
  const sponsors = [
    { website: "https://www.sponsor2website.com", logo: "src/routes/SponsorPage/logos/logo2.png", name: "Sponsor 2", position: "Position 2 / Company Name 2" },
    { website: "https://www.sponsor1website.com", logo: "src/routes/SponsorPage/logos/logo1.png", name: "Sponsor 1", position: "Position 1 / Company Name 1" },
    { website: "https://www.sponsor3website.com", logo: "src/routes/SponsorPage/logos/logo3.png", name: "Sponsor 3", position: "Position 3 / Company Name 3" },
    { website: "https://www.sponsor3website.com", logo: "src/routes/SponsorPage/logos/logo4.png", name: "Sponsor 4", position: "Position 3 / Company Name 4" },
    { website: "https://www.sponsor3website.com", logo: "src/routes/SponsorPage/logos/logo5.png", name: "Sponsor 5", position: "Position 3 / Company Name 5" },
    { website: "https://www.sponsor3website.com", logo: "src/routes/SponsorPage/logos/logo6.png", name: "Sponsor 6", position: "Position 3 / Company Name 6" },
    { website: "https://www.sponsor3website.com", logo: "src/routes/SponsorPage/logos/logo7.png", name: "Sponsor 7", position: "Position 3 / Company Name 7" },
    { website: "https://www.sponsor3website.com", logo: "src/routes/SponsorPage/logos/logo8.png", name: "Sponsor 8", position: "Position 3 / Company Name 8" },
    { website: "https://www.sponsor3website.com", logo: "src/routes/SponsorPage/logos/logo9.png", name: "Sponsor 9", position: "Position 3 / Company Name 9" },
    { website: "https://www.sponsor3website.com", logo: "src/routes/SponsorPage/logos/logo10.png", name: "Sponsor 10", position: "Position 3 / Company Name10" },
    { website: "https://www.sponsor3website.com", logo: "src/routes/SponsorPage/logos/logo11.png", name: "Sponsor 11", position: "Position 3 / Company Name 11" },
    { website: "https://www.sponsor3website.com", logo: "src/routes/SponsorPage/logos/logo12.png", name: "Sponsor 12", position: "Position 3 / Company Name 3" },
    { website: "https://www.sponsor3website.com", logo: "src/routes/SponsorPage/logos/logo13.png", name: "Sponsor 13", position: "Position 3 / Company Name 3" },
    { website: "https://www.sponsor3website.com", logo: "src/routes/SponsorPage/logos/logo14.png", name: "Sponsor 14", position: "Position 3 / Company Name 3" },
    { website: "https://www.sponsor3website.com", logo: "src/routes/SponsorPage/logos/logo15.png", name: "Sponsor 15", position: "Position 3 / Company Name 3" },
    { website: "https://www.sponsor3website.com", logo: "src/routes/SponsorPage/logos/logo16.png", name: "Sponsor 16", position: "Position 3 / Company Name 3" },
    { website: "https://www.sponsor3website.com", logo: "src/routes/SponsorPage/logos/logo17.png", name: "Sponsor 17", position: "Position 3 / Company Name 3" },
    { website: "https://www.sponsor3website.com", logo: "src/routes/SponsorPage/logos/logo18.png", name: "Sponsor 18", position: "Position 3 / Company Name 3" },
    { website: "https://www.sponsor3website.com", logo: "src/routes/SponsorPage/logos/logo19.png", name: "Sponsor 19", position: "Position 3 / Company Name 3" },
    { website: "https://www.sponsor3website.com", logo: "src/routes/SponsorPage/logos/logo20.png", name: "Sponsor 20", position: "Position 3 / Company Name 3" },
    { website: "https://www.sponsor3website.com", logo: "src/routes/SponsorPage/logos/logo21.png", name: "Sponsor 21", position: "Position 3 / Company Name 3" },
    { website: "https://www.sponsor3website.com", logo: "src/routes/SponsorPage/logos/logo22.png", name: "Sponsor 22", position: "Position 3 / Company Name 3" },
    { website: "https://www.sponsor3website.com", logo: "src/routes/SponsorPage/logos/logo23.png", name: "Sponsor 23", position: "Position 3 / Company Name 3" },
    { website: "https://www.sponsor3website.com", logo: "src/routes/SponsorPage/logos/logo24.png", name: "Sponsor 24", position: "Position 3 / Company Name 3" },
    { website: "https://www.sponsor3website.com", logo: "src/routes/SponsorPage/logos/logo25.png", name: "Sponsor 25", position: "Position 3 / Company Name 3" },
    { website: "https://www.sponsor3website.com", logo: "src/routes/SponsorPage/logos/logo26.png", name: "Sponsor 26", position: "Position 3 / Company Name 3" },
    { website: "https://www.sponsor3website.com", logo: "src/routes/SponsorPage/logos/logo27.png", name: "Sponsor 27", position: "Position 3 / Company Name 3" },
    { website: "https://www.sponsor3website.com", logo: "src/routes/SponsorPage/logos/logo28.png", name: "Sponsor 28", position: "Position 3 / Company Name 3" },
    { website: "https://www.sponsor3website.com", logo: "src/routes/SponsorPage/logos/logo29.png", name: "Sponsor 29", position: "Position 3 / Company Name 3" },
    { website: "https://www.sponsor3website.com", logo: "src/routes/SponsorPage/logos/logo30.png", name: "Sponsor 30", position: "Position 3 / Company Name30" },
    { website: "https://www.sponsor3website.com", logo: "src/routes/SponsorPage/logos/logo31.png", name: "Sponsor 31", position: "Position 3 / Company Name31" },
    { website: "https://www.sponsor3website.com", logo: "src/routes/SponsorPage/logos/logo32.png", name: "Sponsor 32", position: "Position 3 / Company Name32" },
    { website: "https://www.sponsor3website.com", logo: "src/routes/SponsorPage/logos/logo33.png", name: "Sponsor 33", position: "Position 3 / Company Name33" },
    { website: "https://www.sponsor3website.com", logo: "src/routes/SponsorPage/logos/logo34.png", name: "Sponsor 34", position: "Position 3 / Company Name34" },
    { website: "https://www.sponsor3website.com", logo: "src/routes/SponsorPage/logos/logo35.png", name: "Sponsor 35", position: "Position 3 / Company Name35" },
    { website: "https://www.sponsor3website.com", logo: "src/routes/SponsorPage/logos/logo36.png", name: "Sponsor 36", position: "Position 3 / Company Name36" },
    { website: "https://www.sponsor3website.com", logo: "src/routes/SponsorPage/logos/logo37.png", name: "Sponsor 37", position: "Position 3 / Company Name37" },
    { website: "https://www.sponsor3website.com", logo: "src/routes/SponsorPage/logos/logo38.png", name: "Sponsor 38", position: "Position 3 / Company Name38" },

    // Add more sponsors following the same format
  ];

  return (
    <div className="container mx-auto p-6 text-center">
      <h2 className="text-2xl font-bold mb-6 text-white">Previous Sponsors</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
        {sponsors.map((sponsor, index) => (
          <div className="relative mb-6 transform hover:scale-105 transition-transform" key={index}>
            <a href={sponsor.website} target="_blank" rel="noopener noreferrer">
              <div className="bg-gray-300 h-48 w-48 mx-auto  mb-4  relative">
                <img src={sponsor.logo} className=" w-full h-full  object-cover" alt="" />
              </div>
            </a>
            {/* <h2 className="text-xl font-bold mb-2 opacity-100 text-white">{sponsor.name}</h2>
            <p className="opacity-100 text-white">{sponsor.position}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SponsorPage;
