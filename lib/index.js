"use strict";

module.exports = function (_ref) {
  var t = _ref.types;
  return {
    visitor: {
      ArrowFunctionExpression: function ArrowFunctionExpression(path, state) {
        var node = path.node;

        if (node.type === 'ArrowFunctionExpression') {
          node.type = "FunctionExpression"; // 处理第二种情况

          var body = path.get('body');
          var bodyNode = body.node; // 如果body的type不是一个 BlockStatement 的话，需要将其包装为 BlockStatement, 并且加上 return 关键字。

          if (bodyNode.type !== 'BlockStatement') {
            var statements = [];
            statements.push(t.returnStatement(bodyNode));
            node.body = t.blockStatement(statements);
          }
        }
      }
    }
  };
};