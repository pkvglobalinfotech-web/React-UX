import { basename, join } from 'path';
import SequelizeStatic from 'sequelize';
// import glob from 'glob';
import * as glob from 'glob';
import { Sequelize } from './Vendor';
import { DbConfig } from '../../config/index';

const Op = SequelizeStatic.Op;
const aliases = {
    operatorsAliases: {
        $adjacent: Op.adjacent,
        $all: Op.all,
        $and: Op.and,
        $any: Op.any,
        $between: Op.between,
        $col: Op.col,
        $contained: Op.contained,
        $contains: Op.contains,
        $eq: Op.eq,
        $gt: Op.gt,
        $gte: Op.gte,
        $iLike: Op.iLike,
        $iRegexp: Op.iRegexp,
        $in: Op.in,
        $is: Op.is,
        $like: Op.like,
        $lt: Op.lt,
        $lte: Op.lte,
        $ne: Op.ne,
        $noExtendLeft: Op.noExtendLeft,
        $noExtendRight: Op.noExtendRight,
        $not: Op.not,
        $notBetween: Op.notBetween,
        $notILike: Op.notILike,
        $notIRegexp: Op.notIRegexp,
        $notIn: Op.notIn,
        $notLike: Op.notLike,
        $notRegexp: Op.notRegexp,
        $or: Op.or,
        $overlap: Op.overlap,
        $regexp: Op.regexp,
        $strictLeft: Op.strictLeft,
        $strictRight: Op.strictRight,
        $values: Op.values,
    },
};

class Database {
    private _basename: string;
    private _models: Models;
    private _sequelize: Sequelize;

    constructor() {
        this._basename = basename(module.filename).toLowerCase();
        let db = DbConfig;

        console.log(' DB Name : ' + db.Database);
        const Options = {};
        Object.assign(Options, db.Options, aliases);
        
        this._sequelize = new (SequelizeStatic as any)(db.Database, db.UserName, db.Password, Options);
        this._models = ({} as any);

        let modelPattern = join(__dirname, '../Modules', '/**/*.Model.js');
        // glob requires forward slashes — path.join uses backslashes on Windows
        const modelPatternGlob = modelPattern.replace(/\\/g, '/');
        console.log(modelPatternGlob);
        
        // glob.sync returns string[] directly
        let files = glob.sync(modelPatternGlob);
        console.log(files);

        files.forEach((file: string) => {
            // sequelize.import() was removed in Sequelize v6.
            // Manually require the model file and call its default export.
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            const modelModule = require(file);
            const modelDefiner = modelModule.default || modelModule;
            const model = modelDefiner(this._sequelize, (SequelizeStatic as any).DataTypes);
            (this._models as any)[(model as any).name] = model;
        });

        Object.keys(this._models).forEach((modelName: string) => {
            if (typeof (this._models as any)[modelName].associate === 'function') {
                (this._models as any)[modelName].associate(this._models);
            }
        });
    }

    public getModels(): Models {
        return this._models;
    }

    public getSequelize(): Sequelize {
        return this._sequelize;
    }
}

const database = new Database();
export const models = database.getModels();
export const Dal = database.getSequelize();