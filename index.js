var fill = function(width, height, parentWidth, parentHeight){
    var scale = Math.max(parentWidth/width, parentHeight/height);
    var newWidth = width*scale;
    var newHeight = height*scale;
    return {scale:scale, width:newWidth, height:newHeight};
}

module.exports = fill;