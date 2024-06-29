import logo from "../public/rompit.png";
function App() {
  return (
    <>
      <div className="w-[99vw] h-screen">
        {/* <Navbar /> */}
        <div className="h-screen w-[100%] flex justify-between items-center ">
          <div className="h-full flex justify-center">
            <div className="text-xl font-bold h-full mt-20 w-2/3 text-clip  ">
              <div className="relative -left-9">
                <img width={150} height={150} src={logo} />
              </div>
              <div className="text-5xl text-sky-800/100 ">
                Revolutionizing Decentralized Web !
              </div>
              <div>
                <p className="text-lg mt-3 text-orange-700/75">
                  Empowering Users and Developers in the Web3 Ecosystem
                </p>
              </div>
            </div>
          </div>
          <div className="pr-9">
            <div className="mockup-browser bg-base-300 border ">
              <div className="mockup-browser-toolbar ">
                <div className="input">https://www.rompit.org</div>
              </div>
              <div className="bg-base-200 flex justify-center px-4 py-16">
                Hello!
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
