import express from 'express'
import connectDB from './config/db.js'
import products from './data/products.js'
import users from './data/users.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()
connectDB()

const importData = async () => {
  try {
    await Order.deleteMany(),
      await User.deleteMany(),
      await Product.deleteMany()

    const createUsers = await User.insertMany(users)

    const adminUser = createUsers[0]._id

    const SampleProducts = products.map((product) => {
      return { ...product, user: adminUser }
    })

    await Product.insertMany(SampleProducts)

    console.log('Date Imported!')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

const destroData = async () => {
  try {
    await Order.deleteMany(),
      await User.deleteMany(),
      await Product.deleteMany()

    console.log('Date destroyed!')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroData()
} else {
  importData()
}
