const Navbar = () => {
  return (
    <div>
      <div className="flex items-center justify-between px-7 py-2 shadow-md border-b-2">
        <span className="text-white bg-black p-2 rounded-full text-3xl cursor-pointer">
          HF
        </span>
        <div className="flex items-center justify-center space-x-28 [&>*]:flex [&>*]:flex-col [&>*]:items-center [&>*]:cursor-pointer font-semibold">
          <div>
            <img src="/live-icon.svg" alt="" className="h-7 w-7" />
            <span>LIVE</span>
          </div>
          <div>
            <img src="/membership-icon.svg" alt="" className="h-7 w-7" />
            <span>MEMBERSHIPS</span>
          </div>
          <div>
            <img src="/plan-icon.svg" alt="" className="h-7 w-7" />
            <span>PLANS</span>
          </div>
          <div>
            <img src="/more-icon.svg" alt="" className="h-7 w-7" />
            <span>MORE</span>
          </div>
        </div>
        <div className="flex space-x-2 items-center cursor-pointer">
          <img src="/login-icon.svg" alt="" className="h-6 w-6" />
          <span className="hover:underline">Login</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
