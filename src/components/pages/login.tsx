import { Dispatch, FC, SetStateAction } from 'react';
import Logo from '../icons/logo';

export interface LoginProps {
  setView: Dispatch<SetStateAction<any>>;
}

const Login: FC<LoginProps> = ({ setView }) => {
  return (
    <div className="w-full bg-gradient-to-b from-violet-500 to-pink-500 main-content flex justify-center items-center flex-col p-6">
      <Logo />
      <h2 className="text-white mt-12 text-2xl">Welcome to WhaleSniper</h2>
      <p className="text-white text-center text-lg mt-6">
        Start using the tool by login with your Discord account
      </p>
      <a
        href="#"
        className="bg-gradient-to-r from-pink-500 to-violet-500 text-white font-semibold px-6 py-3 rounded-md flex items-center mt-6"
        onClick={function (e) {
          e.preventDefault();
          setView('main');
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="29"
          height="28"
          fill="none"
          viewBox="0 0 29 28"
        >
          <path
            fill="#fff"
            d="M.667 9.6c0-3.36 0-5.04.653-6.324A6 6 0 013.943.654C5.226 0 6.906 0 10.267 0h8.8c3.36 0 5.04 0 6.323.654a6 6 0 012.622 2.622c.654 1.284.654 2.964.654 6.324v8.8c0 3.36 0 5.04-.654 6.324a6 6 0 01-2.622 2.622C24.107 28 22.427 28 19.067 28h-8.8c-3.36 0-5.041 0-6.324-.654a6 6 0 01-2.623-2.622C.667 23.44.667 21.76.667 18.4V9.6z"
          ></path>
          <path
            fill="#CA2AC7"
            d="M22.942 8.027c-1.514-1.28-3.33-1.92-5.248-2.027l-.303.32c1.716.427 3.23 1.28 4.643 2.453a14.765 14.765 0 00-5.652-1.813c-.605-.107-1.11-.107-1.716-.107-.605 0-1.11 0-1.715.107A14.764 14.764 0 007.3 8.773C8.712 7.6 10.226 6.747 11.942 6.32L11.639 6c-1.917.107-3.734.747-5.248 2.027-1.715 3.413-2.624 7.253-2.724 11.2C5.18 20.933 7.3 22 9.52 22c0 0 .706-.853 1.21-1.6-1.311-.32-2.522-1.067-3.33-2.24.707.427 1.413.853 2.12 1.173.908.427 1.816.64 2.725.854.807.106 1.614.213 2.421.213.808 0 1.615-.107 2.422-.213.909-.214 1.817-.427 2.725-.854.707-.32 1.413-.746 2.12-1.173-.808 1.173-2.019 1.92-3.33 2.24.504.747 1.21 1.6 1.21 1.6 2.22 0 4.34-1.067 5.854-2.773-.101-3.947-1.01-7.787-2.725-11.2zm-11.606 9.28c-1.009 0-1.917-.96-1.917-2.134 0-1.173.908-2.133 1.917-2.133 1.01 0 1.918.96 1.918 2.133 0 1.174-.909 2.134-1.918 2.134zm6.66 0c-1.008 0-1.917-.96-1.917-2.134 0-1.173.909-2.133 1.918-2.133s1.917.96 1.917 2.133c0 1.174-.908 2.134-1.917 2.134z"
          ></path>
        </svg>
        <span className="ml-2">Login with discord</span>
      </a>
    </div>
  );
};

export default Login;
