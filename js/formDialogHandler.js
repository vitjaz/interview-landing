const submitButton = document.getElementById('submit-button');
const firstNameInput = document.getElementById('first_name_input');
const lastNameInput = document.getElementById('last_name_input');
const emailInput = document.getElementById('email_input');
const phoneInput = document.getElementById('phone_input');
const privecyCheck = document.getElementById('privacy_check');
const directionSelect = document.getElementById('direction_select')
const commentInput = document.getElementById('textAreaComment')


submitButton.addEventListener('click', () => {
  const canSubmit = !!(firstNameInput.value && lastNameInput.value && emailInput.value && phoneInput.value && privecyCheck.checked && directionSelect.value)

  if (canSubmit) {
    // submit form
    const formModal = new bootstrap.Modal(document.getElementById('formModal'))
    formModal.hide()

    const successModal = new bootstrap.Modal(document.getElementById('successModal'))
    successModal.show()
  } else {
    const formModal = new bootstrap.Modal(document.getElementById('formModal'))
    formModal.hide()

    const errorModal = new bootstrap.Modal(document.getElementById('errorModal'))
    errorModal.show()
  }

  // console.log(firstNameInput.value)
  // console.log(lastNameInput.value)
  // console.log(emailInput.value)
  // console.log(phoneInput.value)
  // console.log(privecyCheck.checked)
  // console.log(directionSelect.value)
  // console.log(commentInput.value)
    console.log(canSubmit)
 
})