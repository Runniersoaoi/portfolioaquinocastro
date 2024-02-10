import { useContext, useRef } from 'react'
import { useForm } from 'react-hook-form'
import '../Styles/Contact.css'
import LenguageContext from '../context/lenguageContext'
import ThemeContext from '../context/themeContext'
import emailjs from '@emailjs/browser';

const Contact = () => {

  const {register, handleSubmit, formState:{errors}} = useForm()
  const form = useRef();

  const sendEmail = () => {

    emailjs
      .sendForm('service_0o4ruu3', 'template_ogmdnbb', form.current, {
        publicKey: 'WU-xbXJNhJ-4dsXzj',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  // const onSubmit = handleSubmit((data) =>{
  //   console.log(data)
  // })

  const {texts} = useContext(LenguageContext)
  const {dark} = useContext(ThemeContext)


  return (
    <section id='contact' className={`contact-container ${!dark && 'clear-theme'}`}>
      <div className={`container-div-contact ${!dark && 'clear-theme'}`}>
        <div className={`container-info-contact ${!dark && 'clear-theme'}`}>
          <h2 className={`title-section-contact ${!dark && 'clear-theme'}`}>{texts.contactTitle}</h2>
          <p className={`text-section-contact ${!dark && 'clear-theme'}`}>{texts.contactMessage} </p>
          <div className={`container-email ${!dark && 'clear-theme'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#68e935" className="text-primary w-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"></path></svg>
            <p className={`${!dark && 'clear-theme'}`}>{texts.contactEmail}</p>
          </div>
          <div className={`container-location ${!dark && 'clear-theme'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#68e935" className="text-primary w-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path></svg>
            <p className={`${!dark && 'clear-theme'}`}>{texts.contactLocation}</p>
          </div>
          <div className={`container-social-networks ${!dark && 'clear-theme'}`}>
            <a href="https://github.com/Runniersoaoi" target='_blank' rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" fill='#68e935' viewBox="0 0 496 512" className="w-7 fill-primary"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg></a>
            <a href="https://www.linkedin.com/in/matias-aquino-castro-896016268" target='_blank' rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" fill='#68e935' viewBox="0 0 448 512" className="w-7 fill-primary"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg></a>
          </div>
        </div>
        <div className={`container-form-contact ${!dark && 'clear-theme'}`}>
          <div className={`container-form-div ${!dark && 'clear-theme'}`} >
            <form ref={form} onSubmit={handleSubmit(sendEmail)} className={`form-contact ${!dark && 'clear-theme'}`}>
              <label htmlFor="user_name">{texts.contactLabelName}</label>
              <input type="text" name="user_name" id='user_name' placeholder={texts.contactLabelName} {...register('user_name', 
              {
                required: {
                  value: true,
                  message: texts.controlFormRequired
                },
                minLength: {
                  value: 2,
                  message: texts.controlFormMinLengthName
                },
                maxLength: {
                  value: 100,
                  message: texts.controlFormMaxLengthName
                }
              })}/>
              {errors.user_name  && <span className={`${!dark && 'clear-theme'}`}>{errors.user_name.message}</span>}
              <label htmlFor="user_email">{texts.contactLabelEmail}</label>
              <input type="text" id='email' name="user_email" placeholder={texts.contactLabelEmail} {...register('user_email', 
              {
                required: {
                  value: true,
                  message: texts.controlFormRequired
                },
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9·-]+\.[a-z]{2,4}$/,
                  message: texts.controlFormEmail
                }
              })}/>
              {errors.user_email && <span className={`${!dark && 'clear-theme'}`}>{errors.user_email.message}</span>}
              <label htmlFor="message">{texts.contactLabelMessage}</label>
              <textarea name="message" id="message" cols="30" rows="10" placeholder={texts.contactLabelMessage} {...register('message', 
              {
                required: {
                  value: true,
                  message: texts.controlFormRequired
                },
                minLength: {
                  value: 10,
                  message: texts.controlFormMinLengthMessage
                },
                maxLength: {
                  value: 500,
                  message: texts.controlFormMaxLengthMessage
                }
              })}></textarea>
              {errors.message && <span className={`${!dark && 'clear-theme'}`}>{errors.message.message}</span>}
              <input type="submit" value={texts.contactBtnSend} />
            </form>
          </div>    
        </div>
      </div>
    </section>
  )
}

export default Contact