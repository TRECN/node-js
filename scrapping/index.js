// Card Name, Card fee, Reward points/percentage per 100 spent, Lounge access, Milestone benefit, Card fee reversal condition if any

const rp = require('request-promise');
const ch = require('cheerio');
const axios = require('axios')
const fs = require('fs')

const url = 'https://www.hdfcbank.com/personal/pay/cards/credit-cards';


const scrap =async()=>{
    try{                          
        const {data} = await axios.get(url)
        const $=ch.load(data)
        const container = $('.card-offer-contr')             
        const cardDetail=[]
        const cardEach={name:"",offers:[]}           
        container.each((id,ele)=>{       
            const name=$(ele).children('.row').children('.card-header').children('.cardTitle').text()
            const ul=$(ele).children('.row .bodyArea').children(".col-sm-8").children('.offer-dtl').children("ul")
            const offers=[];
            ul.each((id,ele)=>{
                const li=$(ele).children('li')
                const offer=[]
                li.each((id,ele)=>{
                    const txt=$(ele).text()
                    offer.push(txt)
                })
                offers.push(offer)
            })
             cardEach.name=name;
             cardEach.offers=offers;
            //  console.log(cardEach)           
             cardDetail.push(JSON.parse(JSON.stringify(cardEach)))
             
             
             
        })                           
        console.log(cardDetail)  
        fs.writeFile("cards.json", JSON.stringify(cardDetail), (err) => {
            if (err) {
              console.error(err);
              return;
            }
            console.log("Successfully written data to file");
          });   
          fs.writeFile("cards.csv", JSON.stringify(cardDetail), (err) => {
            if (err) {
              console.error(err);
              return;
            }
            console.log("Successfully written data to file");
          });   
    }
    catch(err){
        console.log(err)
    }

}

scrap()