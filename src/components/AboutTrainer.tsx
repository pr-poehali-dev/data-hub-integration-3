export function AboutTrainer() {
  return (
    <section id="about" className="bg-muted/30 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 md:h-full min-h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl"></div>
            <img src="/professional-trainer-headshot-smiling.jpg" alt="Преподаватель" className="w-full h-full object-cover rounded-2xl" />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-wide">О преподавателе</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
                Ваш учитель английского для детей
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Более 7 лет обучаю детей английскому языку. Каждый урок — это игра, открытие и радость.
              Дети не замечают, как начинают говорить по-английски!
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Использую авторскую методику с элементами сторителлинга, песен и визуальных карточек.
              Программа адаптирована специально для детей 6–10 лет с учётом особенностей детского восприятия.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent text-sm">&#10003;</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Сертифицированный педагог</p>
                  <p className="text-sm text-muted-foreground">TEFL/TESOL сертификат международного уровня</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent text-sm">&#10003;</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">300+ учеников</p>
                  <p className="text-sm text-muted-foreground">93% продолжают занятия после первого месяца</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent text-sm">&#10003;</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Индивидуальный подход</p>
                  <p className="text-sm text-muted-foreground">Программа адаптируется под темп и интересы ребёнка</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
