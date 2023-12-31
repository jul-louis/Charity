import HorizentalRule from "./HorizentalRule";

function Favorite() {
  return (
    <div className="overflow-auto p-8 text-black bg-teal-50 dark:text-white dark:bg-slate-950 h-screen">
      <h1 className="mb-4 ml-8 text-3xl font-bold">Favorites</h1>

      <div className="p-4 rounded-lg bg-white dark:bg-black">
        <p className="m-4 text-xl">YOUR FAVORITE CHARITIES ARE LISTED HERE</p>
        <div className="overflow-auto m-4 p-4 rounded-lg bg-white dark:bg-slate-800 h-96"></div>

        <HorizentalRule />
        <p className="m-4 text-md">
          Disclaimer: All Charity Information is Fetched through Charity API.
        </p>
      </div>
    </div>
  );
}

export default Favorite;
