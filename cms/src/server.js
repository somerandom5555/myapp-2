import express from 'express'
import payload from 'payload'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config()

const app = express()
const PORT = process.env.PORT || 3002

// Initialize Payload
const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET || 'your-secret-here',
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
  })

  // Add your own express routes here

  app.listen(PORT, async () => {
    console.log(`Server listening on port ${PORT}`)
    console.log(`Admin panel available at: http://localhost:${PORT}/admin`)
  })
}

start().catch((error) => {
  console.error('Error starting server:', error)
  process.exit(1)
})