const Lobby = () => {
  return (
    <>
      <div className="p-16 flex flex-col bg-black">
        <div className="flex flex-row justify-between items-center">
          <img src="/images/logo.png" alt="" />
          <p className=" w-[10rem] text-white bg-[#71767B] font-auxMono tracking-wide p-2">
            TIME LEFT: XX
          </p>
        </div>
        <div className="flex flex-row w-full pl-[8rem] pr-[8rem] justify-between pt-8">
          <div className="flex flex-col gap-[2rem] w-1/2 items-center">
            {teamData.slice(0, 3).map((team, index) => (
              <div
                key={index}
                className="flex flex-row  bg-[#71767B] pl-4 pr-4 pt-2 pb-2 w-4/5 relative rounded-lg font-auxMono tracking-wide"
              >
                <div className="flex flex-col gap-2">
                  <p className="text-white">{team.teamName}</p>
                  <div className="flex flex-row relative items-center ">
                    <img src="/images/man.png" alt="" />
                    <p className="text-white">: X {team.teamSize} PLAYERS</p>
                  </div>
                </div>
                <img
                  src="/images/ufo.png"
                  alt=""
                  className="h-[2rem] w-[6rem] absolute top-6 right-3"
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-[2rem] w-1/2 items-center">
            {teamData.slice(3, 6).map((team, index) => (
              <div
                key={index}
                className="flex flex-row bg-[#71767B] pl-4 pr-4 pt-2 pb-2 w-4/5 relative rounded-lg font-auxMono tracking-wide"
              >
                <div className="flex flex-col gap-2">
                  <p className="text-white">{team.teamName}</p>
                  <div className="flex flex-row items-center">
                    <img
                      src="/images/man.png"
                      alt=""
                      className="h-[1.5rem] w-[1rem]"
                    />
                    <p className="text-white">: X {team.teamSize} PLAYERS</p>
                  </div>
                </div>
                <img
                  src="/images/ufo.png"
                  alt=""
                  className="h-[2rem] w-[6rem] absolute top-6 right-3"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Lobby;

const teamData = [
  {
    teamName: "Team A",
    teamSize: 20,
  },
  {
    teamName: "Team B",
    teamSize: 20,
  },
  {
    teamName: "Team C",
    teamSize: 20,
  },
  {
    teamName: "Team D",
    teamSize: 20,
  },
  {
    teamName: "Team E",
    teamSize: 20,
  },
  {
    teamName: "Team F",
    teamSize: 20,
  },
];
