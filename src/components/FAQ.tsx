import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "С какого возраста можно начинать?",
      answer:
        "Занятия подходят для детей с 6 лет (1 класс). В этом возрасте дети лучше всего усваивают иностранные языки через игру и общение. Программа адаптируется под возраст и уровень каждого ребёнка.",
    },
    {
      question: "Сколько длится занятие?",
      answer:
        "Каждое занятие длится 45 минут — оптимальное время для концентрации внимания младшеклассника. Уроки проходят в онлайн-формате 2 раза в неделю.",
    },
    {
      question: "Нужна ли какая-то база у ребёнка?",
      answer:
        "Нет, начинаем с нуля! Программа построена так, что даже дети без какого-либо опыта быстро осваивают первые слова и фразы уже на 2–3 уроке.",
    },
    {
      question: "Как проходят онлайн-занятия?",
      answer:
        "Занятия проходят в Zoom или Skype. Понадобится только компьютер или планшет с камерой и интернетом. Мы используем интерактивные материалы, игры и анимации прямо на экране.",
    },
    {
      question: "Можно ли перенести занятие?",
      answer:
        "Да, перенести занятие можно бесплатно при уведомлении за 12 часов. Понимаем, что у детей бывают болезни и другие обстоятельства.",
    },
    {
      question: "Когда ребёнок начнёт говорить по-английски?",
      answer:
        "Первые слова и простые фразы — уже на 2–3 занятии. Полноценный базовый разговорный уровень формируется примерно за 3–4 месяца регулярных занятий.",
    },
  ]

  return (
    <section id="faq" className="bg-muted/30 py-20 md:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">Вопросы?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Частые вопросы родителей
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-foreground font-semibold hover:text-accent">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
