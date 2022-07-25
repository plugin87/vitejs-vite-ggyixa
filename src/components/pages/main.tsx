import { Dispatch, FC, SetStateAction } from 'react';
import NavHeader from '../layouts/header';

export interface MainProps {
  setView: Dispatch<SetStateAction<any>>;
}

const Main: FC<MainProps> = ({ setView }) => {
  return (
    <div className="w-full main-content flex justify-center items-left flex-col p-6">
      <NavHeader
        onBack={() => {
          setView('login');
        }}
        setView={setView}
      />
      <main>
        <div className="p-4">
          <div className="flex pb-5">
            <label htmlFor="">Show/Hide traits</label>
          </div>
          <div className="flex pb-5">
            <label htmlFor="">Trait Normalization</label>
          </div>
          <div className="flex pb-5 ">
            <label htmlFor="">Show/ Hide Widget</label>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
