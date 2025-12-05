import React from "react";

const mockOrders = [
  {
    id: "order_001",
    date: "2025-12-01",
    status: "Delivered",
    total: 1299,
    items: [
      { id: "p1", name: "Organic Banana", quantity: 3, price: 129 },
      { id: "p2", name: "Avocado", quantity: 1, price: 499 }
    ]
  },
  {
    id: "order_002",
    date: "2025-12-03",
    status: "Processing",
    total: 899,
    items: [
      { id: "p3", name: "Fresh Apples", quantity: 2, price: 199 },
      { id: "p4", name: "Almonds Pack", quantity: 1, price: 501 }
    ]
  }
];

const MyOrders = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 py-10">
      <h1 className="text-3xl font-bold mb-8">My Orders</h1>
      {mockOrders.length === 0 ? (
        <p className="text-gray-600">You have no orders yet.</p>
      ) : (
        mockOrders.map(order => (
          <div key={order.id} className="mb-6 border rounded-xl p-6 bg-white shadow-md">
            <div className="flex justify-between items-center mb-4">
              <p className="font-semibold">Order ID: {order.id}</p>
              <p className={`px-3 py-1 rounded-full text-sm font-semibold ${
                order.status === "Delivered" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
              }`}>
                {order.status}
              </p>
            </div>
            <p className="text-sm text-gray-500 mb-4">Ordered on: {order.date}</p>
            <ul className="mb-4 space-y-2">
              {order.items.map(item => (
                <li key={item.id} className="flex justify-between text-gray-700">
                  <span>{item.name} x {item.quantity}</span>
                  <span>₹{(item.price * item.quantity).toLocaleString()}</span>
                </li>
              ))}
            </ul>
            <p className="text-right font-bold text-lg">Total: ₹{order.total.toLocaleString()}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default MyOrders;
