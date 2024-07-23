"use client"
import React, { useState } from 'react'
import Image from 'next/image';

const FAQ = () => {
    const faqs = [
        {
            id: 1,
            question: "What is the cost of a mobile application?",
            answer: "The cost of a mobile application varies based on its complexity and features. Please contact us for a detailed quote."
        },
        {
            id: 2,
            question: "What is the cost of a web application?",
            answer: "The cost of a web application depends on the scope and requirements. Get in touch with us to discuss your project."
        },
        {
            id: 3,
            question: "What is the cost of an iOS application?",
            answer: "Pricing for an iOS application can vary widely. Reach out to us for an accurate estimate based on your needs."
        }
    ];

    const [openFAQ, setOpenFAQ] = useState(null);

    const toggleFAQ = (id ) => {
        setOpenFAQ(openFAQ === id ? null : id);
    };

    return (
        <div className="p-5 md:px-20">
            <h1 className="text-2xl font-bold mb-5">FAQ</h1>
            <div className="grid md:grid-cols-2  gap-5">
                {faqs.map(({ id, question, answer }) => (
                    <div key={id} className="bg-white p-4 rounded shadow">
                        <p className="font-bold flex justify-between items-center cursor-pointer" onClick={() => toggleFAQ(id)}>
                            {question}
                            <span>
                                {openFAQ === id ? (
                                    <Image src="/cross_icon.png" alt="Collapse" className="w-5" width={10} height={10}  />
                                ) : (
                                    <Image src="/add.png" alt="Expand" className="w-7" width={10} height={10} />
                                )}
                            </span>
                        </p>
                        {openFAQ === id && (
                            <p className="mt-3 text-gray-700">{answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
