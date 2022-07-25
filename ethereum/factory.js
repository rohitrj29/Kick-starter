import web3 from "./web3";
import CampaignFactory from './build/CampaignFActory.json'
const instance=new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    'insert address here'
);
export default instance;