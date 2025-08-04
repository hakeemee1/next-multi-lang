'use client';
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Badge} from '@/components/ui/badge';
import {Globe, Languages, Smartphone, Zap} from 'lucide-react';

export default function HomePage() {
  const t = useTranslations('home');
  const nav = useTranslations('navigation');
  const common = useTranslations('common');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm dark:bg-gray-900/80">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Multi-Lang App
          </h1>
          <nav className="flex items-center gap-4">
            <Link href="/" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              {nav('home')}
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              {nav('about')}
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              {nav('contact')}
            </Link>
            <LanguageSwitcher />
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-4xl mx-auto">
            {t('description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              {t('cta.primary')}
            </Button>
            <Button variant="outline" size="lg">
              {t('cta.secondary')}
            </Button>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            {t('features.title')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Globe className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>{t('features.i18n')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Support for multiple languages with automatic locale detection
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>{t('features.ui')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Beautiful and accessible UI components built with shadcn/ui
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Smartphone className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle>{t('features.responsive')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Fully responsive design that works on all devices
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Languages className="h-8 w-8 text-orange-600 mb-2" />
                <CardTitle>{t('features.rtl')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Full RTL support for Arabic language
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Language Info */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Supported Languages
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="text-lg px-4 py-2">
              🇹🇭 Thai
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              🇺🇸 English
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              🇸🇦 Arabic
            </Badge>
          </div>
        </div>
      </main>
    </div>
  );
}

// Language Switcher Component
function LanguageSwitcher() {
  const {useRouter, usePathname} = require('@/i18n/navigation');
  const router = useRouter();
  const pathname = usePathname();
  const lang = useTranslations('language');
  const nav = useTranslations('navigation');

  const languages = [
    { code: 'th', name: lang('thai'), flag: '🇹🇭' },
    { code: 'en', name: lang('english'), flag: '🇺🇸' },
    { code: 'ar', name: lang('arabic'), flag: '🇸🇦' }
  ];

  return (
    <div className="relative group">
      <Button variant="outline" size="sm" className="flex items-center gap-2">
        <Globe className="h-4 w-4" />
        {nav('language')}
      </Button>
      <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => router.replace(pathname, {locale: lang.code})}
            className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2"
          >
            <span>{lang.flag}</span>
            <span>{lang.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
