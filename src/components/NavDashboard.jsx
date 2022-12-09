import "./../index.css";
import { useState } from "react";
import { Link } from "react-router-dom";

// const profileList = ["Akun Saya", "Status Penyewaan Saya", "Riwayat Penyewaan"];

function NavDashboard() {
  const [profile, setProfile] = useState(false);

  return (
    <div>
      <section className="btn flex gap-3 m-1">
        {/* <!-- Dropdown menu --> */}
        <div className="relative inline-block text-left">
          <div>
            <button
              type="button"
              className="inline-flex w-full justify-center rounded-md borderbg-white px-4 py-2 text-sm font-medium"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
              onClick={() => {
                setProfile(!profile);
                console.log(profile);
              }}
            >
              Hi, Andrew
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div
            className={
              "absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hidden" +
              (profile ? "hidden" : "")
            }
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex="-1"
          >
            <div className="py-1" role="none">
              <form method="POST" action="/" role="none">
                <button
                  type="submit"
                  className="text-gray-600 block w-full px-4 py-2 text-left text-sm hover:text-black"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-3"
                >
                  Sign out
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NavDashboard;
