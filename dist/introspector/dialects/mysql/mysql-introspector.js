"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _MysqlIntrospector_instances, _MysqlIntrospector_createDatabaseMetadata, _MysqlIntrospector_introspectEnums;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MysqlIntrospector = void 0;
const enum_collection_1 = require("../../enum-collection");
const introspector_1 = require("../../introspector");
const database_metadata_1 = require("../../metadata/database-metadata");
const mysql_parser_1 = require("./mysql-parser");
const ENUM_REGEXP = /^enum\(.*\)$/;
class MysqlIntrospector extends introspector_1.Introspector {
    constructor() {
        super(...arguments);
        _MysqlIntrospector_instances.add(this);
    }
    async introspect(options) {
        const tables = await this.getTables(options);
        const enums = await __classPrivateFieldGet(this, _MysqlIntrospector_instances, "m", _MysqlIntrospector_introspectEnums).call(this, options.db);
        return __classPrivateFieldGet(this, _MysqlIntrospector_instances, "m", _MysqlIntrospector_createDatabaseMetadata).call(this, { enums, tables });
    }
}
exports.MysqlIntrospector = MysqlIntrospector;
_MysqlIntrospector_instances = new WeakSet(), _MysqlIntrospector_createDatabaseMetadata = function _MysqlIntrospector_createDatabaseMetadata({ enums, tables: rawTables, }) {
    const tables = rawTables.map((table) => ({
        ...table,
        columns: table.columns.map((column) => ({
            ...column,
            enumValues: column.dataType === 'enum'
                ? enums.get(`${table.schema ?? ''}.${table.name}.${column.name}`)
                : null,
        })),
    }));
    return new database_metadata_1.DatabaseMetadata({ tables });
}, _MysqlIntrospector_introspectEnums = async function _MysqlIntrospector_introspectEnums(db) {
    const enums = new enum_collection_1.EnumCollection();
    const rows = await db
        .withoutPlugins()
        .selectFrom('information_schema.COLUMNS')
        .select(['COLUMN_NAME', 'COLUMN_TYPE', 'TABLE_NAME', 'TABLE_SCHEMA'])
        .execute();
    for (const row of rows) {
        if (ENUM_REGEXP.test(row.COLUMN_TYPE)) {
            const key = `${row.TABLE_SCHEMA}.${row.TABLE_NAME}.${row.COLUMN_NAME}`;
            const parser = new mysql_parser_1.MysqlParser(row.COLUMN_TYPE);
            const values = parser.parseEnum();
            enums.set(key, values);
        }
    }
    return enums;
};
//# sourceMappingURL=mysql-introspector.js.map