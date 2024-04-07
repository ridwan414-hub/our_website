import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const Login = () => {
  return (
    <div>
      <Header />
      <div className="hero min-h-screen bg-gradient-to-r from-emerald-500 to-sky-400">
        <div className="hero-content flex flex-col lg:flex-row lg:justify-end items-center">
          <div className="text-center lg:text-left lg:order-2">
            <h1 className="text-5xl font-bold text-white mb-6 ml-[50px]">Welcome Back!</h1>
            <p className="text-lg text-white mb-12 px-6 ml-[30px]">
              Sign in to access your account. We're excited to have you back with us!
            </p>
          </div>
          <div className="card max-w-md w-full mx-6 lg:mx-0 shadow-lg bg-white rounded-lg lg:order-1 border-4 border-emerald-500">
            <form className="card-body">
              <div className="form-control">
                <label htmlFor="email" className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="input input-bordered focus:ring-emerald-500 focus:border-emerald-500"
                  required
                />
              </div>
              <div className="form-control mt-4">
                <label htmlFor="password" className="label">
                  <span className="label-text">Password</span>
                  <a href="#" className="label-text-alt link ml-1">Forgot password?</a>
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="input input-bordered focus:ring-emerald-500 focus:border-emerald-500"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary bg-blue-400 hover:bg-blue-500 w-full transition duration-300 ease-in-out transform hover:scale-105">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
