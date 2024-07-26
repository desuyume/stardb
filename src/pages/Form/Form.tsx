import { FC } from 'react'
import { formSchema, FormSchemaProps } from 'lib/schemas'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import styles from './form.module.scss'

const Form: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		getValues
	} = useForm<FormSchemaProps>({
		resolver: zodResolver(formSchema)
	})

	const clickSubmit = () => {
		if (isValid) {
			console.log(
				`Form submitted successfully. First Name: ${
					getValues().firstName
				}, Last Name: ${getValues().lastName}`
			)
		}
	}

	return (
		<section className={styles.form}>
			<h2>Form</h2>

			<form onSubmit={handleSubmit(clickSubmit)}>
				<div className={styles.formGroup}>
					<label htmlFor='first-name'>First Name:</label>
					<input
						id='first-name'
						{...register('firstName')}
						className={errors.firstName ? styles.error : ''}
					/>
					{errors.firstName && (
						<span className={styles.errorMessage}>
							*{errors.firstName.message}
						</span>
					)}
				</div>
				<div className={styles.formGroup}>
					<label htmlFor='last-name'>Last Name:</label>
					<input
						id='last-name'
						{...register('lastName')}
						className={errors.lastName ? styles.error : ''}
					/>
					{errors.lastName && (
						<span className={styles.errorMessage}>
							*{errors.lastName.message}
						</span>
					)}
				</div>
				<button type='submit' onClick={clickSubmit}>
					Submit
				</button>
			</form>
		</section>
	)
}

export default Form
