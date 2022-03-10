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
  let sessionStorageVerification = sessionStorage.getItem("VerificationControl")
  if (sessionStorageVerification == "true" && sessionStorageVerification != null){
    $('#btnSendProvaJET').hide()
    $('#btnAttProvaJET').show()
    $('#addText').append('<p>Ao aceitar, você será redirecionado para a página de atualização de dados!</p>')
    $('#btnAttProvaJET').on('click', () => {
      $('.ui.basic.modal')
        .modal('show')
      ;
      // let name = $('#name').val()
      // let email = $('#email').val()
      // let cel = $('#phone').val()
      // let subject = $('#subject').val()
      // let message = $('#message').val()
      // sessionStorage.setItem("Name", name )
      // sessionStorage.setItem("Email", email )
      // sessionStorage.setItem("Phone", cel )
      // sessionStorage.setItem("Subject", subject )
      // sessionStorage.setItem("Message", message )
      // sessionStorage.setItem("VerificationControl", "true" )
    }) 
    $("#btnEditProvaJET").on('click', (e) => {
      $("#btnSendProvaJET").hide()
      $("#btnEditProvaJET").hide()
      e.preventDefault()
      let sessionName = sessionStorage.getItem("Name")
      let sessionEmail = sessionStorage.getItem("Email")
      let sessionCel = sessionStorage.getItem("Phone")
      let sessionSub = sessionStorage.getItem("Subject")
      let sessionMsg = sessionStorage.getItem("Message")
      $("#name").val(sessionName)
      $("#email").val(sessionEmail)
      $("#phone").val(sessionCel)
      $("#subject").val(sessionSub)
      $("#message").val(sessionMsg)
    
    }) 
  } else {
    $("#btnAttProvaJET").hide()
  }
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
        $('#provaJETemail').addClass('sucess')
      } else {
        result.text(' não é válido ');
        resultBold.text(email)
        $('#provaJETemail').addClass('error')
        $('#provaJETemail').removeClass('sucess')
      }
      return false;
    }

    const nameValue = () => {
      let resultName = $('#provaJETname')
      let name = $('#name').val()

      if (validateName(name)) {
        resultName.text(name)
        resultName.removeClass('error')
        resultName.addClass('sucess')
      } else {
        resultName.text('não é permitido dígitos em nomes')
        resultName.addClass('error')
        resultName.removeClass('sucess')
      }
      return false;
    }

    const phoneNumberValue = () => {
      let resultPhoneNumber = $('#provaJETphone')
      let phoneNumber = $('#phone').val()

      if (validatePhoneNumber(phoneNumber)) {
        resultPhoneNumber.text(phoneNumber)
        if (resultPhoneNumber.text().length < 14) {
          resultPhoneNumber.addClass('error')
          resultPhoneNumber.removeClass('sucess')
        } else {
          resultPhoneNumber.removeClass('error')
          resultPhoneNumber.addClass('sucess')
        }

      }
      return false
    }

    const subjectValue = () => {
      let resultSubject = $('#provaJETsubject')
      let subject = $('#subject').val()

      if (validateSubject(subject)) {
        resultSubject.text(subject)
        resultSubject.addClass('sucess')
      }
      return false
    }

    const messageValue = () => {
      let resultMessage = $('#provaJETmessage')
      let message = $('#message').val()

      if (validateMessage(message)) {
        resultMessage.text(message)
        resultMessage.addClass('sucess')
      }
      return false
    }

    $('#email').on('input', emailValue);
    $('#name').on('input', nameValue) 
    $('#phone').on('input', phoneNumberValue)
    $('#subject').on('input', subjectValue)
    $('#message').on('input', messageValue)

    
    // function validateInfo(dataArray) {
    //   let validateSubmit = []
    //   validateSubmit = document.querySelectorAll('.ui.form span.error')
    //   if (validateSubmit.length > 0) {
    //     if (dataArray == 'undefined' || dataArray == null || dataArray.length == 0) {
    //       alert("Telefone preenchido incorretamente")
    //     } else {
    //       alert(dataArray + " preenchido incorretamente")
    //     }
    //     return false
    //   } else {
    //     let name = $('#name').val()
    //     let email = $('#email').val()
    //     let cel = $('#phone').val()
    //     let subject = $('#subject').val()
    //     let message = $('#message').val()
    //     sessionStorage.setItem("Name", name )
    //     sessionStorage.setItem("Email", email )
    //     sessionStorage.setItem("Phone", cel )
    //     sessionStorage.setItem("Subject", subject )
    //     sessionStorage.setItem("Message", message )
    //     sessionStorage.setItem("VerificationControl", "true" )
    //     window.location.href = '/hotsite/FrontEnd'
    //   }
    // }

    $('#btnSendProvaJET').on('click', (e) => {
      // let validateSubmit = []
      // validateSubmit = document.querySelectorAll('.ui.form span.error')
      // let array = [...validateSubmit]
      // if (array.length > 0) {
      //   array.map(function(element) {
      //     let dataArray = []
      //     dataArray = element.dataset.value
      //     console.log(dataArray)
      //     validateInfo(dataArray)
      //   });
      // }
      let name = $('#name').val()
      let email = $('#email').val()
      let cel = $('#phone').val()
      let subject = $('#subject').val()
      let message = $('#message').val()
      // if ((name || email || cel || subject || message != null) || ( name || email || cel || subject || message != '') || ( name || email || cel || subject || message != undefined)) {
      sessionStorage.setItem("Name", name )
      sessionStorage.setItem("Email", email )
      sessionStorage.setItem("Phone", cel )
      sessionStorage.setItem("Subject", subject )
      sessionStorage.setItem("Message", message )
      sessionStorage.setItem("VerificationControl", "true" )
      window.location.href = '/hotsite/FrontEnd'
      // }
    }) 

    $('#btnSendProvaJET2').on('click', () => {
      let name = $('#name').val()
      let email = $('#email').val()
      let cel = $('#phone').val()
      let subject = $('#subject').val()
      let message = $('#message').val()
      sessionStorage.setItem("Name", name )
      sessionStorage.setItem("Email", email )
      sessionStorage.setItem("Phone", cel )
      sessionStorage.setItem("Subject", subject )
      sessionStorage.setItem("Message", message )
      sessionStorage.setItem("VerificationControl", "true" )
    }) 

    $('#btnShowPreviousInfo').text("Visualizar Informações")
    $('#btnShowPreviousInfo').on('click', (e) => {
      e.preventDefault()
      let btnAtualizarDados = $('#btnSendProvaJET2')
      btnAtualizarDados.removeAttr('disabled')
      btnAtualizarDados.css('opacity', '1')
      let sessionName = sessionStorage.getItem("Name")
      let sessionEmail = sessionStorage.getItem("Email")
      let sessionCel = sessionStorage.getItem("Phone")
      let sessionSub = sessionStorage.getItem("Subject")
      let sessionMsg = sessionStorage.getItem("Message")
      $('#name').val(sessionName)
      $('#email').val(sessionEmail)
      $('#phone').val(sessionCel)
      $('#subject').val(sessionSub)
      $('#message').val(sessionMsg)
    })
  })
  

