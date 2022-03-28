import React from 'react';
import './coinInfo.css';
import {AiFillGithub} from 'react-icons/ai'
import {FaTelegram } from 'react-icons/fa';
import {BsTwitter} from 'react-icons/bs';

let coin = {
    contract: '0x7d1afa7b718fb893db30a3abc0cfc608aa',
    links:{
        homepage: [
            "https://polygon.technology/",
            "",
            ""
        ],
        blockchain_site: [
            "https://etherscan.io/token/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0",
            "https://ethplorer.io/address/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0",
            "https://polygonscan.com/token/0x0000000000000000000000000000000000001010",
            "https://bscscan.com/token/0xCC42724C6683B7E57334c4E856f4c9965ED682bD",
            "https://moonriver.moonscan.io/token/0x682f81e57eaa716504090c3ecba8595fb54561d8",
            "https://moonbeam.moonscan.io/token/0x3405A1bd46B85c5C029483FbECf2F3E611026e45",
            "",
            "",
            "",
            ""
        ],
        chat_url: [
            "https://open.kakao.com/o/gUpfOhmb",
            "https://discord.com/invite/XvpHAxZ",
            "https://t.me/PolygonAnnouncements"
        ],
        announcement_url: [
            "https://medium.com/matic-network",
            ""
        ],
        twitter_screen_name: "0xPolygon",
        telegram_channel_identifier: "maticnetwork",
        subreddit_url: "https://www.reddit.com/r/maticnetwork/",
        repos_url: {
            github: [
                "https://github.com/maticnetwork/contracts",
                "https://github.com/maticnetwork/heimdall",
                "https://github.com/maticnetwork/matic.js",
                "https://github.com/maticnetwork/eth-dagger.js",
                "https://github.com/maticnetwork/sol-trace"
            ],
        }
    }

}


const CoinInfo = ({data}) => {

    const {links,contract,platforms,name} = data;

    const probando = () => {
        let page = coin.links.chat_url[0].split('/')[2];
        console.log(page)
    }


    return (
        <div className="app__coinInfo card" onClick={probando}>
            <h2>Info</h2>


            {
                contract &&
                <div className="app__coinInfo-content">
                    <p className='app__coinInfo-content_title' > Contract</p>
                    <div className="app__coinInfo-content_links">
                        <span> 
                            <img src="https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880" alt="eth"/>
                            {coin.contract} 
                        </span>
                    </div>
                </div>
            }

            <div className="app__coinInfo-content">
                <p className='app__coinInfo-content_title' >Website</p>
                <div className="app__coinInfo-content_links">
                    <span> <a target='_blank'  href={links.homepage[0]}>{links.homepage[0].split('/')[2]}</a> </span>
                </div>
            </div>

            <div className="app__coinInfo-content">
                <p className='app__coinInfo-content_title' >Explorers</p>
                <div className="app__coinInfo-content_links">
                    <span><a  target='_blank' href={links.blockchain_site[0]}> {links.blockchain_site[0].split('/')[2]} </a></span>
                </div>
            </div>

            <div className="app__coinInfo-content">
                <p className='app__coinInfo-content_title' >Community</p>
                <div className="app__coinInfo-content_links">
                    <span> <a target='_blank'  href={`https://twitter.com/${links.twitter_screen_name}`}> <BsTwitter/> twitter</a> </span>
                    <span> <a target='_blank'  href={`https://twitter.com/${links.twitter_screen_name}`}> <FaTelegram/> telegram</a> </span>
                    {
                        links.chat_url.map(el => el!= '' && <span> <a target='_blank'  href={el}> {el.split('/')[2]} </a> </span> )
                    }
                </div>
            </div>


            {
                links.repos_url.github[0]  &&

            <div className="app__coinInfo-content">
                <p className='app__coinInfo-content_title' >Source Code</p>
                <div className="app__coinInfo-content_links">
                    <span> <a target='_blank' href={links.repos_url.github[0]}><AiFillGithub/> Github</a> </span>
                </div>
            </div>
            }



       
        </div>
    )
}

export default CoinInfo
