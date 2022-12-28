const Social = () => {
  return (
    <>
      <div className="grid grid-cols-4">
        <div className="col-span-1">
          <svg
            width="34"
            height="34"
            className="fill-black dark:fill-WhiteBG object-cover bg-center"
          >
            <path d="M26.0015 6.9529C24.0021 6.03845 21.8787 5.37198 19.6623 5C19.3833 5.48048 19.0733 6.13144 18.8563 6.64292C16.4989 6.30193 14.1585 6.30193 11.8336 6.64292C11.6166 6.13144 11.2911 5.48048 11.0276 5C8.79575 5.37198 6.67235 6.03845 4.6869 6.9529C0.672601 12.8736 -0.41235 18.6548 0.130124 24.3585C2.79599 26.2959 5.36889 27.4739 7.89682 28.2489C8.51679 27.4119 9.07477 26.5129 9.55525 25.5675C8.64079 25.2265 7.77283 24.808 6.93587 24.312C7.15286 24.1571 7.36986 23.9866 7.57135 23.8161C12.6241 26.1255 18.0969 26.1255 23.0876 23.8161C23.3046 23.9866 23.5061 24.1571 23.7231 24.312C22.8861 24.808 22.0182 25.2265 21.1037 25.5675C21.5842 26.5129 22.1422 27.4119 22.7621 28.2489C25.2885 27.4739 27.8769 26.2959 30.5288 24.3585C31.1952 17.7559 29.4733 12.0212 26.0015 6.9529ZM10.2527 20.8402C8.73376 20.8402 7.49382 19.4608 7.49382 17.7714C7.49382 16.082 8.70276 14.7025 10.2527 14.7025C11.7871 14.7025 13.0425 16.082 13.0115 17.7714C13.0115 19.4608 11.7871 20.8402 10.2527 20.8402ZM20.4373 20.8402C18.9183 20.8402 17.6768 19.4608 17.6768 17.7714C17.6768 16.082 18.8873 14.7025 20.4373 14.7025C21.9717 14.7025 23.2271 16.082 23.1961 17.7714C23.1961 19.4608 21.9872 20.8402 20.4373 20.8402Z"></path>
          </svg>
        </div>
        <div className="flex flex-col col-span-3 text-left">
          <h1 className="text-lg font-bold">Discord Server</h1>
          <p className="text-md font-extralight">1803 Members</p>
        </div>
      </div>
    </>
  );
};
const SocialsCard = () => {
  return (
    <>
      <div className="w-full h-fit p-4 rounded-lg bg-BlueGrey dark:bg-BlueBlack text-black dark:text-WhiteBG">
        <h1 className="text-2xl font-bold text-black dark:text-WhiteBG">
          Socials
        </h1>
        <div className="flex flex-col space-y-2">
          <Social />
          <Social />
          <Social />
          <Social />
        </div>
      </div>
    </>
  );
};
export default SocialsCard;
