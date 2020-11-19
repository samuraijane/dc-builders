
// we should really test these too
const isStrike = shot => {
    return shot === 'X';
}

// we should really test these too
const isSpare = shot => {
    return shot === '/';
}

// we should really test these too
const getScore = (scores, index) => {
    const thisShot = scores[index]

    if (isStrike(thisShot)){
        return 10;
    } else if (isSpare(thisShot)) {
        return 10-getScore(scores, index-1);
    } else {
        return parseInt(thisShot);
    }
}

const calculateBowlingScore = scores => {
    let result = 0;
    let shotIndex=0;

    for (let frameIndex=0; frameIndex < 10; frameIndex++) {
    
        // First Shot
        let frameScore = getScore(scores, shotIndex);
        
        // Count the next two scores if it's a strike and continue
        if (frameScore === 10){
            frameScore += getScore(scores, shotIndex+1) + getScore(scores, shotIndex+2)
            
        } else {
            shotIndex++
            frameScore += getScore(scores, shotIndex);
    
            // Count the next one score if it's a spare
            if (frameScore === 10){
                frameScore += getScore(scores,shotIndex+1)
            } 
        }
        
        shotIndex++;
        result += frameScore;   //Add the frame score to the total score
        
    }
    
    return result // Return the total score
};

module.exports = calculateBowlingScore;