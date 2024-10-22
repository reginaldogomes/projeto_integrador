import '@/assets/css/pages/contact.css'
import { HeadingPage } from '/components/HeadingPage.js'

export function renderContact() {
  const app = document.getElementById('app')

  // Limpa o conteúdo anterior, se houver
  app.innerHTML = ''

  // Cria e insere o componente HeadingPage
  const headingPage = HeadingPage({
    title: 'Contato',
    subtitle: 'Entre em contato conosco',
  })
  app.appendChild(headingPage)

  // Cria o conteúdo da página usando createElement para evitar o uso direto de innerHTML
  const container = document.createElement('div')
  container.classList.add('container-contact')

  // Cria a seção de contato
  const sectionContact = document.createElement('section')
  sectionContact.className = 'section-contact'
  sectionContact.appendChild(createContactForm())

  // Adiciona o Google Maps
  const mapIframe = document.createElement('iframe')
  mapIframe.src =
    'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15002.503510486065!2d-43.93413985!3d-19.940164399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbr!4v1728996655863!5m2!1sen!2sbr'
  mapIframe.width = '600'
  mapIframe.height = '350'
  mapIframe.style.border = '0'
  mapIframe.allowFullscreen = true
  mapIframe.loading = 'lazy'
  mapIframe.referrerPolicy = 'no-referrer-when-downgrade'

  container.appendChild(sectionContact)
  container.appendChild(mapIframe)

  app.appendChild(container)
}

function createContactForm() {
  const form = document.createElement('form')
  form.className = 'contact-form'
  form.action = '#'
  form.method = 'post'

  const formGroups = [
    {
      label: 'Nome:',
      type: 'text',
      id: 'name',
      placeholder: 'Seu nome',
      required: true,
    },
    {
      label: 'Empresa:',
      type: 'text',
      id: 'company',
      placeholder: 'Sua empresa',
      required: false,
    },
    {
      label: 'Email:',
      type: 'email',
      id: 'email',
      placeholder: 'Seu email',
      required: true,
    },
    {
      label: 'WhatsApp:',
      type: 'text',
      id: 'whatsapp',
      placeholder: 'Seu WhatsApp',
      required: true,
    },
  ]

  formGroups.forEach(({ label, type, id, placeholder, required }) => {
    const formGroup = document.createElement('div')
    formGroup.className = 'form-group'

    const labelElement = document.createElement('label')
    labelElement.setAttribute('for', id)
    labelElement.textContent = label

    const inputElement = document.createElement('input')
    inputElement.type = type
    inputElement.id = id
    inputElement.name = id
    inputElement.placeholder = placeholder
    if (required) inputElement.required = true

    formGroup.appendChild(labelElement)
    formGroup.appendChild(inputElement)
    form.appendChild(formGroup)
  })

  const messageGroup = document.createElement('div')
  messageGroup.className = 'form-group'

  const messageLabel = document.createElement('label')
  messageLabel.setAttribute('for', 'message')
  messageLabel.textContent = 'Mensagem:'
  messageGroup.appendChild(messageLabel)

  const textarea = document.createElement('textarea')
  textarea.id = 'message'
  textarea.name = 'message'
  textarea.rows = 5
  textarea.placeholder = 'Sua mensagem'
  textarea.required = true
  messageGroup.appendChild(textarea)

  const nationalityLabel = document.createElement('p')
  nationalityLabel.textContent = 'Nacionalidade:'
  messageGroup.appendChild(nationalityLabel)

  const nationalities = [
    { value: 'brasil', text: 'Brasileiro(a)' },
    { value: 'outro', text: 'Estrangeiro(a)' },
  ]

  nationalities.forEach(({ value, text }) => {
    const radioGroup = document.createElement('div')

    const radioInput = document.createElement('input')
    radioInput.type = 'radio'
    radioInput.name = 'nacionalidade'
    radioInput.id = value
    radioInput.value = value

    const radioLabel = document.createElement('label')
    radioLabel.setAttribute('for', value)
    radioLabel.textContent = text

    radioGroup.appendChild(radioInput)
    radioGroup.appendChild(radioLabel)
    messageGroup.appendChild(radioGroup)
  })

  const submitButton = document.createElement('button')
  submitButton.className = 'button_contact'
  submitButton.type = 'submit'
  submitButton.textContent = 'Enviar'

  messageGroup.appendChild(submitButton)
  form.appendChild(messageGroup)

  return form
}
