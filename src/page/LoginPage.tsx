export const LoginPage = () => {
  return (
    <div className="p-8 min-h-screen ">
      <div className="border-2 p-12 rounded min-h-[200px] border-blue-500">
        <h2 className="text-center">Login</h2>
        <form className="flex justtify-center items-center flex-col gap-4">
          <div>
            <label htmlFor="username">Username: </label>
            <input className="outline-1" placeholder="username" id="username" />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input className="outline-1" id="password" type="password" />
          </div>
        </form>
      </div>
    </div>
  );
};
