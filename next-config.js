import withPWA from 'next-pwa'
const isProd = process.env.NODE_ENV === 'production'

export default withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  }
})
