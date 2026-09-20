import { Router, GetRouter } from '../../../Core/Index';
import passport from 'passport';
import { HeaderAPIKeyStrategy } from 'passport-headerapikey';

import PatientEMR from '../../EMR/Router/Index';
import User from './userRoute';
import OtpProcess from './OtpVerifyRoute';
import Options from './options';
import Patient from './patientRoute';
import Facilities from './FacilityRoute';
import PosLogCallback from './PosLogCallbackRoute';

const secretKey = '$2a$14$n1/WBtezgy2BQVsyNYdm9ekcxkcPTQp4tfqS0dOssToM9sgiFIesK';

passport.use(
    new HeaderAPIKeyStrategy(
        { header: 'x-api-key', prefix: 'Api-Key ' },
        false,
        function (apikey, done) {
            if (apikey === secretKey) {
                return done(null, true);
            } else {
                return done(null, false);
            }
        }
    )
);

let router: Router = GetRouter();
router.use((req, res, next) => {
    if (!req.headers['x-api-key'] && req.query.api_key) {
        req.headers['x-api-key'] = req.query.api_key as string;
    }
    next();
});

router.use(passport.authenticate(['headerapikey']));

router.use('/user', User);
router.use('/OtpManager', OtpProcess);
router.use('/Options', Options);
router.use('/registration', Patient);
router.use('/facilities', Facilities);
router.use('/patientEMR', PatientEMR);
router.use('/PosManager', PosLogCallback);
router.use('/PosMomentManager', PosLogCallback);

export default router;