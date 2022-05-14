module.exports = ({ types: t}) => {
  return {
    visitor: {
      ArrowFunctionExpression(path, state) {
        const { node } = path;
        if (node.type === 'ArrowFunctionExpression') { 
          node.type = "FunctionExpression";

          // 处理第二种情况
          const body = path.get('body');
          const bodyNode = body.node;
          // 如果body的type不是一个 BlockStatement 的话，需要将其包装为 BlockStatement, 并且加上 return 关键字。
          if (bodyNode.type !== 'BlockStatement') { 
            const statements = [];
            statements.push(t.returnStatement(bodyNode));
            node.body = t.blockStatement(statements);
          }
        }
      }
    }
  }
}