export function Testimonials() {
  const testimonials = [
    {
      name: "Мария Соколова",
      role: "Мама ученика, 2 класс",
      image: "/professional-woman-headshot.png",
      quote:
        "Сын раньше отказывался учить английский в школе. После трёх месяцев занятий сам просит включить английские мультики. Это настоящее чудо!",
    },
    {
      name: "Андрей Петров",
      role: "Папа ученицы, 1 класс",
      image: "/professional-man-headshot.png",
      quote:
        "Дочка в восторге от занятий. Уже через месяц начала называть предметы по-английски дома. Преподаватель умеет найти подход к детям.",
    },
    {
      name: "Елена Морозова",
      role: "Мама ученика, 3 класс",
      image: "/professional-woman-smiling.png",
      quote:
        "Занимаемся уже полгода. Сын перестал бояться английского в школе — теперь отвечает у доски без страха. Очень благодарна за такой подход!",
    },
  ]

  return (
    <section id="testimonials" className="bg-background py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">Отзывы родителей</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">Что говорят наши семьи</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-accent">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
