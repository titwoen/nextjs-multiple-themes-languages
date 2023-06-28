import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import Loader from '@/components/common/Loader';
import { ImgWithLoader } from '@/components/common/MyImage';
import type { Types } from '@/types';

const imgEn = '/flags/eng.png';
const imgVi = '/flags/vietnam.png';

export default function SwitchLanguages() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const changeTo: Types.ILanguage =
    router.locale === router.defaultLocale ? 'en' : 'vi';

  return (
    <Link href="/" locale={changeTo}>
      <p className="max-sm:hidden">{t('changeLocale', { changeTo })}</p>

      <ImgWithLoader.Wrap className="h-10 w-10 md:hidden">
        <ImgWithLoader.Img
          src={changeTo === 'en' ? imgVi : imgEn}
          alt=""
          loaderJsx={<Loader.Sketeton />}
        />
      </ImgWithLoader.Wrap>
    </Link>
  );
}
