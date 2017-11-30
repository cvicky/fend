/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here
var facebookProfile = {
    name: 'Khaleesi - Mother of Dragons',
    friends: 3,
    messages: ['Dracarys', 'Breaker of Chains'],
    postMessage: function(message){
        return this.messages.push(message);
    },
    deleteMessage: function(index){
        return this.messages.splice(index, 1);
    },
    addFriend: function(){
        this.friends++;
    },
    removeFriend: function(){
        this.friends--;
    }
}
