import { model, Schema, Types } from "mongoose";


const orderSchema = new Schema({
    owner: {
        type: Types.ObjectId,
        ref: 'User'
    },
    totalPrice: {
        type: Number
    },
    orderData: []

}, { timestamps: { createdAt: 'created_at' } })

const Order = model('Order', orderSchema);

export default Order;