export function BlogsSkeleton() {
  return (
    <div className="  max-w-3xl grid grid-cols-3 ">
      <div className=" col-span-3 md:col-span-2">
        <div>
          <div className="flex max-w-2/3 mt-4">
            <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full ">
              <div className="font-medium text-gray-600 ">
                <div className="h-3 animate-pulse bg-gray-200 rounded-full mb-4" />
              </div>
            </div>

            <div className=" mt-2 font-light text-slate-800 mx-4">
              <div className="h-3 w-16 bg-gray-200 rounded-full mb-4" />
            </div>

            <div className="mt-2">
              <div className="h-3 w-24 bg-gray-200 rounded-full mb-4" />
            </div>
          </div>
          <div className="mb-8 mt-6">
            <h1 className="text-2xl mb-3 font-bold">
              <div className="h-4 w-36 animate-pulse bg-gray-200 rounded-full mb-4"></div>
            </h1>
            <div className="font-serif font-extralight text-slate-800 mt-2">
              <div className="h-3 animate-pulse bg-gray-200 rounded-full mb-4"></div>
            </div>
            <div className="font-serif font-extralight text-slate-800 mt-2">
              <div className="h-3 animate-pulse bg-gray-200 rounded-full mb-4"></div>
            </div>
            <div className="font-serif font-extralight text-slate-800 mt-2">
              <div className="h-3 animate-pulse bg-gray-200 rounded-full mb-4"></div>
            </div>
          </div>
          <div className=" mb-10 font-semibold text-sm text-slate-500 mt-2 ">
            <div className=" w-14 h-3 bg-gray-200 rounded-full mb-4 animate-pulse"></div>
          </div>
        </div>
      </div>
      <div className="w-96">
        <div className=" w-52 h-40 ml-5 rounded-md mt-16 bg-gray-200 text-gray-200 animate-pulse hidden md:block" />
      </div>
      <hr className="mt-3 col-span-3"></hr>
    </div>
  );
}
