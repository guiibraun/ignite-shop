/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ['files.stripe.com']
  },
  
  env: {
    stripePublicKey: 'pk_test_51LwP4NLM6HwtcZ1JTGHX4Ag4J68EVDJ8oNtpZd2JU5EVXJBoE9im9q6j7k3iTe9Xosr9RSoc0avozlHdEtHgcEyC006ynzsgWA',
    stripePrivateKey: process.env.STRIPE_PUBLIC_KEY
  }
}

module.exports = nextConfig
