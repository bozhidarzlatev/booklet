import jwt from 'jsonwebtoken'
import cookieParser from 'cookie-parser'
import 'dotenv/config';

    function authenticateToken(req, res, next) {
        const auth = req.cookies.authToken
       
        if (!auth) {
          return res.status(401).json({ message: 'Token missing' });
        }
      
        jwt.verify(auth, process.env.JWT_SECRET, (err, user) => {
          if (err) return res.status(403).json({ message: 'Invalid token' });
          const userId = user._id;
          req.user = userId
          
          next();
        });
      }

      export default authenticateToken

