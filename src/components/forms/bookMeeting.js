import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup
	.object({
		name: yup.string().required(),
		email: yup.string().email('please enter a valid email').required(),
		phone: yup
			.string()
			.matches(/^\d{10}$/gm, 'please enter a valid mobile number')
			.required(),
		pincode: yup
			.string()
			.matches(/^\d{6}$/gm, 'please enter a valid pincode')
			.required()
	})
	.required()

export default function BookMeetingForm() {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid }
	} = useForm({
		mode: 'onChange',
		resolver: yupResolver(schema)
	})
	const onSubmit = (data) => console.log(data)

	console.log(errors)

	return (
		<div>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="flex flex-col border-2 border-gray-200 shadow-md w-full md:w-1/4 items-center p-10"
			>
				<div className="text-2xl font-bold mb-4">decide text</div>
				<div className="flex flex-col w-full mb-4">
					<input
						{...register('name')}
						type="text"
						placeholder="Enter your name"
						className="grow rounded-md border-2 outline-offset-2 border-gray-200 focus:border-red-600 focus:outline-red-200 py-1 px-2"
					/>
					<p className="text-sm text-red-700">{errors.name?.message}</p>
				</div>
				<div className="flex flex-col w-full mb-4">
					<input
						{...register('email')}
						type="email"
						placeholder="Enter your email"
						className="grow rounded-md border-2 outline-offset-2 border-gray-200 focus:border-red-600 focus:outline-red-200 py-1 px-2"
					/>
					<p className="text-sm text-red-700">{errors.email?.message}</p>
				</div>

				<div className="flex flex-col w-full mb-4">
					<div className="flex w-full">
						<span className="bg-gray-200 rounded-l-md py-1 px-2">+91</span>
						<input
							{...register('phone')}
							type="tel"
							maxLength={10}
							placeholder="Enter your mobile number"
							className="grow rounded-r-md border-2 outline-offset-2 border-gray-200 focus:border-red-600 focus:outline-red-200 py-1 px-2"
						/>
					</div>
					<p className="text-sm text-red-700">{errors.phone?.message}</p>
				</div>

				<div className="flex flex-col w-full mb-4">
					<input
						{...register('pincode')}
						type="text"
						maxLength={6}
						placeholder="Enter your pincode"
						className="grow rounded-md border-2 outline-offset-2 border-gray-200 focus:border-red-600 focus:outline-red-200 py-1 px-2"
					/>
					<p className="text-sm text-red-700">{errors.pincode?.message}</p>
				</div>

				<button
					type="submit"
					className=" shadow-lg shadow-indigo-600 bg-purple-600 text-gray-100 hover:bg-purple-500 disabled:hover:cursor-not-allowed w-full py-3 rounded-full"
					disabled={!isValid}
				>
					decide text
				</button>
			</form>
		</div>
	)
}
