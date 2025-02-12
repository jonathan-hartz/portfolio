export default function Card({
  service,
  index,
}: {
  service: {
    title: string;
    description: string;
    icon: string;
    borderColor: string;
    fromColor: string;
    toColor: string;
  };
  index: number;
}) {
  return (
    <div
      className={`${service.borderColor} h-44 rounded-lg border-4 bg-gradient-to-b from-white to-slate-200 text-center text-xs text-slate-900 md:h-64 md:w-52 lg:text-[0.8rem] xl:w-56 2xl:h-80 2xl:w-72 2xl:text-base`}
      data-aos="fade-down"
      data-aos-delay={100 * index}
    >
      <div
        className={`relative flex h-full flex-col items-center justify-start justify-items-center`}
      >
        <span
          className={`flex w-full items-center justify-center bg-gradient-to-b ${service.fromColor} p-2 font-bold lg:h-14 ${service.toColor} `}
        >
          {service.title}
        </span>
        <span className="p-2 font-medium">{service.description}</span>
        <div className="absolute -bottom-6 left-0 flex w-full justify-center">
          <div
            className={`${service.borderColor} ${service.fromColor} ${service.toColor} flex h-12 w-12 items-center justify-center rounded-3xl border-4 bg-gradient-to-b text-2xl text-slate-900`}
          >
            <i className={` ${service.icon}`}></i>
          </div>
        </div>
      </div>
    </div>
  );
}
