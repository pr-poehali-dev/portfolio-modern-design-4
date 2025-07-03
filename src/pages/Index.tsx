import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <div className="text-2xl font-bold">Анна Смирнова</div>
            <div className="hidden md:flex space-x-6">
              <a href="#home" className="hover:text-primary transition-colors">
                Главная
              </a>
              <a href="#works" className="hover:text-primary transition-colors">
                Работы
              </a>
              <a href="#about" className="hover:text-primary transition-colors">
                Обо мне
              </a>
              <a
                href="#resume"
                className="hover:text-primary transition-colors"
              >
                Резюме
              </a>
            </div>
            <Button variant="default" size="sm">
              <Icon name="Mail" size={16} />
              Связаться
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-pink-600 bg-clip-text text-transparent">
                  Анна Смирнова
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  Маркетолог • SMM-специалист • Контент-стратег
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8">
                  <Badge variant="secondary">Instagram</Badge>
                  <Badge variant="secondary">Facebook</Badge>
                  <Badge variant="secondary">TikTok</Badge>
                  <Badge variant="secondary">LinkedIn</Badge>
                  <Badge variant="secondary">Content Marketing</Badge>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="UX/UI дизайнер за работой"
                    className="rounded-2xl shadow-2xl w-full max-w-md object-cover aspect-[4/5]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-3xl text-primary">150+</CardTitle>
                  <CardDescription>Проектов</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-3xl text-primary">2.5M+</CardTitle>
                  <CardDescription>Охват аудитории</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-3xl text-primary">5 лет</CardTitle>
                  <CardDescription>Опыт работы</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Works Section */}
      <section id="works" className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Работы</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Избранные проекты и кейсы, которые принесли реальные результаты
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project 1 */}
            <Card className="group hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-primary to-purple-600 rounded-t-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <Icon name="Instagram" size={32} />
                </div>
              </div>
              <CardHeader>
                <CardTitle>Косметический бренд</CardTitle>
                <CardDescription>SMM-продвижение в Instagram</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>Рост подписчиков</span>
                    <span className="font-semibold">+340%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Охват</span>
                    <span className="font-semibold">180K/мес</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Конверсия</span>
                    <span className="font-semibold">4.2%</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  <Icon name="ExternalLink" size={16} />
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            {/* Project 2 */}
            <Card className="group hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-cyan-600 rounded-t-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <Icon name="FileText" size={32} />
                </div>
              </div>
              <CardHeader>
                <CardTitle>Контент-стратегия</CardTitle>
                <CardDescription>B2B компания в сфере IT</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>Трафик на сайт</span>
                    <span className="font-semibold">+280%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Лиды</span>
                    <span className="font-semibold">+150%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>ROI</span>
                    <span className="font-semibold">320%</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  <Icon name="ExternalLink" size={16} />
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            {/* Project 3 */}
            <Card className="group hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-pink-500 to-rose-600 rounded-t-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <Icon name="TrendingUp" size={32} />
                </div>
              </div>
              <CardHeader>
                <CardTitle>TikTok-маркетинг</CardTitle>
                <CardDescription>Фэшн-бренд для молодежи</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>Просмотры</span>
                    <span className="font-semibold">1.2M</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Вовлечение</span>
                    <span className="font-semibold">8.5%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Продажи</span>
                    <span className="font-semibold">+420%</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  <Icon name="ExternalLink" size={16} />
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Обо мне</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Помогаю брендам находить свою аудиторию и строить долгосрочные
                отношения через качественный контент
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Экспертиза</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>SMM и социальные сети</span>
                      <span className="text-sm text-muted-foreground">95%</span>
                    </div>
                    <Progress value={95} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Контент-маркетинг</span>
                      <span className="text-sm text-muted-foreground">90%</span>
                    </div>
                    <Progress value={90} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Аналитика и отчетность</span>
                      <span className="text-sm text-muted-foreground">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Таргетированная реклама</span>
                      <span className="text-sm text-muted-foreground">88%</span>
                    </div>
                    <Progress value={88} className="h-2" />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Услуги</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Icon
                      name="CheckCircle"
                      size={16}
                      className="text-primary"
                    />
                    <span>Разработка SMM-стратегии</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon
                      name="CheckCircle"
                      size={16}
                      className="text-primary"
                    />
                    <span>Создание контент-плана</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon
                      name="CheckCircle"
                      size={16}
                      className="text-primary"
                    />
                    <span>Ведение социальных сетей</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon
                      name="CheckCircle"
                      size={16}
                      className="text-primary"
                    />
                    <span>Настройка таргетированной рекламы</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon
                      name="CheckCircle"
                      size={16}
                      className="text-primary"
                    />
                    <span>Аналитика и оптимизация</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon
                      name="CheckCircle"
                      size={16}
                      className="text-primary"
                    />
                    <span>Обучение команды</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Резюме</h2>
              <p className="text-muted-foreground">
                Мой путь в маркетинге и достижения
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Experience */}
              <div>
                <h3 className="text-xl font-semibold mb-6">Опыт работы</h3>
                <div className="space-y-6">
                  <div className="relative pl-6 border-l-2 border-primary">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                    <div className="mb-2">
                      <h4 className="font-semibold">Ведущий маркетолог</h4>
                      <p className="text-sm text-muted-foreground">
                        Digital Agency • 2022 - настоящее время
                      </p>
                    </div>
                    <p className="text-sm">
                      Разработка комплексных маркетинговых стратегий для
                      клиентов. Управление командой из 5 специалистов.
                    </p>
                  </div>

                  <div className="relative pl-6 border-l-2 border-muted">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-muted rounded-full"></div>
                    <div className="mb-2">
                      <h4 className="font-semibold">SMM-специалист</h4>
                      <p className="text-sm text-muted-foreground">
                        E-commerce компания • 2020 - 2022
                      </p>
                    </div>
                    <p className="text-sm">
                      Ведение социальных сетей, создание контента, настройка
                      рекламных кампаний.
                    </p>
                  </div>

                  <div className="relative pl-6 border-l-2 border-muted">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-muted rounded-full"></div>
                    <div className="mb-2">
                      <h4 className="font-semibold">Контент-менеджер</h4>
                      <p className="text-sm text-muted-foreground">
                        Стартап • 2019 - 2020
                      </p>
                    </div>
                    <p className="text-sm">
                      Создание контента для социальных сетей и блога компании.
                    </p>
                  </div>
                </div>
              </div>

              {/* Education & Certifications */}
              <div>
                <h3 className="text-xl font-semibold mb-6">Образование</h3>
                <div className="space-y-4 mb-8">
                  <div className="p-4 bg-background rounded-lg">
                    <h4 className="font-semibold">Магистр маркетинга</h4>
                    <p className="text-sm text-muted-foreground">
                      МГУ • 2018-2020
                    </p>
                  </div>
                  <div className="p-4 bg-background rounded-lg">
                    <h4 className="font-semibold">Бакалавр журналистики</h4>
                    <p className="text-sm text-muted-foreground">
                      МГИМО • 2014-2018
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-6">Сертификаты</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Icon name="Award" size={16} className="text-primary" />
                    <span className="text-sm">Google Analytics Certified</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Award" size={16} className="text-primary" />
                    <span className="text-sm">
                      Facebook Blueprint Certified
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Award" size={16} className="text-primary" />
                    <span className="text-sm">HubSpot Content Marketing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Award" size={16} className="text-primary" />
                    <span className="text-sm">Яндекс.Директ Specialist</span>
                  </div>
                </div>
              </div>
            </div>

            <Separator className="my-8" />

            {/* Contact */}
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Связаться со мной</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="default">
                  <Icon name="Mail" size={16} />
                  anna@email.com
                </Button>
                <Button variant="outline">
                  <Icon name="Phone" size={16} />
                  +7 (999) 123-45-67
                </Button>
                <Button variant="outline">
                  <Icon name="Linkedin" size={16} />
                  LinkedIn
                </Button>
                <Button variant="outline">
                  <Icon name="Instagram" size={16} />
                  Instagram
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
