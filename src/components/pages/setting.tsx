import { Dispatch, FC, SetStateAction, useState } from 'react';
import NavHeader from '../layouts/header';
import { Switch } from '@headlessui/react'

export interface SettingProps {
  setView: Dispatch<SetStateAction<any>>;
}

const Setting: FC<SettingProps> = ({ setView }) => {
  const [enabled, setEnabled] = useState(false)
  return (
    <div className="w-full main-content flex flex-col p-6">
      <NavHeader
        onBack={() => {
          setView('main');
        }}
        setView={setView}
      />
      <main className='mt-6'>


        <div className=" flex flex-col pb-5  ">
          <label htmlFor="">Show/Hide traits</label>
          <div className='w-full mt-2'>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${enabled ? 'bg-pink-500' : 'bg-gray-200'
              } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span className="sr-only">Enable notifications</span>
            <span
              className={`${enabled ? 'translate-x-6' : 'translate-x-1'
                } inline-block h-4 w-4 transform rounded-full bg-white`}
            />
          </Switch>
          </div>
        </div>
        <div className="flex pb-5">
          <label htmlFor="">Trait Normalization</label>
        </div>
        <div className="flex pb-5 ">
          <label htmlFor="">Show/ Hide Widget</label>
        </div>
      </main>
    </div>
  );
};

export default Setting;
