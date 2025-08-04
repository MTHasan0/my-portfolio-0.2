import React from 'react';
import { motion } from 'framer-motion';
import SliderMotion from '../../Components/SliderMotion/SliderMotion';
import axios from 'axios';
import Swal from 'sweetalert2';
import sentMessageImage from '../../assets/MessageSent.svg'



const Contact = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;

        const newMessage = { name, email, message };


        try {
            console.log('Sending message:', newMessage);
            const response = await axios.post('https://mt-hasan-server.onrender.com/message', newMessage);
            if (response.status === 201) {
                Swal.fire({
                    title: "Message Sent!",
                    text: "Your message has been sent successfully.",
                    icon: "success",
                    confirmButtonText: "OK",
                    imageUrl: sentMessageImage,
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: 'Sent Message Image',
                })
                e.target.reset(); // Reset the form after successful submission


            } else (
                Swal.fire({
                    title: "Error",
                    text: "Failed to send your message. Please try again later.",
                    icon: "error",
                    confirmButtonText: "OK",
                    imageUrl: sentMessageImage,
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: 'Sent Message Image',
                }
                ))

        } catch (error) {
            console.error('Error sending message:', error);
            Swal.fire({
                title: "Error",
                text: "Failed to send your message. Please try again later.",
                icon: "error",
                confirmButtonText: "OK",
                imageUrl: sentMessageImage,
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Sent Message Image',
            });
        }

    };

    return (
        <div>
            <SliderMotion></SliderMotion>
            <div className="min-h-screen  flex items-center justify-center p-6 mb-20 lg:mb-0">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl w-full bg-white rounded-2xl shadow-2xl bg-opacity-15 p-8 md:p-12 lg:p-16"
                >
                    <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-4xl md:text-5xl font-bold text-white text-center mb-8"
                    >
                        Let's Connect!
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-lg md:text-xl text-white text-center mb-12"
                    >
                        Have a question or want to work together? Feel free to reach out!
                    </motion.p>

                    {/* Contact Form */}
                    <motion.div>
                        <form
                            onSubmit={handleSubmit}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="space-y-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-white"
                                >
                                    Your Name
                                </label>
                                <motion.input
                                    whileFocus={{ scale: 1.02 }}
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-white"
                                >
                                    Your Email
                                </label>
                                <motion.input
                                    whileFocus={{ scale: 1.02 }}
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
                                    placeholder="johndoe@example.com"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-white"
                                >
                                    Your Message
                                </label>
                                <motion.textarea
                                    whileFocus={{ scale: 1.02 }}
                                    id="message"
                                    name="message"
                                    rows="4"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
                                    placeholder="Write me here..."
                                    required
                                />
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.05 }}

                                type="submit"
                                className="w-full px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition duration-300"
                            >
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Social Media Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="mt-12 flex justify-center space-x-6"
                    >
                        <motion.a
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            href="https://www.linkedin.com/in/md-tanvir-hasan/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-purple-600"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-8 h-8"
                            >
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            href="https://github.com/MTHasan0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-purple-600"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-8 h-8"
                            >
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.766.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            href="mailto:tanvirhasan177@gmail.com"
                            className="text-white hover:text-purple-600"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-8 h-8"
                            >
                                <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
                            </svg>
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </div >
    );
};

export default Contact;