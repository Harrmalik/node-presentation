// module.exports = "Hello Malik";

exports.name = function(name, lang, mood) {
    switch (mood) {
        case 'happy':
            if (lang == "en")
                console.log("Hello " + name + " , Hows it going");
            else 
                console.log("Hola " + name + " , Hows it going");
            break;
            
        case 'sad':
            if (lang == "en")
                console.log("Hello " + name + " , whats wrong?");
            else 
                console.log("Hola " + name + " , whats wrong?");
            break;
            
        case 'normal':
            if (lang == "en")
                console.log("Hello " + name + " , (walks away)");
            else 
                console.log("Hola " + name + " , (walks away)");
            break;
        
        default:
            // code
    }

};

var Greeting = function () {
    this.data = {
      fullName: null,
      language: null,
      mood: null
    };

    this.fill = function (info) {
        for (var prop in this.data){
          if(this.data[prop] !== 'underfined')
            this.data[prop] = info[prop];
        }
    }

    this.getInfomation= function() {
        return this.data;
    }
}

var numPeople = 0,
    people = [];

exports.createGreeting = function(info) {
  numPeople++;
  people.push(info['fullName']);
  var instance = new Greeting();

  instance.fill(info);

  return instance;
}

exports.getCount = function () {
  return numPeople;
};

exports.getPeople = function () {
  return people;
};
