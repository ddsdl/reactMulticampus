

import React from 'react'
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools'

// npm i react-hook-form @hookform/devtools

// /^[a-zA-Z0-9.!#$ %&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
function Register() {
  const { register, handleSubmit, control, reset,
    formState: { errors, isValid } } = useForm({
      defaultValues: {
        name: '놀부',
        age: 20,
        email: 'abc@company.net',
        password: 123,
        regdate: '2025-12-25',    // moment(value).format('YYYY-MM-DD')
        address: {
          one: 'Seoul',
          two: 'Korea'
        },
        tel: ['010', '1111', '2222']
      },
      mode: 'onSubmit'
    });

  const submitEvent = (data) => {
    console.log('Submit Event', data)
  }
  const errorEvent = (error) => {
    console.error(error)
  }

  return (
    <div className="mb-5">
      <h3>React Form</h3>

      <form onSubmit={handleSubmit(submitEvent, errorEvent)} noValidate>
        <div className="form-gooup mb-3">
          <label htmlFor="username" className="form-label">
            이름: <span style={{ color: 'orange' }}>{errors.name?.message}</span>
          </label>
          <input type="text" id="username" name="username" className="form-control"
            placeholder={errors.name?.message}
            {...register('name', {
              required: '필수 입력 사항입니다.',
              validate: {
                length: (data) => data.length >= 2 || '2글자 이상 입력해 주세요',
              }
            })} />
        </div>

        <div className="form-gooup mb-3">
          <label htmlFor="age" className="form-label">
            나이: <span style={{ color: 'orange' }}>{errors.age?.message}</span>
          </label>
          <input type="number" id="age" name="age" className="form-control"
            {...register('age', {
              valueAsNumber: true,
              required: { value: true, message: '나이는 필수 입력 사항입니다.' },
              min: { value: 1, message: '나이는 1보다 작은 값이 올 수 없습니다.' },
              max: { value: 150, message: '나이는 150보다 큰 값이 올 수 없습니다.' },
            })} />
        </div>

        <div className="form-gooup mb-3">
          <label htmlFor="email" className="form-label">
            이메일: <span style={{ color: 'orange' }}>{errors.email?.message}</span>
          </label>
          <input type="text" id="email" name="email" className="form-control"
            {...register('email', {
              required: { value: true, message: '이메일은 필수 입력 사항입니다.' },
              pattern: { value: /^[a-zA-Z0-9.!#$ %&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, message: '이메일 형식이 아닙니다.' },
              validate: {
                endNet: (data) => data.endsWith('.net') || '.NET 회사 사원만 가능합니다..',
                company: (data) => data.includes('company') || 'company 회사 사원만 가능합니다..',
              }
            })} />
        </div>

        <div className="form-gooup mb-3">
          <label htmlFor="password" className="form-label">
            패스워드: <span style={{ color: 'orange' }}>{errors.password?.message}</span>
          </label>
          <input type="password" id="password" name="password" className="form-control"
            {...register('password', {
              required: { value: true, message: '패스워드는 필수 입력 사항입니다.' },
              minLength: { value: 5, message: '패스워드는 5글자 이상 입력해야 합니다.' }
            })} />
        </div>

        <div className="form-gooup mb-3">
          <label htmlFor="regdate" className="form-label">
            가입일자:
          </label>
          <input type="date" id="regdate" name="regdate" className="form-control"
            {...register('regdate', {
              valueAsDate: true,
              required: { value: true, message: '가입일자는 필수 입력 사항입니다.' },
            })} />
        </div>

        <div className="form-gooup mb-3">
          <label htmlFor="address1" className="form-label">
            주소:
          </label>
          <div className="row">
            <div className="col-sm-8">
              <input type="text" id="address1" name="address1" className="form-control"
                {...register('address.one')} />
            </div>
            <div className="col-sm-4">
              <input type="text" id="address2" name="address2" className="form-control"
                {...register('address.two')} />
            </div>
          </div>
        </div>

        <div className="form-gooup mb-3">
          <label htmlFor="tel1" className="form-label">
            전화번호:
          </label>
          <div className="row">
            <div className="col-sm-4">
              <input type="text" id="tel1" name="tel1" className="form-control"
                {...register('tel.0')} />
            </div>
            <div className="col-sm-4">
              <input type="text" id="tel2" name="tel2" className="form-control"
                {...register('tel.1')} />
            </div>
            <div className="col-sm-4">
              <input type="text" id="tel3" name="tel3" className="form-control"
                {...register('tel.2')} />
            </div>
          </div>
        </div>

        <div className=" mb-3">
          <button type="submit" className="btn btn-primary"
            disabled={!isValid}>SUMMIT</button>
          <button type="button" className="btn btn-info" onClick={() => reset()}>RESET</button>
        </div>

        <DevTool control={control}></DevTool>
      </form>
    </div>
  )
}

export default Register;


