import React, { useEffect, useRef } from 'react';
import { Redirect } from 'react-router-dom'
import { useApolloClient, useMutation } from 'react-apollo';
import { Viewer } from '../../lib/types';
import { AUTH_URL } from '../../lib/graphql/queries';
import { LOG_IN } from '../../lib/graphql/mutations';
import { AuthUrl as AuthUrlData } from '../../lib/graphql/queries/AuthUrl/__generated__/AuthUrl';
import {
  LogIn as LogInData,
  LogInVariables,
} from '../../lib/graphql/mutations/LogIn/__generated__/LogIn';
import { useToasts } from 'react-toast-notifications';
import logo from './assets/fight.png';
import google from './assets/google.png';
import Spinner from '../../lib/components/Spinner';
import ErrorBanner from '../../lib/components/ErrorBanner';

interface Props {
  setViewer: (viewer: Viewer) => void;
}

export const Login = ({ setViewer }: Props) => {
  const client = useApolloClient();

  const { addToast } = useToasts();



  const [logIn, { data: logInData, loading: logInLoading, error: logInError }] =
    useMutation<LogInData, LogInVariables>(LOG_IN, {
      onCompleted: (data) => {
        if (data && data.logIn) {
          setViewer(data.logIn);
        }
      },
    });
  const logInRef = useRef(logIn);

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');

    if (code) {
      logInRef.current({
        variables: {
          input: { code },
        },
      });
    }
  }, []);

  const handleAuthorize = async () => {
    try {
      const { data } = await client.query<AuthUrlData>({
        query: AUTH_URL,
      });
      window.location.href = data.authUrl;
    } catch (error) {
      console.log(error);
    }
  };

  if (logInLoading) {
    return <Spinner />;
  }

  if (logInData && logInData.logIn) {
      const { id: viewerId } = logInData.logIn;
      addToast("You've successfully logged in !", { appearance: 'success' })
      return <Redirect to={`/user/${viewerId}`} />;
  }
       

  const loginErrorBanner = logInError ? (
    addToast("You've successfully logged in !", { appearance: 'success' }),
    <ErrorBanner
  />
  ) : null;

  return (
      <>
    <div className=" h-screen  flex flex-col justify-center items-center">
        {loginErrorBanner}
      <div className="p-8 bg-white border border-black w-1/3 rounded-lg max-w-6xl pb-10">
        <div className="flex justify-center mb-4">
          <img className="h-24" src={logo} alt="logo" />{' '}
        </div>
        <h3 className="flex text-2xl font-black justify-center">
          Log in into Fight My Friend !
        </h3>

        <div className="flex justify-center items-center mt-8 flex-col">
          <button
            onClick={handleAuthorize}
            className="text-gray-100 hover:text-white shadow outline-none font-bold text-sm py-3 px-4 rounded flex justify-start items-center cursor-pointer w-64"
          >
            <img className="h-8" src={google} alt="" />
            <span className="border-l border-blue-500 h-8 w-1 ml-9 block"></span>
            <span className="pl-3 text-blue-500">Sign up with Google</span>
          </button>
        </div>
        <p className="flex justify-center mt-8">
          Sign in with Google to start booking available trainings !
        </p>

        <p className="flex justify-center mt-8 text-gray-400">
          Note : By sign in, you'll be redirected to the Google consent form to
          sign in with your Google account.
        </p>
      </div>
    </div>
    </>
  );
};
