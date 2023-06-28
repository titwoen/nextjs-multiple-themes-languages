import Loader from '@/components/common/Loader';
import { ImgWithLoader } from '@/components/common/MyImage';

const CardProfile = () => {
  return (
    <div className="flex max-w-md flex-col items-center rounded-3xl bg-colors-titwo-7 px-4 py-6 shadow-2xl">
      <div className="flex flex-col items-center gap-2">
        <ImgWithLoader.Wrap className="h-16 w-16 md:hidden">
          <ImgWithLoader.Img
            src="/android-chrome-512x512.png"
            alt=""
            loaderJsx={<Loader.Sketeton />}
          />
        </ImgWithLoader.Wrap>
        <h1 className="font-bold">TiTrwoEn</h1>
        <p className="uppercase text-white/60">Nguyen Thien Ngoc</p>
      </div>
      <div className="my-5 h-[1px] w-full bg-white/25" />
    </div>
  );
};
const renderSource = ``;

const iProps = ``;

const cardProfile = { ui: <CardProfile />, renderSource, iProps };

export default cardProfile;
