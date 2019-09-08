function getMoiveList(url,success){
  wx.request({
    url: url,
    success: function (res) {
      success(formatMovieData(res.data.subjects))
    }
  })
}

function formatMovieData(data){
  return data.map(function (item) {
    return {
      coverImg: item.images.large,
      title: item.title,
      score: item.rating.average,
      stars: coverStarsToArray(item.rating.stars)
    }
  })
}

function coverStarsToArray(stars){
  //35
  //[1,1,1,0,0]
  var arr = []
  var num = parseInt(stars.substring(0,1))
  for(var i = 1;i<=5;i++){
    if(i <= num){
      arr.push(1)
    }else{
      arr.push(0)
    }
  }

  return arr
}

module.exports = {
  getMoiveList: getMoiveList
}
