import { useState } from 'react'
import type { FormEvent } from 'react'
import { Button } from '../ui/Button'

interface FormState {
  name: string
  email: string
  company: string
  message: string
}

type FormErrors = Partial<Record<keyof FormState, string>>

const INITIAL_STATE: FormState = {
  name: '',
  email: '',
  company: '',
  message: '',
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {}

  if (!values.name.trim()) {
    errors.name = 'Укажите имя'
  }
  if (!values.email.trim()) {
    errors.email = 'Укажите email'
  } else if (!emailPattern.test(values.email)) {
    errors.email = 'Введите корректный email'
  }
  if (!values.company.trim()) {
    errors.company = 'Укажите компанию'
  }
  if (values.message.trim().length < 10) {
    errors.message = 'Сообщение должно быть не короче 10 символов'
  }

  return errors
}

const inputBase =
  'block w-full rounded-lg border bg-white px-4 py-2.5 text-base text-neutral-800 placeholder:text-neutral-400 outline-none transition-colors focus:border-brand-400'

const errorText = 'mt-1 text-sm text-red-600'

/**
 * FeedbackForm-секция (Форма обратной связи):
 * имя, email, компания, сообщение; валидация с понятными ошибками
 * и success-состояние вместо формы после отправки.
 * Светлый фон #f2f2f4, белая карточка формы.
 */
export default function FeedbackFormBlock() {
  const [values, setValues] = useState<FormState>(INITIAL_STATE)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  function handleChange(
    field: keyof FormState,
    value: string,
  ) {
    setValues((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <section id="feedback" className="bg-[#f2f2f4] py-24">
        <div className="mx-auto w-full max-w-[1440px] px-4 md:px-10">
          <div className="mx-auto flex max-w-lg flex-col items-center gap-4 rounded-3xl bg-white p-10 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-500 text-white">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M5 13l4 4L19 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-black">Заявка отправлена</h2>
            <p className="text-base leading-relaxed text-[#5a5b62]">
              Спасибо! Мы свяжемся с вами в ближайшее время по указанному email.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="feedback" className="bg-[#f2f2f4] py-24">
      <div className="mx-auto w-full max-w-[1440px] px-4 md:px-10">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Текст слева */}
          <div className="max-w-md">
            <h2 className="mt-3 text-4xl font-semibold leading-tight tracking-tight text-black md:text-5xl">
              Обсудим ваш проект
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#5a5b62]">
              Оставьте заявку — покажем, как Снэпбилд встраивает дизайн-систему
              в ваш маркетинг, и ответим на вопросы.
            </p>
            <div className="mt-8">
              <p className="text-sm text-[#5a5b62]">Или напишите напрямую:</p>
              <a
                href="mailto:hey@snapbuild.ru"
                className="mt-1 inline-block text-base font-medium text-brand-500 transition-colors hover:text-brand-600"
              >
                hey@snapbuild.ru
              </a>
            </div>
          </div>

          {/* Форма справа */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-5 rounded-3xl bg-white p-8 shadow-card"
          >
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-neutral-700">
                Имя
              </label>
              <input
                id="name"
                type="text"
                value={values.name}
                onChange={(e) => handleChange('name', e.target.value)}
                placeholder="Как к вам обращаться"
                className={inputBase}
              />
              {errors.name ? <p className={errorText}>{errors.name}</p> : null}
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-neutral-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={values.email}
                onChange={(e) => handleChange('email', e.target.value)}
                placeholder="you@company.ru"
                className={inputBase}
              />
              {errors.email ? <p className={errorText}>{errors.email}</p> : null}
            </div>

            <div>
              <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-neutral-700">
                Компания
              </label>
              <input
                id="company"
                type="text"
                value={values.company}
                onChange={(e) => handleChange('company', e.target.value)}
                placeholder="Название компании"
                className={inputBase}
              />
              {errors.company ? (
                <p className={errorText}>{errors.company}</p>
              ) : null}
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-neutral-700">
                Сообщение
              </label>
              <textarea
                id="message"
                rows={4}
                value={values.message}
                onChange={(e) => handleChange('message', e.target.value)}
                placeholder="Расскажите о вашей задаче"
                className={inputBase}
              />
              {errors.message ? (
                <p className={errorText}>{errors.message}</p>
              ) : null}
            </div>

            <Button
              type="submit"
              variant="primary"
              size="md"
              className="mt-2 w-full"
            >
              Отправить заявку
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}