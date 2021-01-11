import mongoose from 'mongoose'

const reviewsSchema = mongoose.Schema(
  {
    name: {
      type: String,
      requried: true,
    },
    rating: {
      type: Number,
      requried: true,
      default: 0,
    },
    comment: {
      type: String,
      requried: true,
    },
  },
  {
    timestamps: true,
  }
)

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: 'user',
    },
    name: {
      type: String,
      requried: true,
    },
    image: {
      type: String,
      requried: true,
    },
    brand: {
      type: String,
      requried: true,
    },
    category: {
      type: String,
      requried: true,
    },
    description: {
      type: String,
      requried: true,
    },
    reviews: [reviewsSchema],
    rating: {
      type: Number,
      requried: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      requried: true,
      default: 0,
    },
    price: {
      type: Number,
      requried: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      requried: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
)

const Product = mongoose.model('Product', productSchema)

export default Product
