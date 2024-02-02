import { React, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import Swal from 'sweetalert2'
import NavbarPage from "../components/NavbarPage";
import FooterPage from "../components/FooterPage";

export const LoginPage = () => {

	const { login } = useContext(AuthContext);

	const [form, setForm] = useState({

		email: 'test20@gmail.com',
		password: '1234',
		rememberme: false,
	})

	useEffect(() => {

		const email = localStorage.getItem('email');

		if (email) {
			setForm((form) => ({
				...form,
				email,
				rememberme: true,
			}));
		}


	}, [])

	const onChange = ({ target }) => {

		const { name, value } = target;

		setForm({
			...form,
			[name]: value
		})

	}

	const toggleCheck = () => {
		setForm({
			...form,
			rememberme: !form.rememberme
		})
	}

	const onSubmit = async (ev) => {
		ev.preventDefault();

		if (form.rememberme) {

			localStorage.setItem('email', form.email);
		} else {
			localStorage.removeItem('email');

		}
		//llamar al backend
		const { email, password } = form;
		const ok = await login(email, password);

		if (!ok) {
			Swal.fire('Error', 'verifique el usuario y contraseña', 'error');
		}
	}

	const todoOk = () => {

		return (form.email.length > 0 && form.password.length > 0) ? true : false
	}

	return (
		<>
			<NavbarPage />

			<section className="bg-gray-50 dark:bg-gray-900">
				<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
					<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
						<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
							<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
								Iniciar Sesión
							</h1>
							<form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
								<div>
									<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
									<input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required value={form.email} onChange={onChange} />
								</div>
								<div>
									<label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
									<input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required value={form.password} onChange={onChange} />
								</div>
								<div className="flex items-center justify-between">
									<div className="flex items-start">
										<div className="flex items-center h-5" onClick={() => toggleCheck()}>
											<input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required checked={form.rememberme} readOnly />
										</div>
										<div className="ml-3 text-sm">
											<label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Recordarme</label>
										</div>
									</div>

									<Link to='/auth/register'>
										<button htmlFor="remember" className="text-gray-500 dark:text-gray-300">Nueva cuenta?</button>

									</Link>

								</div>
								<button className="w-full text-white bg-slate-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" disabled={!todoOk()}>Ingresar</button>
							</form>
						</div>
					</div>
				</div>
			</section>

			<FooterPage />



			{/* <form 
				className="login100-form validate-form flex-sb flex-w"
				onSubmit={onSubmit}
				>
					<span className="login100-form-title mb-3">
						Chat - LOGIN
					</span>
					
					<div className="wrap-input100 validate-input mb-3">
						<input 
						className="input100" 
						type="email" 
						name="email" 
						placeholder="Email" 
						value={form.email}
						onChange={ onChange }
						/>
						<span className="focus-input100"></span>
					</div>
					
					
					<div className="wrap-input100 validate-input mb-3">
						<input 
						className="input100" 
						type="password" 
						name="password" 
						placeholder="Password" 
						value={form.password}
						onChange={ onChange }
						/>
						<span className="focus-input100"></span>
					</div>
					
					<div className="row mb-3">
						<div 
						className="col"
						onClick={ ()=> toggleCheck() }
						>
							<input 
							className="input-checkbox100" 
							id="ckb1" 
							type="checkbox" 
							name="rememberme" 
							checked={form.rememberme}
							readOnly
							/>
							<label className="label-checkbox100">
								Recordarme
							</label>
						</div>

						<div className="col text-right">
							<Link to='/auth/register' className="txt1">
								Nueva cuenta?
							</Link>
						</div>
					</div>

					<div className="container-login100-form-btn m-t-17">
						<button 
						type="submit"
						className="login100-form-btn"
						disabled={ !todoOk()}
						>
							Ingresar
						</button>
					</div>

				</form>  */}
		</>
	)

}