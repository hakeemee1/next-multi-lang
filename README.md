# Multi-Language Next.js Application

แอปพลิเคชัน Next.js ที่รองรับหลายภาษา (ไทย, อังกฤษ, อาหรับ) โดยใช้ next-intl และ shadcn/ui

## ✨ คุณสมบัติ

- 🌍 **รองรับ 3 ภาษา**: ไทย (th), อังกฤษ (en), อาหรับ (ar)
- 🎨 **UI ที่สวยงาม**: ใช้ shadcn/ui components
- 📱 **Responsive Design**: ทำงานได้ดีบนทุกอุปกรณ์
- 🔄 **RTL Support**: รองรับการแสดงผลจากขวาไปซ้ายสำหรับภาษาอาหรับ
- ⚡ **Static Rendering**: รองรับ static generation
- 🚀 **Modern Stack**: Next.js 15, TypeScript, Tailwind CSS

## 🚀 การติดตั้ง

```bash
# Clone repository
git clone <repository-url>
cd multi-lang

# ติดตั้ง dependencies
npm install

# รัน development server
npm run dev
```

## 📁 โครงสร้างโปรเจค

```
multi-lang/
├── messages/                 # ไฟล์ภาษา
│   ├── en.json              # ภาษาอังกฤษ
│   ├── th.json              # ภาษาไทย
│   └── ar.json              # ภาษาอาหรับ
├── src/
│   ├── i18n/                # การตั้งค่า next-intl
│   │   ├── routing.ts       # การตั้งค่า routing
│   │   ├── navigation.ts    # Navigation APIs
│   │   └── request.ts       # Request configuration
│   ├── middleware.ts        # Next.js middleware
│   ├── app/
│   │   ├── [locale]/        # Dynamic locale routes
│   │   │   ├── layout.tsx   # Locale layout
│   │   │   ├── page.tsx     # Home page
│   │   │   ├── about/       # About page
│   │   │   └── contact/     # Contact page
│   │   └── layout.tsx       # Root layout
│   └── components/          # shadcn/ui components
└── next.config.ts           # Next.js configuration
```

## 🌐 การใช้งาน

### การเปลี่ยนภาษา

แอปพลิเคชันจะแสดง URL ที่มี locale prefix:
- `/en` - ภาษาอังกฤษ
- `/th` - ภาษาไทย  
- `/ar` - ภาษาอาหรับ

### การเพิ่มภาษาใหม่

1. สร้างไฟล์ภาษาใหม่ใน `messages/` เช่น `fr.json`
2. เพิ่ม locale ใน `src/i18n/routing.ts`:

```typescript
export const routing = defineRouting({
  locales: ['en', 'th', 'ar', 'fr'], // เพิ่ม 'fr'
  defaultLocale: 'en'
});
```

### การเพิ่มข้อความใหม่

เพิ่มข้อความในไฟล์ภาษา:

```json
// messages/en.json
{
  "newSection": {
    "title": "New Section",
    "description": "This is a new section"
  }
}
```

```json
// messages/th.json
{
  "newSection": {
    "title": "ส่วนใหม่",
    "description": "นี่คือส่วนใหม่"
  }
}
```

```json
// messages/ar.json
{
  "newSection": {
    "title": "قسم جديد",
    "description": "هذا قسم جديد"
  }
}
```

### การใช้งานใน Component

```tsx
import {useTranslations} from 'next-intl';

export default function MyComponent() {
  const t = useTranslations('newSection');
  
  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  );
}
```

## 🎨 UI Components

แอปพลิเคชันใช้ shadcn/ui components ที่ติดตั้งแล้ว:

- `Button` - ปุ่มต่างๆ
- `Card` - การ์ดแสดงข้อมูล
- `Badge` - แบดจ์แสดงสถานะ

## 🔧 การตั้งค่า RTL

สำหรับภาษาอาหรับ แอปพลิเคชันจะตั้งค่า `dir="rtl"` และ `lang="ar"` อัตโนมัติ:

```tsx
// ใน src/app/[locale]/layout.tsx
const isRTL = locale === 'ar';
const dir = isRTL ? 'rtl' : 'ltr';

return (
  <html lang={locale} dir={dir}>
    {/* ... */}
  </html>
);
```

## 📦 Dependencies

- **next-intl**: สำหรับ internationalization
- **shadcn/ui**: สำหรับ UI components
- **lucide-react**: สำหรับ icons
- **tailwindcss**: สำหรับ styling

## 🚀 Deployment

```bash
# Build สำหรับ production
npm run build

# รัน production server
npm start
```
