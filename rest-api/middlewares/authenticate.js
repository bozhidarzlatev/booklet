import jwt from 'jsonwebtoken'
import cookieParser from 'cookie-parser'
import 'dotenv/config';

    function authenticateToken(req, res, next) {
        const auth = req.cookies.authToken
       console.log(jwt.verify(auth, process.env.JWT_SECRET));
       
        if (!auth) {
          return res.status(401).json({ message: 'Token missing' });
        }
      
        jwt.verify(auth, process.env.JWT_SECRET, (err, user) => {
          if (err) return res.status(403).json({ message: 'Invalid token' });
          res.status(200).send(user)
          next();
        });
      }

      export default authenticateToken