const submitButton = document.getElementById('submit-button');
const firstNameInput = document.getElementById('first_name_input');
const lastNameInput = document.getElementById('last_name_input');
const emailInput = document.getElementById('email_input');
const phoneInput = document.getElementById('phone_input');
const privecyCheck = document.getElementById('privacy_check');
const directionSelect = document.getElementById('direction_select')
const commentInput = document.getElementById('textAreaComment')


submitButton.addEventListener('click', async () => {
  const canSubmit = !!(firstNameInput.value && lastNameInput.value && emailInput.value && phoneInput.value && privecyCheck.checked && directionSelect.value)

  if (canSubmit) {
    // submit form
    const formModal = new bootstrap.Modal(document.getElementById('formModal'))
    formModal.hide()

    try {
      const data = {
        first_name: firstNameInput.value,
        last_name: lastNameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        subject: directionSelect.value,
        comment: commentInput.value
      }

      const res = await postForm(data)
      console.log(res)
      
    } catch (error) {
      console.log(error)
      const errorModal = new bootstrap.Modal(document.getElementById('errorModal'))
      errorModal.show()
      return
    }

    const successModal = new bootstrap.Modal(document.getElementById('successModal'))
    successModal.show()
  } else {
    const formModal = new bootstrap.Modal(document.getElementById('formModal'))
    formModal.hide()

    const errorModal = new bootstrap.Modal(document.getElementById('errorModal'))
    errorModal.show()
  }
})