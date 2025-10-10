import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function ContactForm() {
  return (
    <section className="relative px-4 py-20">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/placeholder.svg?height=800&width=1920"
          alt="Background"
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-2xl">
        <h2 className="mb-12 text-center text-4xl font-bold text-white md:text-5xl">ФОРМА ОБРАТНОЙ СВЯЗИ</h2>
        <div className="mb-8 h-1 w-24 bg-gradient-to-r from-[#54E260] to-[#348B41] mx-auto"></div>

        <form className="space-y-6">
          <Input
            type="text"
            placeholder="Ваше имя"
            className="h-14 border-[#575757] bg-white/10 text-white placeholder:text-[#575757] focus:border-[#54E260] focus:ring-[#54E260]"
          />
          <Input
            type="tel"
            placeholder="Ваш телефон"
            className="h-14 border-[#575757] bg-white/10 text-white placeholder:text-[#575757] focus:border-[#54E260] focus:ring-[#54E260]"
          />
          <Input
            type="email"
            placeholder="Ваш email"
            className="h-14 border-[#575757] bg-white/10 text-white placeholder:text-[#575757] focus:border-[#54E260] focus:ring-[#54E260]"
          />
          <textarea
            placeholder="Сообщение"
            rows={5}
            className="w-full rounded-md border border-[#575757] bg-white/10 px-4 py-3 text-white placeholder:text-[#575757] focus:outline-none focus:ring-2 focus:ring-[#54E260] focus:border-[#54E260]"
          />
          <Button
            type="submit"
            size="lg"
            className="w-full bg-gradient-to-r from-[#54E260] to-[#348B41] py-6 text-lg font-semibold text-black hover:from-[#348B41] hover:to-[#54E260] transition-all duration-300"
          >
            ОТПРАВИТЬ
          </Button>
        </form>
      </div>
    </section>
  )
}
