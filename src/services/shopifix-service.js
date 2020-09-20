import st1 from "./st1.jpg"
import st2 from "./st2.jpg"
import st3 from "./st3.jpg"
import st4 from "./st4.jpg"
import st5 from "./st5.jpg"
import st6 from "./st6.jpg"
import st7 from "./st7.jpg"

export default class ShopifixService {

    // here I can use XHR, FETCHS in the future
    getProducts() {

        let data = [
            {
                id: 1,
                name: "Rey",
                description: "Rey statue force awakens",
                price: 35000,
                curr: "USD",
                imgUrl: st1
            },
            {
                id: 2,
                name: "Kylo",
                description: "Statuette Kylo Ren version Cloaked in Shadows ",
                price: 35000,
                curr: "USD",
                imgUrl: st2
            },
            {
                id: 3,
                name: "Kotobukiya",
                description: "Kotobukiya statue force awakens",
                price: 35000,
                curr: "USD",
                imgUrl: st3
            },
            {
                id: 4,
                name: "Darth Maul",
                description: "Darth Maul statue force awakens attakus",
                price: 35000,
                curr: "USD",
                imgUrl: st4
            },
            {
                id: 5,
                name: "Darth Vader",
                description: "Darth Vader statue force awakens",
                price: 35000,
                curr: "USD",
                imgUrl: st5
            },
            {
                id: 6,
                name: "Ashoka",
                description: "Ashoka Tano statue force awakens",
                price: 35000,
                curr: "USD",
                imgUrl: st6
            },
            {
                id: 7,
                name: "Inquisitor",
                description: "The Inquisitor statue force awakens",
                price: 35000,
                curr: "USD",
                imgUrl: st7
            }
        ]
        
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data)
            }, 1000 * 1.5)
        })
    }
    
}