import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = handleSubmit((data) => console.log(data))

  console.log('errors', errors)

  return (
    <div className='bg-orange'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-5 py-12 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form onSubmit={onSubmit} className='p-10 rounded bg-white shadow-sm' noValidate>
              <div className='text-2xl'>Đăng Ký</div>
              <div className='mt-8'>
                <input
                  type='email'
                  className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-lg'
                  {...register('email', {
                    required: 'Email không đúng định dạng',
                    pattern: /^\S+@\S+\.\S+$/
                  })}
                  placeholder='Email'
                />

                <div className='mt-2 mb-1 text-red-600 min-h-[1rem]'>Email không hợp lệ</div>
              </div>

              <div className='mt-3'>
                <input
                  type='password'
                  className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-lg'
                  placeholder='Password'
                  {...register('password')}
                />
                <div className='mt-2 mb-1 text-red-600 min-h-[1rem]'>Mật khẩu không đúng</div>

                <input
                  type='password'
                  className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-lg'
                  placeholder='Confirm Password'
                  {...register('confirm_password')}
                />
                <div className='mt-2 mb-1 text-red-600 min-h-[1rem]'>Mật khẩu không đúng</div>
              </div>

              <div className='mt-3'>
                <button className='mt-3 w-full text-center text-white py-4 px-2 uppercase bg-red-500'>Đăng Ký</button>
              </div>

              <div className='mt-8 text-center'>
                <div className='flex items-center justify-center'>
                  <span className='text-slate-400'>Bạn đã có tài khoản?</span>
                  <Link to={'/login'} className=''>
                    Đăng Nhập
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
