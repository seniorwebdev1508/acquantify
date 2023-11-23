/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js, jsx, ts, tsx}",
  ],
  theme: {
    extend: {
      colors: {},
      backgroundImage: {
        'acquantify_custom' : "url('/public/svg/acquantify_custom.svg)",
        'buy_credits' : "url('/public/svg/buy_credits.svg)",
        'forgot_pwd' : "url('/public/svg/forgot_pwd.svg)",
        'import_page' : "url('/public/svg/import_page.svg)",
        'log_in' : "url('/public/svg/log_in.svg)",
        'personalization_details' : "url('/public/svg/personalization_details.svg)",
        'personalization_preferences' : "url('/public/svg/personalization_preferences.svg)",
        'previous_acquantifications' : "url('/public/svg/previous_acquantifications.svg)",
        'sign_up' : "url('/public/svg/sign_up.svg)",
        'success' : "url('/public/svg/success.svg)",
      },
    },
    fontFamily: {
      'space-grotesk': ['Space Grotesk'],
      'poppins': ['Poppins'],
    }
  },
  plugins: [],
}

