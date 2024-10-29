import React from 'react'

const CartPage = () => {
    return (
        <>
            <nav class="bg-teal-500 p-3 sticky top-0">
                <div class="container mx-auto flex justify-between items-center">
                    <div class="text-white font-bold text-xl ml-10">
                        Carewell Pharmacy
                    </div>
                    <ul class="flex space-x-8">
                        <li><a href="home.html" class="text-white font-bold text-large hover:text-opacity-75">Home</a></li>
                        <li><a href="about.html" class="text-white font-bold text-large hover:text-opacity-75">About Us</a></li>
                        <li><a href="faq.html" class="text-white font-bold text-large hover:text-opacity-75">FAQ</a></li>
                        <li><a href="contact.html" class="text-white font-bold text-large hover:text-opacity-75">Contact Us</a></li>
                    </ul>
                    <div>
                        <a href="login.html" class="bg-white text-teal-500 font-bold text-sm px-5 py-3 rounded-full">Login</a>
                    </div>
                </div>
            </nav>
            <main class="container mx-auto mt-8">
                <section class="text-center">
                    <h2 class="text-4xl mb-4 font-bold text-teal-600">Shopping Cart</h2>
                    <div class="bg-white p-8 rounded shadow-lg w-3/4 mx-auto mt-16">
                        <table class="min-w-full">
                            <thead>
                                <tr class="w-full bg-gray-100">
                                    <th class="py-2 bg-teal-500">Items</th>
                                    <th class="py-2 bg-teal-500">Rate</th>
                                    <th class="py-2 bg-teal-500">Quantity</th>
                                    <th class="py-2 bg-teal-500">Total</th>
                                    <th class="py-2 bg-teal-500">Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="py-2"><input type="text" value="" class="border rounded px-2 py-1 w-full"/></td>
                                    <td class="py-2"><input type="text" value="&#8377 " class="border rounded px-2 py-1 w-full" /></td>
                                    <td class="py-2"><input type="number" value="" min="1" class="border rounded px-2 py-1 w-full"/></td>
                                    <td class="py-2"><input type="text" value=" &#8377 " class="border rounded px-2 py-1 w-full" /></td>
                                    <td class="py-2 text-center">
                                        <button class=" text-rose-600 px-4 py-2 rounded">Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="py-2"><input type="text" value="" class="border rounded px-2 py-1 w-full"/></td>
                                    <td class="py-2"><input type="text" value="&#8377 " class="border rounded px-2 py-1 w-full" /></td>
                                    <td class="py-2"><input type="number" value="" min="1" class="border rounded px-2 py-1 w-full"/></td>
                                    <td class="py-2"><input type="text" value=" &#8377 " class="border rounded px-2 py-1 w-full" /></td>
                                    <td class="py-2 text-center">
                                        <button class=" text-rose-600 px-4 py-2 rounded">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="flex justify-end mt-4">
                            <p class="font-bold">Total: &#8377 </p>
                        </div>
                        <a href="login.html" class="bg-teal-500 text-white font-bold py-2 px-4 rounded shadow mt-4 inline-block">Proceed to Checkout</a>
                    </div>
                </section>
            </main>


        </>
    )
}

export default CartPage