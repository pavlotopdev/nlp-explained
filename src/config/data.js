import { nlp_vs_ml } from './blogContent/nlp_vs_ml.js';
import { get_started } from './blogContent/get_started.js';
import { nlp_role } from './blogContent/nlp_role.js';
import { sentiment_a } from './blogContent/sentiment_a.js';
import { chatbots } from './blogContent/chatbots.js';
import { mtranslation } from './blogContent/mtranslation.js';
import { text_classification } from './blogContent/text_classification.js';
import { nlpeli5 } from './blogContent/nlpeli5.js';
import { nlp_ethics } from './blogContent/nlp_ethics.js';
import { sirialexa } from './blogContent/sirialexa.js';
import { marketing } from './blogContent/marketing.js';
import { customerserv } from './blogContent/customerserv.js';
import { linguistics } from './blogContent/linguistics.js';
import { bi } from './blogContent/bi.js';
import { nlptools } from './blogContent/nlptools.js';
import { limits } from './blogContent/limits';

export const blogList = [
  {
    id: 1,
    title: "Explain NLP like I'm five!",
    url: "explain-nlp-like-i-m-five",
    category: 'general',
    subCategory: ['general', 'foundations'],
    description: nlpeli5,
    createdAt: 'February 8, 2023',
    cover: '/assets/images/nlpeli5.jpg',
  },
  {
    id: 2,
    title: "Why NLP Matters: The Role of Language Processing in the Future of AI",
    url: "why-nlp-matters",
    category: 'general',
    subCategory: ['general', 'foundations'],
    description: nlp_role,
    createdAt: 'January 13, 2023',
    cover: '/assets/images/whynlp.jpg',
  },
  {
    id: 3,
    title: "The Science Behind NLP: A Look into Linguistics and Machine Learning",
    url: "the-science-behind-nlp",
    category: 'general',
    subCategory: ['general', 'foundations'],
    description: linguistics,
    createdAt: 'March 2, 2023',
    cover: '/assets/images/science.png',
  },
  {
    id: 4,
    title: "How to Build an Effective Machine Translation System",
    url: "how-to-build-an-effective-machine-translation-system",
    category: 'advanced',
    subCategory: ['advanced', 'applications', 'translation'],
    description: mtranslation,
    createdAt: 'February 4, 2023',
    cover:
      '/assets/images/translation.jpg',
  },
  {
    id: 5,
    title: "How NLP Can Improve Customer Service and Satisfaction",
    url: "how-nlp-can-improve-customer-service",
    category: 'customer service',
    subCategory: ['customer service', 'marketing', 'applications'],
    description: customerserv,
    createdAt: 'March 2, 2023',
    cover: '/assets/images/customer.jpg',
  },
  {
    id: 6,
    title: "Why NLP is the Key to Personalized Marketing",
    url: "nlp-is-the-key-to-personalized-marketing",
    category: 'marketing',
    subCategory: ['marketing', 'applications'],
    description: marketing,
    createdAt: 'March 2, 2023',
    cover: '/assets/images/marketing.jpg',
  },
  {
    id: 7,
    title: "NLP vs. Machine Learning: What's the Difference?",
    url: "nlp-vs-machine-learning",
    category: 'foundations',
    subCategory: ['foundations', 'general'],
    description: nlp_vs_ml,
    createdAt: 'January 03, 2023',
    cover: '/assets/images/nlpvsml.jpg',
  },
  {
    id: 8,
    title: "The Ethics of NLP: Exploring the Challenges of Bias and Privacy",
    url: "the-ethics-of-nlp",
    category: 'advanced',
    subCategory: ['advanced', 'privacy'],
    description: nlp_ethics,
    createdAt: 'February 28, 2023',
    cover: '/assets/images/ethics.jpg',
  },
  {
    id: 9,
    title: "Unpacking the Power of Chatbots: Applications and Best Practices",
    url: "unpacking-the-power-of-chatbots",
    category: 'advanced',
    subCategory: ['advanced', 'applications', 'chatbots'],
    description: chatbots,
    createdAt: 'February 2, 2023',
    cover: '/assets/images/universe.png',
  },
  {
    id: 10,
    title: "From Siri to Alexa: The Evolution of NLP Technology",
    url: "from-siri-to-alexa",
    category: 'applications',
    subCategory: ['applications', 'general'],
    description: sirialexa,
    createdAt: 'March 1, 2023',
    cover: '/assets/images/sirialexa.jpg',
  },
  {
    id: 11,
    title: "Understanding the Limitations and Challenges of Natural Language Processing",
    url: "limitations-and-challenges-of-nlp",
    category: 'general',
    subCategory: ['general', 'foundations'],
    description: limits,
    createdAt: 'March 12, 2023',
    cover: '/assets/images/limits.jpg',
  },
  {
    id: 12,
    title: "Sentiment Analysis 101: A Beginner's Guide",
    url: "sentiment-analysis-101",
    category: 'applications',
    subCategory: ['applications', 'general'],
    description: sentiment_a,
    createdAt: 'January 30, 2023',
    cover: '/assets/images/sentiment.jpg',
  },
  {
    id: 13,
    title: "Introduction to Text Classification",
    url: "introduction-to-text-classification",
    category: 'foundations',
    subCategory: ['foundations', 'general'],
    description: text_classification,
    createdAt: 'February 7, 2023',
    cover: '/assets/images/intro.jpg',
  },
  {
    id: 14,
    title: "How NLP is Changing the Game for Business Intelligence and Analytics",
    url: "nlp-and-business-intelligence",
    category: 'business intelligence',
    subCategory: ['business intelligence', 'general', 'applications'],
    description: bi,
    createdAt: 'March 2, 2023',
    cover: '/assets/images/bi.jpg',
  },
  {
    id: 15,
    title: "The Top NLP Tools You Need to Know for 2023",
    url: "top-nlp-tools-you-need-to-know",
    category: 'general',
    subCategory: ['general', 'foundations'],
    description: nlptools,
    createdAt: 'March 2, 2023',
    cover: '/assets/images/tools.jpg',
  },
  {
    id: 16,
    title: "Getting Started with NLP",
    url: "getting-started-with-nlp",
    category: 'foundations',
    subCategory: ['foundations', 'general'],
    description: get_started,
    createdAt: 'January 10, 2023',
    cover: '/assets/images/start.jpg',
  },
];
