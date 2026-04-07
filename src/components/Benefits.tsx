export function Benefits() {
  const benefits = [
    {
      icon: "🎮",
      title: "Игровой формат",
      description: "Уроки через игры, песни и мультфильмы — дети учатся с удовольствием",
    },
    {
      icon: "👶",
      title: "Программа для возраста",
      description: "Материал разработан специально для детей 6–10 лет с учётом психологии развития",
    },
    {
      icon: "💬",
      title: "Разговорный акцент",
      description: "Ребёнок начинает говорить уже с первых занятий — без зубрёжки правил",
    },
    {
      icon: "📅",
      title: "Гибкое расписание",
      description: "Занятия в удобное время, онлайн — без поездок и потери времени",
    },
    {
      icon: "📖",
      title: "Домашние задания",
      description: "Короткие и интересные задания — 10–15 минут в день для закрепления",
    },
    {
      icon: "📈",
      title: "Отчёты для родителей",
      description: "Регулярная обратная связь о прогрессе ребёнка после каждого занятия",
    },
  ]

  return (
    <section id="benefits" className="bg-background py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">Почему мы</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Всё для успеха вашего ребёнка
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Современная методика обучения английскому, созданная специально для детей начальной школы
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
