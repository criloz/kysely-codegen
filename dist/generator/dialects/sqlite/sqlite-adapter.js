"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SqliteAdapter = void 0;
const adapter_1 = require("../../adapter");
const identifier_node_1 = require("../../ast/identifier-node");
const raw_expression_node_1 = require("../../ast/raw-expression-node");
class SqliteAdapter extends adapter_1.Adapter {
    constructor() {
        super(...arguments);
        this.defaultScalar = new identifier_node_1.IdentifierNode('string');
        this.scalars = {
            any: new identifier_node_1.IdentifierNode('unknown'),
            blob: new identifier_node_1.IdentifierNode('Buffer'),
            boolean: new identifier_node_1.IdentifierNode('number'),
            integer: new raw_expression_node_1.RawExpressionNode('bigint'),
            numeric: new raw_expression_node_1.RawExpressionNode('bigint'),
            real: new identifier_node_1.IdentifierNode('number'),
            text: new identifier_node_1.IdentifierNode('string'),
        };
    }
}
exports.SqliteAdapter = SqliteAdapter;
//# sourceMappingURL=sqlite-adapter.js.map