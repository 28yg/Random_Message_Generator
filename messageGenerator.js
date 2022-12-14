

// Object consisting of arrays.
const MotivationalQuotes = {
                lifeQuote: [
                            'Goal setting is the secret to a compelling future.',
                            'To know how much there is to know is the beginning of learning to live.',
                            'Experience is a hard teacher because she gives the test first, the lesson afterwards.',
                            'If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.',
                            'You learn more from failure than from success. Don’t let it stop you. Failure builds character.',
                            'Don’t let yesterday take up too much of today.',
                            'The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.',
                            'I have not failed. I\'ve just found 10,000 ways that won\'t work.',
                            'Everything you\'ve ever wanted is sitting on the other side of fear.',
                            'You carry the passport to your own happiness.'
                          ],

            successQuote: [  
                            'Success is not final; failure is not fatal: It is the courage to continue that counts.',
                            'It is better to fail in originality than to succeed in imitation.',
                            'The road to success and the road to failure are almost exactly the same.',
                            'Success usually comes to those who are too busy looking for it.',
                            'Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.',
                            'Nothing in the world can take the place of Persistence. The slogan \'Press On\' has solved and always will solve the problems of the human race.',
                            'There are three ways to ultimate success: The first way is to be kind. The second way is to be kind. The third way is to be kind.',
                            'Success is peace of mind, which is a direct result of self-satisfaction in knowing you made the effort to become the best of which you are capable.',
                            'I never dreamed about success. I worked for it.',
                            'Success is getting what you want, happiness is wanting what you get.'
                          ],

            encourageQuote: [
                            'I can’t tell you how many times I’ve been given a no. Only to find that a better, brighter, bigger yes was right around the corner.',
                            'We need to accept that we won’t always make the right decisions, that we’ll screw up royally sometimes – understanding that failure is not the opposite of success, it’s part of success.',
                            'When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.',
                            'You cannot always control what goes on outside. But you can always control what goes on inside.',
                            'We are what we repeatedly do. Excellence, then, is not an act, but a habit.',
                            'Start where you are. Use what you have. Do what you can.',
                            'Don\'t look at your feet to see if you are doing it right. Just dance.',
                            'Small is not just a stepping-stone. Small is a great destination itself.',
                            'He that can have patience can have what he will.',
                            'The only one who can tell you “you can’t win” is you and you don’t have to listen.'
                            ] 
                         };


// Function to randomly generate a number.
function ranNum(num){
    return Math.floor(Math.random() * num);
}


// An empty message created to house the message.
let message = [];


// Iterate through the object, taking the array length into considartion .
for (item in MotivationalQuotes) {
    let tempIndex = ranNum(MotivationalQuotes[item].length)

    // switch option:
    switch(item)  {
        case 'lifeQuote':
            message.push(`IN LIFE: \n "${MotivationalQuotes[item][tempIndex]}"`)
          break
        
        case  'successQuote':
            message.push(`TO SUCCEED: \n  "${MotivationalQuotes[item][tempIndex]}"`)
          break

        case 'encourageQuote':
            message.push(`POSITIVE OUTLOOK: \n "${MotivationalQuotes[item][tempIndex]}"`)
            break

        default:
                message.push(`Stay tuned for the next update :\)`)
    }
}

function formatWisdom(wisdom) {
    // Add some ASCII here?
    // Add in more symbols to the array? like emojies or what not?
    const formatted = message.join('\n\n<br><br>')
    console.log(formatted)
    document.getElementById("demo").innerHTML = formatted;
  }
  
  formatWisdom(message);
  

/*
// The below function is just to TEST IF THIS FILE (messageGenerator_2.js) is properly linked to the index_2.html file.
  function displayDate() {
    document.getElementById("demo2").innerHTML = Date();
  }
  
  */
  
