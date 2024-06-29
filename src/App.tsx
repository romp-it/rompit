import logo from "../public/rompit.png";
function App() {
  return (
    <>
      <div className="w-[99vw] h-screen">
        {/* <Navbar /> */}
        <div className="h-full w-[100%] flex justify-between items-center ">
          <div className="h-full flex justify-center">
            <div className="text-xl font-bold h-full mt-20 w-2/3 text-clip  ">
              <div className="relative -left-9">
                <img width={150} height={150} src={logo} />
              </div>
              <div className="text-5xl text-sky-800/100 mt-8">
                Revolutionizing Decentralized Web !
              </div>
              <div>
                <p className="text-lg mt-3 text-orange-700/75">
                  Empowering Users and Developers in the Web3 Ecosystem
                </p>
              </div>
              <button className="btn btn-outline mt-4 ml-2 btn-sm">
                Explore More
              </button>
            </div>
          </div>
          <div className="pr-9 flex justify-center">
            <div>
              <div className="mockup-browser bg-base-300 border ">
                <div className="mockup-browser-toolbar ">
                  <div className="input">https://www.rompit.org</div>
                </div>
                <div className="bg-base-200 flex justify-center px-4 py-16">
                  <div className="flex flex-col font-sans font-bold my-16">
                    <div>Hello!</div>

                    <div>Welcome to RompIt.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
