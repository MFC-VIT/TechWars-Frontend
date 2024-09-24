function BackgroundVideo() {
  return (
    <div className="h-screen w-full fixed top-0 left-0">
      <video autoPlay loop muted className=" -z-100 w-screen    md:hidden">
        <source src="/PlanetBg.webm" type="video/webm" />
      </video>
      <video
        autoPlay
        loop
        muted
        className=" -z-100 h-screen md:scale-150 lg:scale-125 hidden md:block"
      >
        <source src="/PlanetBgLandscape.webm" type="video/webm" />
      </video>
    </div>
  );
}

export default BackgroundVideo;
