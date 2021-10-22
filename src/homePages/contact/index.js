import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import './styles.scss'
import info from '../../static/icons/info.svg'

function Contact() {

 	const handleSubmit = (body) => {
 		console.log(body)
 	}

	const validationSchema = Yup.object({
		name: Yup.string().required('Debe introducir un nombre'),
 		email: Yup.string().email('Formato de Email invalido').required('Ingrese un Email'),
 		message: Yup.string().required('Escriba su consulta')
	})

	const formik = useFormik({
 		validationSchema: validationSchema, 
 		initialValues: {
			name: '',
 			email: '',
 			message: ''
 		},
 		onSubmit: (values) => handleSubmit(values)
	 })
	 
  return (
    <div className="container-fluid d-flex flex-column contact-container justify-content-center align-items-center">
      <div className="container d-flex flex-column justify-content-center align-items-center contact-container__form">
				<div className="d-flex">
      	<h1 className="pe-2 contact-container__title">Contacto</h1>
				<div className="contact-container__info d-flex">
					<img className="contact-container__info-icon" src={info} alt="info icon iconos8" />
					<span className="contact-container__tooltip">Se enviará un mail con la informacion introducida</span>
				</div>
				</div>
      <form className="d-flex flex-column justify-content-center align-items-end" onSubmit={formik.handleSubmit}>
					<div className='contact-container__form-group'>
						<label label="Name">Nombre</label>
            <input 
							type='text'
							name='name'
 							value={formik.values.name}
 							onChange={formik.handleChange}
 							isValid={formik.values.name && !formik.errors.name}
 							isInvalid={formik.errors.name}
						/>
					</div>
					<span type="invalid">{formik.errors.name}</span>
					<div className='contact-container__form-group'>
						<label label="Email">Email</label>
            <input
							type='text'
							name='email'
							value={formik.values.email}
							onChange={formik.handleChange}
							isValid={formik.values.email && !formik.errors.email}
							isInvalid={formik.errors.email}
						/>
					</div>
					<span type="invalid">{formik.errors.email}</span>
					<div className='contact-container__form-group d-flex'>
						<label label="Message">Consulta</label>
            <textarea
              className="d-flex" 
							type='text'
							name='message'
							value={formik.values.message}
							onChange={formik.handleChange}
							isValid={formik.values.message && !formik.errors.message}
							isInvalid={formik.errors.message}
						/>
					</div>
					<span type="invalid">{formik.errors.message}</span>
          <button type='submit' className="contact-container__button d-flex align-self-center">Enviar</button>
      </form>
      </div>
    </div>
  )
}

export default Contact
