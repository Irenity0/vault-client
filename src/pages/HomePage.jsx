import { Link } from "react-router-dom";

const HomePage = () => {
    return (    
        <div className="h-[38rem] flex justify-center items-center space-y-5">
          <div className="text-center">
            <div className="max-w-11/12">
              <h1 className="text-6xl text-[#560106] font-extrabold">Welcome to Vault, <br/> Your Financial Hub</h1>
              <p className="py-6 text-[#560106]">
                Manage your money seamlessly with secure transactions, instant cash-ins, and easy cash-outs. Experience financial freedom with just a few clicks.
              </p>
              <Link to={'/dashboard'} className="btn btn-soft bg-[#560106] btn-xl border-none hover:border-none">Get Started</Link>
              
            </div>
          </div>
        </div>
    );
};

export default HomePage;