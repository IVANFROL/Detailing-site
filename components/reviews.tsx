import { Star } from "lucide-react"

const reviews = [
  {
    name: "Максим Ботнарь",
    date: "5 октября",
    rating: 5,
    text: "Рекомендую ребят, как профессионалов своего дела Машина приобрела совершенно другой вид Сначала обратился за 3х фазной мойкой, а затем уже и химчистка салона Дали рекомендации , без навязывания лишних услуг Так же отмечу , что у меня не получилось приехать в запланированный день , отнеслись с пониманием , подстроились (не стоит этим злоупотреблять, только в случае ЧП) Лучшие по Ярославскому направлению"
  },
  {
    name: "Армаис Оганезов",
    date: "25 марта",
    rating: 5,
    text: "Большое спасибо ребятам за классную работу. Делал Тонировку стекол и оклейку пленкой. Чистил кроме этого потолок ( химчистка ) и полировку кожуха защиты запасного колеса, мойку двигателя. Сделали все качественно и в срок. Очень понравилось отношение и клиентоориентированность. Сам еще вернусь делать шумку и естественно рекомендую."
  },
  {
    name: "Владимир Барыкин",
    date: "16 августа",
    rating: 5,
    text: "Добросовестные девченки работают. Работу свою выполнили на отлично. Рекомендую."
  },
  {
    name: "Фома Киняев",
    date: "13 марта",
    rating: 5,
    text: "Обращался к барышням за химчисткой после того, как немного утопил автомобиль в грязи (с проникновением в салон). Девушки сделали всё в лучшем виде! Пускай в моём авто нету ковролина, но задача всё равно была не из простых. Большое спасибо! Намерен обращаться сюда и вы будущем."
  }
]

export function Reviews() {
  return (
    <section className="bg-black px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-white md:text-5xl">ОТЗЫВЫ</h2>
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-[#54E260] to-[#348B41] mx-auto"></div>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-[#54E260] text-[#54E260]" />
              ))}
            </div>
            <span className="text-2xl font-bold text-white">5.0</span>
            <span className="text-[#575757]">36 отзывов</span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="rounded-lg border border-[#54E260]/20 bg-gradient-to-b from-zinc-900 to-black p-6 transition-all duration-300 hover:border-[#54E260]/40"
            >
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-white">{review.name}</h3>
                  <p className="text-sm text-[#575757]">{review.date}</p>
                </div>
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#54E260] text-[#54E260]" />
                  ))}
                </div>
              </div>
              <p className="text-sm text-[#575757] leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

