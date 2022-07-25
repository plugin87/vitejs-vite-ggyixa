import { Dispatch, FC, SetStateAction } from 'react';
import NavHeader from '../layouts/header';

export interface SettingProps {
  setView: Dispatch<SetStateAction<any>>;
}

const Setting: FC<SettingProps> = ({ setView }) => {
  return (
    <div className="w-full main-content flex justify-center items-center flex-col p-6">
      <NavHeader
        onBack={() => {
          setView('main');
        }}
        setView={setView}
      />
      <main>Setting</main>
    </div>
  );
};

export default Setting;
