export default function ResponsiveChecker() {
  return (
    <>
      <div className="absolute left-0 top-0 hidden w-16 bg-red-500 text-center max-sm:block">
        Mobile
      </div>

      <div className="absolute left-0 top-0 hidden w-16 bg-red-500 text-center sm:block">
        SM (min 640)
      </div>
      <div className="absolute left-0 top-0 hidden w-16 bg-yellow-500 text-center md:block">
        MD (min 768)
      </div>
      <div className="absolute left-0 top-0 hidden w-16 bg-blue-500 text-center lg:block">
        LG (min 1024)
      </div>
      <div className="absolute left-0 top-0 hidden w-16 bg-purple-500 text-center xl:block">
        XL (min 1280)
      </div>
      <div className="absolute left-0 top-0 hidden w-16 bg-slate-500 text-center 2xl:block">
        2XL (min 1536)
      </div>
    </>
  );
}
