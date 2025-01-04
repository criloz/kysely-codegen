import { Adapter } from '../../adapter';
import { IdentifierNode } from '../../ast/identifier-node';
import { RawExpressionNode } from "../../ast/raw-expression-node";
export declare class SqliteAdapter extends Adapter {
    readonly defaultScalar: IdentifierNode;
    readonly scalars: {
        any: IdentifierNode;
        blob: IdentifierNode;
        boolean: IdentifierNode;
        integer: RawExpressionNode;
        numeric: RawExpressionNode;
        real: IdentifierNode;
        text: IdentifierNode;
    };
}
