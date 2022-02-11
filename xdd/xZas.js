const xd = () => {
    return new Promise((resolve, reject) => {
     return resolve('xd')
    })
  }
  
  const yd = async () => {
    console.log(await xd())
  }


  module.exports = {
      xd,
      yd
  }