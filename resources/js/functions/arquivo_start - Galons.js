const { result } = require("lodash");

$(document).ready(function(){
  $('.ui.form')
    .form({
      fields: {
        name: {
          identifier: 'name',
          rules: [
            {
              type   : 'empty',
              prompt : 'Please enter your name'
            }
          ]
        },
        email: {
          identifier: "email",
          rules: [
            {
              type : 'empty',
              prompt : 'Please enter your email'
            }
          ]
        },
        phone: {
          identifier: "phone",
          rules: [
            {
              type : 'empty',
              prompt : 'Please enter your phone'
            }
          ]
        },
        subject: {
          identifier: "subject",
          rules: [
            {
              type : 'empty',
              prompt : 'Please enter your subject'
            }
          ]
        },
        message: {
          identifier: "message",
          rules: [
            {
              type : 'empty',
              prompt : 'Please enter your message'
            }
          ]
        }
      }
    })
  ;

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const validateName = (name) => {
    return name.match(
      /^[A-Za-z\s]+$/
    );
  };

  const validatePhoneNumber = (phone) => {
    return phone
  }

  const validateSubject = (subject) => {
    return subject
  }

  const validateMessage = (message) => {
    return message
  }
  
  const emailValue = () => {
    let result = $('#provaJETemail p')
    let resultBold = $('.nishiishini')
    let email = $('#email').val();
    
  
    if (validateEmail(email)) {
      result.text(' é válido 🤗 🤑');
      resultBold.text(email)
      $('#provaJETemail').removeClass('error')
    } else {
      result.text(' não é válido 😒');
      resultBold.text(email)
      $('#provaJETemail').addClass('error')
    }
    return false;
  }

  const nameValue = () => {
    let resultName = $('#provaJETname')
    let name = $('#name').val()

    if (validateName(name)) {
      resultName.text(name)
      resultName.removeClass('error')
    } else {
      resultName.text('não é permitido dígitos em nomes')
      resultName.addClass('error')
    }
    return false;
  }

  const phoneNumberValue = () => {
    let resultPhoneNumber = $('#provaJETphone')
    let phoneNumber = $('#phone').val()

    if (validatePhoneNumber(phoneNumber)) {
      resultPhoneNumber.text(phoneNumber)
    }
    return false
  }

  const subjectValue = () => {
    let resultSubject = $('#provaJETsubject')
    let subject = $('#subject').val()

    if (validateSubject(subject)) {
      resultSubject.text(subject)
    }
    return false
  }

  const messageValue = () => {
    let resultMessage = $('#provaJETmessage')
    let message = $('#message').val()

    if (validateMessage(message)) {
      resultMessage.text(message)
    }
    return false
  }
  
  $('#email').on('input', emailValue);
  $('#name').on('input', nameValue) 
  $('#phone').on('input', phoneNumberValue)
  $('#subject').on('input', subjectValue)
  $('#message').on('input', messageValue)

  let validateSubmit = document.querySelectorAll('.ui.form > span.error')
  console.log(validateSubmit.length)
})
