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
      stars: item.rating.stars
    }
  })
}

module.exports = {
  getMoiveList: getMoiveList
}
