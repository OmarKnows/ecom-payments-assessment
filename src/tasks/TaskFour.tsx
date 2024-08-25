import Container from '@components/Container';
import Input from '@components/Input';
import { Controller, useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TaskFour = () => {
	const {
		handleSubmit,
		control,
		formState: { errors },
		getValues,
		reset,
	} = useForm({
		defaultValues: {
			fullName: '',
			email: '',
			password: '',
			confirmPassword: '',
			agreeToTerms: false,
		},
	});

	const onSubmit = (data: any) => {
		console.log('Form submitted:', data);
		toast.success('Registration successful!', {
			position: 'top-right',
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
		reset();
	};

	return (
		<Container title='Task Four: Develop a Form with Validation'>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='w-[400px] p-6 shadow-lg rounded-lg bg-white flex flex-col gap-3 items-center'
			>
				<Controller
					name='fullName'
					control={control}
					rules={{ required: 'Full Name is required' }}
					render={({ field }) => <Input {...field} placeholder='Full Name' error={errors.fullName?.message} />}
				/>
				<Controller
					name='email'
					control={control}
					rules={{
						required: 'Email is required',
						pattern: {
							value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
							message: 'Invalid email format',
						},
					}}
					render={({ field }) => <Input {...field} type='email' placeholder='Email' error={errors.email?.message} />}
				/>
				<Controller
					name='password'
					control={control}
					rules={{ required: 'Password is required' }}
					render={({ field }) => (
						<Input {...field} type='password' placeholder='Password' error={errors.password?.message} />
					)}
				/>
				<Controller
					name='confirmPassword'
					control={control}
					rules={{
						required: 'Confirm Password is required',
						validate: (value) => value === getValues('password') || 'Passwords do not match',
					}}
					render={({ field }) => (
						<Input {...field} type='password' placeholder='Confirm Password' error={errors.confirmPassword?.message} />
					)}
				/>
				<div className='mb-4'>
					<Controller
						name='agreeToTerms'
						control={control}
						rules={{ required: 'You must agree to the terms' }}
						render={({ field }) => (
							<label className='inline-flex items-center'>
								<input
									type='checkbox'
									checked={field.value}
									onChange={field.onChange}
									onBlur={field.onBlur}
									name={field.name}
									ref={field.ref}
									className='mr-2'
								/>
								I agree to the terms
							</label>
						)}
					/>
					{errors.agreeToTerms && <p className='text-red-500 text-sm mt-1'>{errors.agreeToTerms.message}</p>}
				</div>
				<button type='submit' className='w-fit p-2 bg-blue-500 text-white rounded-md'>
					Register
				</button>
			</form>
			<ToastContainer />
		</Container>
	);
};

export default TaskFour;
