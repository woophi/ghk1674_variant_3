type Props = {
  title: string;
  category: string;
  subcategory: string;
  percentage: string;
  img: string;
  logo: string;
};

export const SmallBox = ({ percentage, img, logo, category, subcategory, title }: Props) => {
  return (
    <div
      style={{
        background: `url(${img}) center center / cover no-repeat`,
      }}
      className={`h-[228px] rounded-2xl  p-2 row-span-1 overflow-hidden relative`}
    >
      <div className="h-full z-[2] flex flex-col gap-10 justify-between relative">
        <div className="flex justify-between">
          <img src={logo} className="w-12 h-12 rounded-2xl" />
        </div>

        <div className="flex flex-col">
          <div className="mb-2 py-1 px-3 w-fit rounded-xl text-center text-white bg-black text-base font-semibold">
            {percentage}
          </div>
          <h3 className="text-base text-black font-semibold">{title}</h3>
          <p className="text-sm text-ab-grey font-normal m-0 p-0">{category}</p>
          <p className="text-sm text-ab-grey font-normal m-0 p-0">{subcategory}</p>
        </div>
      </div>
      <div
        style={{ background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 60.53%)' }}
        className="absolute w-[101%] h-full top-0 left-0 z-[1]"
      />
    </div>
  );
};
