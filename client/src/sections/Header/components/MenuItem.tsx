import React from 'react';
import { Link } from 'react-router-dom';
import { useMutation }  from 'react-apollo'
import { Viewer } from '../../../lib/types';
import { LOG_OUT } from '../../../lib/graphql/mutations/'
import { LogOut as LogOutData  } from '../../../lib/graphql/mutations/LogOut/__generated__/LogOut'
import { useToasts } from 'react-toast-notifications';


interface Props {
  setViewer: (viewer: Viewer) => void;
  viewer: Viewer;
}

export const MenuItem = ({ viewer, setViewer }: Props) => {

  const { addToast } = useToasts();

  const [logOut] = useMutation<LogOutData>(LOG_OUT, { 
    onCompleted: (data) => {
      if (data && data.logOut) {
        setViewer(data.logOut);
        addToast("You've successfully log out !", { appearance: 'success'});
      }
    },
    onError: (data) => {
      addToast("You've successfully log out !", { appearance: 'warning'});

    }
  });

  const handleLogOut = () => {
    logOut();
  }


  const subMenu =
    viewer.id && viewer.avatar ? (
      <div>
        <div className="dropdown w-32 inline-block relative">
          <img
            className="inline-flex items-center object-cover w-16 h-16 mr-2 rounded-full"
            src={viewer.avatar}
            alt="Profile"
          />
          <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
            <li className="">
              <Link
                className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                to={`/user/${viewer.id}`}
              >
                Profile page
              </Link>
            </li>
            <li className="">
              <a
              onClick={handleLogOut}
                className="rounded-b bg-red-400 py-2 px-4 block whitespace-no-wrap"
                href="/logout"
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    ) : (
      <button className="bg-black px-5 py-3 text-sm shadow-sm font-medium tracking-wider border text-yellow-100 rounded-full hover:shadow-lg ">
        <Link to="/login">Sign In</Link>
      </button>
    );

  return (
    <div className="flex">
      {/* <ul className="hidden lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-10">
        <li>
          <Link className=" text-gray-50 hover:text-gray-200" to="/host">
            Host
          </Link>
        </li>
      </ul> */}
      <div className="ml-8">{subMenu}</div>
    </div>
  );
};
