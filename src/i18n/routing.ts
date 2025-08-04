import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  // รองรับ 3 ภาษา: ไทย, อังกฤษ, อาหรับ
  locales: ['th', 'en', 'ar'],
  
  // ภาษาเริ่มต้น
  defaultLocale: 'en'
}); 