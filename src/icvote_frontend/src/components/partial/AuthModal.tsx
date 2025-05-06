import React from 'react';


const AuthModal = () => {
  return (
      <div id="authModal" className="hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
                <h2 id="modalTitle" className="text-2xl font-bold text-gray-800">Login</h2>
                <button id="closeModal" className="text-gray-500 hover:text-gray-700">
                    <i className="fas fa-times text-xl"></i>
                </button>
            </div>
            <div id="loginForm">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password"/>
                </div>
                <div className="flex items-center justify-between">
                    <button className="btn-riders text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="button">
                        Login
                    </button>
                </div>
                <div className="text-center mt-4">
                    <a className="inline-block align-baseline font-bold text-sm text-riders hover:text-orange-800" href="#">
                        Forgot Password?
                    </a>
                </div>
            </div>
            <div id="signupForm" className="hidden">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Username</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="signupEmail">Email</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="signupEmail" type="email" placeholder="Email"/>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="signupPassword">Password</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="signupPassword" type="password" placeholder="Password"/>
                </div>
                <div className="flex items-center justify-between">
                    <button className="btn-riders text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="button">
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
      </div>
  )
}

export default AuthModal;