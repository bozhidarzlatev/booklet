import jsonwebtoken from 'jsonwebtoken';
import util from 'util';



const sign = util.promisify(jsonwebtoken.sign)
const verify = util.promisify(jsonwebtoken.verify)

const jwt = {
    sign,
    verify
};

export default jwt;