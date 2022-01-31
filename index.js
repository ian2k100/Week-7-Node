console.log('Hello World')

const MovieArr = {};

class Movie {
    constructor(title, actor = "Not specified"){
    this.title = title ;
    this.actor = actor;
    }

    add (){
        MovieArr.push(this);
    }
}

module.exports = {movie, MovieArr}