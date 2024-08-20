import React, { useState } from "react";
import FaqCard from "../Global/FaqCard";
import { LuArrowDownLeft } from "react-icons/lu";
import { motion } from "framer-motion";

export const faqs = [
  {
    question: "What is the difference between secured and unsecured loans?",
    answer: "Secured loans require collateral, whereas unsecured loans do not.",
  },
  {
    question: "How does interest on loans work?",
    answer:
      "Interest on loans is the cost of borrowing money, calculated as a percentage of the loan amount.",
  },
  {
    question: "What are the benefits of a personal loan?",
    answer:
      "Personal loans can be used for various purposes, such as consolidating debt, home improvement, or covering unexpected expenses.",
  },
  {
    question: "How do I apply for a loan?",
    answer:
      "You can apply for a loan through a bank, credit union, or online lender by filling out an application and providing necessary documents.",
  },
  {
    question: "What factors affect loan approval?",
    answer:
      "Factors include credit score, income, employment history, and the amount of debt you currently have.",
  },
  {
    question: "What is a loan term?",
    answer:
      "The loan term is the length of time you have to repay the loan, which can range from a few months to several years.",
  },
  {
    question: "What is a fixed-rate loan?",
    answer:
      "A fixed-rate loan has an interest rate that remains the same throughout the life of the loan.",
  },
  {
    question: "What is a variable-rate loan?",
    answer:
      "A variable-rate loan has an interest rate that can change over time based on market conditions.",
  },
];

const SectionFaqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="w-full horizontal-padding relative py-12 xl:py-24 2xl:pb-40 2xl:pt-28">
      <div className="flex flex-col items-center justify-center gap-y-8">
        <motion.h1
          initial={{ opacity: 0.5, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl lg:text-5xl xl:text-7xl text-start font-semibold uppercase tracking-tighter text-black pl-3"
        >
          Frequently Asked <span className="text-green-500">Questions</span>
        </motion.h1>
      </div>
      <div className="w-full lg:w-[80%] mx-auto mt-6 lg:mt-8 2xl:mt-12 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2 gap-x-6 gap-y-6 2xl:gap-y-12">
        {faqs.map((faq, index) => {
          return (
            <FaqCard
              key={index}
              index={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              handleOpen={handleOpen}
            />
          );
        })}
      </div>
    </section>
  );
};

export default SectionFaqs;
