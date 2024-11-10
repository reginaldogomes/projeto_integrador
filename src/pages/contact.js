import '@/assets/css/pages/contact.css'
import { HeadingPage } from '/components/HeadingPage.js'

export function renderContact() {
  const app = document.getElementById('app')
  app.innerHTML = ''

  const headingPage = HeadingPage({
    title: 'Contato',
    subtitle: 'Entre em contato conosco',
  })
  app.appendChild(headingPage)

  const container = document.createElement('div')
  container.classList.add('container-contact')

  const sectionContact = document.createElement('section')
  sectionContact.className = 'section-contact'

  const formColumn = document.createElement('div')
  formColumn.className = 'form-column'
  formColumn.appendChild(createContactForm())

  const infoColumn = document.createElement('div')
  infoColumn.className = 'info-column'

  const infoTitle = document.createElement('h2')
  infoTitle.textContent = 'Informações de Contato'

  const contactDetails = [
    { label: 'Email:', value: 'contato@empresa.com', icon: 'fas fa-envelope' },
    {
      label: 'Telefone:',
      value: '+55 (11) 98765-4321',
      icon: 'fas fa-phone-alt',
    },
    {
      label: 'WhatsApp:',
      value: '+55 (11) 98765-4321',
      icon: 'fab fa-whatsapp',
    },
  ]

  contactDetails.forEach(({ label, value, icon }) => {
    const detail = document.createElement('p')
    const iconElement = document.createElement('i')
    iconElement.className = icon
    detail.appendChild(iconElement)
    detail.innerHTML += `<strong> ${label}</strong> ${value}`
    infoColumn.appendChild(detail)
  })

  const socialLinks = document.createElement('div')
  socialLinks.className = 'social-links'

  const socialMedia = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/empresa',
      icon: 'fab fa-linkedin',
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/empresa',
      icon: 'fab fa-instagram',
    },
  ]

  socialMedia.forEach(({ name, url, icon }) => {
    const link = document.createElement('a')
    link.href = url
    link.target = '_blank'

    const iconElement = document.createElement('i')
    iconElement.className = icon
    link.appendChild(iconElement)

    const linkText = document.createTextNode(` ${name}`)
    link.appendChild(linkText)

    socialLinks.appendChild(link)
  })

  infoColumn.appendChild(infoTitle)
  infoColumn.appendChild(socialLinks)

  sectionContact.appendChild(formColumn)
  sectionContact.appendChild(infoColumn)

  container.appendChild(sectionContact)

  const mapIframe = document.createElement('iframe')
  mapIframe.src =
    'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15002.503510486065!2d-43.93413985!3d-19.940164399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbr!4v1728996655863!5m2!1sen!2sbr'
  mapIframe.width = '100%'
  mapIframe.height = '350'
  mapIframe.style.border = '0'
  mapIframe.allowFullscreen = true
  mapIframe.loading = 'lazy'
  mapIframe.referrerPolicy = 'no-referrer-when-downgrade'

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
      required: true,
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
    inputElement.required = required

    // Event listeners para validação
    inputElement.addEventListener('input, textarea', () =>
      validateField(inputElement)
    )
    formGroup.appendChild(labelElement)
    formGroup.appendChild(inputElement)

    const errorMessage = document.createElement('span')
    errorMessage.className = 'error-message'
    errorMessage.textContent = 'Campo obrigatório'
    errorMessage.style.display = 'none'
    formGroup.appendChild(errorMessage)

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

  // Event listener para validação da mensagem
  textarea.addEventListener('input', () => validateField(textarea))

  const errorMessageTextarea = document.createElement('span')
  errorMessageTextarea.className = 'error-message'
  errorMessageTextarea.textContent = 'Campo obrigatório'
  errorMessageTextarea.style.display = 'none'
  messageGroup.appendChild(errorMessageTextarea)

  messageGroup.appendChild(textarea)
  form.appendChild(messageGroup)

  const nationalityGroup = document.createElement('div')
  nationalityGroup.className = 'form-group'

  const nationalityLabel = document.createElement('p')
  nationalityLabel.textContent = 'Nacionalidade:'
  nationalityGroup.appendChild(nationalityLabel)

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
    nationalityGroup.appendChild(radioGroup)
  })

  form.appendChild(nationalityGroup)

  const buttonGroup = document.createElement('div')
  buttonGroup.className = 'form-group'

  const submitButton = document.createElement('button')
  submitButton.className = 'button_contact'
  submitButton.type = 'submit'
  submitButton.textContent = 'Enviar'

  submitButton.addEventListener('click', (e) => {
    e.preventDefault()
    validateForm(form)
  })

  buttonGroup.appendChild(submitButton)
  form.appendChild(buttonGroup)

  return form
}

function validateField(input) {
  const formGroup = input.closest('.form-group') // Encontra o .form-group mais próximo
  const errorMessage = formGroup.querySelector('.error-message') // Encontra o span de erro dentro de .form-group

  if (input.required && input.value.trim() === '') {
    // Se o campo for obrigatório e estiver vazio
    input.style.borderColor = 'red'
    errorMessage.textContent = 'Campo obrigatório'
    errorMessage.style.display = 'block'
  } else if (input.type === 'email' && !isValidEmail(input.value.trim())) {
    // Se o campo for um email e não for válido
    input.style.borderColor = 'red'
    errorMessage.textContent = 'Por favor, insira um email válido'
    errorMessage.style.display = 'block'
  } else if (
    input.id === 'whatsapp' &&
    !isValidPhoneNumber(input.value.trim())
  ) {
    // Se o campo for WhatsApp e não for válido
    input.style.borderColor = 'red'
    errorMessage.textContent = 'Por favor, insira apenas números no WhatsApp'
    errorMessage.style.display = 'block'
  } else {
    // Caso contrário, a validação passa
    input.style.borderColor = 'green'
    errorMessage.style.display = 'none'
  }
}

// Função para validar o formato do email
function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return emailRegex.test(email)
}

// Função para validar o formato do WhatsApp (somente números)
function isValidPhoneNumber(phone) {
  const phoneRegex = /^\d+$/ // A expressão regular para garantir que o valor contenha apenas números
  return phoneRegex.test(phone)
}

function validateForm(form) {
  const fields = form.querySelectorAll('input[required], textarea[required]')
  fields.forEach((field) => {
    validateField(field)
    if (field.value.trim() === '') {
      field.style.borderColor = 'yellow'
    }
  })
}
