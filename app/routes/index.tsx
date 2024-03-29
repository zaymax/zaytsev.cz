// import { Link } from "@remix-run/react";
import MongoSvg from "app/images/mongo.svg";
import ReactSvg from "app/images/react.svg";
import NodeSvg from "app/images/node_js.svg";

import { useOptionalUser } from "~/utils";

export default function Index() {
  const user = useOptionalUser();
  return (
    <main className="relative min-h-screen bg-gray-900 text-white sm:flex sm:items-center sm:justify-center">
      <div className="relative sm:pb-16 sm:pt-8">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative ">
            <div className="relative px-4 pb-8 pt-16 sm:px-6 sm:pt-24 sm:pb-14 lg:px-8 lg:pb-20 lg:pt-24">
              <h1 className="text-center text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl">
                <span className="block uppercase text-white drop-shadow-md">
                  <a href="https://www.linkedin.com/in/zaytsevcz/" className="hover:underline">Maksim Zaytsev</a>
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-lg text-center text-xl sm:max-w-3xl">
                Fullstack developer focused on design
              </p>
              <div className="flex justify-center">
                <div className="m-10 flex w-40 rounded bg-white">
                  <img
                    className="justify-center text-center"
                    src={ReactSvg}
                    alt="React logo"
                  />
                </div>
                <div className="m-10 flex w-40 rounded bg-white">
                  <img
                    className="flex justify-center text-center"
                    src={NodeSvg}
                    alt="Node logo"
                  />
                </div>
                <div className="m-10 flex w-40 rounded bg-white">
                  <img
                    className="justify-center text-center"
                    src={MongoSvg}
                    alt="Mongo logo"
                  />
                </div>
              </div>

              {/* <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                {user ? (
                  <Link
                    to="/notes"
                    className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-yellow-700 shadow-sm hover:bg-yellow-50 sm:px-8"
                  >
                    View Notes for {user.email}
                  </Link>
                ) : (
                  <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                    <Link
                      to="/join"
                      className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-yellow-700 shadow-sm hover:bg-yellow-50 sm:px-8"
                    >
                      Sign up
                    </Link>
                    <Link
                      to="/login"
                      className="flex items-center justify-center rounded-md bg-yellow-500 px-4 py-3 font-medium text-white hover:bg-yellow-600"
                    >
                      Log In
                    </Link>
                  </div>
                )}
              </div> */}
            </div>
          </div>
        </div>

        {/* <div className="mx-auto mt-10 max-w-7xl text-center">
          <Link to="/posts" className="text-xl text-blue-600 underline">
            Blog Posts
          </Link>
        </div> */}
      </div>
      <div className="absolute bottom-0 mt-4 mb-10 text-center text-white">
        <p>Copyright @ Maksim Zaytsev</p>
      </div>
    </main>
  );
}
