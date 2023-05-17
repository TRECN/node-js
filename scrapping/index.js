// Card Name, Card fee, Reward points/percentage per 100 spent, Lounge access, Milestone benefit, Card fee reversal condition if any
const ch = require('cheerio');
const axios = require('axios')
const fs = require('fs')



const Data = []
const Data2=[]
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
      const cardFees = {}
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

            const feeNav = $('.card-detail').children('ul').find('a');
            var a;
            {

              feeNav.each(async (id, ele) => {
                if ($(ele).text() === 'FEES & CHARGES') {
                  const Fee = `https://www.hdfcbank.com${$(ele).attr('href')}`
                  // console.log(Fee)
                  if (Fee != 'https://www.hdfcbank.com/personal/pay/cards/credit-cards/bharat-cashback/fees-and-charges') {
                    const { data } = await axios.get(Fee)
                    const $ = ch.load(data)
                    const container = $('.sub-content').children('.row').children('.inner-content')
                    const p = $(container).find('p')
                    const ul = $(container).find('li');
                    const right = []

                    p.each((id, ele) => {
                      const content = $(ele).text()
                      right.push(content)
                    })
                    ul.each((id, ele) => {
                      const content = $(ele).text()
                      right.push(content)
                    })
                    Object.assign(cardFees, { ['Name']: name, ['Fees']: right },)
                    Data.push(JSON.stringify(cardFees)+",")
                    
                  }
                }
                console.log(cardFees)
              })
            }

            



            // console.log(container2)
            const rest = {}
            container.each(async (id, ele) => {
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
              Object.assign(rest, { [leftHalf]: right })
            })

            Object.assign(cardEach, { ['Name']: name, rest },)
            Data2.push(JSON.stringify(cardEach))




          }

        }
      })


    })
    fs.appendFile('card.json', JSON.stringify(Data2), (err) => {
      if (err)
        console.log(err)
      console.log("file updated....")
    })

    fs.appendFile('card1.json', JSON.stringify(Data), (err) => {
      if (err)
        console.log(err)
      console.log("file updated..........................")
    })

  }
  catch (err) {
    console.log(err)
  }

}

scrap()
