const p1 = `Have you ever talked to a robot or a smart speaker, like Alexa or 
    Siri, and asked it to play your favorite song or tell you a joke? How does 
    the robot know what you are saying?`

const p2 = `Well, it's because of something called 'Natural Language Processing, 
    or 'NLP' for short. NLP is like teaching robots how to understand and talk 
    like humans do!`

const p3 = `Just like how you learn to read and write words, NLP helps 
    computers learn to read and understand words too. NLP helps robots 
    understand the meaning of words, even if they have different meanings 
    depending on the situation, and helps them understand how words are used 
    together to form sentences.`

const p4 = `NLP is used in lots of different ways. For example, it can help 
    robots understand when you want to turn on the lights, play a game, or 
    order a pizza. It can also help you find information on the internet, like 
    when you search for a movie to watch.`

const p5 = `NLP is like teaching a robot how to speak your language so that it 
    can help you do things you want to do. It's a really cool technology that 
    helps make our interactions with robots and smart devices more natural and 
    intuitive!`

let result = "";
const paragraphs = [p1, p2, p3, p4, p5]

for (let i = 0; i < paragraphs.length; i++) {
    result += "<p>" + paragraphs[i] + "</p> ";
}
export const nlpeli5=result
