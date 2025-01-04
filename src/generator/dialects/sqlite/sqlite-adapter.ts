import { Adapter } from '../../adapter';
import { IdentifierNode } from '../../ast/identifier-node';
import {RawExpressionNode} from "../../ast/raw-expression-node";

export class SqliteAdapter extends Adapter {
  override readonly defaultScalar = new IdentifierNode('string');
  override readonly scalars = {
    any: new IdentifierNode('unknown'),
    blob: new IdentifierNode('Buffer'),
    boolean: new IdentifierNode('number'),
    integer: new RawExpressionNode('bigint'),
    numeric: new RawExpressionNode('bigint'),
    real: new IdentifierNode('number'),
    text: new IdentifierNode('string'),
  };
}
