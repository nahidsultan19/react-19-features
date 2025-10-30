import { Suspense, use } from "react";

const getUser = async () => {
  const res = await fetch("https://api.chucknorris.io/jokes/random");
  return res.json();
};

const ShowUser = () => {
  const { user } = use(getUser());
  console.log(user);
  return (
    <div>
      <h2>{user.value}</h2>
    </div>
  );
};

const FetchData = () => {
  return (
    <div className="shadow p-4 my-6 rounded bg-emerald-50">
      <Suspense
        fallback={
          <h2 className="shadow p-4 bg-gray-50 text-xl text-center font-bold mt-5">
            Loading...
          </h2>
        }
      >
        <ShowUser />
      </Suspense>
    </div>
  );
};

export default FetchData;
