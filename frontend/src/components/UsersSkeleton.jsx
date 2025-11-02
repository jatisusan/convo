const UsersSkeleton = () => {
  return (
    <div className="space-y-2">
      {[1, 2, 3].map((item) => (
        <div key={item} className="bg-[#160f2c] md:p-4 p-2 rounded-lg animate-pulse">
          <div className="flex items-center max-sm:justify-center sm:space-x-3">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-700 rounded-full shrink-0"></div>
            <div className="flex-1 max-sm:hidden">
              <div className="h-4 bg-slate-700 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-slate-700/70 rounded w-1/2"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UsersSkeleton;
