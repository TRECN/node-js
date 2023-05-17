// Card Name, Card fee, Reward points/percentage per 100 spent, Lounge access, Milestone benefit, Card fee reversal condition if any
const ch = require('cheerio');
const axios = require('axios')
const fs = require('fs')



const Data = []
var url = 'https://www.hdfcbank.com/personal/pay/cards/credit-cards'
const scrap = async () => {
  try {
    const { data } = await axios.get(url)
    const $ = ch.load(data)
    // console.log($)
    const container = $('.card-offer-contr')
    // console.log(container)

    container.each(async (id, ele) => {
      const cardEach = {}
      const name = $(ele).find('.cardTitle').text();
      const KnowMore = $(ele).find('.btnParent').children('a')
      KnowMore.each(async (id, ele) => {
        if ($(ele).attr('title') == 'KNOW MORE' || $(ele).attr('title') == 'Know more' || $(ele).attr('title') == 'Know More' || $(ele).attr('title') == 'know more') {
          const url = `https://www.hdfcbank.com${$(ele).attr('href')}`;
          // console.log(url)
          {
            const { data } = await axios.get(url)
            const $ = ch.load(data)
            const container = $('.sub-content').children('.row')
            container.each((id, ele) => {
              const leftHalf = $(ele).children('.left-section').find('.row-name').text()
              const rightHalfP = $(ele).find('p')
              const rightHalfUl = $(ele).find('li')
              const right = []
              rightHalfP.each((id, ele) => {
                const content = $(ele).text()
                right.push(content)
              })
              rightHalfUl.each((id, ele) => {
                const content = $(ele).text()
                right.push(content)
              })
              Object.assign(cardEach, { ['NAME']: name, [leftHalf]: right })
            })
            fs.appendFile("cards.csv", `\n ${JSON.stringify(cardEach)},`, err => {
              if (err) throw err
              console.log('file written...')
            })
          }
        }


      })

    })
    console.log(Data)

  }
  catch (err) {
    console.log(err)
  }
}

scrap()
